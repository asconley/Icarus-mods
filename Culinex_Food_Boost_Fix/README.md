# Culinex Food Boost Fix

**Version:** 2.4  
**Author:** AgentKush

## Description

Fixes the Culinex (Chef's Backpack) 25% food effectiveness boost so it actually works when cooking food while wearing the backpack.

The vanilla game gives the Chef's Backpack a 25% cooked food effectiveness bonus, but the devs forgot to hook it up to most food items. This means wearing the backpack while cooking has zero effect on the food's buff strength for nearly every recipe in the game.

This mod fixes **169 food items** so the 25% effectiveness boost from the Chef's Backpack properly applies when you cook while wearing it.

### How It Works
- Equip the Culinex (Chef's) Backpack
- Cook any food while wearing it
- The resulting food will have 25% stronger buff stats
- Also works with Larkwell White Armor set bonus (+20%) — they stack to +45%

### Bonus Feature
- Adds Raw Chicken recipe to the Butchery Bench and Advanced Butchery Bench

## What's Fixed

- 169 food items now properly receive the backpack's 25% cooking boost
- 15 fish-based foods preserve their existing Fish Food talent bonus alongside the backpack boost
- Fruit/vege, dried meat, and smoked meat items preserve their vanilla talent bonuses (FruitAndVege, DriedMeat, etc.) alongside the backpack boost
- Covers all cooked meals, dried/smoked meats, soups, pies, cakes, drinks, and more
- Excludes non-player foods (animal feed, raw/spoiled items)

## Changelog

### v2.4
- Added Food Rating system (S/A/B/C/D) based on stats-per-stomach-slot efficiency
- S ★★★★★ (top 10%) | A ★★★★ (top 30%) | B ★★★ (top 55%) | C ★★ (top 80%) | D ★ (bottom 20%)

### v2.3
- Simplified tooltips: show only boosted values (base stats already visible in yellow section)
- Cleaner format matches yellow stat style: +375 Max Health
- Added missing Thermos Coffee With Cream (player consumable)
- Added Raw Food, Spoiled Meat, and Seed entries
- Added 15 Animal Feeds, 4 Animal Gruels, and Filtered Trough Water
- Mod now covers 189 entries total (up from 169)

### v2.2
- Cleaned up tooltip formatting: em dashes on header, blank line gap between description and backpack stats

### v2.1
- Added Chef's Backpack boosted stats to all food tooltips so you can see the +25% values at a glance

### v2.0
- **Major fix:** Switched from Level2 (field merge) to Level1 (full row replacement) to fix the Culinex boost not applying
- Root cause: most food entries don't have a `ModifierEffectivenessAffectors` field in the game data (it's inherited from defaults), so Level2 merges couldn't add the field — the boost was silently failing on nearly all foods
- Fixed recipe path from `Processors-D_ProcessorRecipes.json` to `Crafting-D_ProcessorRecipes.json`
- Removed 6 banana food entries that no longer exist in the game (Cooked_Banana, Banana_Porridge, Banana_Tart, Banana_Toast, Dried_Banana_Chips, Frozen_Banana)
- Updated all 169 food entries to match current game data

### v1.2
- Added 12 new food items (175 total, up from 163)
- Added 6 banana foods: Cooked Banana, Banana Porridge, Banana Tart, Banana Toast, Dried Banana Chips, Frozen Banana
- Added 6 thermos drinks: Cocoa, Coffee, Green Tea, Honey Tea, Ice Water, Wild Tea
- Fixed 91 items that were losing their vanilla talent bonuses (FruitAndVege, DriedMeat, BaseDriedMeat) — now all items preserve their original talent affectors alongside the Culinex backpack boost

### v1.1
- Rebuilt from current game data (163 foods, up from 158)
- Added 5 missing foods: Fruit Smoothie, Meta Soda, Milk, Strawberry Candy, Watermelon Lollypop
- Fixed fish food items to preserve both Fish Food talent and Cooked Food backpack effectiveness
- Updated description and version

### v1.0
- Initial release with 158 food items
- Added Raw Chicken to Butchery Bench
