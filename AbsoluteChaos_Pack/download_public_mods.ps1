# AbsoluteChaos_Pack - Public Mod Downloader (PowerShell)
# Fetches all public mods listed in manifest.json that can be grabbed automatically.
# Nexus-hosted mods require manual download (Nexus API blocks scripted access unless logged in).
#
# Usage:
#   cd AbsoluteChaos_Pack
#   .\download_public_mods.ps1
#
# Output: ./public/*.EXMODZ

$ErrorActionPreference = "Stop"
$UA = @{ 'User-Agent' = 'AbsoluteChaos-Downloader/1.0 (+github.com/AgentKush/Icarus-mods)' }

$publicDir  = Join-Path $PSScriptRoot "public"
$manifestPath = Join-Path $PSScriptRoot "manifest.json"

if (-not (Test-Path $publicDir))  { New-Item -ItemType Directory -Path $publicDir | Out-Null }
if (-not (Test-Path $manifestPath)) { throw "manifest.json not found next to this script." }

try {
    $manifest = Get-Content $manifestPath -Raw | ConvertFrom-Json
} catch {
    throw "Failed to parse manifest.json: $_"
}

Write-Host "`n=== Absolute Chaos - Public Mod Downloader ===" -ForegroundColor Cyan
Write-Host "Target: $publicDir`n"

# ----- helpers -----
function Test-SafeAssetName {
    param([string]$Name)
    # Reject path separators, drive letters, leading dots, null bytes.
    if ([string]::IsNullOrWhiteSpace($Name)) { return $false }
    if ($Name -match '[\\/:]') { return $false }
    if ($Name -match '^\.') { return $false }
    if ($Name -match '\x00') { return $false }
    return $true
}

function Get-FileSha256 {
    param([string]$Path)
    (Get-FileHash -Path $Path -Algorithm SHA256).Hash.ToLower()
}

function Confirm-Hash {
    param([string]$Path, [string]$Expected)
    if ([string]::IsNullOrWhiteSpace($Expected)) { return $true }  # no expected hash = skip
    $actual = Get-FileSha256 -Path $Path
    if ($actual -ne $Expected.ToLower()) {
        Write-Host "    HASH MISMATCH for $([IO.Path]::GetFileName($Path))" -ForegroundColor Red
        Write-Host "    expected: $Expected" -ForegroundColor Red
        Write-Host "    actual:   $actual" -ForegroundColor Red
        return $false
    }
    return $true
}

# -------- 1. JimK72 GitHub raw fetches --------
Write-Host "[1/3] Fetching JimK72 mods from github.com/Jimk72/Icarus_Mods..." -ForegroundColor Yellow
foreach ($mod in $manifest.mods.jimk72_github) {
    $safeName = $mod.name
    if (-not (Test-SafeAssetName $safeName)) {
        Write-Host "  [skip] unsafe name in manifest: $safeName" -ForegroundColor Red
        continue
    }
    $outPath = Join-Path $publicDir "$safeName.EXMODZ"
    if (Test-Path $outPath) {
        Write-Host "  [skip] $safeName (already downloaded)" -ForegroundColor DarkGray
        continue
    }
    $kb = if ($mod.size_bytes) { [math]::Round($mod.size_bytes/1KB,0) } else { '?' }
    Write-Host "  [get]  $safeName ($kb KB)" -NoNewline
    try {
        Invoke-WebRequest -Uri $mod.url -OutFile $outPath -UseBasicParsing -Headers $UA
        if (-not (Confirm-Hash -Path $outPath -Expected $mod.sha256)) {
            Remove-Item $outPath -Force
            Write-Host "  REJECTED" -ForegroundColor Red
            continue
        }
        Write-Host "  OK" -ForegroundColor Green
    } catch {
        Write-Host "  FAIL: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# -------- 2. laanp GitHub Releases (latest) --------
Write-Host "`n[2/3] Fetching laanp Combined QOL (latest release)..." -ForegroundColor Yellow
try {
    $release = Invoke-RestMethod -Uri "https://api.github.com/repos/laanp/Icarus_Mods/releases/latest" -Headers $UA
    foreach ($asset in $release.assets) {
        if (-not (Test-SafeAssetName $asset.name)) {
            Write-Host "  [skip] unsafe asset name: $($asset.name)" -ForegroundColor Red
            continue
        }
        $outPath = Join-Path $publicDir $asset.name
        if (Test-Path $outPath) {
            Write-Host "  [skip] $($asset.name)" -ForegroundColor DarkGray
            continue
        }
        $mb = [math]::Round($asset.size/1MB,1)
        Write-Host "  [get]  $($asset.name) ($mb MB)" -NoNewline
        try {
            Invoke-WebRequest -Uri $asset.browser_download_url -OutFile $outPath -UseBasicParsing -Headers $UA
            Write-Host "  OK" -ForegroundColor Green
        } catch {
            Write-Host "  FAIL: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
} catch {
    $msg = $_.Exception.Message
    if ($msg -match '403') {
        Write-Host "  FAIL: GitHub API rate limit (403). Wait an hour or set GITHUB_TOKEN." -ForegroundColor Red
    } else {
        Write-Host "  FAIL fetching laanp release: $msg" -ForegroundColor Red
    }
}

# -------- 3. Nexus manual list --------
Write-Host "`n[3/3] Nexus-hosted mods (manual download required):" -ForegroundColor Yellow
foreach ($mod in $manifest.mods.nexus_manual_download) {
    $url = if ($mod.url) { $mod.url } else { "(search Nexus)" }
    Write-Host "  -> $($mod.name)" -ForegroundColor White
    Write-Host "     $url" -ForegroundColor DarkGray
}

Write-Host "`n=== Done ===" -ForegroundColor Cyan
Write-Host "Public mods staged in: $publicDir"
Write-Host "Import them into JimK72's Icarus Mod Manager alongside AbsoluteChaos_Core.`n"
