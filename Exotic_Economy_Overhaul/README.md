# Exotic Economy Overhaul

![Version](https://img.shields.io/badge/version-2.0-blue)
![Author](https://img.shields.io/badge/author-AgentKush-green)
![Compatibility](https://img.shields.io/badge/compatibility-All%20DLCs-brightgreen)

## Overview

52 currency exchange and bulk processing recipes. Convert between Ren, Exotics, Biomass, Uranium and all ingots. Bulk smelt ores at the correct furnaces, Chemistry Bench, and Glassworking Bench — recipes auto-appear alongside the base game smelting recipes.

## Features

### Buy Materials with Ren — 19 recipes (Machining Bench + Fabricator)

Spend workshop currency on crafting materials:

- Steel Ingot, Titanium Ingot, Platinum Ingot, Refined Gold
- Electronics, Carbon Fiber, Composites, Epoxy
- Gunpowder, Volatile Substance, Cold Steel Ingot
- Cobalt Ingot, Lithium Refined, Ruby Shaped, Shaped Obsidian
- Aluminium, Copper Wire, Glass, Concrete Mix

### Sell Materials for Ren — 9 recipes (Machining Bench + Fabricator)

Convert surplus materials back to workshop currency:

- Steel, Titanium, Platinum, Gold → Ren
- Cobalt, Lithium, Ruby, Obsidian, Aluminium → Ren

### Exotic Processing — 3 recipes (Fabricator)

- Bulk raw exotic → refined exotic (20 raw → 10 refined)
- Condense exotics (10 → 5 condensed)
- Expand condensed back to regular (1 → 2)

### Exotic/Currency to Ren — 4 recipes (Fabricator)

- Exotic Red → Ren (5 exotic = 200 Ren)
- Condensed Exotics → Ren (1 = 100 Ren)
- Uranium Rod → Ren (5 = 150 Ren)
- Biomass → Ren (10 = 100 Ren)

### Ingot Cross-Conversion — 8 recipes (Machining Bench + Fabricator)

Trade between metal types at diminishing returns:

- Copper → Steel → Titanium → Platinum
- Gold ↔ Platinum
- Platinum → Cobalt → Lithium → Cold Steel

### Bulk Ore Smelting — 9 recipes (at correct game stations)

Smelt 20 ore into 10 refined in one batch. Recipes auto-appear at the same stations the base game uses for that ore type:

| Recipe | Input | Output | Station(s) |
|--------|-------|--------|------------|
| Bulk Metal Smelt | 20 Metal Ore | 10 Refined Metal | Stone/Concrete/Electric Furnace |
| Bulk Copper Smelt | 20 Copper Ore | 10 Refined Copper | Stone/Concrete/Electric Furnace |
| Bulk Gold Smelt | 20 Gold Ore | 10 Refined Gold | Concrete/Electric Furnace |
| Bulk Titanium Smelt | 20 Titanium Ore | 10 Titanium Ingot | Concrete/Electric Furnace |
| Bulk Platinum Smelt | 20 Platinum Ore | 10 Platinum Ingot | Concrete/Electric Furnace |
| Bulk Bauxite Refine | 30 Bauxite | 15 Aluminium | Concrete/Electric Furnace |
| Bulk Cobalt Smelt | 20 Cobalt Ore | 10 Cobalt Ingot | Concrete/Electric Furnace |
| Bulk Lithium Refine | 20 Lithium Ore | 10 Lithium Refined | Chemistry Bench |
| Bulk Ruby Cut | 20 Ruby Ore | 10 Ruby Shaped | Glassworking Bench |

## Icons

All recipes use the output item's icon automatically — the game displays the crafted item's icon in the recipe list. No custom icon overrides needed since every output references a valid D_ItemTemplate entry with its own icon.

## Compatibility

- ✅ Compatible with all other mods
- ✅ Compatible with FastProcessing mods

## Installation

Import `Exotic_Economy_Overhaul.EXMODZ` via Icarus Mod Manager.

## Version History

- **v2.0** - Complete rebuild. Fixed missing RequiredMillijoules on all recipes (root cause of mod being broken). Added 25 new recipes: 9 bulk ore smelting at correct furnaces/benches, Cobalt/Lithium/Ruby/Obsidian/Aluminium buy/sell, Uranium/Biomass to Ren, 3 new cross-conversions, Copper Wire/Glass/Concrete Mix purchases. 52 total recipes.
- **v1.1** - Rebuilt with correct game item names. 27 recipes.
- **v1.0** - Initial release (had invalid item references)

---

*Part of the [AgentKush Icarus Mods](https://github.com/AgentKush/Icarus-mods) collection*
