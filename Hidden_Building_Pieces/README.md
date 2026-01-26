# 🏗️ Hidden Building Pieces

Unlocks **843 hidden building items** including diagonal/curved pieces, frames, corner stairs, half pieces, and roof peak pieces for Icarus.

## Features

### Diagonal & Curved Pieces (9 Materials)
- **Materials:** Concrete, Glass, Clay Brick, Stone, Scoria, Tempered Glass, Stone Brick, Scoria Brick, Wood
- **6 Piece Types:** Diagonal Set, Curved Set, Wall Curved, Curved Wall Angles, Roof Curved Angles, Advanced Beam Set

### Frame Pieces (6 Materials)
- **Materials:** ClayBrick, Ice, Glass, TemperedGlass, StoneBrick, ScoriaBrick
- **3 Piece Types:** FullFrame, HalfFrame, Pillar

### Corner Stairs (11 Materials)
- **Materials:** Wood, Thatch, Clay Brick, Ice, Scoria, Glass, ScoriaBrick, Limestone, StoneBrick, Sandworm, ReinforcedWood, MetalGrate

### Roof Peak Connectors & Caps (15 Materials)
Unlocks the hidden roof peak connector and cap pieces for ALL materials:
- **Materials:** Wood, Stone, Concrete, Thatch, Iron, Glass, Clay Brick, Scoria, Scoria Brick, Ice, Limestone, Stone Brick, Sandworm, Tempered Glass, Reinforced Wood
- **2 Piece Types:** Connector (joins roof peaks together), Cap (ends roof peaks)

### Stairs (2 Materials)
- Glass and TemperedGlass stair pieces

### Half Pieces (2 Materials)
- Limestone and Metal Grate half/quarter floor pieces

## Stats

| Category | Count |
|----------|-------|
| Buildable Sets | 91 |
| Building Pieces | 92 |
| Building Skins | 263 |
| Itemables | 93 |
| ItemsStatic | 101 |
| ItemTemplates | 101 |
| Crafting Recipes | 101 |
| **Total Items** | **843** |

## Crafting Locations

### Roof Peak Connectors & Caps
| Material | Crafting Station |
|----------|-----------------|
| Wood / ReinforcedWood | Carpentry Bench |
| Stone | Masonry Bench |
| Concrete | Cement Mixer |
| Thatch / Ice | Crafting by Hand |
| Iron | Machining Bench |
| Glass / Tempered Glass | Glassworking Bench |
| Clay Brick / Stone Brick / Scoria Brick | Masonry Bench |
| Scoria | Stone Furnace |
| Limestone | Concrete Furnace |
| Sandworm | Masonry Bench |

### Diagonal/Curved & Frames
| Material | Crafting Station |
|----------|-----------------|
| Concrete | Cement Mixer |
| Glass / Tempered Glass | Glassworking Bench |
| Clay Brick / Stone Brick / Scoria Brick | Masonry Bench |
| Stone / Scoria | Masonry Bench |
| Ice | Ice Workbench |
| Wood | Carpentry Bench |

### Corner Stairs
| Material | Crafting Station |
|----------|-----------------|
| Wood / Sandworm / ReinforcedWood | Carpentry Bench |
| Thatch | Crafting Bench |
| Clay Brick / Stone Brick / Scoria Brick | Masonry Bench |
| Scoria | Stone Furnace |
| Ice | Ice Workbench |
| Limestone | Concrete Furnace |
| Glass / Tempered Glass | Glassworking Bench |
| Metal Grate | Fabricator |

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

### v2.10.0
- **ROOF PEAK SYSTEM:** Added connector and cap pieces for ALL 15 materials
  - Connectors join roof peaks together for continuous ridgelines
  - Caps finish the ends of roof peaks
  - Materials: Wood, Stone, Concrete, Thatch, Iron, Glass, Clay Brick, Scoria, Scoria Brick, Ice, Limestone, Stone Brick, Sandworm, Tempered Glass, Reinforced Wood
- **ORGANIZATION:** Complete mod cleanup and restructuring
  - Fixed 30 broken item linkages (static → itemable/buildable references)
  - Fixed 30 invalid icon paths - all items now display proper icons
  - Removed orphaned entries and duplicates
  - Standardized all recipe names with "Recipe_" prefix
  - Fixed recipe output format (Outputs array structure)
  - Added missing Buildable/Usable traits to all statics
- **Total items:** 843 across 91 buildable sets

### v2.9.1
- **METAL GRATE QUARTER FLOOR:** Added quarter floor piece for Metal Grate material
- **SKIN FIX:** Fixed skin references for corner stairs
- Fixed duplicate recipe entries

### v2.9.0
- **CORNER STAIRS:** Added corner stairs for 11 materials
- **FRAMES:** Added FullFrame and HalfFrame pieces for 6 materials
- **RECIPE FIX:** Fixed all recipes to use correct RecipeSets format

### v2.8.0
- Added Wood diagonal building system
- Added ClayBrick diagonal crafting recipes

### v2.6.0
- **TEXTURE EXPANSION:** Added proper textures for Ice, Scoria, and TemperedGlass diagonal/curved pieces

### v2.3.0
- **ICE FIX:** Ice diagonal/curved pieces now fully craftable and placeable
- Added missing `Mesh_Ice_Kit` entry to D_Meshable

### v2.2.0
- **TEXTURE FIX:** Fixed greyed-out textures for Stone Brick and Scoria Brick pieces

### v2.0.0
- Expanded from 3 to 9 materials

### v1.0.0
- Initial release with Concrete, Glass, and Clay Brick

## Links

- **Author:** AgentKush
- **Mod Manager:** [JimK72's Mod Manager](https://github.com/Jimk72/Icarus_Software)
- **Repository:** [github.com/AgentKush/Icarus-mods](https://github.com/AgentKush/Icarus-mods)
