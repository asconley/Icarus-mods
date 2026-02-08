# Agents Optimization Mod

**Version:** 1.2  
**Author:** AgentKush  
**Game:** Icarus  

## Description

Comprehensive performance optimization mod that reduces creature load, slows horde intensity, extends item decay timers, boosts fuel efficiency, adjusts weather storm durations, and biases weather pools toward lighter particle effects.

## Changes (300 Items across 7 Tables)

### AI - Creature Spawns (D_AISpawnZones) - 160 entries
- Reduced SpawnWeight for all creatures by ~40% across all biome zones
- Fewer creatures actively spawning in the world at any time

### AI - Autonomous Spawns (D_AutonomousSpawns) - 22 entries
- MaxSpawnCount reduced by 40%
- MaxDistanceToPlayers reduced by 25%

### Horde Waves (D_HordeWave) - 21 entries
- TotalToSpawn reduced by 40%
- TimeBetweenSpawns increased by 50% (slower spawn rate)
- NumberToSpawnAtATime reduced by 30%

### Weather Events (D_WeatherEvents) - 59 entries
- Tier 0-2 (mild) storms: Duration increased by 30% (more calm weather)
- Tier 5-6 (severe) storms: Duration reduced by 50% (less time in deadly storms)

### Decay Timers (D_Decayable) - 32 entries
- All decay timers doubled (food and items last twice as long)

### Fuel Efficiency (D_Combustible) - 4 entries
- All fuel MillijoulesProvided doubled (fuel lasts twice as long)

### Weather Pool Biasing (D_WeatherPools) - 2 entries
- T0 (light) weather weight boosted 2.5x — more calm/clear periods
- T1 weather weight boosted 2x
- T2 weather weight boosted 1.5x
- T4 (heavy) storm weight halved
- T5 storm weight reduced 70%
- T6 (extreme) storm weight reduced 85%
- Particle-heavy types (embers, acid rain, sand, whiteout, snow, toxic gas) get additional 30% weight reduction
- Applies to All_Weather and All_Weather_MoreLight pools

## Installation

Import `Agents_Optimization_Mod.EXMODZ` using JimK72's Icarus Mod Manager.

## Changelog

### v1.2
- Added D_WeatherPools biasing to reduce heavy particle storm frequency
- Light weather (T0-T1) now heavily favored over severe storms (T5-T6)
- Particle-heavy weather types get additional weight reduction
- 300 items across 7 tables

### v1.1
- Fixed invalid data fields that prevented mod from loading
- Rebuilt using correct game data structures
- Replaced fake BiomeSpawnDensity with actual SpawnWeight reductions
- Removed D_RepGraphClassSettings (no modifiable fields)

### v1.0
- Initial release (broken - used non-existent data fields)
