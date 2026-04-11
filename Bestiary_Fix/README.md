<div align="center">

# Bestiary Fix

[![Version](https://img.shields.io/badge/v1.0-Version-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=github&logoColor=white)]()
[![Author](https://img.shields.io/badge/AgentKush-Author-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=steam&logoColor=white)]()
[![Type](https://img.shields.io/badge/EXMOD-Type-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=databricks&logoColor=white)]()
[![Compatibility](https://img.shields.io/badge/All%20DLCs-Compatibility-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=opensourceinitiative&logoColor=white)]()

Fixes Sulfur Vesper, Sulfur Worm, Cave Worm, and Vesper trophies not registering in the Bestiary.

Requires **[JimK72's Icarus Mod Manager](https://github.com/Jimk72/Icarus_Software)**

</div>

---


## The Problem

Several creatures from the Dangerous Horizons DLC (and Cave Worm/Vesper from base game) have Bestiary entries in `D_BestiaryData` but are missing the experience event linkages that actually award Bestiary points. This means you can kill and skin these creatures all day and your Bestiary progress never updates.

The root cause is two-fold:

1. **Missing `Skin_` experience events** in `D_ExperienceEvents` — the game has no event to fire when you skin these creatures
2. **Missing `SkinningXPEvent` linkage** in `D_AICreatureType` — even if the events existed, the creature type doesn't know to trigger them

## What This Mod Fixes

### Creatures Fixed

| Creature | Display Name | Kill Event | Skin Event | Issue |
|----------|-------------|------------|------------|-------|
| Geothermal_Bat | Sulfur Vesper | Existed | **Added** | Missing Skin event + SkinningXPEvent linkage |
| SulfurWorm | Sulfur Worm | **Added** | **Added** | Missing both Kill and Skin events + linkage |
| CaveWorm | Cave Worm | Existed | **Added** | Missing Skin event + SkinningXPEvent linkage |
| CaveBat | Vesper | Existed | **Added** | Missing Skin event + SkinningXPEvent linkage |

### Data Tables Modified

| Table | Entries | Description |
|-------|---------|-------------|
| D_ExperienceEvents | 5 | Added Skin_Geothermal_Bat, Kill_SulfurWorm, Skin_SulfurWorm, Skin_CaveWorm, Skin_CaveBat |
| D_AICreatureType | 4 | Added SkinningXPEvent linkage for Geothermal_Bat, SulfurWorm, CaveWorm, CaveBat |

### XP Values

XP values are set to match similar-tier vanilla creatures:

| Event | XP | Reference |
|-------|-----|-----------|
| Kill_SulfurWorm | 500 | Between Cave_Worm (400) and Geothermal_Spider (1800) |
| Skin_SulfurWorm | 250 | Half of kill XP (standard ratio) |
| Skin_Geothermal_Bat | 100 | Half of Kill_Geothermal_Bat (200) |
| Skin_CaveWorm | 200 | Half of Kill_Cave_Worm (400) |
| Skin_CaveBat | 100 | Half of Kill_Cave_Bat (200) |

## How Bestiary Points Work

The Bestiary awards points for creature interactions:

| Action | Points | Requires |
|--------|--------|----------|
| Kill | 3 | Kill experience event |
| Skin | 2 | Skin experience event + SkinningXPEvent linkage |
| Skin with Trophy Knife | 4 | Same as Skin |
| Skin on Bench | 4 | Same as Skin |
| Craft Trophy | 4 | Trophy recipe in D_ProcessorRecipes |
| Scanned | 6 | Scanner interaction |

Without the Skin event and SkinningXPEvent linkage, skinning-related actions (Skin, Trophy Knife, Bench, Craft Trophy) never fire, blocking 14 of the ~23 total points per creature.

## Installation

1. Install [JimK72's Icarus Mod Manager](https://github.com/Jimk72/Icarus_Software)
2. Download `Bestiary_Fix.EXMODZ`
3. Import via Mod Manager
4. Start a **new prospect** (experience events don't hot-reload on existing prospects)

## Changelog

### v1.0
- Initial release
- Added 5 missing experience events (Kill_SulfurWorm, Skin_SulfurWorm, Skin_Geothermal_Bat, Skin_CaveWorm, Skin_CaveBat)
- Added SkinningXPEvent linkage for 4 creatures (Geothermal_Bat, SulfurWorm, CaveWorm, CaveBat)

---

<div align="center">

**Made by AgentKush** · [All Mods](https://github.com/AgentKush/Icarus-mods) · [Report a Bug](https://github.com/AgentKush/Icarus-mods/issues) · [Mod Manager](https://github.com/Jimk72/Icarus_Software)

*All mods are free. If you enjoy them, leave a star on the repo!*

</div>
