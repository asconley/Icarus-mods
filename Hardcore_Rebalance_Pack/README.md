# Hardcore Rebalance Pack

**Version:** 1.6  
**Author:** AgentKush  
**Mod Manager:** JimK72's Icarus Mod Manager  
**Type:** EXMOD + Blueprint Override

## Overview

For survivors who think Icarus is too easy. This is a comprehensive hardcore overhaul that touches 11 data tables and AI perception blueprints. Features the **Alpha Hunter System** (12 named bosses), **limited lives**, **deadlier lightning storms**, **boosted kill XP**, **difficulty-scaled rewards**, **wall-attack fix**, and much more.

## What's Changed

### v1.6 - Wall Attack Fix (Blueprint Override)

**Animals Can No Longer Attack Through Walls:**
- Zeroed `AutoSuccessRangeFromLastSeenLocation` in `BP_IcarusNPCGOAPController` — the root cause of animals detecting and attacking players through building walls
- Vanilla had this set to 350 units, allowing AI to skip line-of-sight checks within that range of where they last saw you
- Now ALL creature detection requires actual line of sight — no more bears mauling you through stone walls
- Blueprint override delivered via EXMODZ

### v1.5 - Harder AND More Rewarding

**+50% Kill XP across 111 creatures:**
- Wolves: 1500 → 2250 | Bears: 2000 → 3000 | Polar Bears: 3000 → 4500
- Bosses: 25000 → 37500 | Alpha Wolf: 2000 → 3000
- All passive/hostile creatures scaled proportionally

**Difficulty-Scaled XP Bonus:**
- Easy: +10% world XP | Medium: +20% world XP

**Difficulty-Scaled Durability Bonus:**
- Easy: +20% item durability | Medium: +35% | Hard: +50%

**Deadly Lightning Storms (tiered by difficulty):**

| Difficulty | Lightning Freq | Player Hit Chance | Building Hit | Tree Hit |
|------------|---------------|-------------------|-------------|----------|
| Easy | +40% | +50% | +30% | +50% |
| Medium | +75% | +100% (2x) | +60% | +80% |
| Hard | +150% | +200% (3x) | +100% (2x) | +150% |

**Enhanced Animal Awareness (all difficulties):**
- Aggressive perception radius: +30% Easy / +40% Medium / +65% Hard
- Neutral perception radius: +20% Easy / +30% Medium / +55% Hard
- Medium: +15% NPC movement speed | Hard: +25% movement speed

### v1.3 - Limited Lives System
**152 missions modified with tiered respawn limits:**

| Difficulty | Lives | Vanilla |
|------------|-------|---------|
| Easy | 3 lives | Unlimited |
| Medium | 1 life | Unlimited |
| Hard | **PERMADEATH** | 3 lives |
| Extreme | **PERMADEATH** | 3 lives |

### v1.2 - Alpha Hunter System
**12 Named Alpha Hunter variants** with boss map icons, boosted stats, and unique abilities across all biomes.

**4 Tiered Gear Loot Tables:**
- **Forest:** Steel/Platinum tools, Ghillie/Hunter armor, Longbow/Crossbow, legendary chance
- **Arctic:** Platinum/Titanium tools, Fur/Polar Bear armor, Pistols/Rifles, legendary chance
- **Desert/Volcanic:** Titanium tools, firearms, Obsidian/Scale armor, legendary chance
- **Swamp:** Platinum/Titanium tools, Hunter/Caveworm armor, legendary chance

**8 Enhanced Boss Loot Tables** — every existing boss drops weapons, armor, and has legendary weapon chance.
**255 Alpha Spawn Points** across 148 zones in all biomes.

### v1.1 - Mission Difficulty
- 155 mission timer reductions (~35% cut across all timed missions)
- Brutal NPC modifiers per difficulty

### v1.0 - Base Hardcore
- +50% spawn density across 160 zones
- +60% autonomous spawns (22 entries)
- +60% horde wave intensity (21 entries)
- -40% storm safe time (109 weather events)
- Halved decay timers (32 entries)
- Halved fuel burn times (4 entries)

## Data Tables Modified (11)

| Table | Entries | Description |
|-------|---------|-------------|
| AI-D_AISpawnZones | 160 | +50% spawn weights + 255 alpha hunter spawn points |
| AI-D_AutonomousSpawns | 22 | +60% world spawns |
| AI-D_EpicCreatures | 12 | 12 alpha hunter variants |
| Items-D_ItemRewards | 12 | 4 new + 8 enhanced loot tables |
| Horde-D_HordeWave | 21 | +60% horde intensity |
| Weather-D_WeatherEvents | 109 | -40% storm safe duration |
| Traits-D_Decayable | 32 | Halved decay timers |
| Traits-D_Combustible | 4 | Halved fuel burn |
| Stats-D_ProspectStats | 14 | Difficulty modifiers, storms, XP, durability |
| Prospects-D_ProspectList | 155 | Timer reductions + limited lives + new stat assignments |
| Experience-D_ExperienceEvents | 111 | +50% kill XP |

**Total: 652 modified entries across 11 data tables + 1 blueprint override**

## Blueprint Override

The EXMODZ includes a modified `BP_IcarusNPCGOAPController` (the main AI controller for all creatures):

| Property | Vanilla | Modded | Effect |
|----------|---------|--------|--------|
| AutoSuccessRangeFromLastSeenLocation | 350 | **0** | Creatures must have line of sight to detect players |

## Installation

1. Install JimK72's Icarus Mod Manager
2. Import the `.EXMODZ` file in your Mod Manager
3. Enable the mod and launch Icarus

## Compatibility

Modifies spawn zones, creature definitions, loot tables, weather, decay, fuel, difficulty stats, mission timers/difficulty, XP events, and AI perception. May conflict with other mods touching the same tables or BP_IcarusNPCGOAPController.
