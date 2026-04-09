# Deployable Deep Ore Nodes - PAK Packaging Guide

This mod requires a `.pak` file containing 21 custom child Blueprints so each ore node spawns its specific ore type instead of random.

## Prerequisites

- **Unreal Engine 4.27** (same version as Icarus)
- **UnrealPak** (included with UE4 installation)
- **FModel** or **UModel** (optional, for extracting game assets as reference)

## Step 1: Set Up UE4 Modding Project

1. Create a new **Blank UE4.27 project** (no starter content)
2. Name it something like `IcarusModding`
3. In Project Settings, ensure the project targets the same platform as Icarus (Win64, Shipping)

## Step 2: Mount Game Content (Required)

The child Blueprints need to inherit from the game's `BP_Deep_Mining_Ore_Deposit`. To reference it:

**Option A - Asset Registry Redirect (Recommended):**
1. Extract `BP_Deep_Mining_Ore_Deposit.uasset` and `.uexp` from the game PAK using FModel
2. Place them in your project at: `Content/BP/Objects/World/Resources/Nodes/`
3. This gives UE4 the parent class to inherit from

**Option B - Dummy Parent Class:**
1. Create a dummy Actor Blueprint at the same path
2. The cooked child BPs will resolve to the real parent at runtime

## Step 3: Create Child Blueprints

### Automated (Python Script):
1. Open the UE4 Editor
2. Enable the **Python Editor Script Plugin** (Edit > Plugins > Scripting > Python)
3. Open the Output Log (Window > Developer Tools > Output Log)
4. Switch to the Python tab
5. Run the included `UE4_Create_Ore_BPs.py` script:
   ```
   exec(open('path/to/UE4_Create_Ore_BPs.py').read())
   ```

### Manual (if script doesn't work):
For each of the 21 ore types:
1. Right-click in Content Browser > Blueprint Class
2. Search parent: `BP_Deep_Mining_Ore_Deposit`
3. Name it `BP_Deep_Mining_{OreType}_Deposit` (e.g., `BP_Deep_Mining_Iron_Deposit`)
4. Save to `/Game/Mods/DeepOreNodes/`
5. Open the Blueprint > Class Defaults
6. Find the **Type** property (DataTableRowHandle)
7. Set Row Name to the ore's D_OreDeposit entry:

| Blueprint Name | Type RowName |
|---|---|
| BP_Deep_Mining_Iron_Deposit | Iron |
| BP_Deep_Mining_Copper_Deposit | Copper |
| BP_Deep_Mining_Coal_Deposit | Coal |
| BP_Deep_Mining_Stone_Deposit | Stone |
| BP_Deep_Mining_Oxite_Deposit | Oxite |
| BP_Deep_Mining_Salt_Deposit | Salt |
| BP_Deep_Mining_Sulfur_Deposit | Sulfur |
| BP_Deep_Mining_Gold_Deposit | Gold |
| BP_Deep_Mining_Silicon_Deposit | Silicon |
| BP_Deep_Mining_Clay_Deposit | Clay |
| BP_Deep_Mining_Aluminium_Deposit | Aluminium |
| BP_Deep_Mining_Titanium_Deposit | Titanium |
| BP_Deep_Mining_Platinum_Deposit | Platinum |
| BP_Deep_Mining_Scoria_Deposit | Scoria |
| BP_Deep_Mining_Obsidian_Deposit | Obsidian |
| BP_Deep_Mining_Limestone_Deposit | Limestone |
| BP_Deep_Mining_Lithium_Deposit | Lithium |
| BP_Deep_Mining_Ruby_Deposit | Ruby |
| BP_Deep_Mining_Cobalt_Deposit | Cobalt |
| BP_Deep_Mining_Exotic_Red_Deposit | Exotic_Red_Raw |
| BP_Deep_Mining_Uranium_Deposit | Exotic_Raw_Uranium |

8. Compile and Save each Blueprint

## Step 4: Cook the Content

1. In UE4 Editor: File > Cook Content for Windows
2. Or right-click the `/Game/Mods/DeepOreNodes` folder > Asset Actions > Cook Content for Windows
3. Cooked assets will appear in: `Saved/Cooked/WindowsNoEditor/IcarusModding/Content/Mods/DeepOreNodes/`

## Step 5: Package as PAK

### Create file list:
Create a text file `pak_filelist.txt` with one line per asset:
```
"../../../IcarusModding/Content/Mods/DeepOreNodes/BP_Deep_Mining_Iron_Deposit.uasset" "../../../Icarus/Content/Mods/DeepOreNodes/BP_Deep_Mining_Iron_Deposit.uasset"
"../../../IcarusModding/Content/Mods/DeepOreNodes/BP_Deep_Mining_Iron_Deposit.uexp" "../../../Icarus/Content/Mods/DeepOreNodes/BP_Deep_Mining_Iron_Deposit.uexp"
```
(Repeat for all 21 ore types - both .uasset and .uexp for each)

### Run UnrealPak:
```cmd
"C:\Program Files\Epic Games\UE_4.27\Engine\Binaries\Win64\UnrealPak.exe" ^
  DeepOreNodes_P.pak ^
  -Create=pak_filelist.txt ^
  -compress
```

### Alternative - Simple folder method:
```cmd
UnrealPak.exe DeepOreNodes_P.pak -Create="C:\path\to\cooked\Content\Mods\DeepOreNodes" -compress
```

## Step 6: Install

1. Copy `DeepOreNodes_P.pak` to:
   ```
   C:\Program Files (x86)\Steam\steamapps\common\Icarus\Icarus\Content\Paks\mods\
   ```
   (Create the `mods` folder if it doesn't exist)

2. Install the EXMOD/EXMODZ via JimK72's Mod Manager as usual

3. Both the PAK and the EXMOD must be installed for the mod to work:
   - **PAK** = custom Blueprints (tells the game what ore type each node produces)
   - **EXMOD** = data table entries (adds workshop items, crafting, placement setup)

## Multiplayer Note

All players AND the server must have both the PAK file and the EXMOD installed. The PAK contains the Blueprint classes that the server needs to spawn the correct actors.

## Troubleshooting

**Nodes still spawn random ore:**
- Verify the PAK is loading (check `Icarus/Saved/Logs/Icarus.log` for mount messages)
- PAK filename must end with `_P.pak` to load as a mod
- Ensure the cooked BP paths match exactly: `/Game/Mods/DeepOreNodes/BP_Deep_Mining_{Type}_Deposit`

**Crash on placement:**
- Parent class mismatch - ensure you used UE4.27 (not UE5 or wrong minor version)
- Verify the parent BP was properly extracted from game files

**BPs won't compile in editor:**
- The parent class needs to be accessible - re-extract from game PAK if needed
- Check Output Log for specific error messages
