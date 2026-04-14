# UE4SS + Icarus: Server Command System Setup

## Overview

This guide walks through installing UE4SS on Icarus to enable Lua-based server commands. Icarus runs UE4.26 (Shipping build) with **no anti-cheat**, so DLL injection works freely on both client and dedicated server.

## Prerequisites

- Icarus installed via Steam
- Windows PC
- A text editor (VS Code, Notepad++, etc.)

## Phase 1: Install UE4SS

### Step 1: Download UE4SS

Download from GitHub: https://github.com/UE4SS-RE/RE-UE4SS/releases

**For discovery/development:** Download `zDEV-UE4SS_v3.0.1.zip` (includes LiveView GUI, object inspector, debug console)

**For production servers:** Download `UE4SS_v3.0.1.zip` (no debug GUI)

### Step 2: Find Icarus Executable Directory

Default Steam location:
```
C:\Program Files (x86)\Steam\steamapps\common\Icarus\Icarus\Binaries\Win64\
```

The executable is: `Icarus-Win64-Shipping.exe`

For dedicated servers:
```
[SteamCMD path]\Icarus\Binaries\Win64\IcarusServer-Win64-Shipping.exe
```

### Step 3: Install UE4SS Files

1. Extract the UE4SS zip
2. Copy ALL extracted files into the `Win64\` directory (same folder as the .exe)
3. Your directory should now look like:

```
Win64/
  Icarus-Win64-Shipping.exe    (existing)
  dwmapi.dll                   (NEW - proxy DLL)
  UE4SS.dll                    (NEW)
  UE4SS-settings.ini           (NEW - use ours from this package)
  mods.txt                     (NEW - use ours from this package)
  Mods/                        (NEW)
    IcarusChatDiscovery/
      Scripts/
        main.lua
    IcarusCommandSystem/
      Scripts/
        main.lua
    ... (other UE4SS built-in mods)
```

### Step 4: Copy Our Config & Mods

From this package (`UE4SS_Icarus_Setup/`), copy these into the `Win64/` directory, **overwriting** the defaults:

- `UE4SS-settings.ini` (tuned for Icarus)
- `mods.txt` (enables discovery mod)
- `Mods/IcarusChatDiscovery/` (entire folder)
- `Mods/IcarusCommandSystem/` (entire folder)

### Step 5: Verify Installation

1. Launch Icarus normally through Steam
2. You should see a **UE4SS Debug Console** window appear alongside Icarus
3. Check `Win64/UE4SS.log` for startup messages — look for:
   - `[IcarusChatDiscovery] Mod loaded. Discovery running...`
   - No red/error lines about failed initialization

**If Icarus crashes on launch:**
- Delete `dwmapi.dll` to disable UE4SS and revert to normal
- Try the non-dev build (`UE4SS_v3.0.1.zip` instead of `zDEV`)
- Check `UE4SS.log` for the error

### Dedicated Server Note

For dedicated servers, edit `UE4SS-settings.ini` and set:
```ini
[Debug]
ConsoleEnabled = 0
GuiConsoleEnabled = 0
GuiConsoleVisible = 0
```
Servers have no GUI — leaving these enabled will crash the server.

---

## Phase 2: Run Discovery

### Step 1: Launch and Join a Game

1. Start Icarus with UE4SS loaded
2. **Host or join a game session** (discovery needs active game objects)
3. The discovery mod auto-scans on startup and again when PlayerController loads

### Step 2: Type in Chat

Send any message in the in-game chat (press Enter, type "test", press Enter). This triggers the chat functions so our hooks can detect them.

### Step 3: Check Results

Open: `Win64/Mods/IcarusChatDiscovery/discovery_log.txt`

**What to look for:**

1. **Core classes found** — the log should show Icarus's custom class names:
   ```
   Found 1 instance(s) of: PlayerController
     [1] IcarusPlayerController /Game/Maps/...
   ```
   The real class name (e.g., `IcarusPlayerController`) is what we need.

2. **Chat function matches** — look for `*** MATCH` entries:
   ```
   *** MATCH: ServerSay (keyword: Say)
       Full path: /Script/Icarus.IcarusPlayerController:ServerSay
   ```
   This full path is the hook we need for the command system.

3. **Hook fired** — if any of the standard UE4 hooks worked:
   ```
   !!! HOOK FIRED: /Script/Engine.PlayerController:ServerSay
       Param[1]: test message
   ```

### Step 4: Manual Rescan

If classes weren't found on first scan (you weren't in-game yet):
1. Join a game
2. In the UE4SS debug console, type: `discovery_rescan`
3. Check the log again

### Step 5: Use LiveView (if hooks didn't fire)

If no standard hooks matched, use UE4SS LiveView to search manually:
1. In the UE4SS GUI, click the **LiveView** tab
2. Search for objects containing "Chat", "Message", "Say"
3. Expand classes to find UFunctions
4. Note the full `/Script/...` path

---

## Phase 3: Connect the Command System

Once you have the chat hook path from discovery:

### Step 1: Update Command Mod

Edit `Mods/IcarusCommandSystem/Scripts/main.lua`:

```lua
-- Replace this line:
local CHAT_HOOK_PATH = "REPLACE_WITH_DISCOVERED_PATH"

-- With the actual path, e.g.:
local CHAT_HOOK_PATH = "/Script/Icarus.IcarusPlayerController:ServerSay"
```

### Step 2: Enable Command Mod

Edit `mods.txt`:
```
IcarusChatDiscovery : 0
IcarusCommandSystem : 1
```

### Step 3: Test

1. Launch Icarus (or press Ctrl+R to hot-reload mods)
2. Join a game
3. Type `/help` in chat
4. Check the UE4SS console for command output

---

## Phase 4: Build Real Commands

After the hook works, we expand the command system with actual game interactions:
- Item spawning via UE4SS Lua API
- Player teleportation via location properties
- Health/stamina modification via character properties
- Permission system (admin vs player commands)
- Config file for server customization

This requires more discovery data about Icarus's inventory, character, and world systems.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Icarus crashes on launch | Delete `dwmapi.dll` to disable UE4SS. Check `UE4SS.log` |
| No debug console window | Check `UE4SS-settings.ini` has `GuiConsoleEnabled = 1` |
| "Mod loaded" not in log | Check `mods.txt` has `IcarusChatDiscovery : 1` |
| Classes show "Not found" | You need to be in-game. Run `discovery_rescan` |
| No hooks fired on chat | Use LiveView to find the correct function path |
| Weekly update broke UE4SS | May need to wait for UE4SS update or adjust settings |
| Server crashes with UE4SS | Disable GUI settings (ConsoleEnabled = 0) |

## File Reference

```
UE4SS_Icarus_Setup/
  SETUP_GUIDE.md              <- This file
  UE4SS-settings.ini          <- Config tuned for Icarus
  mods.txt                    <- Mod loader config
  Mods/
    IcarusChatDiscovery/      <- Phase 2: Find chat hooks
      Scripts/main.lua
    IcarusCommandSystem/      <- Phase 3-4: Command framework
      Scripts/main.lua
```

## Links

- UE4SS GitHub: https://github.com/UE4SS-RE/RE-UE4SS
- UE4SS Docs: https://docs.ue4ss.com/
- UE4SS Lua API: https://docs.ue4ss.com/lua-api.html
- Icarus Dedicated Server: https://github.com/RocketWerkz/IcarusDedicatedServer
