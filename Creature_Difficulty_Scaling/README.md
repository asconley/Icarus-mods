# Creature Difficulty Scaling

**Version:** 2.2  
**Author:** AgentKush  
**Compatibility:** Designed for JimK72's Level Cap 500 mod (works with any level cap mod)

## Description

Massively overhauls creature difficulty to scale with high-level play. This mod transforms all 161 spawn zones across every biome to support creature levels up to 500, applies tiered stat buffs to 136 creatures, and adds player-level-based scaling rules for dynamic difficulty.

Designed as the combat companion to level cap mods — without this, creatures cap at level 120 even when players can reach 500.

## What This Mod Does

### 1. Spawn Zone Level Scaling (161 zones)
All spawn zones across Olympus, Styx, Prometheus, and Elysium have been rescaled:

| Zone Difficulty | Vanilla Range | Modded Range |
|----------------|--------------|--------------|
| Starter/Outpost | 1-30 | 2-100 |
| Easy | 10-50 | 27-200 |
| Medium | 30-60 | 100-250 |
| Hard | 50-80 | 200-350 |
| Very Hard | 70-100 | 300-437 |
| Super Hard | 80-120 | 350-500 |
| Endgame (Icesheet/Ashlands) | 100-120 | 437-500 |

### 2. Creature Stat Buffs (136 creatures)
Percentage-based buffs applied by creature threat tier:

| Tier | HP | Damage | Resistance | Regen | Speed |
|------|-----|--------|------------|-------|-------|
| Passive (Deer, Rabbits, etc.) | +25% | — | — | +15% | — |
| Small Predator (Wolves, Spiders) | +50% | +30% | — | +25% | +5% |
| Medium Predator (Bears, Jaguars) | +100% | +50% | +15% | +50% | +8% |
| Boss (Mammoths, Sandworms) | +75% | +40% | +20% | +30% | — |

### 3. Player-Level Scaling Rules
Dynamic scaling rules that scale creature stats based on nearby player level:

| Scaling Rule | Effect |
|-------------|--------|
| Health | +5% per player level (up to +2500% at level 500) |
| Damage | +3% per player level (up to +1500% at level 500) |
| Resistance | +2% per player level (capped at +50%) |
| Speed | +1% per player level (capped at +25%) |
| Per-Player (multiplayer) | +75% per additional nearby player |

**Note:** The player-level scaling rules use the game's built-in `bScaleByAverageNearbyPlayerLevel` system. These rules are defined in D_ScalingRules and are available for any game system that references them. The primary scaling comes from the massively expanded spawn zone levels, which feed into the game's existing creature growth curves.

## Creature Count by Tier

| Tier | Count | Examples |
|------|-------|---------|
| Passive | 38 | Deer, Rabbits, Kea, Sheep, Chamois |
| Small Predator | 25 | Wolves, Spiders, Slugs, Hyenas |
| Medium Predator | 47 | Bears, Jaguars, Scorpions, Landsharks, Crocodiles |
| Boss | 28 | Mammoths, Polar Bear Boss, Sandworms, Rock Golem |

## Technical Details

- Modifies **161 spawn zones** in D_AISpawnZones (all biomes, all maps)
- Modifies **180 creature entries** in D_AIGrowth (full vanilla + DLC coverage — New Frontiers, Styx, Dread)
- Adds **5 scaling rules** to D_ScalingRules
- **v2.2:** Explicitly buffs 6 tames and 16 mounts (previously untouched) so pets can survive high-level hostile creatures
- All stat buffs are percentage-based, stacking with existing creature stats
- Spawn zone scaling preserves relative difficulty progression between zones
- Compatible with any level cap mod (optimized for 500 cap)

## Biome Coverage

| Map | Zones Modified |
|-----|---------------|
| Olympus (OLY) | Conifer Easy/Medium/Hard/Super Hard, Desert Easy/Medium/Hard/Super Hard |
| Styx (STYX) | Conifer, Arctic, Desert (all tiers + Croc variants) |
| Prometheus (PRO) | Grasslands, Arctic, Tundra, Swamp, Lava, Icesheet, Ashlands, Volcanic |
| Elysium (ELY) | Arctic, Tundra, Volcanic, Geothermal, Desert, Swamp |
| Outposts | Forest, Arctic, Desert, Tundra, Volcano, Beach |

## Installation

1. Place the `.EXMODZ` file in your Icarus Mod Manager mods folder
2. Enable the mod in the Mod Manager
3. Launch the game
4. **Recommended:** Also install JimK72's Level Cap 500 mod for full experience

## Changelog

### v2.2 — Tame & Mount Survival Pass

**Fixes the "my wolf dies in 3 seconds" problem.**

Prior versions left the Tame_* and Mount_* entries almost untouched — they had a flat 40% damage resistance but zero HP boost and zero melee damage boost. As players progressed into higher-level zones and tougher biomes, tames and mounts couldn't keep up with the scaled-up hostile creatures the mod was already buffing, and were getting shredded.

**What changed:**

| Creature class | HP | Melee | Phys Resist | Other Resists | Regen |
|---|---|---|---|---|---|
| **Tames** (6) — Wolf, Cat, Wildboar, Tundra Monkey, Orka, Storca | **+200%** | **+120%** | 40% → **60%** | 40% → **55%** (fire/frost/explosive/poison) | +100% |
| **Mounts** (16) — Horse, Buffalo, Chew, Moa, Raptor, Slinker, Snow Striker, Swamp Bird/Quad, Tusker, Woolly Mammoth, Wooly Zebra, Zebra, BlueBack, Bull | **+150%** | unchanged (mounts don't fight) | 40% → **55%** | 40% → **50%** | +75% |

Tames can now hold their own against scaled-up hostile creatures in open combat. Mounts are much harder to kill out from under you when riding through a pack.

**Not touched:** Mount_SpeederBike (it's a mechanical vehicle, not a creature), NPC companions, livestock (Pig, Sheep, Cow, Chicken, Lamb, Piglet, Rooster) — those stay vanilla since they're farm animals, not combat pets.

**DLC coverage confirmed:** CDS currently covers 100% of creatures in New Frontiers (Prometheus lava creatures), Styx (Geothermal biome, drones, Reavers), Dread (Irradiated mutations), and all juvenile/boss variants. No DLC creatures are missing.

### v2.1
- Added 44 new creature growth entries for taming/mount content (dogs, horses, mounts, juveniles, tamed pets, speeder bike)
- Total creature entries: 180 (up from 136)

### v2.1
- **Major overhaul** — expanded from creature-only buffs to full zone scaling
- Added 161 spawn zone level modifications (all maps/biomes)
- Scaled zone levels from vanilla max 120 to support level 500 cap
- Added speed scaling rule (+1% per player level, capped 25%)
- Enhanced multiplayer scaling (50% → 75% per additional player)
- Updated scaling rules InMaxValue from 100 to 500
- Updated scaling rule output ranges for 500 cap

### v1.0
- Initial release
- 136 creature modifications across 4 difficulty tiers
- 3 player-level scaling rule additions
