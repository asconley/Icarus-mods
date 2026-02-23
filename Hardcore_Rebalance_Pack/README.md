# Hardcore Rebalance Pack

**Version:** 1.5  
**Author:** AgentKush  
**Mod Manager:** JimK72's Icarus Mod Manager  
**Type:** EXMOD + PAK (includes binary curve modifications)

## Overview

For survivors who think Icarus is too easy. This is a comprehensive hardcore overhaul that touches 12 data tables plus binary growth curves. Features the **Alpha Hunter System** (12 named bosses), **limited lives**, **level cap 170** (unlock ALL talents and blueprints), **deadlier lightning storms**, **boosted kill XP**, **difficulty-scaled rewards**, and much more.

## What's Changed

### v1.5 - Harder AND More Rewarding

**Level Cap 170 (PAK mod):**
- Talent points scale to 280 (all 280 talents unlockable)
- Blueprint points scale to 586 (all 586 blueprints unlockable)
- Solo talent points scale to 135 (all prospect talents unlockable)
- Binary UE4 growth curves modified via pak file override

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

**No Juvenile Spawns on Hard+:**
- `WorldDisableJuvenileSpawning` enabled — no more easy kills on Hard difficulty

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

## Data Tables Modified (12)

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
| Stats-D_ProspectStats | 15 | Difficulty modifiers, storms, XP, durability, juveniles |
| Prospects-D_ProspectList | 155 | Timer reductions + limited lives + new stat assignments |
| Experience-D_ExperienceEvents | 111 | +50% kill XP |
| Character-D_CharacterGrowth | 1 | MaxDisplayLevel 170 |

**Total: 654 modified entries across 12 data tables + 3 binary curve overrides**

## PAK File Contents

The included `Hardcore_Rebalance_Pack_P.pak` overrides 3 UE4 CurveFloat assets:

| Asset | Change |
|-------|--------|
| C_PlayerTalentGrowth | Level 60→170 cap, 90→280 total talent points |
| C_PlayerBlueprintGrowth | Level 51→170 cap, 179→586 total blueprint points |
| C_SoloTalentGrowth | Level 60→170 cap, 30→135 total solo talent points |

## Installation

1. Install JimK72's Icarus Mod Manager
2. Import the `.EXMODZ` file in your Mod Manager
3. Place `Hardcore_Rebalance_Pack_P.pak` in your Icarus mods folder:
   `<Icarus Install>/Icarus/Content/Paks/mods/`
4. Enable the EXMOD and launch Icarus

**Both the EXMOD and PAK are required for full functionality.**

## Compatibility

Modifies spawn zones, creature definitions, loot tables, weather, decay, fuel, difficulty stats, mission timers/difficulty, XP events, and character growth. May conflict with other mods touching the same tables. The PAK file overrides vanilla growth curves.
