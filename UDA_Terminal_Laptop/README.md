<div align="center">

# UDA Terminal Laptop

[![Version](https://img.shields.io/badge/v1.2-Version-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=github&logoColor=white)]()
[![Author](https://img.shields.io/badge/AgentKush-Author-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=steam&logoColor=white)]()
[![Type](https://img.shields.io/badge/EXMOD-Type-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=databricks&logoColor=white)]()
[![Compatibility](https://img.shields.io/badge/All%20DLCs-Compatibility-0d1117?style=for-the-badge&labelColor=1a1e2e&logo=opensourceinitiative&logoColor=white)]()

A craftable laptop for your base. Press to open the **Workshop**. Hold to open the **Orbital Deposit**. No more walking back to the drop tube.

Requires **[JimK72's Icarus Mod Manager](https://github.com/Jimk72/Icarus_Software)**

</div>

---

## Why

The UDA Workshop and Orbital Deposit are normally only accessible at the orbital drop tube — meaning if you've trekked across half the map and want to send a kit up or buy something, you have to hike all the way back. The laptop puts those screens on a deployable you can park anywhere in your base.

## Features

- **Craftable indoor terminal** that plugs into the existing UDA workshop and orbital deposit screens
- **Press F** → Open **Workshop** (buy items, browse blueprints)
- **Hold F** → Open **Orbital Deposit** (send unopened kits and items back to space)
- **Hold Y** (AltHold) → Pickup the laptop to move it
- **Pure data-table mod** — no PAK file, no Blueprint asset. Reuses vanilla `BP_Interactable_MetaShop` and `BP_Interactable_SpaceInventory` behaviours that already ship with the game.
- Pairs perfectly with **Resource_Repacker** (repack ore at any bench → walk to the laptop → ship it up).

## How It Works

Icarus's interaction system is fully data-table-driven. Every interactable item has a trait that says "on Press, run these D_Interactions Behaviours; on Hold, run these others; on AltHold, these." Vanilla already exposes the workshop and orbital screens as standalone client-only Behaviour Blueprints (`BP_Interactable_MetaShop_C` and `BP_Interactable_SpaceInventory_C`). All the mod does is wire those into a custom Interactable trait on a new craftable laptop deployable.

The laptop's visual is the existing `BP_Prop_Laptop_A` blueprint and the in-game laptop static mesh. No custom assets shipped.

## Crafting Recipe

Crafted at the **Fabricator** or **Manufacturer**.

| Material | Quantity |
|----------|----------|
| Steel Ingot | 5 |
| Electronics | 5 |
| Glass | 3 |
| Epoxy | 2 |

## Installation

1. Download `UDA_Terminal_Laptop.EXMODZ`
2. Import into **Icarus Mod Manager** (JimK72's IMM)
3. Enable and merge mods as usual

## Implementation Note

v1.0 used `BP_Prop_Laptop_A_C` for the deployable blueprint, but that's a static-prop blueprint and doesn't accept player placement (the bug eifelyeti hit: "no preview when trying to place"). v1.1 switches to `BP_Terminal_C` — the same blueprint vanilla uses for `Collectable_Laptop`, which is the only player-placeable laptop in the base game. That fixes placement and pairs cleanly with the data-driven Interactable trait that opens the workshop.

## Tips

- Place it on a desk or shelf for the proper "indoor command centre" vibe.
- Pickup is on **AltHold (Y)** specifically because Press is reserved for opening the Workshop. Don't forget — otherwise it's stuck where you put it.
- If you also have **Resource_Repacker** installed, your full base loop becomes: mine → walk to bench → repack → walk to laptop → ship up.

## Changelog

### v1.2
- **Fix:** Laptop now actually deploys (the placement ghost appears) and Press=Workshop / Hold=Orbital Deposit fire. v1.1's `BP_Terminal_C` is a lore-note blueprint that overrides `Deployable_Interact`, which blocked the placement preview and the custom interactions. v1.2 uses `BP_Deer_Trophy_C` — the generic deployable the vanilla collectable laptop uses — which is player-placeable and honours the data-driven Interactable trait.

### v1.1
- **Fix**: laptop now actually places in the world. v1.0 used `BP_Prop_Laptop_A_C` which is a static prop and doesn't accept player placement (no preview ghost would appear). v1.1 uses `BP_Terminal_C` (the vanilla placeable-laptop blueprint) plus the matching mesh and snap/offset values cloned from `Collectable_Laptop`.

### v1.0
- Initial release
- 7 data tables added: D_Itemable, D_Meshable, D_Interactable, D_DeployableSetup, D_ItemsStatic, D_ItemTemplate, D_ProcessorRecipes
- All assets reused from vanilla — no PAK file required

---

<div align="center">

**Made by AgentKush** · [All Mods](https://github.com/AgentKush/Icarus-mods) · [Report a Bug](https://github.com/AgentKush/Icarus-mods/issues) · [Mod Manager](https://github.com/Jimk72/Icarus_Software)

*All mods are free. If you enjoy them, leave a star on the repo!*

</div>
