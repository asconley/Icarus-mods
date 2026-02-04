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
| Building Skins | 291 |
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

### v2.11.10
- **REPAIR FIX:** Added missing `Generated_Tags` with `Traits.Durable` to all 104 items
  - This tag tells the game that items are repairable with a hammer
  - Without it, the Durable trait reference was being ignored
  - All items now properly register as having durability system enabled

### v2.11.9
- **STORM IMMUNITY:** Added 100% wind damage resistance to all 15 building types
  - All mod building pieces now take zero damage from storms
  - Affects: Thatch, Wood, Stone, Concrete, Aluminium, Glass, Scoria, Clay_Brick, Scoria_Brick, Ice, Limestone, Stone_Brick, Sandworm, Glass_Tempered, Beeswax_Wood
- **FIX:** Corrected D_Durable section path format for proper mod loading
- **FIX:** Moved EndOfMod marker to correct position (was blocking D_BuildingSkins and D_Durable)

### v2.11.8
- **REPAIR FIX:** Fixed 3 items referencing non-existent durability types
  - `TemperedGlass_Building` → `Tempered_Glass_Building` (typo fix)
  - `MetalGrate_Building` → `Iron_Building` (didn't exist)
- **REPAIR ENHANCEMENT:** Added D_Durable entries with ItemsForRepair for 14 building types
  - All building materials can now be repaired with a hammer using appropriate materials
  - Thatch → Fiber, Wood → Wood, Concrete → Concrete_Mix, etc.

### v2.11.7
- **TEXTURE FIX:** Fixed 24 buildables with wrong `Type` references causing wrong textures and glass-like break behavior
- **TEXTURE FIX:** StoneBrick items now correctly use `Stone_Brick` type instead of `Stone`
- **TEXTURE FIX:** TemperedGlass items now correctly use `Glass_Tempered` type instead of `Glass`
- **TEXTURE FIX:** Fixed CornerStairs, RoofPeak, Frame, and Curved sets for all affected materials

### v2.11.11
- **RECIPE FIX:** Fixed Recipe_Glass_Stairs - removed duplicate Input/Inputs fields, corrected bench names (Glasswork → Glassworking)
- **RECIPE FIX:** Fixed Recipe_Glass_RoofPeak and Recipe_TemperedGlass_RoofPeak - added missing Requirement and Audio fields
- **TRAIT FIX:** Fixed Glass_RoofPeak and TemperedGlass_RoofPeak in D_ItemsStatic - added missing Meshable, Interactable, Hitable, Focusable, Highlightable, Actionable, Decayable traits
- **TEXTURE FIX:** Fixed all Glass and TemperedGlass stair building pieces using Ice skins instead of Glass skins
- **SKIN FIX:** Added missing Skin references to Glass_CornerStair_L/R and TemperedGlass_CornerStair_L/R

### v2.11.6
- **REPAIR FIX:** Fixed all 104 items having wrong `Building.*` tags - items now repair with correct materials
- **REPAIR FIX:** Added missing `Building.*` and `Audio.Shelter` tags to all RoofPeak items
- **AUDIO FIX:** Fixed Audio references for all materials (Brick, StoneDeployable, IceBuilding, WoodDeployable, etc.)
- Tags fixed: ClayBrick, ScoriaBrick, StoneBrick, TemperedGlass, Limestone, MetalGrate, ReinforcedWood, Sandworm, Thatch items

### v2.11.5
- **BUILDABLE FIX:** Fixed all RoofPeak sets that were empty - added Connector and Cap pieces for all 15 materials
- **BUILDABLE FIX:** Fixed StoneBrick missing pieces - added 7 building pieces (diagonal invert, beam variants)
- **BUILDABLE FIX:** Fixed Scoria and ScoriaBrick Advanced Beam sets - added 9 missing beam pieces each
- **BUILDABLE FIX:** Fixed Scoria/ScoriaBrick Wall_Curved sets - added missing curved diagonal beams
- **BUILDABLE FIX:** Fixed diagonal/curved sets missing pieces across all materials
- **BUILDABLE FIX:** Fixed Glass_Stairs, TemperedGlass_Stairs, Metal_Grate_HalfNormal, Limestone_Halfpiece
- **BUILDABLE FIX:** Fixed Wood_Diagonal_Advanced_Beam_Set with all 5 beam pieces
- Building pieces increased from 111 to 500

### v2.11.4
- **FRAME FIX:** Fixed frame pieces not deploying correctly - added missing Deployable references, Pieces arrays, and Skin linkages
- **FRAME FIX:** Added 10 missing Pillar pieces (all materials now have FullFrame, Pillar, HalfFrame)
- **FRAME FIX:** Added 17 missing building skins with proper material textures
- **FRAME FIX:** Fixed 9 frame itemable icons to use proper frame icons instead of beam icons
- **FRAME FIX:** Fixed 6 FullFrame pieces referencing wrong skins

### v2.11.3
- **TEXTURE FIX:** Updated all 40 StoneBrick curved/diagonal skins to use proper Stone Brick wall textures instead of grey stone textures

### v2.11.2
- **BUG FIX:** Added missing `Stability`, `Type`, and `PieceType` properties to all 82 buildables - fixes wrong textures and glass-like repair behavior on StoneBrick, ClayBrick, and other materials

### v2.11.1
- **BUG FIX:** Added missing `Diagonal_Ramp_Roof` and `Diagonal_Ramp_Roof_Invert` pieces to all Diagonal_Set buildables (Concrete, Glass, Stone, Scoria, ScoriaBrick, StoneBrick, ClayBrick, TemperedGlass)
- **BUG FIX:** Fixed ScoriaBrick and Scoria frame building pieces missing skins
- **BUG FIX:** Fixed TemperedGlass diagonal set using wrong piece names

### v2.11.0
- **NEW FRAME MATERIALS:** Added 5 new frame materials with FullFrame, Pillar, and HalfFrame variations:
  - **Iron** (Machining Bench) - NEW
  - **Limestone** - added Pillar & HalfFrame to existing FullFrame
  - **Reinforced Wood** (Carpentry Bench) - NEW
  - **Sandworm** (Carpentry Bench) - NEW
  - **Scoria** - added Pillar & HalfFrame to existing FullFrame
- Total frame materials: 11 (was 6)

### v2.10.0
- **ROOF PEAK SYSTEM:** Added connector and cap pieces for ALL 15 materials
- **ORGANIZATION:** Complete mod cleanup - fixed 30 broken linkages and 30 invalid icons

### v2.9.1
- **METAL GRATE QUARTER FLOOR:** Added quarter floor piece for Metal Grate material

### v2.9.0
- **CORNER STAIRS:** Added corner stairs for 11 materials
- **FRAMES:** Added FullFrame and HalfFrame pieces for 6 materials

## Links

- **Author:** AgentKush
- **Repository:** [github.com/AgentKush/Icarus-mods](https://github.com/AgentKush/Icarus-mods)
