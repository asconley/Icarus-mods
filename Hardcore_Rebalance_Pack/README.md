# Hardcore Rebalance Pack v1.14

For survivors who think Icarus is too easy. Comprehensive hardcore overhaul with 851 changes across 11 data tables + 2 blueprint overrides.

## Features

**Alpha Hunter System** — 37 named bosses across all biomes with unique stats, status effects, and biome-tiered workshop loot drops.

**All Maps Supported** — Every single one of the 197 prospects has all 5 difficulty tiers (Easy/Medium/Hard/Extreme/Hell). No map left behind.

**Limited Lives:**

| Difficulty | Lives |
|---|---|
| Easy | 3 lives |
| Medium | 1 life |
| Hard/Extreme/Hell | **PERMADEATH** |

**Enraged Creatures** — 3x faster rage buildup (15→5s), 4.5x longer cooldown (45→10s). Creatures stay aggressive and dangerous.

**Survival Pressure (scaled by difficulty):**

| Difficulty | Player Max Health | Crafting Speed |
|---|---|---|
| Easy | -5% | -10% slower |
| Medium | -15% | -15% slower |
| Hard | -25% | -25% slower |
| **Extreme** | **-30%** | **-50% slower** |
| **Hell** | **-50%** | **-75% slower** |

**Creature Scaling (all difficulties):**

| Difficulty | NPC Health | NPC Melee | NPC Speed | Perception |
|---|---|---|---|---|
| Easy | +25% | +15% | — | +30% |
| Medium | +60% | +30% | +15% | +40% |
| Hard | +100% | +65% | +25% | +65% |
| **Extreme** | **+150%** | **+80%** | **+35%** | **+80%** |
| **Hell** | **+250%** | **+120%** | **+50%** | **+150%** |

**Revenge Spawns:**

| Difficulty | Respawn Delay | Respawn Distance |
|---|---|---|
| Easy | +10 seconds | +50 meters |
| Medium | +20 seconds | +100 meters |
| Hard | +30 seconds | +200 meters |
| **Extreme** | **+45 seconds** | **+300 meters** |
| **Hell** | **+90 seconds** | **+500 meters** |

**Deadly Lightning Storms:**

| Difficulty | Lightning Freq | Player Hit Chance | Building Hit | Tree Hit |
|---|---|---|---|---|
| Easy | +40% | +50% | +30% | +50% |
| Medium | +75% | +100% (2x) | +60% | +80% |
| Hard | +150% | +200% (3x) | +100% (2x) | +150% |
| **Extreme** | **+250%** | **+300% (4x)** | **+150%** | **+200%** |
| **Hell** | **+400%** | **+500% (6x)** | **+250%** | **+300%** |

**Crafted Item Durability (intentional):**
Items crafted under the durability bonus start at base durability with an increased maximum. This means freshly crafted items need one repair to reach full capacity. This is by design — in a hardcore survival setting, nothing comes ready-made. The bonus gives your gear more total lifespan, but you earn it through maintenance.

## Alpha Hunters (37)

| Name | Biome | HP | Melee | Special |
|---|---|---|---|---|
| Hunter_Wolf_Forest | Forest | +200% | +30% | Hemorrhage, +15% speed |
| Hunter_Bear_Forest | Forest | +350% | +40% | Blunt trauma, +20% phys resist |
| Hunter_Lion_Forest | Forest | +250% | +35% | Bleed, +20% speed |
| Hunter_MangeWolf_Forest | Forest | +250% | +35% | Poison, hemorrhage, +25% speed |
| Hunter_PoisonBear_Forest | Forest | +380% | +45% | Poison sting, +25% phys resist |
| Hunter_EnragedLion_Forest | Forest | +350% | +50% | Bleed, wound, +25% speed |
| Hunter_Jaguar_Forest | Forest | +220% | +35% | Bleed, +25% speed |
| Hunter_AlphaWolf_Boss | Forest | +280% | +40% | Hemorrhage, +30% speed |
| Hunter_GreatApe | Forest | +450% | +55% | Blunt trauma, +20% speed |
| Hunter_RockGolemJr | Forest | +400% | +35% | +100% armor, +35% phys resist |
| Hunter_Wolf_Arctic | Arctic | +300% | +35% | Freeze, hemorrhage, +25% speed |
| Hunter_PolarBear_Arctic | Arctic | +400% | +50% | Freeze, blunt trauma, +30% phys resist |
| Hunter_PolarBear_Roaming | Arctic | +380% | +45% | Freeze, blunt trauma, +25% phys resist |
| Hunter_Mammoth_Arctic | Arctic | +500% | +60% | Blunt trauma, +35% phys resist, +30% regen |
| Hunter_Mammoth_Boss | Arctic | +550% | +65% | Blunt trauma, +40% phys resist, +35% regen |
| Hunter_IceMammoth | Arctic | +600% | +65% | Freeze, blunt trauma, +40% phys resist |
| Hunter_IceBreaker_Arctic | Arctic | +350% | +40% | Freeze, +20% speed |
| Hunter_Moa_Arctic | Arctic | +300% | +35% | Freeze, bleed, +30% speed |
| Hunter_SnowSlug_Arctic | Arctic | +300% | +30% | Freeze, +30% phys resist |
| Hunter_SnowStriker_Arctic | Arctic | +280% | +40% | Freeze, bleed, +30% speed |
| Hunter_Yeti_Arctic | Arctic | +500% | +55% | Freeze, blunt trauma, +35% phys resist |
| Hunter_Scorpion_Desert | Desert | +400% | +45% | Poison, slow, +20% speed |
| Hunter_Hyena_Desert | Desert | +300% | +40% | Hemorrhage, +30% speed |
| Hunter_DesertWolf_Desert | Desert | +280% | +35% | Hemorrhage, +50% proj resist, +30% speed |
| Hunter_Sandworm_Desert | Desert | +600% | +70% | Extended detection, +30% phys resist |
| Hunter_SandwyrmQueen_Desert | Desert | +700% | +75% | +35% phys resist, +30% regen |
| Hunter_Scorpion_Enraged | Desert | +350% | +45% | Poison, slow |
| Hunter_Rockdog_Volcanic | Volcanic | +350% | +45% | +25% phys resist, +20% regen |
| Hunter_BatDog_Volcanic | Volcanic | +300% | +40% | Bleed, +25% speed |
| Hunter_RadiationBoss | Volcanic | +550% | +50% | Poison, +35% phys resist, +35% regen |
| Hunter_Crocodile_Swamp | Swamp | +350% | +45% | Wound, +30% phys resist |
| Hunter_Needler_Swamp | Swamp | +300% | +35% | Deep wound, +40% projectile |
| Hunter_Landshark_Swamp | Swamp | +500% | +55% | Wound, +75% proj resist |
| Hunter_Landshark_Norex | Swamp | +550% | +60% | Deep wound, +80% proj resist |
| Hunter_HammerheadSlug_Swamp | Swamp | +450% | +50% | Poison, +35% phys resist |
| Hunter_Abomination | Swamp | +600% | +60% | Poison, +40% phys resist, +40% regen |
| Hunter_RockGolem | Arctic | +700% | +50% | +150% armor, +50% phys resist, blunt trauma |

**Additional Changes:**
- +50% kill XP across 166 creatures
- +50% spawn density across 186 zones
- +60% autonomous spawns and horde wave intensity
- -40% storm safe time (110 weather events)
- Halved decay timers and fuel burn times
- 155 mission timer reductions (~35% cut)
- Wall-attack fix (creatures require line of sight)
- Full coverage across all 197 prospects including Open World and Outposts

## Data Tables Modified (11)

| Table | Entries | Description |
|---|---|---|
| AI-D_AISpawnZones | 186 | +50% spawn weights + alpha spawn points |
| AI-D_AutonomousSpawns | 26 | +60% world spawns |
| AI-D_EpicCreatures | 37 | 37 alpha hunter variants |
| Items-D_ItemRewards | 37 | Biome-tiered loot tables |
| Horde-D_HordeWave | 21 | +60% horde intensity |
| Weather-D_WeatherEvents | 110 | -40% storm safe duration |
| Traits-D_Decayable | 33 | Halved decay timers |
| Traits-D_Combustible | 4 | Halved fuel burn |
| Stats-D_ProspectStats | 34 | Difficulty modifiers (6 tiers), storms, XP, durability, survival pressure |
| Prospects-D_ProspectList | 197 | Timer reductions + limited lives + stat assignments + all 5 tiers |
| Experience-D_ExperienceEvents | 166 | +50% kill XP |

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

### v1.14 (2026-04-05)
- **25 NEW alpha hunters** — every missing vanilla creature type now has a custom hunter variant (37 total, up from 12)
- New creatures: Mammoth Boss, Sandworm, Sandwyrm Queen, Landshark, Overgrown Landshark, Rock Golem, Juvenile Rock Golem, Great Ape, Ice Mammoth, IceBreaker, Hammerhead Slug, Mother Moa, Mange Wolf, Desert Wolf, Poison Bear, Enraged Jaguar, Enraged Scorpion, Snow Slug, Snow Striker, Yeti, Abomination, Radiation Boss, Jaguar, Roaming Polar Bear, Alpha Wolf Boss
- Each new alpha has unique stat profiles: HP (+220-700%), melee (+30-75%), biome-appropriate status effects
- 25 new loot tables with exotic ore drops
- 25 new spawn zones across all biomes
- **All 197 maps now have all 5 difficulty tiers** (Easy/Medium/Hard/Extreme/Hell)
- 851 total changes (up from 776)

### v1.13 (2026-04-05)
- **NEW: Hell difficulty tier** — for players who found Extreme too comfortable
- Hell creatures: +250% HP, +120% melee, +50% speed, +150% perception radius
- Hell spawn rates: +150/+200% creature density
- Hell survival: -50% player HP, -75% crafting speed
- Hell storms: +400% lightning frequency, +500% player hit chance, +250% building damage
- Hell respawns: +90s delay, +500m distance
- Hell durability bonus: +125% (items need repair after crafting — by design)
- Hell XP bonus: +60%
- 7 new D_ProspectStats entries (34 total)
- Hell added to 194 prospects
- 776 total changes (up from 769)

### v1.12 (2026-04-05)
- **NEW: Extreme difficulty tier** with punishing modifiers across all 197 prospects
- Boosted creature HP: Easy +25% (was +20%), Medium +60% (was +40%), Hard +100% (was +80%), Extreme +150%
- Extreme creatures: +80% melee damage, +35% movement speed, +80% perception
- Extreme survival: -30% player HP, -50% crafting speed
- Extreme storms: +250% frequency, +300% player hit chance, +150% building damage
- Extreme respawns: +45s delay, +300m distance
- Extreme spawn rates: +80/+100% creature density
- Extreme XP bonus: +35% to offset difficulty
- Boosted Hard spawn rates: +60/+75% (was +45/+60%)
- 7 new Extreme D_ProspectStats entries (27 total, up from 20)
- 769 total changes (up from 762)

### v1.11 (2026-04-05)
- Updated for game v3.0.4 (Dangerous Horizons)
- Added 53 new creature XP entries with +50% boost (166 total, up from 111)
- Fixed 13 renamed creatures (Baby* -> *_Juvenile, Kill_Mammoth split into 3 types)
- Added Cosmetic_Radiation weather event (110 total)
- Added Decay_NoDecay to decayable table (33 total)
- 762 total changes (up from 705)

### v1.10 (2026-03-22)
- Added 30 new Elysium story missions and side quests across Elysium/Olympus/Prometheus/Styx maps
- Full prospect coverage now 197/197 (up from 167)

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
- +50% kill XP across 166 creatures
- Difficulty-scaled XP and durability bonuses
- Deadly lightning storms tiered by difficulty
- Enhanced animal awareness on all difficulties

### v1.3
- Limited lives system across 197 prospects

### v1.2
- Alpha Hunter System: 12 named bosses, 255 spawn points, tiered loot tables

### v1.1
- 155 mission timer reductions
- Brutal NPC modifiers per difficulty

### v1.0
- Initial release: spawn density, horde intensity, storm timing, decay, fuel burn
