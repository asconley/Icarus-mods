# Workshop Recyclers

![Version](https://img.shields.io/badge/version-5.0-blue)
![Author](https://img.shields.io/badge/author-AgentKush-green)
![Compatibility](https://img.shields.io/badge/compatibility-All%20DLCs-brightgreen)

## Overview

Introduces two dedicated recycling machines that enable full material recovery from both Workshop purchases and crafted items. Returns **100% of original Workshop costs** — including Ren, Exotics (purple), Red Exotics, Biomass, and Uranium. Deconstruction stops at processed materials (ingots, refined goods) — no raw ores or pyritic crusts.

## Features

### Biofuel Recycler

| Specification | Value |
|---------------|-------|
| Base Machine | Biofuel Bio-Cleaner (T3) |
| Crafted At | Machining Bench / Fabricator |
| Function | Recycles workshop items into currencies AND crafted items into materials |
| Repair Materials | Electronics (hammer repairable) |

### Organic Residue Recycler

| Specification | Value |
|---------------|-------|
| Base Machine | Organic Residue Cleanser (T4) |
| Crafted At | Fabricator |
| Function | Recycles workshop items into currencies AND crafted items into materials |
| Repair Materials | Electronics (hammer repairable) |

### Combined Statistics

| Metric | Value |
|--------|-------|
| Total Recipes | 2,127 |
| Workshop Items Recyclable | 317 |
| Crafted Items Deconstructable | 1,808 |

## Currency Returns

Workshop items return **100% of their original replication cost** as physical items:

| Workshop Currency | Returns As | Count |
|-------------------|------------|-------|
| Credits only | Ren | 177 |
| Exotics (purple) only | Meta_Resource | 12 |
| Credits + Exotics | Ren + Meta_Resource | 74 |
| Red Exotics only | Exotic_Red | 15 |
| Credits + Red Exotics | Ren + Exotic_Red | 21 |
| Biomass + Credits | Biomass + Ren | 8 |
| Uranium + Credits | Uranium_Rod + Ren | 8 |
| Uranium only | Uranium_Rod | 2 |

### How It Works

Workshop currencies cannot be directly output by processor recipes (the game engine silently drops `D_MetaCurrency` outputs). This mod maps each currency to its physical item equivalent:

| Currency | Physical Item | Data Table |
|----------|---------------|------------|
| Credits | Ren | D_ItemTemplate |
| Exotic1 (purple) | Meta_Resource | D_ItemTemplate |
| Exotic_Red | Exotic_Red | D_ItemTemplate |
| Biomass | Biomass | D_ItemTemplate |
| Exotic_Uranium | Uranium_Rod | D_ItemTemplate |

### Example Returns

| Item | Original Cost | Returns |
|------|---------------|---------|
| Basic Envirosuit | 25 Credits | 25 Ren |
| Module Tracker | 50 Credits + 10 Exotics | 50 Ren + 10 Meta_Resource |
| Inaris Alpha Axe | 400 Exotics | 400 Meta_Resource |
| Shengong Echo Axe | 150 Red Exotics | 150 Exotic_Red |
| Shengong Delta Bow | 250 Credits + 50 Red Exotics | 250 Ren + 50 Exotic_Red |
| Sandworm Inhaler | 100 Credits + 10 Biomass | 100 Ren + 10 Biomass |
| Bulky Armor Head | 100 Credits + 75 Uranium | 100 Ren + 75 Uranium_Rod |

## Technical Specifications

| Metric | Value |
|--------|-------|
| Total Modifications | 2,140 |
| New Machines | 2 |
| Recipe Entries | 2,127 |

### Files Modified
- `Crafting-D_RecipeSets.json` (2 entries)
- `Traits-D_Processing.json` (2 entries)
- `Traits-D_Itemable.json` (2 entries)
- `Items-D_ItemsStatic.json` (2 entries)
- `Items-D_ItemTemplate.json` (2 entries)
- `Talents-D_Talents.json` (2 entries)
- `Crafting-D_ProcessorRecipes.json` (2,127 entries)
- `Traits-D_Durable.json` (1 entry)


## Installation

1. Download the `.EXMODZ` file from this repository
2. Open JimK72's Icarus Mod Manager
3. Import the mod file
4. Enable and launch Icarus
5. Craft recyclers at the appropriate workstation

## Gameplay Notes

- Returns **100% of original replication costs** as physical items
- Items costing multiple currencies (e.g. Credits + Exotics) return both as physical items
- Deconstruction returns processed materials — **no raw ores or pyritic crusts**
- A Steel Pickaxe returns Steel Ingots, not Metal Ore
- Enables inventory cleanup with zero loss
- Strategic for managing Workshop credit and exotic economy
- Useful for recovering materials from outdated gear
- Both machines repairable with Electronics + any hammer

## Compatibility

| Mod | Status |
|-----|--------|
| FastProcessing (v4.5+) | ✅ Full recipe support |
| Agent's BioLab | ✅ Compatible |
| Hidden Building Pieces | ✅ Compatible |
| All AgentKush mods | ✅ Compatible |

## Version History

| Version | Changes |
|---------|---------|
| 5.0 | **Complete rebuild:** Fixed root cause of all currency outputs failing — processor recipes cannot output D_MetaCurrency, so all 317 workshop recycle recipes now output physical items (Ren, Meta_Resource, Exotic_Red, Biomass, Uranium_Rod) via D_ItemTemplate. Regenerated all 1,808 deconstruct recipes from current game data using ItemStaticData lookup. Removed 30 raw ore and pyritic crust deconstruct recipes, stripped ore/crust outputs from 33 more — deconstruction now stops at ingots and refined materials. All crafting times matched to base game. Zero broken references. |
| 4.7 | Fixed MetaResource currency outputs, added 285 new Recycle_ recipes. |
| 4.6 | Fixed 47 recipes to return correct exotic items. |
| 4.5 | Added 60 new recycle recipes for DLC workshop items. |
| 4.4 | Fixed 135 recipe output references. |
| 4.3 | Game update compatibility fix — fixed 57 broken input refs, 12 broken output refs, removed 62 deleted items, added 12 new recipes. |
| 4.2 | Repair fix — both recyclers now hammer repairable with custom D_Durable entry. |
| 4.1 | Week 213+ compatibility update. |
| 4.0 | Major update — 100% workshop cost returns, fixed 74 currency refs, 28 name typos. |
| 3.0 | Major cleanup — fixed 63 broken item references, removed 136 invalid recipes. |

---

*Part of the [AgentKush Icarus Mods](https://github.com/AgentKush/Icarus-mods) collection*
