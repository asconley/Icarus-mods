# Deployable Deep Ore Nodes

Place infinite deep ore deposits anywhere on any map. All 23 ore types available as kit items through the Workshop and craftable at the Fabricator. Each node spawns its specific ore type — no random rolls.

## Requirements

This is a **hybrid mod** requiring both components:
- **EXMOD** (via Mod Manager) — data table entries for workshop items, crafting, placement
- **PAK file** (manual install) — 21 custom Blueprints that define per-ore-type deposits

See `PAK_PACKAGING_GUIDE.md` for building the PAK, or download the pre-built PAK from Releases.

## Features

- **23 ore types** as placeable deep ore nodes: Iron, Copper, Coal, Stone, Oxite, Salt, Sulfur, Gold, Silicon, Clay, Aluminium, Titanium, Platinum, Scoria, Obsidian, Limestone, Lithium, Ruby, Cobalt, Super Cooled Ice, Frozen Wood, Red Exotic, Uranium
- **Per-ore-type specificity** — each node gives exactly the ore it says, not random
- **Kit system** — Workshop sells consumable kits that grant the deployable node when opened
- **Workshop tab** "Deep Ore Nodes" with all 23 kits in a tiered grid layout
- **Fabricator crafting** recipes for each node (20x ore + 5x Electronics + 2x Composite Paste)
- **Infinite extraction** matching vanilla deep ore deposit behavior
- **Tiered pricing** based on ore rarity (50–150 Research, 25–75 Craft)

## How It Works

1. Purchase a kit from the Workshop (e.g. "Deep Ore Node Kit: Iron")
2. Bring the kit down in your loadout — kits survive dropship landing as meta items
3. Open the kit in your inventory to receive the deployable ore node
4. Place the node anywhere on the ground
5. Attach a Deep Mining Drill and extract infinite ore of that specific type

## Pricing Tiers

| Tier | Research | Craft | Ores |
|------|----------|-------|------|
| Common | 50 | 25 | Iron, Copper, Coal, Stone, Oxite, Salt |
| Uncommon | 75 | 40 | Sulfur, Gold, Silicon, Clay |
| Rare | 100 | 50 | Aluminium, Titanium, Platinum, Scoria, Obsidian, Limestone |
| Very Rare | 125 | 65 | Lithium, Ruby, Cobalt |
| Special | 150 | 75 | Super Cooled Ice, Frozen Wood, Red Exotic, Uranium |

## Technical Details

21 custom child Blueprints inherit from `BP_Deep_Mining_Ore_Deposit` and override the `Type` property to a specific `D_OreDeposit` row. The 2 remaining types (Frozen Wood, Super Cooled Ice) use their existing vanilla BPs.

### Blueprint → Ore Type Mapping

| Custom Blueprint | D_OreDeposit RowName |
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

### Vanilla BPs Used (no custom BP needed)

| Vanilla Blueprint | Type |
|---|---|
| BP_Deep_Mining_Frozen_Wood_Deposit | Frozen_Wood |
| BP_Deep_Mining_Ice_Deposit_v2 | Super_Cooled_Ice |

## Data Tables Modified

| Table | Entries | Purpose |
|-------|---------|---------|
| D_TalentArchetypes | 1 | Workshop tab |
| D_TalentTrees | 1 | Workshop tree |
| D_ItemTemplate | 46 | 23 deployables + 23 kits |
| D_Itemable | 46 | Display names and icons |
| D_ItemsStatic | 46 | Item trait setup |
| D_DeployableSetup | 23 | Deployment config + custom BP paths |
| D_Deployable | 23 | Deployable traits |
| D_WorkshopItems | 23 | Workshop kit purchases |
| D_Talents | 23 | Grid positions |
| D_ProcessorRecipes | 23 | Fabricator recipes |
| D_Consumable | 23 | Kit → deployable grants |
| **Total** | **278** | |

## Installation

### Both components required:
1. Import `Deployable_Deep_Ore_Nodes.EXMODZ` via Icarus Mod Manager
2. Place `DeepOreNodes_P.pak` in `Icarus/Content/Paks/mods/`

### Multiplayer:
All players AND the server must have both the PAK and EXMOD installed.

## Compatibility

- Compatible with most mods unless they modify D_DeployableSetup with conflicting entries
- Compatible with Workshop Recyclers (different RecipeSets)

## Changelog

### v2.0 (2026-04-09)
- Per-ore-type specificity via 21 custom child Blueprints
- Hybrid EXMOD + PAK mod architecture
- Fixed D_OreDeposit RowName mapping (Exotic_Red_Raw, Exotic_Raw_Uranium)
- Included UE4 Python automation script and PAK packaging guide

### v1.0 (2026-04-09)
- Initial release
- 23 ore types as deployable items with kit system
- Workshop tab with tiered pricing
- Fabricator crafting recipes
