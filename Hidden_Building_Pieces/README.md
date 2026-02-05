# 🏗️ Hidden Building Pieces

Unlocks **104 hidden building items** including diagonal/curved pieces, frames, corner stairs, half pieces, and roof peak pieces for Icarus. All pieces are **storm immune** and **hammer repairable**.

## Features

### Diagonal & Curved Pieces (9 Materials)
- **Materials:** Concrete, Glass, Clay Brick, Stone, Scoria, Tempered Glass, Stone Brick, Scoria Brick, Wood
- **6 Piece Types:** Diagonal Set, Curved Set, Wall Curved, Curved Wall Angles, Roof Curved Angles, Advanced Beam Set

### Frame Pieces (11 Materials)
- **Materials:** ClayBrick, Glass, Ice, **Iron**, **Limestone**, **ReinforcedWood**, **Sandworm**, **Scoria**, ScoriaBrick, StoneBrick, TemperedGlass
- **3 Variations Each:** FullFrame, Pillar, HalfFrame

### Corner Stairs (11 Materials)
- **Materials:** Wood, Thatch, Clay Brick, Ice, Scoria, Glass, ScoriaBrick, Limestone, StoneBrick, Sandworm, ReinforcedWood, MetalGrate

### Roof Peak Connectors & Caps (15 Materials)
- **Materials:** Wood, Stone, Concrete, Thatch, Iron, Glass, Clay Brick, Scoria, Scoria Brick, Ice, Limestone, Stone Brick, Sandworm, Tempered Glass, Reinforced Wood
- **2 Piece Types:** Connector, Cap

### Stairs (2 Materials)
- Glass and TemperedGlass stair pieces

### Half Pieces (2 Materials)
- Limestone and Metal Grate half/quarter floor pieces

## Stats

| Category | Count |
|----------|-------|
| Buildable Sets | 96 |
| Building Pieces | 500 |
| Building Skins | 461 |
| Itemables | 96 |
| ItemsStatic | 104 |
| ItemTemplates | 104 |
| Crafting Recipes | 104 |
| **Total Items** | **104** |

## Crafting Locations

### Frame Pieces
| Material | Crafting Station |
|----------|-----------------|
| ClayBrick / ScoriaBrick / StoneBrick | Masonry Bench |
| Glass / TemperedGlass | Glassworking Bench |
| Ice | Ice Workbench |
| **Iron** | Machining Bench |
| **Limestone** | Cement Mixer |
| **ReinforcedWood** / **Sandworm** | Carpentry Bench |
| **Scoria** | Stone Furnace |

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

- ✅ Works with all other mods
- ✅ Multiplayer compatible (all players need the mod)
- ✅ Compatible with all DLCs

## Changelog

### v2.13.1
- **MATERIAL FIX:** Fixed 42 Stone diagonal/curved skins using Scoria textures instead of Stone
  - All Stone diagonal walls, floors, roofs, beams, and curved pieces now use plain Stone materials
  - Removed `_Scoria` suffix from all Stone skin material paths

### v2.13.0
- **MATERIAL FIX:** Fixed 56 building skins rendering with wrong materials
  - 19 StoneBrick diagonal/curved pieces now use proper `Brick_Stone` wall/floor/roof/beam materials
  - 28 ScoriaBrick diagonal/curved pieces now use proper `Brick_Scoria` materials
  - 8 ScoriaBrick curved roof angle pieces fixed from Stone Scoria to Brick Scoria materials
  - Fixed `Scoria_Frame_Pillar`, `Scoria_Frame_FullFrame`, `Scoria_Frame_HalfFrame` using wrong Stone frame materials
  - Fixed `Ice_Frame_Pillar` missing second material slot
  - Pieces now visually match their material names (brick looks like brick, not plain stone)

### v2.12.0
- **SKINS:** Added 126 missing material skins for Stone, Concrete, and Glass diagonal/curved building pieces
  - 42 Concrete diagonal/curved skins using native Concrete materials from pak
  - 42 Glass diagonal/curved skins using native Glass materials from pak
  - 42 Stone diagonal/curved skins using Brick Stone materials
- All 126 pieces now properly linked to their skins for correct in-game textures

### v2.11.14
- **MAJOR TEXTURE FIX:** Using PROPER diagonal brick materials from game
  - Discovered game has unused diagonal brick materials in `/Game/ASS/BLD/Brick/*_Diagonal_Brick/` folders
  - Updated 57 brick diagonal skins (ClayBrick, StoneBrick, ScoriaBrick) to use these proper materials
  - Diagonal brick materials have correct UV mapping for brick pattern on diagonal geometry

### v2.11.13
- **TEXTURE FIX:** Fixed ClayBrick diagonal/curved pieces - added 38 new skins using Scoria diagonal materials
- **TEXTURE FIX:** Fixed StoneBrick diagonal pieces - updated 22 skins to use ICE materials (proper grey stone diagonal textures)

### v2.11.12
- **OPTIMIZATION:** Removed duplicate entries and empty arrays (EXMOD size reduced 77%)
- **FIX:** Glass and TemperedGlass stairs now use correct Glass skins instead of Ice skins
- **FIX:** Added missing CornerStair_L/R skin references for Glass/TemperedGlass

### v2.11.11
- **FIX:** Fixed glass roof peak traits - added missing interactable traits
- **FIX:** Fixed Recipe_Glass_Stairs duplicate fields
- **FIX:** Corrected bench names (Glasswork_Bench → Glassworking_Bench)

### v2.11.10
- **REPAIR FIX:** Added missing `Generated_Tags` with `Traits.Durable` to all 104 items
  - All items now properly register as having durability system enabled

### v2.11.9
- **STORM IMMUNITY:** Added 100% wind damage resistance to all 15 building types
- **FIX:** Corrected D_Durable section path format for proper mod loading
- **FIX:** Moved EndOfMod marker to correct position

### v2.11.8
- **REPAIR FIX:** Fixed 3 items referencing non-existent durability types
- **REPAIR ENHANCEMENT:** Added D_Durable entries with ItemsForRepair for 14 building types

### v2.11.7
- **TEXTURE FIX:** Fixed 24 buildables with wrong `Type` references causing wrong textures

### v2.11.6
- **REPAIR FIX:** Fixed all 104 items having wrong `Building.*` tags
- **AUDIO FIX:** Fixed Audio references for all materials

### v2.11.5
- **BUILDABLE FIX:** Fixed all RoofPeak sets, StoneBrick missing pieces, Scoria/ScoriaBrick beam sets
- Building pieces increased from 111 to 500

### v2.11.4
- **FRAME FIX:** Fixed frame pieces not deploying - added missing Deployable references, Pieces arrays, and Skin linkages
- Added 10 missing Pillar pieces, 17 missing building skins

### v2.11.3
- **TEXTURE FIX:** Updated all 40 StoneBrick curved/diagonal skins to use proper Stone Brick wall textures

### v2.11.2
- **BUG FIX:** Added missing `Stability`, `Type`, and `PieceType` properties to all 82 buildables

### v2.11.1
- **BUG FIX:** Added missing diagonal ramp roof pieces to all Diagonal_Set buildables
- **BUG FIX:** Fixed ScoriaBrick and Scoria frame building pieces missing skins

### v2.11.0
- **NEW FRAME MATERIALS:** Added 5 new frame materials (Iron, Limestone, ReinforcedWood, Sandworm, Scoria)
- Total frame materials: 11 (was 6)

### v2.10.0
- **ROOF PEAK SYSTEM:** Added connector and cap pieces for ALL 15 materials

### v2.9.1
- **METAL GRATE QUARTER FLOOR:** Added quarter floor piece for Metal Grate material

### v2.9.0
- **CORNER STAIRS:** Added corner stairs for 11 materials
- **FRAMES:** Added FullFrame and HalfFrame pieces for 6 materials

## Links

- **Author:** AgentKush
- **Repository:** [github.com/AgentKush/Icarus-mods](https://github.com/AgentKush/Icarus-mods)
