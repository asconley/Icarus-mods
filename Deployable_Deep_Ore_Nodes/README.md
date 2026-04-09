# Deployable Deep Ore Nodes

Place infinite deep ore deposits anywhere on any map. All 23 ore types available as deployable items through the Workshop and craftable at the Fabricator.

**This is a hybrid PAK + EXMOD mod.** The EXMOD provides all data table entries (items, workshop, recipes, deployable config). Blueprint assets (.uasset) are required for the actual deployable ore deposit actors and must be created separately in Unreal Engine.

## Features

- **23 ore types** as placeable deep ore nodes: Iron, Copper, Coal, Stone, Oxite, Salt, Sulfur, Gold, Silicon, Clay, Aluminium, Titanium, Platinum, Scoria, Obsidian, Limestone, Lithium, Ruby, Cobalt, Super Cooled Ice, Frozen Wood, Red Exotic, Uranium
- **Workshop tab** "Deep Ore Nodes" with all 23 items in a tiered grid layout
- **Fabricator crafting** recipes for each node (20x ore + 5x Electronics + 2x Composite Paste)
- **Infinite extraction** matching vanilla deep ore deposit behavior (MinOreAvailable: -1)
- **Tiered pricing** based on ore rarity (50-150 Research, 25-75 Craft)
- All nodes support custom rotation and snap to terrain surface

## Pricing Tiers

| Tier | Research | Craft | Ores |
|------|----------|-------|------|
| Common | 50 | 25 | Iron, Copper, Coal, Stone, Oxite, Salt |
| Uncommon | 75 | 40 | Sulfur, Gold, Silicon, Clay |
| Rare | 100 | 50 | Aluminium, Titanium, Platinum, Scoria, Obsidian, Limestone |
| Very Rare | 125 | 65 | Lithium, Ruby, Cobalt |
| Special | 150 | 75 | Super Cooled Ice, Frozen Wood, Red Exotic, Uranium |

## Blueprint Requirements

The EXMOD references Blueprint assets at these paths (one per ore type):

```
/Game/Mods/DeepOreNodes/BP_DeepOreNode_{Type}.BP_DeepOreNode_{Type}_C
/Game/Mods/DeepOreNodes/SM_DeepOreNode_{Type}.SM_DeepOreNode_{Type}
```

Each Blueprint must:
1. Inherit from or replicate the ore deposit actor class
2. Have the `Deployable_Deep_Mining` actor tag
3. Include a `Drill_Socket` scene component for drill snapping
4. Reference the correct D_OreDeposit row for ore type
5. Set MinOreAvailable/MaxOreAvailable to -1 for infinite extraction

## Data Tables Modified

| Table | Entries | Purpose |
|-------|---------|---------|
| D_TalentArchetypes | 1 | Workshop tab definition |
| D_TalentTrees | 1 | Workshop tree |
| D_ItemTemplate | 23 | Item definitions |
| D_Itemable | 23 | Display names and icons |
| D_DeployableSetup | 23 | Deployment configuration |
| D_Deployable | 23 | Deployable trait entries |
| D_ItemsStatic | 23 | Full item trait setup |
| D_WorkshopItems | 23 | Workshop purchases |
| D_Talents | 23 | Grid positions |
| D_ProcessorRecipes | 23 | Fabricator recipes |
| **Total** | **186** | |

## Compatibility

- Compatible with most mods unless they modify D_DeployableSetup with conflicting entries
- Compatible with Workshop Recyclers (different RecipeSets)
- Requires Blueprint PAK assets to function in-game

## Installation

1. Create the Blueprint assets in Unreal Engine and package as PAK
2. Place .uasset files in the `BP/` folder
3. Import `Deployable_Deep_Ore_Nodes.EXMODZ` via Icarus Mod Manager

## Changelog

### v1.0 (2026-04-09)
- Initial release
- 23 ore types as deployable items
- Workshop tab with tiered pricing
- Fabricator crafting recipes
- Full deployment configuration with terrain snapping
