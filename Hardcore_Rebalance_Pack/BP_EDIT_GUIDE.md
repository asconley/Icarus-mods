# BP_IcarusNPCGOAPController — Manual Edit Guide

This guide covers editing the AI perception values inside `BP_IcarusNPCGOAPController.uasset` to recover the 3 stats that the engine refuses via `WorldStats` enums (sight radius, hearing range, and — to a lesser extent — damage sensitivity).

The edit is done **once** in UAssetGUI; the resulting `.uasset` + `.uexp` go into `Hardcore_Rebalance_Pack/BP/AI/GOAP/` and replace the existing pair we already ship. Because every NPC controller in the game inherits from this BP, the change cascades to all creatures with no per-creature work.

## Vanilla values (confirmed from extracted JSON)

| Component | Property | Vanilla Value |
|---|---|---|
| Vision Config (`AISenseConfig_Sight`) | SightRadius | **10000.0** |
| Vision Config (`AISenseConfig_Sight`) | LoseSightRadius | **135000.0** |
| Vision Config (`AISenseConfig_Sight`) | AutoSuccessRangeFromLastSeenLocation | 350.0 |
| Sound Config (`AISenseConfig_Hearing`) | HearingRange | **15000.0** |
| Damage Config (`AISenseConfig_Damage`) | (defaults — no override) | — |
| Touch Config (`AISenseConfig_Touch`) | bStartsEnabled | false |

There is **no** melee-damage value on this controller — damage lives on the per-creature attack montages, which is why we leave that to `WorldNPCMeleeAttack_+%` (already at 65/80).

## Target values

Hardcore Rebalance Pack only has Hard and Extreme tiers (Easy/Medium are vanilla-equivalent for AI perception). One BP can only carry one set of values, so we ship the **Extreme** numbers — Hard difficulty users keep vanilla AI senses, which matches the existing pattern where Extreme is the "real" difficulty.

| Property | Vanilla | Extreme (HRP) | Reasoning |
|---|---|---|---|
| SightRadius | 10000 | **17000** | +70% — matches `WorldNPCAggressivePerceptionRadius_+%` boost |
| LoseSightRadius | 135000 | **180000** | +33% — keeps the ratio sane so NPCs don't hyper-stalk forever |
| HearingRange | 15000 | **25500** | +70% — matches the perception-radius theme |
| AutoSuccessRangeFromLastSeenLocation | 350 | 350 | leave alone |

(Numbers are sane multiplicative bumps; tune in playtest before locking in.)

## UAssetGUI walkthrough

1. **Install UAssetGUI** if you don't have it: https://github.com/atenfyr/UAssetGUI/releases
2. Set the engine version: `File → Engine Version → VER_UE4_27` (Icarus is on UE4.27).
3. Set the mappings file (recommended for safety):
   - Grab the mappings from the Icarus modding Discord (the `.usmap` file the community uses), or from the FModel project for Icarus.
   - `File → Mappings → Browse...` and point at it.
4. **Open the file** from the Mod Manager's extracted/installed mods folder the modmanager merges from the extracted location, so that's what we need to edit and re-pack):
   `File → Open → <ModManager extracted mods folder>\Hardcore_Rebalance_Pack\BP\AI\GOAP\BP_IcarusNPCGOAPController.uasset`

   Typical locations for JimK72's Mod Manager extracted mods (check whichever one exists on your install):
   - `%LOCALAPPDATA%\Icarus\Saved\Mods\Hardcore_Rebalance_Pack\BP\AI\GOAP\BP_IcarusNPCGOAPController.uasset`
   - `Documents\My Games\Icarus\Saved\Mods\Hardcore_Rebalance_Pack\BP\AI\GOAP\BP_IcarusNPCGOAPController.uasset`
   - Or whatever path Mod Manager points to under "Mods folder" in its settings.

   If you edit the GitHub copy by mistake, the in-game mod won't change until you re-pack the EXMODZ and re-install through Mod Manager — editing the extracted copy directly is faster for iteration.
5. In the left pane, expand **Export Data**.
6. Find the export named **`Vision Config`** (it's the `AISenseConfig_Sight` instance, around export index 15).
7. In the right-hand property grid, edit:
   - `SightRadius` → `17000.0`
   - `LoseSightRadius` → `180000.0`
8. Find the export named **`Sound Config`** (`AISenseConfig_Hearing`, around export index 13).
9. Edit `HearingRange` → `25500.0`
10. `File → Save` (NOT Save As — keep the same path so the `.uexp` is regenerated alongside).
11. Verify both `BP_IcarusNPCGOAPController.uasset` AND `BP_IcarusNPCGOAPController.uexp` updated their modified timestamps.

## After saving

1. Re-run the EXMODZ packager so the new BP gets bundled into the zip:
   - Source: `Hardcore_Rebalance_Pack/Hardcore_Rebalance_Pack.EXMOD`, `README.md`, `Banner.png`, `BP/**`
   - Output: `Hardcore_Rebalance_Pack/Hardcore_Rebalance_Pack.EXMODZ`
2. Drop into Mod Manager, enable on a **new** prospect (BP defaults don't hot-reload on existing saves), and verify:
   - Wolves spot you from noticeably farther
   - Bears wake to a single arrow hit from across a clearing
   - NPCs do NOT chase forever (LoseSightRadius cap working)
3. If anything feels off, re-open the BP and dial back. The vanilla values are noted above for easy revert.

## Why we can't script this

The values live in serialized property tags inside the `.uexp` binary alongside hashes/offsets that get rewritten when any property changes. Hand-patching the bytes risks corrupting the package summary. UAssetGUI rebuilds the export tables correctly, which is why it's the only safe path without launching the full Unreal Editor.

## Update README + EXMOD after the BP edit

Once the BP is edited and the EXMODZ is rebuilt, append to the v1.17 changelog in `README.md`:

> - **NPC sight radius** boosted via BP override: 10000 → 17000 (Extreme)
> - **NPC hearing range** boosted via BP override: 15000 → 25500 (Extreme)
> - **NPC LoseSight radius** raised to 180000 to keep aggression durations balanced

No EXMOD JSON edit needed — the BP override is a separate file inside the EXMODZ, not a data table row.
