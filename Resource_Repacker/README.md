<div align="center">

# Resource Repacker

[![Version](https://img.shields.io/badge/v1.1-Version-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=github&logoColor=white)]()
[![Author](https://img.shields.io/badge/AgentKush-Author-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=steam&logoColor=white)]()
[![Type](https://img.shields.io/badge/EXMOD-Type-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=databricks&logoColor=white)]()
[![Compatibility](https://img.shields.io/badge/All%20DLCs-Compatibility-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=opensourceinitiative&logoColor=white)]()

Pack raw resources back into unopened UDA kits so they can be shipped to space and redeployed at another base. **Neutral conversion ratios** — recipes cost exactly what the kit gives back when opened, so this is purely a logistics mod, not a duplication exploit. Available at **every crafting bench plus handcrafting (player Character)**.

Requires **[JimK72's Icarus Mod Manager](https://github.com/Jimk72/Icarus_Software)**

</div>

---

## Why

Unopened resource kits can be sent back to the UDA station and redeployed on any drop. That means raw resources you've already mined are stuck on whatever map you mined them on — unless you can put them back into a kit. This mod adds the missing repack step.

Mine 100 Titanium on Olympus → repack into a Titanium kit at any bench (or in your inventory!) → ship up → redeploy on Prometheus / Styx / wherever.

## Features

- **21 new repack recipes** — one per vanilla resource kit, including 3 DLC kits
- **Available everywhere** — every crafting bench, plus handcrafting in your inventory (Character recipe set)
- **Neutral ratios** — the recipe input matches the kit's vanilla yield (e.g. 100 Titanium_Ore → 1 Titanium kit). No duping.
- **Vanilla stack sizes** — recipe quantities exactly match base-game kit yields, regardless of any stack-size mods you have running
- Pure data-table mod — no PAK file required

## Repack Recipes

### Basic Resources

| Kit | Cost |
|-----|------|
| Wood Kit | 250 Wood |
| Stone Kit | 250 Stone |
| Dirt Kit | 50 Dirt |
| Limestone Kit | 100 Limestone |
| Sulfur Kit | 100 Sulfur |
| Oxite Kit | 100 Oxite |
| Silica Kit | 100 Silica |
| Clay Kit | 100 Clay |

### Metal Ores

| Kit | Cost |
|-----|------|
| Iron Kit | 100 Iron Ore (Metal_Ore) |
| Copper Kit | 100 Copper Ore |
| Aluminium Kit | 100 Bauxite |
| Gold Kit | 100 Gold Ore |
| Platinum Kit | 100 Platinum Ore |
| Titanium Kit | 100 Titanium Ore |
| Lithium Kit | 100 Lithium Ore |

### Advanced / Exotic

| Kit | Cost |
|-----|------|
| Scoria Kit | 100 Scoria |
| Obsidian Kit | 100 Obsidian |
| Synthetic Enzymes Kit | 100 Synthetic Enzymes |

### DLC — Dangerous Horizons

| Kit | Cost |
|-----|------|
| Ruby Kit | 50 Ruby Ore |
| Uranium Rod Kit | 10 Uranium Rod |
| Ren Kit | 100 Ren |

> **DLC note:** these three recipes only work if you have the Dangerous Horizons DLC enabled — the kit items live in the DLC content. Players without the DLC may see the recipe but the craft will fail to resolve. The other 18 work for everyone.

## Available At

Every crafting bench plus your inventory (handcrafting):

- **Handcrafting** — `Character` (player inventory)
- **Tier 1+** — Crafting Bench, Anvil Bench (T1/T3/T4), Armor Bench (+ Advanced / Electric)
- **Tier 2+** — Carpentry Bench (T1/T4), Masonry Bench (T1/T3/T4), Machining Bench
- **Late game** — Fabricator, Manufacturer
- **Specialty** — Alteration Bench (+ Advanced), Chemistry, Glassworking, Herbalism, Medicine, Animal, Butchery (+ Advanced), Kitchen (+ Advanced), Trophy, Rustic Decorations, Fishing Bench

If a recipe set exists for a real player crafting bench in vanilla, the recipe is on it.

## Notes

- **Custom stack sizes:** the recipe input quantity matches the *vanilla* kit yield. If you run a stack-size mod (Stack_Size_Overhaul, etc.), the input cost still reflects the base kit yield, so a single repack always produces one base-stack-density kit.
- **Recipe row names use the kit name directly** (e.g. `Meta_Resource_Pack_Titanium`). No collision with vanilla recipes — these names aren't used as recipes in base game, only as workshop items.
- **Power cost** is modest (2,000–8,000 mJ). Handcrafting is power-free.

## Installation

1. Download `Resource_Repacker.EXMODZ`
2. Import into **Icarus Mod Manager** (JimK72's IMM)
3. Enable and merge mods as usual

## Changelog

### v1.1
- Added 3 DLC kit recipes (Ruby, Uranium Rod, Ren) — require Dangerous Horizons
- Exposed every recipe at all player crafting benches plus handcrafting (Character)

### v1.0
- Initial release
- 18 repack recipes covering Basic / Metal / Exotic resource kits
- Neutral 1:1 input/yield ratios

---

<div align="center">

**Made by AgentKush** · [All Mods](https://github.com/AgentKush/Icarus-mods) · [Report a Bug](https://github.com/AgentKush/Icarus-mods/issues) · [Mod Manager](https://github.com/Jimk72/Icarus_Software)

*All mods are free. If you enjoy them, leave a star on the repo!*

</div>
