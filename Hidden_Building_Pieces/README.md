<div align="center">

# Hidden Building Pieces

[![Version](https://img.shields.io/badge/v4.4-Version-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=github&logoColor=white)]()
[![Author](https://img.shields.io/badge/AgentKush-Author-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=steam&logoColor=white)]()
[![Type](https://img.shields.io/badge/EXMOD-Type-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=databricks&logoColor=white)]()
[![Compatibility](https://img.shields.io/badge/All%20DLCs-Compatibility-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=opensourceinitiative&logoColor=white)]()

Unlocks 34 building pieces + 1 forgotten recipe as individual craftable items

Requires **[JimK72's Icarus Mod Manager](https://github.com/Jimk72/Icarus_Software)**

</div>

---

Unlocks **34 building pieces** that exist in the game files but aren't available to players, plus 1 forgotten recipe added to higher-tier stations. Every item is an individual craftable piece at the appropriate workbench. All pieces are **storm immune** and **hammer repairable**.

> **v4.4:** Trimmed from 62 to 34 pieces — Corner Stairs, Stairs and curved Wood pieces are now official in the base game (Week 142 + Week 234 updates), so they've been removed. All mesh references updated for the June 2026 game update.

---

## Features

### Wood Diagonal Pieces (7 items)

Non-curved diagonal Wood pieces that vanilla still doesn't include:

- Diagonal Floor, Diagonal Ramp Roof
- Diagonal Wall Solid, Diagonal Wall Angles
- Diagonal Beam Diagonal, Diagonal Beam Horizontal
- Brick Beam DiagonalBeam

**Crafted at:** Carpentry Bench

### Frames (26 items)

Frame pieces for 11 materials. Each material has the frame variants that vanilla is missing:

| Material | FullFrame | HalfFrame | Pillar | Bench |
|----------|:---------:|:---------:|:------:|-------|
| ClayBrick | x | x | x | Masonry Bench |
| Glass | x | x | x | Glassworking Bench |
| Ice | x | x | | Hand Crafting |
| Iron | x | x | x | Anvil Bench |
| Limestone | | x | | Masonry Bench |
| ReinforcedWood | x | x | | Carpentry Bench |
| Sandworm | x | x | | Masonry Bench |
| Scoria | | x | | Masonry Bench |
| ScoriaBrick | x | x | x | Masonry Bench |
| StoneBrick | x | x | x | Masonry Bench |
| TemperedGlass | x | x | x | Glassworking Bench |

### Metal Grate Quarter Floor (1 item)

- Metal Grate HalfNormal QuarterFloor

### Interior Wood Floor — The Forgotten Floor (1 recipe)

- Interior Wood Floor (`Wood_Floor_Refined`) — exists in vanilla at the Carpentry Bench only, with mismatched names across data tables making it nearly impossible to find. Now also craftable at Fabricator and Manufacturer.

**Crafted at:** Fabricator / Manufacturer (same inputs: 20 Refined Wood + 4 Copper Nails)

---

## Stats

| Category | Count |
|----------|-------|
| Craftable Items | 34 |
| Building Pieces | 68 |
| Building Skins | 68 |
| Crafting Recipes | 35 |
| Durable Entries | 16 |
| Building Types | 21 |
| **Total Data Entries** | **344** |

## Crafting Locations

| Material | Crafting Station |
|----------|-----------------|
| Wood / ReinforcedWood | Carpentry Bench |
| ClayBrick / ScoriaBrick / StoneBrick / Limestone / Sandworm / Scoria | Masonry Bench |
| Glass / TemperedGlass | Glassworking Bench |
| Iron / MetalGrate | Anvil Bench |
| Interior Wood (Forgotten Floor) | Fabricator / Manufacturer |
| Ice | Hand Crafting |

## Installation

### Via Mod Manager (Recommended)
1. Add this repository URL to the Mod Manager's modinfo sources
2. Find "Hidden Building Pieces" and install
3. Click Merge to apply

### Manual Installation
1. Download `Hidden_Building_Pieces.EXMODZ`
2. Place in: `Icarus_Mod_Manager_2_x_x/Extracted_Mods/`
3. Use the Mod Manager to merge and install

## Compatibility

- Works with all other mods
- Multiplayer compatible (all players need the mod)
- Compatible with all DLCs
- Compatible with Kepler update / Dangerous Horizons

---

## Changelog

### v4.4 (2026-06-27)
- Removed 28 pieces now official in vanilla — all Corner Stairs (14), Glass/TemperedGlass Stairs (4), and curved Wood pieces (10) — added by the Week 142 (Corner & Half Stairs) and Week 234 (Curved Building) updates
- Updated all mesh references for the June 2026 game update (consolidated generic material meshes)
- Removed a stray Mesh_Generic_Ice override that conflicted with the base game's ice mesh

### v4.1 (2026-04-16)
- Added Interior Wood Floor recipe at Fabricator/Manufacturer — the "forgotten floor" that only existed at Carpentry Bench with mismatched data table names

### v4.0 (2026-04-14)
- MAJOR OVERHAUL: Rebuilt from scratch as individual items (no more sets)
- Removed all items now live in vanilla (Kepler update)
- Removed all 15 RoofPeak items (now in base game)
- Split remaining items from sets into individual craftable pieces

### v3.0.0 (2026-03-10)
- Removed 44 items now included in the base game (Kepler/Week 222 update)

### Earlier
- v2.13.x: skin/recipe/buildable reference fixes across DLC updates
