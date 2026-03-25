# No Food Spoilage

![Version](https://img.shields.io/badge/version-2.0-blue)
![Author](https://img.shields.io/badge/author-AgentKush-green)

Prevents all food items and volatile substances from spoiling across 33 decayable entries. Items decay normally but never convert to spoiled versions. Includes composter recipes so raw foods can still be manually composted.

## Features

- **33 decay types modified** — All decay types have SpoilTime set to 0 and SpoiledItem set to None
- **134 composter recipes** — Manually compost raw foods via the Composter station
  - 15 raw meats (Raw_Meat, Raw_Chicken, Raw_Fish, Raw_Bacon, all meat variants)
  - 76 whole fish (Fish_01–Fish_19 with Var2/Var3/Var4 variants)
  - 3 fish products (Fish_Chunks, Freshwater/Saltwater Fish Fillet)
  - 7 dairy/animal products (Cream, Egg, Milk, Butter, Cheese, Honey, Honeycomb)
  - 32 vegetables/fruits (Squash, Corn, Pumpkin, Carrot, Potato, Berries, Banana, Avocado, Tomato, Strawberry, and more)
  - 1 other (Bait)
- Volatile Substance decay also disabled

## Changelog
### v2.0 (2026-03-26)
- **Fixed composter bug** — Composter recipes were missing from the EXMOD, causing items to sit in the composter without processing ([#2](https://github.com/AgentKush/Icarus-mods/issues/2))
- Added 134 composter recipes to D_ProcessorRecipes for manual composting
- Raw meats and fish → Spoiled_Meat, vegetables/fruits → Spoiled_Plants
- Added dairy/animal products (Cream, Egg, Milk, Butter, Cheese, Honey, Honeycomb)
- Added missing fruits/vegetables (Avocado, Bramble, Kiwi_Fruit, Rhubarb, Strawberry, Sugar_Cane, Tomato, Truffle, Yeast)

### v1.9
- Added 11 new decay entries from Dangerous Horizons update

### v1.8 (2026-03-08)
- Corrected Spoil_ composter recipes: now only covers raw meat and raw fish items
- Removed incorrect composter entries for tonics, bandages, cooked foods, etc.

### v1.7 (2026-03-08)
- Added 238 missing Spoil_ composter recipes for DLC foods/tonics/consumables

### v1.6 (2026-03-08)
- Added Decay_General and Decay_MetaItem for full coverage

### v1.5
- Verified all 20 decay types are current with latest game data

### v1.4
- Previous release with 85 composter recipes

### v1.3
- Added composter recipes for fish variants

### v1.0
- Initial release
