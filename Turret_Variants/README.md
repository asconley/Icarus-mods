<div align="center">

# Turret Variants

[![Version](https://img.shields.io/badge/v3.1-Version-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=github&logoColor=white)]()
[![Author](https://img.shields.io/badge/AgentKush-Author-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=steam&logoColor=white)]()
[![Type](https://img.shields.io/badge/PAK%20%2B%20EXMOD-Type-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=unrealengine&logoColor=white)]()
[![Compatibility](https://img.shields.io/badge/All%20DLCs-Compatibility-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=opensourceinitiative&logoColor=white)]()

15 new automated turret variants with unique firing patterns

Requires **[JimK72's Icarus Mod Manager](https://github.com/Jimk72/Icarus_Software)**

</div>

---

## v3.0 Changes — LOS Fix + Proper Ammo Types

### LOS Fix (PAK mod)
Turrets no longer shoot through walls, terrain, and building pieces. The fix patches the AI perception system (`BP_ProxyPerceptionPawn`) to:
- Remove the 25% grace radius that kept targets "perceived" after breaking line of sight
- Tighten the vision cone from 120° to 90° to reduce blind-spot detections

**Re-patching after game update:** Run `turret_los_patcher.py` after re-exporting game files with FModel.

### Proper Ammo Type Matching
Each turret now accepts only thematically appropriate ammunition:

| Turret | Tier | Ammo Type | Category |
|--------|------|-----------|----------|
| Rock Thrower | Budget | Stone | Rock_Golem_Gun |
| Bow | Budget | Arrows (36 types) | AllArrows |
| Crossbow | Budget | Bolts (18 types) | AllBolts |
| Rapid Crossbow | Budget | Bolts (18 types) | AllBolts |
| Pistol | Budget | 9mm Rounds | AllPistol |
| SMG | Budget | 9mm Rounds | AllSubmachineGuns |
| Assault Rifle | Mid | 5.56mm Rounds | AllAssaultRifle |
| Storm | Mid | 5.56mm Rounds | AllAssaultRifle |
| Rifle | Mid | 7.62mm Rounds | AllRifle |
| Minigun | Mid | 7.62mm Rounds | AllRifle |
| Javelin | Mid | Javelins/Spears (16 types) | AllJavelins |
| Sniper | Late | 12.7mm Rounds | AllSnipers |
| Heavy Sniper | Late | 12.7mm Rounds | AllSnipers |
| Shotblaster | Mid | 12-Gauge Shells | AllShotgun |
| Flamethrower | Late | Biofuel | BioFuel |

## Installation

### EXMOD (data tables — required)
Install via JimK72's Mod Manager or extract `Turret_Variants.EXMODZ`.

### PAK (LOS fix — optional but recommended)
Copy `Turret_Variants_LOS_Fix_P.pak` to:
```
<Game Install>\Icarus\Content\Paks\mods\
```

## Budget Turrets (Steel-tier crafting)
- **Rock Thrower** — Single shot, wide spread. Range: 40m. Ammo: Stone
- **Bow** — Single shot, wide arc. Range: 60m. Ammo: Arrows
- **Crossbow** — Single shot, high accuracy. Range: 55m. Ammo: Bolts
- **Rapid Crossbow** — 3-shot bursts, fast reload. Range: 45m. Ammo: Bolts
- **Pistol** — 3-round bursts, wide arc. Range: 40m. Ammo: 9mm Rounds
- **SMG** — 8-round bursts, wide arc. Range: 35m. Ammo: 9mm Rounds

## Mid/Late Game Turrets (Titanium-tier crafting)
- **Assault Rifle** — 5-round bursts, fast tracking. Range: 50m. Ammo: 5.56mm Rounds
- **Storm** — 12-round storms, extreme rate. Range: 40m. Ammo: 5.56mm Rounds
- **Rifle** — 3-round bursts, high accuracy. Range: 75m. Ammo: 7.62mm Rounds
- **Minigun** — 20-round bursts, extreme fire rate. Range: 45m. Ammo: 7.62mm Rounds
- **Javelin** — Single shot, high damage. Range: 70m. Ammo: Javelins/Spears
- **Sniper** — Extreme range, pinpoint accuracy. Range: 100m. Ammo: 12.7mm Rounds
- **Heavy Sniper** — Single shot, max range. Range: 150m. Ammo: 12.7mm Rounds
- **Shotblaster** — 2-shot burst, massive spread. Range: 25m. Ammo: 12-Gauge Shells
- **Flamethrower** — 40-shot stream, area denial. Range: 15m. Ammo: Biofuel

## Version History
- **v3.1** - Crash fix: Fixed 15 recipe outputs from D_ItemsStatic to D_ItemTemplate (prevents crash when opening crafting stations).
- **v3.0** — LOS fix PAK (turrets stop shooting through walls) + proper ammo type matching (arrows, bolts, javelins, stones, biofuel) + updated descriptions
- **v2.5** — Hammer repairable turrets (custom Turret_Repairable D_Durable entry)
- **v2.4** — Fixed backwards shooting (_C class suffix fix) + reduced yaw/pitch extents
- **v2.3** — Fixed broken crafting recipes
- **v2.2** — Tightened targeting parameters
- **v2.1** — Initial 15-variant release

## Data Tables Modified
- D_Turret (15 entries)
- D_DeployableSetup (15 entries)
- D_Deployable (15 entries)
- D_ItemsStatic (15 entries)
- D_Itemable (15 entries)
- D_ItemTemplate (15 entries)
- D_Talents (15 entries)
- D_ProcessorRecipes (15 entries)
- D_Durable (1 entry)

## Files
- `Turret_Variants.EXMOD` — Data table modifications
- `Turret_Variants.EXMODZ` — Packaged for Mod Manager
- `Turret_Variants_LOS_Fix_P.pak` — Blueprint patch for LOS validation
- `turret_los_patcher.py` — Auto-patcher script (re-run after game updates)
---

<div align="center">

**Made by AgentKush** · [All Mods](https://github.com/AgentKush/Icarus-mods) · [Report a Bug](https://github.com/AgentKush/Icarus-mods/issues) · [Mod Manager](https://github.com/Jimk72/Icarus_Software)

*All mods are free. If you enjoy them, leave a star on the repo!*

</div>
