# Hardcore Rebalance Pack

**Version:** 1.8  
**Author:** AgentKush  
**Mod Manager:** JimK72's Icarus Mod Manager  
**Type:** EXMOD + PAK (includes binary curve modifications + blueprint overrides)

## Overview

For survivors who think Icarus is too easy. This is a comprehensive hardcore overhaul that touches 11 data tables, binary growth curves, and AI blueprints. Features the **Alpha Hunter System** (12 named bosses), **limited lives**, **level cap 170** (unlock ALL talents and blueprints), **enraged creatures** (3x faster rage, 4.5x longer cooldown), **survival pressure** (reduced HP + slower crafting), **revenge spawns** (longer delays + further distances), **creature scaling on all difficulties**, **deadlier lightning storms**, **boosted kill XP**, **difficulty-scaled rewards**, **wall-attack fix**, **workshop loot drops**, and full coverage across all 167 prospects including Open World and Outposts.

## What's Changed

### v1.8 - Enraged Creatures + Survival Pressure + Creature Scaling

**Enraged Creatures (Blueprint Override):**
- Creatures enrage 3x faster in combat (CombatSecondsUntilMaximum: 15 → 5 seconds)
- Enrage cooldown reduced from 45s to 10s — creatures stay aggressive much longer
- Affects all hostile wildlife: wolves, bears, cougars, boars, and bosses
- Combined with the existing wall-attack fix, this makes combat genuinely threatening — creatures won't give up or calm down easily

**Survival Pressure System — scaled by difficulty:**

| Difficulty | Player Max Health | Crafting Speed |
|------------|------------------|----------------|
| Easy | -5% | -10% slower |
| Medium | -15% | -15% slower |
| Hard/Extreme | -25% | -25% slower |

You're squishier and more vulnerable while crafting. No more tanking hits while casually building gear.

**Revenge Spawns — death has real consequences:**

| Difficulty | Respawn Delay | Respawn Distance |
|------------|--------------|-----------------|
| Easy | +10 seconds | +50 meters |
| Medium | +20 seconds | +100 meters |
| Hard/Extreme | +30 seconds | +200 meters |

When you die, you wait longer and spawn further from your body. On Hard, that's a 30-second death screen and a 200m trek back to your grave — if something doesn't find you first.

**Creature Scaling on ALL Difficulties** — creatures are now tougher even on Easy/Medium, not just Hard:

| Difficulty | NPC Health | NPC Melee | NPC Speed | Perception |
|------------|-----------|-----------|-----------|------------|
| Easy | +20% | +10% | — | +30% aggressive |
| Medium | +40% | +20% | +15% | +40% aggressive |
| Hard | +80% | +50% | +25% | +65% aggressive |

### v1.7 - Workshop Loot Drops + Full Map Coverage

**89 workshop items added to monster loot tables** — thematically matched to each creature and biome:

**Alpha Hunter Loot (biome-tiered):**
- **Forest** (+9 items): Printed tools (8%), Carry Weight module (7%), Animal Healthbar module (6%), Survival Backpack (6%), Shengong Canteen (5%), Antipoison Vaccine (5%), Repair Kit (7%)
- **Swamp** (+9 items): Poison Resistance module (7%), Consumption/Wounds modules (6%), Medic Backpack (5%), Inaris Canteen (5%), Antiparasitic/Antipoison Vaccines (5-6%), O2 Tank (4%), Radar (4%)
- **Arctic** (+9 items): Cold Resist module (7%), Temperature/Extremes modules (5-6%), Explorer's Backpack (5%), Heated Canteen (5%), Larkwell O2 Tank (5%), Antibiotic Vaccine (5%), Deep Ore Scanner (4%), Extractor (3%)
- **Desert** (+10 items): Heat Resist module (7%), Exposure Resist module (6%), Module Alpha (4%), Tech Backpack (5%), O2 Tank (5%), Antibiotic Vaccine Charlie (4%), Extractor (4%), Deep Ore Scanner (4%), Creature Scanner (3%), Dropship Beacon (3%)

**Boss Loot (+7 each, matching inhaler + thematic gear):**
- **Alpha Wolf:** AlphaWolf Inhaler (15%), Animal Healthbar/Highlighting (8%), Hunter's Backpack (5%), Movement module (4%)
- **Scorpion:** Scorpion Inhaler (15%), Poison Resist (8%), Heat Resist (6%), Antipoison Vaccines (3-6%), Tech Backpack (4%)
- **Slug:** Hammerhead Inhaler (15%), Caving module (8%), Night Vision (6%), Mining Backpack (5%), Highlight module (5%)
- **Ice Mammoth:** IceMammoth Inhaler (15%), Cold Resist (8%), Temperature (6%), Explorer's Backpack (5%), Heated Canteen (6%), Extremes module (5%)
- **Rock Golem:** RockGolem Inhaler (15%), Fire Resist (6%), Deep Ore Scanner (6%), Mining Backpack (6%), Extractor (5%), Carry Weight (6%), Item Wear (4%)
- **Ape:** SwampApe Inhaler (15%), Poison Resist (6%), Melee module (6%), Medic Backpack (5%), Stamina Regen (5%), Wounds module (5%)
- **Sandworm:** Sandworm Inhaler (15%), Heat/Exposure Resist (6%), Tech Backpack (4%), Antipoison Charlie (4%), Module Alpha (3%), Dropship Beacon (4%)

**Exotic Creatures** (+3 items): Movement module (5%), Repair Kit (4%), Shengong Bandage (3%)

**Full Map Coverage — 12 previously missing prospects added:**
- **Open World:** Prometheus and Styx now get hardcore storms, durability bonuses, XP bonuses, and limited lives
- **Outposts:** All 10 Outpost missions (Forest, Arctic, Desert, IceVolcano, Olympus, 012) now get full hardcore stats including limited lives
- **Spawn Zone:** PRO_Volcanic_SulfurPools added with +50% density
- Open World and Outposts are persistent — running out of lives sends you back to the station, but your world and progress are preserved

### v1.6 - Wall Attack Fix (Blueprint Override)

**Animals Can No Longer Attack Through Walls:**
- Zeroed `AutoSuccessRangeFromLastSeenLocation` in `BP_IcarusNPCGOAPController` — the root cause of animals detecting and attacking players through building walls
- Vanilla had this set to 350 units, allowing AI to skip line-of-sight checks within that range of where they last saw you
- Now ALL creature detection requires actual line of sight — no more bears mauling you through stone walls
- Blueprint override delivered via EXMODZ

### v1.5 - Harder AND More Rewarding

**Level Cap 170 (PAK mod):**
- Talent points scale to 280 (all 280 talents unlockable)
- Blueprint points scale to 586 (all 586 blueprints unlockable)
- Solo talent points scale to 135 (all prospect talents unlockable)
- Binary UE4 growth curves modified via pak file override
- Set MaxDisplayLevel to 170 via D_CharacterGrowth

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
**167 prospects modified with tiered respawn limits** (all missions, Open World, and Outposts):

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
- +50% spawn density across 161 zones
- +60% autonomous spawns (22 entries)
- +60% horde wave intensity (21 entries)
- -40% storm safe time (109 weather events)
- Halved decay timers (32 entries)
- Halved fuel burn times (4 entries)

## Data Tables Modified (11)

| Table | Entries | Description |
|-------|---------|-------------|
| AI-D_AISpawnZones | 161 | +50% spawn weights + 255 alpha hunter spawn points |
| AI-D_AutonomousSpawns | 22 | +60% world spawns |
| AI-D_EpicCreatures | 12 | 12 alpha hunter variants |
| Items-D_ItemRewards | 12 | 4 new + 8 enhanced loot tables |
| Horde-D_HordeWave | 21 | +60% horde intensity |
| Weather-D_WeatherEvents | 109 | -40% storm safe duration |
| Traits-D_Decayable | 32 | Halved decay timers |
| Traits-D_Combustible | 4 | Halved fuel burn |
| Stats-D_ProspectStats | 20 | Difficulty modifiers, storms, XP, durability, survival pressure, respawn penalties |
| Prospects-D_ProspectList | 167 | Timer reductions + limited lives + new stat assignments |
| Experience-D_ExperienceEvents | 111 | +50% kill XP |

**Total: 671 modified entries across 11 data tables + 3 binary curve overrides + 2 blueprint overrides**

## PAK File Contents

The included `Hardcore_Rebalance_Pack_P.pak` overrides binary UE4 assets:

| Asset | Change |
|-------|--------|
| C_PlayerTalentGrowth | Level 60→170 cap, 90→280 total talent points |
| C_PlayerBlueprintGrowth | Level 51→170 cap, 179→586 total blueprint points |
| C_SoloTalentGrowth | Level 60→170 cap, 30→135 total solo talent points |
| BP_IcarusNPCGOAPController | AutoSuccessRangeFromLastSeenLocation: 350→0 (wall-attack fix) |
| BP_IcarusGOAPMotivation_Enraged | CombatSecondsUntilMaximum: 15→5, DefaultCooldownTime: 45→10 |

## Blueprint Overrides

The PAK includes modified AI blueprints:

| Blueprint | Property | Vanilla | Modded | Effect |
|-----------|----------|---------|--------|--------|
| BP_IcarusNPCGOAPController | AutoSuccessRangeFromLastSeenLocation | 350 | **0** | Creatures must have line of sight to detect players |
| BP_IcarusGOAPMotivation_Enraged | CombatSecondsUntilMaximum | 15 | **5** | Creatures enrage 3x faster in combat |
| BP_IcarusGOAPMotivation_Enraged | DefaultCooldownTime | 45 | **10** | Enrage lasts much longer before wearing off |

## Installation

1. Install JimK72's Icarus Mod Manager
2. Import the `.EXMODZ` file in your Mod Manager
3. Place `Hardcore_Rebalance_Pack_P.pak` in your Icarus mods folder:
   `<Icarus Install>/Icarus/Content/Paks/mods/`
4. Enable the EXMOD and launch Icarus

**Both the EXMOD and PAK are required for full functionality.**

## Compatibility

Modifies spawn zones, creature definitions, loot tables, weather, decay, fuel, difficulty stats, mission timers/difficulty, XP events, and AI perception. May conflict with other mods touching the same tables or BP_IcarusNPCGOAPController.
