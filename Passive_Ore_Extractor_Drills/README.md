# Passive Ore Extractor Drills

**Author:** AgentKush  
**Version:** 7.2  
**Mod Manager:** JimK72's Mod Manager (EXMODZ format)

## Description

23 passive ore extractors — one per ore type. Place anywhere, connect power, load Stone. Uses drill-visual processor for passive mining.

## How It Works

Each machine is dedicated to one ore type. Place it anywhere, connect electricity, load Stone, and it continuously produces ore. 1 Stone per cycle = generous ore output. Load 100 stone and walk away!

## Machines

| Passive Miner | Ore Output | Per Cycle | Energy Cost | Research | Replicate |
|--------------|-----------|-----------|-------------|----------|-----------|
| Passive Iron Miner | Iron | 25x | 2000 MJ | 50 | 25 |
| Passive Copper Miner | Copper | 25x | 2000 MJ | 50 | 25 |
| Passive Coal Miner | Coal | 25x | 2000 MJ | 50 | 25 |
| Passive Stone Miner | Stone | 25x | 2000 MJ | 50 | 25 |
| Passive Oxite Miner | Oxite | 15x | 3000 MJ | 75 | 35 |
| Passive Salt Miner | Salt | 15x | 3000 MJ | 75 | 35 |
| Passive Sulfur Miner | Sulfur | 15x | 3000 MJ | 75 | 35 |
| Passive Gold Miner | Gold | 15x | 3000 MJ | 75 | 35 |
| Passive Silicon Miner | Silicon | 15x | 3000 MJ | 75 | 35 |
| Passive Clay Miner | Clay | 15x | 3000 MJ | 75 | 35 |
| Passive Aluminium Miner | Aluminium | 10x | 5000 MJ | 100 | 50 |
| Passive Titanium Miner | Titanium | 10x | 5000 MJ | 100 | 50 |
| Passive Platinum Miner | Platinum | 10x | 5000 MJ | 100 | 50 |
| Passive Scoria Miner | Scoria | 10x | 5000 MJ | 100 | 50 |
| Passive Obsidian Miner | Obsidian | 10x | 5000 MJ | 100 | 50 |
| Passive Limestone Miner | Limestone | 10x | 5000 MJ | 100 | 50 |
| Passive Lithium Miner | Lithium | 10x | 5000 MJ | 100 | 50 |
| Passive Ruby Miner | Ruby | 5x | 8000 MJ | 150 | 75 |
| Passive Cobalt Miner | Cobalt | 5x | 8000 MJ | 150 | 75 |
| Passive Super Cooled Ice Miner | Super Cooled Ice | 5x | 8000 MJ | 150 | 75 |
| Passive Frozen Wood Miner | Frozen Wood | 5x | 8000 MJ | 150 | 75 |
| Passive Exotic Red Miner | Exotic Red | 5x | 8000 MJ | 150 | 75 |
| Passive Uranium Miner | Uranium | 5x | 8000 MJ | 150 | 75 |

## Installation

1. Install JimK72's Mod Manager
2. Place the `.EXMODZ` file in your Mod Manager mods folder
3. Enable the mod and launch Icarus

## Notes

- All machines are electric-powered (connect to power grid)
- Input: 1 Stone per cycle (cheapest resource, load once and forget)
- AutoSelectRecipe is enabled — auto-picks recipe when Stone is loaded
- ManualActivation — turn on once, runs continuously
- Workshop tab: 'Passive Miners'
- Uses custom BP_PassiveMiner (processor with drill mesh visual)
- Does NOT override any vanilla blueprints — fully compatible with other mods

## Changelog

### v7.2
- Fixed double mesh rendering — removed static mesh from DeployableSM so only the animated skeletal mesh renders

### v7.1
- Fixed broken drill textures — swapped furnace materials to drill materials (M_DEP_DeepMiningDrill_Electric Off/On)
- Fixed sounds — swapped furnace FMOD audio to drill sounds (SFX_DEP_ELECTRIC_DRILL_ACTIVE/STOP)
- Added drill animation — skeletal mesh with Anim_DEP_DeepMiningDrill_Electric_Active
- Fixed power config — MaxMilliwattage set to 2500 (was 125, now matches vanilla Electric Furnace)

### v7.0
- Complete rewrite using BP_PassiveMiner (renamed Electric Furnace with drill mesh swap)
- No longer overrides any vanilla blueprints — unique BP at /Game/BP/.../PassiveMiners/BP_PassiveMiner
- Processor functionality via BP_ResourceNetworkProcessor inheritance (place anywhere, no ore deposit needed)
- 13 name table swaps: mesh, materials, sounds, class name, package path

### v6.0-drill
- Attempted re-parenting drill BP from BP_Drill_Base to BP_ProcessorBase
- Crashed with 'Could not find SuperStruct ActiveStateUpdated' — BP_Drill_Base functions not in BP_ProcessorBase

### v1.0–5.0
- Initial development — experimented with Electric Furnace approach, ore node spawners, and data-only configs
