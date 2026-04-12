No_Food_Spoilage_P.pak
----------------------------------------------------------------------
Mod Version: 2.0

Author: AgentKush

Compatible with Icarus: All Weeks

Mod Type: EXMOD

## Description:
Prevents all food spoilage. Items decay/despawn but never convert to spoiled versions. Covers all 33 decayable entries. Includes composter recipes so raw meats, fish, dairy, vegetables, and fruits can still be manually composted.



Ver 2.1
Crash fix: Fixed 134 recipe outputs from D_ItemsStatic to D_ItemTemplate. Prevents EXCEPTION_ACCESS_VIOLATION when opening crafting stations.
Ver 2.0
Fixed composter bug - Composter recipes were missing from the EXMOD, causing items to sit in the composter without processing ([#2](https://github.com/AgentKush/Icarus-mods/issues/2)). Added 134 composter recipes to D_ProcessorRecipes for manual composting.

Ver 1.9
Added 11 new decay entries from Dangerous Horizons update.

Ver 1.8
Corrected Spoil_ composter recipes: now only covers raw meat and raw fish items. Removed incorrect composter entries for tonics, bandages, cooked foods, etc.

Ver 1.7
Added 238 missing Spoil_ composter recipes for DLC foods/tonics/consumables.

Ver 1.6
Added Decay_General and Decay_MetaItem for full coverage.

Ver 1.5
Verified all 20 decay types are current with latest game data.

Ver 1.4
Previous release with 85 composter recipes.

Ver 1.3
Added composter recipes for fish variants.

Ver 1.0
Initial release.

## Files Modified:
  Traits-D_Decayable          (33 entries)
  Crafting-D_ProcessorRecipes (134 entries)

## Installation:
  1. Install JimK72's Icarus Mod Manager
     https://github.com/jimk72/IcarusModManager
  2. Download No_Food_Spoilage.EXMODZ
  3. Import via Mod Manager

----------------------------------------------------------------------
Made by AgentKush
https://github.com/AgentKush/Icarus-mods