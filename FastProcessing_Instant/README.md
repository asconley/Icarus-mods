# FastProcessing Instant v4.5

All crafting and processing speeds set to **Instant** faster across 2,163 recipes.

## What's Included

Covers all base game recipes plus compatibility with:
- Workshop Recyclers
- Hidden Building Pieces
- No Food Spoilage
- Turret Variants
- Culinex Food Boost Fix

## Important Notes

- **Use only ONE FastProcessing variant at a time** (5x, 10x, 15x, 25x, or Instant)
- Compatible with other EXMODZ mods
- Multiplayer compatible — all players need the same mod installed

## Technical Details

- Modifies `RequiredMillijoules` in `D_ProcessorRecipes` for each recipe
- Water-consuming recipes have a minimum floor of 500 MJ to prevent the water system from going negative
- Recipes without water/fluid requirements use standard speed calculations

## Installation

1. Download the `.EXMODZ` file
2. Place in your Mod Manager's mod folder
3. Enable in JimK72's Mod Manager
4. Launch Icarus

## Changelog

### v4.4
- **Fixed:** Water going into negatives when crafting recipes that consume water (soups, dough, pickled items, geode lamps, etc.)
- Applied 500 MJ minimum floor to all 68 water-consuming recipes
- Non-water recipes unchanged

### v4.3
- Updated for latest game patch
- Added new recipes from recent updates
