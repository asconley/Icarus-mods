# Hardcore Rebalance Pack

**Version:** 1.3  
**Author:** AgentKush  
**Mod Manager:** JimK72's Icarus Mod Manager

## Overview

For survivors who think Icarus is too easy. This is a comprehensive hardcore overhaul that touches 10 data tables across spawns, difficulty, missions, weather, decay, and introduces the **Alpha Hunter System** — named boss creatures that roam every biome and drop actual gear when killed. Now with **limited lives** across all difficulty levels.

## What's Changed

### v1.3 - Limited Lives System
**152 missions modified with tiered respawn limits:**

| Difficulty | Lives | Vanilla |
|------------|-------|---------|
| Easy | 3 lives | Unlimited |
| Medium | 1 life | Unlimited |
| Hard | **PERMADEATH** (0 lives) | 3 lives |
| Extreme | **PERMADEATH** (0 lives) | 3 lives |

You die on Hard, you lose the mission. No second chances.

### v1.2 - Alpha Hunter System
**12 New Alpha Hunter Variants** — Named boss creatures with boss map icons, boosted stats, and unique abilities:

**Forest Hunters:**
- Feral Packmaster / Bloodfang Alpha / Shadow Stalker (wolf) — +200% HP, +30% damage, hemorrhage attacks
- Ironhide Mauler / Grizzled Titan / Forest Warden (bear) — +350% HP, +40% damage, 20% physical resist, blunt trauma
- Apex Prowler / Silent Killer (lion) — +250% HP, +35% damage, +20% speed, bleed attacks

**Arctic Hunters:**
- Frostbitten Juggernaut / Glacial Devastator (polar bear) — +400% HP, +50% damage, 30% resist, freeze + blunt trauma
- Blizzard Fang / Icevein Predator / Howling Wraith (wolf) — +300% HP, +35% damage, +25% speed, freeze + hemorrhage
- Tundra Colossus / Permafrost Behemoth (mammoth) — +500% HP, +60% damage, 35% resist, massive blunt trauma

**Desert/Volcanic Hunters:**
- Venomspine Patriarch / Deathsting Overlord (scorpion) — +400% HP, +45% damage, poison sting + slow
- Sandstorm Ravager / Dune Shredder (hyena) — +300% HP, +40% damage, +30% speed, hemorrhage
- Magma Hound / Obsidian Ravager (rockdog) — +350% HP, +45% damage, 25% resist
- Ashen Terror / Sulfur Fiend (batdog) — +300% HP, +40% damage, +25% speed, bleed

**Swamp Hunters:**
- Bog Horror / Deathmaw Lurker (crocodile) — +350% HP, +45% damage, 30% resist, wound attacks
- Thornspine Matriarch / Quillbeast Prime (needler) — +300% HP, +35% melee, +40% projectile damage, deep wound

**4 Tiered Gear Loot Tables:**
- **Forest Tier:** Steel/Platinum tools, Ghillie/Hunter armor, Longbow/Crossbow, 2% legendary chance
- **Arctic Tier:** Platinum/Titanium tools, Fur/Polar Bear armor, Pistols/Rifles, 2% legendary chance
- **Desert/Volcanic Tier:** Titanium tools, CHAC firearms, Obsidian/Scale armor, 3% legendary chance
- **Swamp Tier:** Platinum/Titanium tools, Hunter/Caveworm armor, Compound Bow, 2% legendary chance

**8 Enhanced Boss Loot Tables** — every existing boss now drops weapons, armor, and has a 2-3% legendary weapon chance.

**255 Alpha Spawn Points** injected across 148 zones in all biomes.

### v1.1 - Mission Difficulty
- 6 modified D_ProspectStats entries (difficulty modifiers across Easy/Medium/Hard)
- 155 mission timer reductions (~35% cut across all timed missions)

### v1.0 - Base Hardcore
- +50% spawn density across 160 zones
- +60% autonomous spawns (22 entries)
- +60% horde wave intensity (21 entries)
- -40% storm safe time (109 weather events)
- Halved decay timers (32 entries)
- Halved fuel burn times (4 entries)

## Data Tables Modified (10)

| Table | Entries | Description |
|-------|---------|-------------|
| AI-D_AISpawnZones.json | 160 | +50% spawn weights + 255 alpha hunter spawn points |
| AI-D_AutonomousSpawns.json | 22 | +60% world spawns |
| AI-D_EpicCreatures.json | 12 | 12 new Hunter alpha variants |
| Items-D_ItemRewards.json | 12 | 4 new + 8 enhanced loot tables |
| Horde-D_HordeWave.json | 21 | +60% horde intensity |
| Weather-D_WeatherEvents.json | 109 | -40% storm safe duration |
| Traits-D_Decayable.json | 32 | Halved decay timers |
| Traits-D_Combustible.json | 4 | Halved fuel burn |
| Stats-D_ProspectStats.json | 6 | Brutal difficulty modifiers |
| Prospects-D_ProspectList.json | 155 | ~35% timer reduction + limited lives (152 missions) |

**Total: 533 modified entries across 10 data tables**

## Installation

1. Install JimK72's Icarus Mod Manager
2. Place the `.EXMODZ` file in your Mod Manager mods folder
3. Enable the mod and launch Icarus

## Compatibility

This mod modifies spawn zones, creature definitions, loot tables, weather, decay, fuel, difficulty stats, and mission timers/difficulty settings. It may conflict with other mods that touch the same tables.
