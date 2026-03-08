# Hardcore Rebalance Pack v1.9

For survivors who think Icarus is too easy. Comprehensive hardcore overhaul with 671 changes across 11 data tables + 2 blueprint overrides.

## Features

**Alpha Hunter System** — 12 named bosses across 255 spawn points with biome-tiered workshop loot drops.

**Limited Lives:**

| Difficulty | Lives |
|---|---|
| Easy | 3 lives |
| Medium | 1 life |
| Hard/Extreme | **PERMADEATH** |

**Enraged Creatures** — 3x faster rage buildup (15→5s), 4.5x longer cooldown (45→10s). Creatures stay aggressive and dangerous.

**Survival Pressure (scaled by difficulty):**

| Difficulty | Player Max Health | Crafting Speed |
|---|---|---|
| Easy | -5% | -10% slower |
| Medium | -15% | -15% slower |
| Hard/Extreme | -25% | -25% slower |

**Creature Scaling (all difficulties):**

| Difficulty | NPC Health | NPC Melee | NPC Speed | Perception |
|---|---|---|---|---|
| Easy | +20% | +10% | — | +30% |
| Medium | +40% | +20% | +15% | +40% |
| Hard | +80% | +50% | +25% | +65% |

**Revenge Spawns:**

| Difficulty | Respawn Delay | Respawn Distance |
|---|---|---|
| Easy | +10 seconds | +50 meters |
| Medium | +20 seconds | +100 meters |
| Hard/Extreme | +30 seconds | +200 meters |

**Deadly Lightning Storms:**

| Difficulty | Lightning Freq | Player Hit Chance | Building Hit | Tree Hit |
|---|---|---|---|---|
| Easy | +40% | +50% | +30% | +50% |
| Medium | +75% | +100% (2x) | +60% | +80% |
| Hard | +150% | +200% (3x) | +100% (2x) | +150% |

**Additional Changes:**
- +50% kill XP across 111 creatures
- +50% spawn density across 161 zones
- +60% autonomous spawns and horde wave intensity
- -40% storm safe time (109 weather events)
- Halved decay timers and fuel burn times
- 155 mission timer reductions (~35% cut)
- Wall-attack fix (creatures require line of sight)
- Full coverage across 167 prospects including Open World and Outposts

## Data Tables Modified (11)

| Table | Entries | Description |
|---|---|---|
| AI-D_AISpawnZones | 161 | +50% spawn weights + 255 alpha spawn points |
| AI-D_AutonomousSpawns | 22 | +60% world spawns |
| AI-D_EpicCreatures | 12 | 12 alpha hunter variants |
| Items-D_ItemRewards | 12 | 4 new + 8 enhanced loot tables |
| Horde-D_HordeWave | 21 | +60% horde intensity |
| Weather-D_WeatherEvents | 109 | -40% storm safe duration |
| Traits-D_Decayable | 32 | Halved decay timers |
| Traits-D_Combustible | 4 | Halved fuel burn |
| Stats-D_ProspectStats | 20 | Difficulty modifiers, storms, XP, durability, survival pressure |
| Prospects-D_ProspectList | 167 | Timer reductions + limited lives + stat assignments |
| Experience-D_ExperienceEvents | 111 | +50% kill XP |

## Blueprint Overrides (PAK)

| Blueprint | Property | Vanilla | Modded |
|---|---|---|---|
| BP_IcarusNPCGOAPController | AutoSuccessRangeFromLastSeenLocation | 350 | **0** |
| BP_IcarusGOAPMotivation_Enraged | CombatSecondsUntilMaximum | 15 | **5** |
| BP_IcarusGOAPMotivation_Enraged | DefaultCooldownTime | 45 | **10** |

## Installation

1. Import the `.EXMODZ` file via JimK72's Icarus Mod Manager
2. Place `Hardcore_Rebalance_Pack_P.pak` in `<Icarus Install>/Icarus/Content/Paks/mods/`
3. Both the EXMOD and PAK are required for full functionality

## Multiplayer

All players AND the server must have this mod installed.

## Changelog
### v1.9 (2026-03-08)
- Added Dragonfly_Nest, FleshSac_Floater, SandScuttle, SulphurWorm autonomous spawns

### v1.8
- Enraged creatures: 3x faster rage, 4.5x longer cooldown (blueprint override)
- Survival pressure: reduced max HP and crafting speed scaled by difficulty
- Revenge spawns: longer respawn delays and further distances by difficulty
- Creature scaling on all difficulties (health, melee, speed, perception)

### v1.7
- 89 workshop items added to monster loot tables (biome-tiered)
- Full map coverage: 12 previously missing prospects added (Open World + Outposts)

### v1.6
- Wall-attack fix: zeroed AutoSuccessRangeFromLastSeenLocation in BP_IcarusNPCGOAPController

### v1.5
- +50% kill XP across 111 creatures
- Difficulty-scaled XP and durability bonuses
- Deadly lightning storms tiered by difficulty
- Enhanced animal awareness on all difficulties

### v1.3
- Limited lives system across 167 prospects

### v1.2
- Alpha Hunter System: 12 named bosses, 255 spawn points, tiered loot tables

### v1.1
- 155 mission timer reductions
- Brutal NPC modifiers per difficulty

### v1.0
- Initial release: spawn density, horde intensity, storm timing, decay, fuel burn
