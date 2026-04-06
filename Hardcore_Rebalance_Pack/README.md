# Hardcore Rebalance Pack

**Version:** 1.16
**Author:** AgentKush
**Compatibility:** Week All

> For survivors who think Icarus is too easy. 1324 changes across 16 data tables + 2 blueprint overrides.

## What This Mod Does

Transforms Icarus into a brutal survival experience. Every difficulty tier is rebalanced to push players harder with tougher creatures, deadlier weather, harsher status effects, reduced resources, and equipment that wears out faster.

## Changes by Category

### Creature AI & Spawns
| Table | Entries | Description |
|-------|---------|-------------|
| D_AISpawnZones | 186 | Spawn zone configurations across all biomes |
| D_AutonomousSpawns | 26 | Independent creature spawn rules |
| D_HordeWave | 21 | Horde event wave compositions |
| D_EpicCreatures | 37 | Custom alpha hunters - boss-tier roaming predators |
| D_ItemRewards | 37 | Exotic rewards for alpha hunter kills |

### 37 Alpha Hunters

Custom boss-tier creatures that roam the world. Each has boosted HP, unique AI, and drops exotic rewards on kill.

| Hunter Name | Creature | HP Boost | Biome |
|------------|----------|----------|-------|
| Hunter_Wolf_Forest | Alpha Wolf | Base | Forest |
| Hunter_Bear_Forest | Bear | Base | Forest |
| Hunter_Lion_Forest | Jaguar Boss | Base | Forest |
| Hunter_Jaguar_Forest | Jaguar | +220% | Forest |
| Hunter_MangeWolf_Forest | Mange Wolf Alpha | +250% | Forest |
| Hunter_PoisonBear_Forest | Poison Bear | +380% | Forest |
| Hunter_EnragedLion_Forest | Enraged Lion | +350% | Forest |
| Hunter_AlphaWolf_Boss | Alpha Wolf Boss | +280% | Forest |
| Hunter_PolarBear_Arctic | Polar Bear Boss | Base | Arctic |
| Hunter_Wolf_Arctic | Alpha Snow Wolf | Base | Arctic |
| Hunter_Mammoth_Arctic | Mammoth | Base | Arctic |
| Hunter_Mammoth_Boss | Mammoth Boss | +550% | Arctic |
| Hunter_IceMammoth | Ice Mammoth Boss | +600% | Arctic |
| Hunter_IceBreaker_Arctic | IceBreaker | +350% | Arctic |
| Hunter_Moa_Arctic | Arctic Moa | +300% | Arctic |
| Hunter_SnowSlug_Arctic | Snow Slug | +300% | Arctic |
| Hunter_SnowStriker_Arctic | Snow Striker | +280% | Arctic |
| Hunter_Yeti_Arctic | Yeti | +500% | Arctic |
| Hunter_PolarBear_Roaming | Polar Bear | +380% | Arctic |
| Hunter_Scorpion_Desert | Armored Scorpion | Base | Desert |
| Hunter_Hyena_Desert | Alpha Desert Wolf | Base | Desert |
| Hunter_Sandworm_Desert | Sandworm | +600% | Desert |
| Hunter_DesertWolf_Desert | Desert Wolf | +280% | Desert |
| Hunter_Scorpion_Enraged | Enraged Scorpion | +350% | Desert |
| Hunter_SandwyrmQueen_Desert | Sandwyrm Queen | +700% | Desert |
| Hunter_Rockdog_Volcanic | Rock Dog | Base | Volcanic |
| Hunter_BatDog_Volcanic | Bat Dog | Base | Volcanic |
| Hunter_RockGolem | Rock Golem | +700% | Volcanic |
| Hunter_RockGolemJr | Juvenile Rock Golem | +400% | Volcanic |
| Hunter_Crocodile_Swamp | Crocodile | Base | Swamp |
| Hunter_Needler_Swamp | Needler | Base | Swamp |
| Hunter_Landshark_Swamp | Landshark | +500% | Swamp |
| Hunter_Landshark_Norex | Landshark Norex | +550% | Swamp |
| Hunter_HammerheadSlug_Swamp | Hammerhead Slug | +450% | Swamp |
| Hunter_GreatApe | Great Ape | +450% | Various |
| Hunter_Abomination | Irradiated Abomination | +600% | Various |
| Hunter_RadiationBoss | Radiation Boss | +550% | Various |

### Weather System (NEW in v1.16)
| Table | Entries | Description |
|-------|---------|-------------|
| D_WeatherEvents | 110 | Extended storm durations across all biomes |
| D_WeatherActions | 203 | **Storms now damage players** - enabled player damage on all Body/Chaos storm phases, boosted deployable damage +50%, doubled lightning frequency, faster wind damage ticks |

### Status Effects & Afflictions (NEW in v1.16)
| Table | Entries | Description |
|-------|---------|-------------|
| D_AfflictionChance | 22 | Increased affliction chances (dysentery, food poisoning, pneumonia, frostbite, wounds) and longer durations |

### Resource & Equipment Nerfs (NEW in v1.16)
| Table | Entries | Description |
|-------|---------|-------------|
| D_OreDeposit | 21 | Mining takes 25-50% longer depending on ore tier |
| D_Durable | 22 | High-tier equipment durability nerfed: Steel -25%, Titanium -30%, Lithium -35%, Meta -40% |
| D_Consumable | 212 | Food healing reduced -35%, buff durations reduced -30% |

### Survival & Environment
| Table | Entries | Description |
|-------|---------|-------------|
| D_Decayable | 33 | Accelerated food spoilage |
| D_Combustible | 4 | Modified fire behavior |
| D_ExperienceEvents | 166 | XP rebalance across activities |

### Difficulty Tiers
| Table | Entries | Description |
|-------|---------|-------------|
| D_ProspectStats | 27 | Custom stat modifiers per difficulty (NPC HP/damage/speed, storms, durability, survival, respawn, XP) |
| D_ProspectList | 197 | All maps have 4 difficulty tiers (Easy/Normal/Hard/Extreme) |

### Difficulty Scaling (Extreme Tier)
- **Creatures:** +200% HP, +100% melee damage, +45% speed, +120% perception
- **Spawns:** +120% spawn rate, +150% spawn count
- **Storms:** +350% lightning frequency, +400% player hit chance, +200% building hit, +250% tree hit
- **Durability:** +100% durability loss rate
- **Survival:** -40% player HP, -65% crafting speed
- **Respawn:** +60s delay, +400m distance
- **XP:** +50% experience gain

### Blueprint Overrides
- `BP_IcarusNPCGOAPController` - Modified creature AI behavior
- `BP_IcarusGOAPMotivation_Enraged` - Enraged state AI changes

## Installation

1. Install [JimK72's Icarus Mod Manager](https://github.com/jimk72/IcarusModManager)
2. Download `Hardcore_Rebalance_Pack.EXMODZ`
3. Import via Mod Manager

## Changelog

### v1.16 - Hardcore Survival Update
- **FIXED:** Lightning tree hit chance stat typo (was silently ignored)
- **NEW:** D_WeatherActions - 203 storm modifications, storms now damage players directly
- **NEW:** D_AfflictionChance - 22 affliction boosts (higher chances, longer durations)
- **NEW:** D_OreDeposit - 21 ore mining time increases (25-50% longer)
- **NEW:** D_Durable - 22 durability nerfs on Steel/Titanium/Lithium/Meta gear
- **NEW:** D_Consumable - 212 food/healing nerfs (-35% healing, -30% buff duration)
- Total changes: 844 -> 1324 across 11 -> 16 data tables

### v1.15 - Extreme Cleanup
- Removed Hell difficulty tier (game engine only supports 4 tiers)
- Beefed up Extreme difficulty across all stat categories
- All 194 maps properly configured with Easy/Normal/Hard/Extreme

### v1.14 - Alpha Hunter Expansion
- Added 25 new alpha hunters (37 total) covering all vanilla boss types
- Added matching reward entries and spawn zone configurations

### v1.13 - Original Release
- 12 alpha hunters, full difficulty system, weather mods, spawn overrides
