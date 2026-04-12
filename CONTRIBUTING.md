# Contributing to AgentKush's Icarus Mods

Thanks for your interest in contributing! Whether you're reporting a bug, suggesting a feature, or submitting a fix, this guide will help you get started.

## Reporting Bugs

Found something broken? [Open a bug report](https://github.com/AgentKush/Icarus-mods/issues/new?template=bug_report.yml) and include:

- Which mod and version you're using
- Steps to reproduce the issue
- What you expected vs what happened
- Any other mods you have enabled
- Screenshots or logs if possible

The more detail you give, the faster the fix.

## Requesting Features

Have an idea for a new mod or an improvement to an existing one? [Submit a mod request](https://github.com/AgentKush/Icarus-mods/issues/new?template=mod_request.yml) with a clear description of what you'd like and why it would be useful.

## Submitting Changes

If you'd like to contribute a fix or improvement directly:

1. **Fork** the repository
2. **Create a branch** from `main` (e.g. `fix/turret-ammo-matching`)
3. **Make your changes** — keep commits focused and descriptive
4. **Test your mod** in-game with JimK72's Mod Manager before submitting
5. **Open a Pull Request** against `main`

### EXMOD File Guidelines

- All EXMOD files must be valid JSON with UTF-8 encoding (no BOM)
- Use `ensure_ascii=False` when writing EXMOD files to preserve special characters
- The `name` field must use proper display names with spaces (not underscores)
- Recipe outputs in `D_ProcessorRecipes` must reference `D_ItemTemplate`, never `D_ItemsStatic`
- Recipe inputs in `D_ProcessorRecipes` must reference `D_ItemsStatic`
- Include the EXMODZ package with correct structure: EXMOD in `Extracted Mods/`, everything else in `ModName/`

### Commit Messages

Write clear commit messages that explain *why*, not just *what*. For example:

- "Fix turret LOS to prevent shooting through walls" (good)
- "Updated turret file" (not helpful)

## Mod Compatibility

If your change touches `D_ProcessorRecipes`, `D_ItemTemplate`, or `D_Talents`, check for conflicts with other mods in the collection. The validate-mods workflow will catch structural issues, but gameplay conflicts need manual testing.

## Code of Conduct

All contributors are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful, constructive, and helpful.

## Questions?

- [Open a Discussion](https://github.com/AgentKush/Icarus-mods/discussions) for general questions
- [Join the Discord](https://discord.gg/SnT22gRD) for real-time help
- Check [existing issues](https://github.com/AgentKush/Icarus-mods/issues) before posting — someone may have already asked

---

Thanks for helping make Icarus modding better for everyone!
