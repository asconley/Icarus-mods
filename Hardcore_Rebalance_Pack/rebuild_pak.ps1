$base = "C:\Users\finla\Documents\GitHub\Icarus-mods\Hardcore_Rebalance_Pack"
$build = "$base\pak_build\Icarus\Content\AI\GOAP\Motivations"

# Clean and create
if (Test-Path "$base\pak_build") { Remove-Item "$base\pak_build" -Recurse -Force }
New-Item -ItemType Directory -Path $build -Force | Out-Null

# Copy only blueprint overrides (NO growth curves)
Copy-Item "$base\BP\AI\GOAP\BP_IcarusNPCGOAPController.uasset" "$base\pak_build\Icarus\Content\AI\GOAP\" -Force
Copy-Item "$base\BP\AI\GOAP\BP_IcarusNPCGOAPController.uexp" "$base\pak_build\Icarus\Content\AI\GOAP\" -Force
Copy-Item "$base\BP\AI\GOAP\Motivations\BP_IcarusGOAPMotivation_Enraged.uasset" "$base\pak_build\Icarus\Content\AI\GOAP\Motivations\" -Force
Copy-Item "$base\BP\AI\GOAP\Motivations\BP_IcarusGOAPMotivation_Enraged.uexp" "$base\pak_build\Icarus\Content\AI\GOAP\Motivations\" -Force

Write-Host "Files staged:"
Get-ChildItem -Recurse "$base\pak_build" -File | ForEach-Object { Write-Host "  $($_.FullName)" }

# Build PAK
& "C:\Tools\repak\repak.exe" pack --version V11 --mount-point "../../../" "$base\pak_build" "$base\Hardcore_Rebalance_Pack_P.pak"

$pak = Get-Item "$base\Hardcore_Rebalance_Pack_P.pak"
Write-Host "PAK built: $($pak.Length) bytes"