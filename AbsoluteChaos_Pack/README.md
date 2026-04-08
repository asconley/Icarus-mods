# Absolute Chaos — The Full Modpack

An Icarus modpack that takes the game to its absolute limit. Godmode crafting, infinite durability, zero consumption, instant processing, auto defenses, free workshop, mountable bears, elevators, teleporters, and every chaos lever the game engine will tolerate — bundled across four layers so weekly Icarus updates can't break everything at once.

This is a **meta-pack / install guide**, not a single EXMOD. It documents every mod in the Absolute Chaos experience, how to install them, in what order, and how to resolve conflicts. Run the included `download_public_mods.ps1` to auto-fetch the public companion mods.

---

## Quick start

1. Clone or download this repo (`AgentKush/Icarus-mods`).
2. Open a PowerShell window in `AbsoluteChaos_Pack/` and run:
   ```powershell
   .\download_public_mods.ps1
   ```
   This grabs every fetchable public mod into `AbsoluteChaos_Pack/public/`.
3. Nexus mods have to be grabbed by hand (they're listed below). Drop the downloaded EXMODZ files into `AbsoluteChaos_Pack/public/` so everything lives in one place.
4. Open JimK72's Icarus Mod Manager, click **Import Mod**, and import every `.EXMODZ` file from:
   - `AgentKush/Icarus-mods/AbsoluteChaos_Core/`
   - All the other `AgentKush/Icarus-mods/*` mods listed in the "AgentKush companion stack" section
   - `AbsoluteChaos_Pack/public/` (public mods)
5. In IMM's enable order (top = loaded first, bottom = loaded last), follow the **Load order** section below. AbsoluteChaos_Core must be last.
6. Click **Build Mods**, launch Icarus, and watch the world explode.

---

## Architecture — four layers

```
┌───────────────────────────────────────────────────┐
│  AbsoluteChaos_Pack  (THIS FOLDER — install guide)│
│  Not an EXMOD. Meta-layer: manifest + downloader  │
│  + README that tells you what to install.         │
└───────────────────────────────────────────────────┘
        ▲              ▲              ▲
        │              │              │
┌───────┴──────┐ ┌──────┴────┐ ┌───────┴──────────┐
│AbsoluteChaos │ │ Tier      │ │ AbsoluteChaos    │
│_Core  v0.2   │ │(pick one) │ │ _Blueprint       │
│              │ │ _Mild     │ │ (deferred v2)    │
│ always on    │ │ _Chaos ◀  │ │ auto-farms,      │
│ 76 stats     │ │ _Absolute │ │ prefab base kit, │
│ 335 workshop │ │           │ │ monster spawner  │
│ items free   │ │           │ │ toggle menu      │
└──────────────┘ └───────────┘ └──────────────────┘
```

### Layer 1 — AbsoluteChaos_Core (always on)

Owns the chaos levers no other mod covers cleanly. Single-row override of `D_CharacterStartingStats.Base_Stats` with 76 verified stat keys plus a complete zero-cost rewrite of every vanilla workshop item.

See [`../AbsoluteChaos_Core/README.md`](../AbsoluteChaos_Core/README.md) for the full stat list.

### Layer 2 — Tier variants (pick exactly one)

| Setting | Mild | **Chaos (default)** | Absolute |
|---|---|---|---|
| Processor/craft speed | 5× | 25× | Instant (0.01 s) |
| Resource costs | 25 % | 10 % | 0 |
| Stack sizes | 10× | 100× | 9999 |
| Tool durability | 10× | 10 000× | int max |
| Carry weight | 1000 kg | 5000 kg | 99999 kg |
| Decay rates | 0.1× | 0.01× | 0 |
| Workshop costs | 50 % | 10 % | 0 |
| XP / loot drops | 2× | 10× | 25× |
| Fall damage | On | Off | Off |
| Player speed | 1.25× | 1.5× | 2× |
| Status | planned v0.3 | **Core default** | planned v0.3 |

Currently Core ships the Chaos-tier numbers as defaults. `_Mild` and `_Absolute` variants are generated from Core via `mod-variant-generator` in v0.3.

### Layer 3 — AbsoluteChaos_Blueprint (deferred to v2)

The flashy custom-actor stuff: auto-farm deployable, prefab base kit (unfolds a pre-built structure on use), monster spawner kit, in-game chaos toggle menu. Deferred because blueprint mods break on weekly Icarus updates and must use AssetCopy patches to survive. See `AbsoluteChaos_Research.md` in `Mods of ICARUS` for the feasibility notes.

### Layer 4 — AbsoluteChaos_Pack (this folder)

Manifest, downloader, install guide. Not a mod.

---

## Every mod in the pack

### AgentKush companion stack (from this repo)

Twelve of my existing mods layer under Core to provide the levers Core doesn't touch. Install all of them alongside Core for the full experience.

| # | Mod | Version | Role | Tables |
|---|---|---|---|---|
| 1 | **AbsoluteChaos_Core** | 0.2 | Base layer: player stats + free workshop + chaos tab | D_CharacterStartingStats, D_WorkshopItems, D_TalentArchetypes, D_TalentTrees |
| 2 | **FastProcessing_Instant** | 4.7 | All 2171 processor recipes → instant | D_ProcessorRecipes |
| 3 | **Stack_Size_Overhaul** | 1.2 | 5× resource stacks, 3× everything else (1232 items) | D_Itemable |
| 4 | **Indestructible_Tools_Weapons** | 1.7 | 12.7 M durability on 100+ tools/weapons | D_Durable |
| 5 | **No_Food_Spoilage** | 2.0 | Food decays to nothing instead of spoiling (33 decay types) | D_Decayable, D_ProcessorRecipes |
| 6 | **Creature_Drop_Enhancer** | 1.0 | 2× butchery/skinning outputs (62 recipes) | D_ProcessorRecipes |
| 7 | **Modular_Affliction_Adjuster** | 2.0 | ~50 % weakened afflictions (80+ states) | D_ModifierStates |
| 8 | **Modular_Buff_Enhancer** | 1.1 | ~50 % boosted buffs (239 states) | D_ModifierStates |
| 9 | **Agents_Individual_Item_Kits** | 3.1 | 2056 individual item kits purchasable in workshop | D_ItemsStatic, D_WorkshopItems |
| 10 | **Hidden_Building_Pieces** | 3.0.0 | Unlocks 60 hidden building pieces | D_Meshable, D_Itemable |
| 11 | **Dev_Tools_Kit** | 1.1.2 | Unlocks the hidden developer tool set | D_TalentArchetypes, D_TalentTrees, D_Itemable, D_ItemsStatic |
| 12 | **Fish_Farming_Boost** | 1.1 | 2× crop growth, +50 % harvest (335 entries) | D_FarmingGrowthStates |

Optional additions from this repo that fit the chaos theme but aren't core to the pack: `Hardcore_Rebalance_Pack` (boss spawns), `Creature_Difficulty_Scaling` (Level 500), `Tier_Upgrade_Forge`, `Turret_Variants`, `Workshop_Recyclers`, `NightVisionGoggles`, `Waste_Not`, `Performance_Optimizer`.

### JimK72 (from github.com/Jimk72/Icarus_Mods — auto-fetched)

| Mod | Size | Role | Notes |
|---|---|---|---|
| **All_Ammo_Turret** | 6.3 MB | Auto-defense | Turret that accepts every ammo type — grinds creatures for XP/loot. Proves auto monster farms are reachable. |
| **Bear_Mount** | 2.7 MB | Custom mount | Ride a bear. On-brand chaos. |
| **Building_Height_Strength** | 1.0 MB | Building chaos | Dramatically increases max build height + stability. |
| **Elevators** | 14 MB | Building chaos | Functioning elevators. Massive QoL for tall bases. |
| **Battery_Powered_Storage** | 538 KB | QoL storage | Upgrade chests with power. |
| **Camera_Distance** | 2.5 MB | QoL camera | Extended view/camera distance. |
| **Better_Lights** | 99 KB | QoL lighting | Better light sources (fetched — verified working). |
| **Better_Pistol_Turret** | 25 KB | Auto-defense | Buffed pistol turret (fetched — verified working). |
| **Extraction_5_Seconds** | 152 KB | Chaos extraction | Prospect extraction timer → 5 s (fetched — verified working). |

The downloader script fetches all of the above into `public/` plus any others you add to `manifest.json`. Swap `Extraction_5_Seconds` for `Extraction_10_Seconds` if you want the Mild-tier variant.

### laanp Combined QOL (from github.com/laanp/Icarus_Mods — auto-fetched from latest release)

A single 12 MB combined `_P.pak` bundle that ships weekly matching the current Icarus week number. The downloader script hits `/releases/latest` so you always get the version matching your game build. What's inside:

- 5000 kg player carry weight
- 10 million durability on all tools
- No fall damage
- Custom "Pete's Starter Loadout Kit" and "Pete's Resource Killer" module
- Immunity to lava, fire, poison, and cave pneumonia
- 500-item slot stack sizes
- Boosted stamina, speed, health
- **Bundled:** JimK72 Teleporter (2-way pad + remote), JimK72 Custom Options (in-game toggle menu), JimK72 Clear Photo Lens

This overlaps with Core's player stats — Core wins because it loads last.

### Nexus mods (manual download)

Nexus requires a browser session, so these can't be auto-fetched. Grab them manually and drop into `AbsoluteChaos_Pack/public/`.

| Mod | Nexus link | Role | Conflict |
|---|---|---|---|
| **Ultimate Crafting Freedom** | [#143](https://www.nexusmods.com/icarus/mods/143) | Free + instant + no talent gates. **Recommended baseline.** | Conflicts with FreeBuild — pick one |
| **FreeBuild** | [#7](https://www.nexusmods.com/icarus/mods/7) | Free crafting at all benches. Alternative to Ultimate Crafting Freedom. | Conflicts with Ultimate Crafting Freedom |
| **Zero Cost Crafting** | [#28](https://www.nexusmods.com/icarus/mods/28) | Lighter alternative — zeros input costs only | Conflicts with the other two crafting mods |
| **No Cost Crafting** | [#72](https://www.nexusmods.com/icarus/mods/72) | Minimal 0-cost recipes | Same conflict group |
| **Crafting Cost And Speed Reduction** | [#106](https://www.nexusmods.com/icarus/mods/106) | Tiered 25/50/75/instant — fits the Mild/Chaos/Absolute tier split | Same conflict group |
| **Better Mission Rewards** | Nexus search | Progression | None expected |
| **Better Supplies** | Nexus search | Dropship supplies | None expected |
| **Zen Progression** | Nexus search | Early talent access | None expected |

---

## Load order

In JimK72's Icarus Mod Manager, drag mods into this top-to-bottom order (IMM loads top first, bottom last, and the last load wins conflicts):

```
1.  laanp-Combined_QOL (public pak)
2.  All_Ammo_Turret
3.  Battery_Powered_Storage
4.  Bear_Mount
5.  Better_Lights
6.  Better_Pistol_Turret
7.  Building_Height_Strength
8.  Camera_Distance
9.  Elevators
10. Extraction_5_Seconds
11. Ultimate Crafting Freedom (Nexus)
12. Better Mission Rewards (Nexus)
13. Better Supplies (Nexus)
14. Zen Progression (Nexus)
    ──── public companions above, AgentKush stack below ────
15. Modular_Affliction_Adjuster
16. Modular_Buff_Enhancer
17. Fish_Farming_Boost
18. Creature_Drop_Enhancer
19. Hidden_Building_Pieces
20. Dev_Tools_Kit
21. Agents_Individual_Item_Kits
22. No_Food_Spoilage
23. Stack_Size_Overhaul
24. Indestructible_Tools_Weapons
25. FastProcessing_Instant
    ──── everything above must be under Core ────
26. AbsoluteChaos_Core  ◀ MUST BE LAST
```

Core is last on purpose: its `D_CharacterStartingStats.Base_Stats` override contains numerical values that should win any overlap with laanp Combined QOL or any other mod touching player stats.

---

## Known conflicts

| Mods | Reason | Resolution |
|---|---|---|
| Ultimate Crafting Freedom vs FreeBuild vs Zero Cost Crafting vs No Cost Crafting | All four rewrite `D_ProcessorRecipes` input lists | Enable exactly one. Recommended: Ultimate Crafting Freedom |
| AbsoluteChaos_Core vs laanp Combined QOL | Both edit player base stats | Load Core last — 5000 kg / 600 speed / `HasFallDamageImmunity_?` = 1 wins |
| AbsoluteChaos_Core vs Ultimate Crafting Freedom | Both zero `D_WorkshopItems` costs | Harmless — both set 0, either loads fine |
| FastProcessing_Instant vs Ammo_Crafting_Overhaul | Both touch `D_ProcessorRecipes` for ammo | Load FastProcessing_Instant after Ammo_Crafting_Overhaul, or drop Ammo_Crafting_Overhaul |
| Creature_Drop_Enhancer vs Creature_Difficulty_Scaling | Both affect creature output | Actually complementary — drops + difficulty stack fine |

Run `mod-conflict-detector` across your final enabled set before each major play session — it'll flag any new overlaps introduced by weekly Icarus updates.

---

## What's missing / coming in v0.3+

- **AbsoluteChaos_Mild** and **AbsoluteChaos_Absolute** tier variants (currently Core ships with Chaos-tier defaults only).
- **Chaos Kits** populated in the "Absolute Chaos" workshop tab — starter loadout, chaos tool kit, auto-farm placer, monster spawner kit, prefab base kit.
- **Building decay off** — not currently touched by Core; needs investigation to find the right data table (it isn't in `D_Buildable`).
- **In-game toggle menu** — modeled on JimK72's Custom Options. v2 blueprint-layer work.
- **Save-a-structure-as-blueprint** feature — researched and determined infeasible with current Icarus modding capabilities. Replaced by the prefab base kit deployable concept planned for v2.

---

## Credits

- **AgentKush** — Core, tier variants, Pack, all 35+ standalone companion mods
- **JimK72** — Icarus Mod Manager, Icarus_Software tooling, and the bundled JimK72/Icarus_Mods collection (All_Ammo_Turret, Bear_Mount, Elevators, Building_Height_Strength, Camera_Distance, Better_Lights, Better_Pistol_Turret, Battery_Powered_Storage, Extraction_5_Seconds, Teleporter, Custom Options, Clear Photo Lens)
- **laanp** — Combined QOL bundle and the PetesKit ecosystem
- **Ultimate Crafting Freedom author** — Nexus #143
- **FreeBuild, Zero Cost Crafting, No Cost Crafting, Crafting Cost And Speed Reduction authors** — Nexus community
- **Better Mission Rewards, Better Supplies, Zen Progression authors** — Nexus community
- **ProjectDaedalus** — the data export tooling that made verifying Core's row names possible
- **CrystalFerrai** — alternate IcarusModManager

---

## Troubleshooting

**Game crashes on boot after enabling the pack.** Disable everything, then re-enable bottom-up one mod at a time until it crashes. The last one enabled is the culprit. Usually it's a mod from an old Icarus week that hasn't been updated — check author's repo for a newer build.

**Core numbers don't seem to apply.** Check load order — Core must be the very last enabled mod. Also verify Core v0.2 or later is installed; v0.1 targeted the wrong tables entirely.

**Workshop still shows costs.** Core zeros `ResearchCost` and `ReplicationCost` on all 335 vanilla workshop items, but not on items added by OTHER mods (e.g. Agents_Individual_Item_Kits adds 2056 items that Core doesn't touch). If you want those free too, install Ultimate Crafting Freedom on top — or wait for v0.3 where Core will enumerate additional workshop sources.

**Fall damage still happens.** Core sets three things for fall damage: `BaseMinimumFallDamage_%`: 0, `BaseMaximumFallDamage_%`: 0, and `HasFallDamageImmunity_?`: 1. If fall damage still triggers, the `HasFallDamageImmunity_?` key may not exist in the current game build. Check `Exports/Stats/D_Stats.json` for the current key name.

**Weekly Icarus update broke everything.** Disable everything, update IMM, rebuild mods. Run `game-update-tracker` skill to diff the new game data against the previous week's export. Row names can change; if Core breaks, verify against fresh `Exports/` and bump to v0.3.

---

## Version

AbsoluteChaos_Pack v0.2 · 2026-04-08 · Core v0.2 shipped, tier variants + blueprint layer pending.
