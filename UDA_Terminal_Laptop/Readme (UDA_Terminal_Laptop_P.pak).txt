UDA_Terminal_Laptop_P.pak
----------------------------------------------------------------------
Mod Version: 1.4

Author: AgentKush

Compatible with Icarus: All Weeks

Mod Type: EXMOD

## Description:
A craftable indoor laptop that opens the UDA Workshop and Orbital Deposit screens without needing to walk back to the drop tube.

  - Press F          Open Workshop
  - Hold F           Open Orbital Deposit (send kits back to space)
  - Hold Y (AltHold) Pickup the laptop

Pure data-table mod - no PAK file, no Blueprint asset. Reuses the vanilla BP_Interactable_MetaShop and BP_Interactable_SpaceInventory behaviours that already ship with the game, plus the existing laptop mesh and BP_Prop_Laptop_A actor.

Pairs with Resource_Repacker: mine -> repack at any bench -> walk to laptop -> ship up.

## Crafting Recipe (Fabricator / Manufacturer)
  5 Steel Ingot
  5 Electronics
  3 Glass
  2 Epoxy

Ver 1.4
Fixed the laptop mesh (its meshable name collided with the base game machining mesh) and added the missing D_Deployable row so it places correctly after the June 2026 update.

Ver 1.2
Fix: laptop now actually deploys (placement ghost appears) and Press=Workshop / Hold=Orbital Deposit work. v1.1 used BP_Terminal_C, a lore-note BP that overrides Deployable_Interact and blocked placement. v1.2 uses BP_Deer_Trophy_C (the generic deployable the vanilla collectable laptop uses), which is placeable and honours the data-driven Interactable trait.

Ver 1.1
Fix: laptop now actually places in the world. v1.0 used BP_Prop_Laptop_A_C which is a static prop and doesn't accept player placement (no preview ghost would appear). v1.1 uses BP_Terminal_C (the vanilla placeable-laptop blueprint) plus the matching mesh and snap/offset values cloned from Collectable_Laptop.

Ver 1.0
Initial release. Adds 7 data tables (Itemable, Meshable, Interactable, DeployableSetup, ItemsStatic, ItemTemplate, ProcessorRecipes). No PAK required.

## Files Modified:
  Traits-D_Itemable             (1 entry  - display name + icon + description)
  Traits-D_Meshable             (1 entry  - in-hand and deployable meshes)
  Traits-D_Interactable         (1 entry  - press/hold/altHold wiring)
  Deployables-D_DeployableSetup (1 entry  - deployment metadata + BP path)
  Items-D_ItemsStatic           (1 entry  - the item, with all trait wiring)
  Items-D_ItemTemplate          (1 entry  - recipe-output template)
  Crafting-D_ProcessorRecipes   (1 entry  - Fabricator/Manufacturer recipe)

## Installation:
  1. Install JimK72's Icarus Mod Manager
     https://github.com/jimk72/IcarusModManager
  2. Download UDA_Terminal_Laptop.EXMODZ
  3. Import via Mod Manager

## Note:
This relies on the vanilla BP_Prop_Laptop_A blueprint honouring the data-driven Interactable trait. Almost every other deployable in the game does. If for some reason this prop blueprint is hardcoded as decoration only and ignores the trait, the laptop will deploy but pressing F won't open the Workshop. In that case, please file an issue and we will switch to a deployable BP known to respect traits.

----------------------------------------------------------------------
Made by AgentKush
https://github.com/AgentKush/Icarus-mods
