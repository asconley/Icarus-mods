# Deployable Deep Ore Nodes

Place infinite deep ore deposits anywhere on any map. All 23 ore types available as kit items through the Workshop and craftable at the Fabricator.

## Features

- **23 ore types** as placeable deep ore nodes: Iron, Copper, Coal, Stone, Oxite, Salt, Sulfur, Gold, Silicon, Clay, Aluminium, Titanium, Platinum, Scoria, Obsidian, Limestone, Lithium, Ruby, Cobalt, Super Cooled Ice, Frozen Wood, Red Exotic, Uranium
- **Kit system** — Workshop sells consumable kits that grant the deployable node when opened
- **Workshop tab** "Deep Ore Nodes" with all 23 kits in a tiered grid layout
- **Fabricator crafting** recipes for each node (20x ore + 5x Electronics + 2x Composite Paste)
- **Infinite extraction** matching vanilla deep ore deposit behavior
- **Tiered pricing** based on ore rarity (50–150 Research, 25–75 Craft)
- **Blueprint assets included** — 23 per-ore-type child BPs inheriting from BP_Deep_Mining_Ore_Deposit

## How It Works

1. Purchase a kit from the Workshop (e.g. "Deep Ore Node Kit: Iron")
2. Bring the kit down in your loadout — kits survive dropship landing as meta items
3. Open the kit in your inventory to receive the deployable ore node
4. Place the node anywhere on the ground
5. Attach a Deep Mining Drill and extract infinite ore

## Pricing Tiers

| Tier | Research | Craft | Ores |
|------|----------|-------|------|
| Common | 50 | 25 | Iron, Copper, Coal, Stone, Oxite, Salt |
| Uncommon | 75 | 40 | Sulfur, Gold, Silicon, Clay |
| Rare | 100 | 50 | Aluminium, Titanium, Platinum, Scoria, Obsidian, Limestone |
| Very Rare | 125 | 65 | Lithium, Ruby, Cobalt |
| Special | 150 | 75 | Super Cooled Ice, Frozen Wood, Red Exotic, Uranium |

## Data Tables Modified

| Table | Entries | Purpose |
|-------|---------|---------|
| D_TalentArchetypes | 1 | Workshop tab |
| D_TalentTrees | 1 | Workshop tree |
| D_ItemTemplate | 46 | 23 deployables + 23 kits |
| D_Itemable | 46 | Display names and icons |
| D_ItemsStatic | 46 | Item trait setup |
| D_DeployableSetup | 23 | Deployment config |
| D_Deployable | 23 | Deployable traits |
| D_WorkshopItems | 23 | Workshop kit purchases |
| D_Talents | 23 | Grid positions |
| D_ProcessorRecipes | 23 | Fabricator recipes |
| D_Consumable | 23 | Kit → deployable grants |
| **Total** | **278** | |

## Compatibility

- Compatible with most mods unless they modify D_DeployableSetup with conflicting entries
- Compatible with Workshop Recyclers (different RecipeSets)

## Installation

Import `Deployable_Deep_Ore_Nodes.EXMODZ` via Icarus Mod Manager. Blueprint assets are included in the package.

## Changelog

### v1.0 (2026-04-09)
- Initial release
- 23 ore types as deployable items with kit system
- Workshop tab with tiered pricing
- Fabricator crafting recipes
- 23 per-ore-type Blueprint assets included
