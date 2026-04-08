# Hardcore Rebalance Pack

**Version:** 1.18
**Author:** AgentKush
**Compatibility:** Week All

> For survivors who think Icarus is too easy. 1432 changes across 17 data tables + 2 blueprint overrides.

## What This Mod Does

Transforms Icarus into a brutal survival experience. Every difficulty tier is rebalanced to push players harder with tougher creatures, deadlier weather, harsher status effects, reduced resources, and equipment that wears out faster.

## Changes by Category

### Creature AI & Spawns
| Table | Entries | Description |
|-------|---------|-------------|
| D_AIGrowth | 114 | Per-creature +150% HP and +75% melee on all hostile creatures (NEW in v1.18) |
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

## Recommended Companion Mod

For the full hardcore experience and the hardest gameplay possible, install **Creature_Difficulty_Scaling (CDS) v2.2+** alongside this mod. CDS adds level-500 spawn zone scaling, per-player-level stat scaling rules, and tame/mount survival buffs so your pets can actually hold up against HRP's tougher creatures. Running HRP + CDS together delivers the most punishing Icarus experience possible — see the v1.18 changelog for overlap details.

## Changelog

### v1.18 (Creature HP/Melee Rework)

**The big fix: NPC HP boosts actually work now.**

In v1.17 the `WorldNPCMaximumHealth_+%` world stat was being silently ignored for the vast majority of creatures because Icarus uses per-creature `CurveFloat` assets (e.g. `C_BearHealth`) for HP instead of a flat stat. Multiplying a world stat that the curve never reads does nothing — a vanilla Bear has ~750-3000 HP from its curve regardless of what the world stat says.

**What this version does instead:** it adds a brand new `D_AIGrowth` section with 114 hostile creature overrides. Each row adds two per-creature additive stats directly to the creature's `Base` block, which Icarus actually respects:

- `BaseMaximumHealth_+%: 150` (+150% HP baseline)
- `BaseMeleeDamage_+%: 75` (+75% melee damage baseline)

Scope: every hostile creature the mod could identify — bears, wolves, big cats, reptiles, scorpions, mammoths/tuskers, birds, bugs, bats, worms, slugs, apes, drones, irradiated, lava creatures, strikers/tanks, golems, and all hunter/boss variants. Prey animals (deer, rabbit, sheep, etc.), mounts, tamed creatures, and fish are untouched.

**Cleanup:**
- Removed the now-dead `WorldNPCMaximumHealth_+%` and `WorldNPCMeleeAttack_+%` entries from `NPC_Increase_Easy/Medium/Hard/Extreme` in `D_ProspectStats`. They were cosmetic — they showed up in the difficulty preview tooltip but did nothing. The UI will no longer claim a boost it can't deliver.

**Recommended companion mod — `Creature_Difficulty_Scaling` (CDS):**
For the full hardcore experience and the hardest gameplay, run HRP **alongside** CDS v2.2 or later. HRP owns the baseline creature HP/melee push via `D_AIGrowth`; CDS layers on top with level-500 spawn zone scaling, per-player-level scaling rules, tame/mount survival buffs, and its own tiered creature stat boosts. Together they produce the most punishing, highest-level Icarus experience the mod manager can deliver.

Heads-up on the overlap: both mods modify `BaseMaximumHealth_+%` and `BaseMeleeDamage_+%` on hostile creatures in `D_AIGrowth`. When loaded together, whichever mod loads last wins for those specific fields (per-row, not per-stat). Everything else — HRP's weather, afflictions, durability, ore, consumables, spawn rates, difficulty tiers, alpha hunters, AND CDS's spawn zone levels, scaling rules, tame buffs — stacks cleanly with no conflict. The end result is still meaningfully harder than either mod alone.

**Note on difficulty tiering:** I investigated making the HP boost scale with difficulty (Easy < Normal < Hard < Extreme) via `D_ScalingRules`. It turns out scaling rules are wired up in Blueprint code at runtime, not through data tables, so you can't attach a new rule to `BaseMaximumHealth_+%` from an EXMOD. The +150% / +75% values are flat across all difficulties. If this ends up feeling too punishing on Easy/Medium, open `Hardcore_Rebalance_Pack.EXMOD`, find the `AI-D_AIGrowth.json` block, and tune the two numbers — the existing `tools/patch_bp_floats.py` pattern shows how to iterate locally.

### v1.17 (Bug Fix Release)

**Critical fixes:**
- **Fixed NPC stat boosts not applying on Extreme difficulty.** `NPC_Increase_Extreme`, `NPC_Increase_Extreme_SpawnRates`, and `Hardcore_XP_Extreme` were silently failing to load because they referenced 6 invalid stat names that don't exist in the game's `D_Stats.json`. Removed: `WorldNPCMeleeDamage_+%`, `WorldAIPerceptionSightRadius_+%`, `WorldAIPerceptionHearingRange_+%`, `WorldNPCSpawnModifier_+%`, `WorldNPCSpawnCountModifier_+%`, `WorldPlayerXPMultiplier_+%`. The remaining valid stats now apply correctly.
- **Inverted `Hardcore_Durability_*` values.** The mod was setting `WorldItemDurability_+%` to positive values (+20/+35/+50/+100), which BUFFED tool/building HP instead of nerfing it. Tools became so tough that demolishing them required hammers and excessive time. Now correctly nerfs durability: -20/-35/-50/-90% across difficulty tiers (Extreme capped at -90 to leave 10% durability instead of zeroing out tools).

**Compensating buffs (replacing the removed invalid stats with valid equivalents):**
- **Expanded `NPC_Increase_Hard_SpawnRates` and `NPC_Increase_Extreme_SpawnRates` from 5 to 20 creatures.** Added per-creature spawn rate boosts for Boar, Buffalo, Chamois, Crocodile, Deer, Elephant, Goat, Komodo, Mammoth, Rabbit, Raccoon, Roat, Tusker, Wulv, and Zebra (Hard +50% each, Extreme +70% each). This recovers most of the intent of the removed `WorldNPCSpawnModifier_+%` and `WorldNPCSpawnCountModifier_+%` since vanilla has no global spawn modifier.
- **Bumped `Hardcore_XP_Extreme.WorldPlayerExperience_+%` from 35 to 75** to compensate for the removed `WorldPlayerXPMultiplier_+%`.
- **Note on the other 3 removed stats:** `WorldNPCMeleeDamage_+%` is already covered by `WorldNPCMeleeAttack_+%` (same underlying value in Unreal). `WorldAIPerceptionSightRadius_+%` and `WorldAIPerceptionHearingRange_+%` are now **recovered via BP override** — `BP_IcarusNPCGOAPController` (which this mod already ships) has been edited directly so all NPCs use the boosted values:
  - `SightRadius`: 10000 → **17000** (+70%)
  - `LoseSightRadius`: 135000 → **180000** (+33%, keeps aggression durations sane)
  - `HearingRange`: 15000 → **25500** (+70%)

  These values affect every NPC controller in the game (it's the parent class). If you want to tune them yourself you have two options:
  - **Quick:** edit `tools/patch_bp_floats.py` (change the `NEW_VALUES` in the `PATCHES` list), then run `python tools/patch_bp_floats.py`. This byte-patches the `.uexp` in-place. The vanilla `.uexp` is preserved as `BP/AI/GOAP/BP_IcarusNPCGOAPController.uexp.vanilla.bak` so you can always revert.
  - **Full editor:** open `BP/AI/GOAP/BP_IcarusNPCGOAPController.uasset` in [UAssetGUI](https://github.com/atenfyr/UAssetGUI) and edit the `Vision Config` and `Sound Config` exports directly. See `BP_EDIT_GUIDE.md` for the full walkthrough.

  After tuning, re-pack the EXMODZ if you want to redistribute. Note: BP class default values do **not** hot-reload on existing prospects — start a new prospect to verify changes.

## v1.16 - Hardcore Survival Update
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
