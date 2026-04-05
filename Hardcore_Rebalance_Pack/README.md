# Hardcore Rebalance Pack v1.15

For survivors who think Icarus is too easy. Comprehensive hardcore overhaul with 844 changes across 11 data tables + 2 blueprint overrides.

## Features

**Alpha Hunter System** — 37 named bosses across all biomes with unique stats, status effects, and biome-tiered workshop loot drops.

**All Maps Supported** — Every single one of the 197 prospects has all 4 difficulty tiers (Easy/Medium/Hard/Extreme). No map left behind.

**Limited Lives:**

| Difficulty | Lives |
|---|---|
| Easy | 3 lives |
| Medium | 1 life |
| Hard/Extreme | **PERMADEATH** |

**Enraged Creatures** — 3x faster rage buildup (15->5s), 4.5x longer cooldown (45->10s). Creatures stay aggressive and dangerous.

**Survival Pressure (scaled by difficulty):**

| Difficulty | Player Max Health | Crafting Speed |
|---|---|---|
| Easy | -5% | -10% slower |
| Medium | -15% | -15% slower |
| Hard | -25% | -25% slower |
| **Extreme** | **-40%** | **-65% slower** |

**Creature Scaling (all difficulties):**

| Difficulty | NPC Health | NPC Melee | NPC Speed | Perception |
|---|---|---|---|---|
| Easy | +25% | +15% | --- | +30% |
| Medium | +60% | +30% | +15% | +40% |
| Hard | +100% | +65% | +25% | +65% |
| **Extreme** | **+200%** | **+100%** | **+45%** | **+120%** |

**Revenge Spawns:**

| Difficulty | Respawn Delay | Respawn Distance |
|---|---|---|
| Easy | +10 seconds | +50 meters |
| Medium | +20 seconds | +100 meters |
| Hard | +30 seconds | +200 meters |
| **Extreme** | **+60 seconds** | **+400 meters** |

**Deadly Lightning Storms:**

| Difficulty | Lightning Freq | Player Hit Chance | Building Hit | Tree Hit |
|---|---|---|---|---|
| Easy | +40% | +50% | +30% | +50% |
| Medium | +75% | +100% (2x) | +60% | +80% |
| Hard | +150% | +200% (3x) | +100% (2x) | +150% |
| **Extreme** | **+350%** | **+400% (5x)** | **+200%** | **+250%** |

**Spawn Density (Extreme):** +120% spawn modifier, +150% spawn count

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
| Stats-D_ProspectStats | 27 | Difficulty modifiers (4 tiers), storms, XP, durability, survival pressure |
| Prospects-D_ProspectList | 197 | Timer reductions + limited lives + stat assignments + all 4 tiers |
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

### v1.15 (2026-04-06)
- **Removed Hell difficulty tier** — game engine only supports 4 difficulty levels (Easy/Medium/Hard/Extreme)
- **Beefed up Extreme** to absorb Hell's intensity:
  - Creatures: +200% HP (was +150%), +100% melee (was +80%), +45% speed (was +35%), +120% perception (was +80%)
  - Spawns: +120% modifier (was +80%), +150% count (was +100%)
  - Storms: +350% frequency (was +250%), +400% player hit (was +300%), +200% building (was +150%)
  - Survival: -40% player HP (was -30%), -65% crafting speed (was -50%)
  - Respawns: +60s delay (was +45s), +400m distance (was +300m)
  - Durability: +100% (was +75%)
  - XP: +50% (was +35%)
- Removed 7 Hell ProspectStats entries (27 total, down from 34)
- 844 total changes (down from 851)

### v1.14 (2026-04-05)
- **25 NEW alpha hunters** — every missing vanilla creature type now has a custom hunter variant (37 total, up from 12)
- New creatures: Mammoth Boss, Sandworm, Sandwyrm Queen, Landshark, Overgrown Landshark, Rock Golem, Juvenile Rock Golem, Great Ape, Ice Mammoth, IceBreaker, Hammerhead Slug, Mother Moa, Mange Wolf, Desert Wolf, Poison Bear, Enraged Jaguar, Enraged Scorpion, Snow Slug, Snow Striker, Yeti, Abomination, Radiation Boss, Jaguar, Roaming Polar Bear, Alpha Wolf Boss
- Each new alpha has unique stat profiles: HP (+220-700%), melee (+30-75%), biome-appropriate status effects
- 25 new loot tables with exotic ore drops
- 25 new spawn zones across all biomes
- All 197 maps now have Extreme difficulty tier

### v1.13 (2026-04-05)
- Added Hell difficulty tier (removed in v1.15 — not supported by game engine)

### v1.12 (2026-04-05)
- **NEW: Extreme difficulty tier** with punishing modifiers across all 197 prospects
- Boosted creature HP across all tiers
- 7 new Extreme D_ProspectStats entries

### v1.11 (2026-04-05)
- Updated for game v3.0.4 (Dangerous Horizons)
- Added 53 new creature XP entries with +50% boost (166 total)
- Fixed 13 renamed creatures

### v1.10 (2026-03-22)
- Added 30 new Elysium story missions and side quests
- Full prospect coverage now 197/197

### v1.9 (2026-03-08)
- Added Dragonfly_Nest, FleshSac_Floater, SandScuttle, SulphurWorm autonomous spawns

### v1.8
- Enraged creatures: 3x faster rage, 4.5x longer cooldown
- Survival pressure, revenge spawns, creature scaling

### v1.7
- 89 workshop items added to monster loot tables

### v1.6
- Wall-attack fix

### v1.5
- +50% kill XP, difficulty-scaled XP/durability, deadly lightning, enhanced perception

### v1.3
- Limited lives system

### v1.2
- Alpha Hunter System: 12 named bosses

### v1.1
- 155 mission timer reductions

### v1.0
- Initial release
