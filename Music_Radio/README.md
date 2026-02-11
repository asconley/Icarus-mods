# Music Radio

**Version:** 0.4  
**Author:** AgentKush  
**Mod Manager:** JimK72's Icarus Mod Manager  

## Description

Adds a **placeable Music Radio** to Icarus with full spatial audio playback. Craft it at the Fabricator or Manufacturer, deploy it near your base, and enjoy a randomized playlist of 12 survival-themed instrumental tracks.

## Features

- **Custom Emergency Radio mesh** with emissive cyan frequency display
- **12 royalty-free music tracks** by Kevin MacLeod (incompetech.com)
- **Spatial audio** — sound gets louder as you approach (500 inner / 3000 falloff)
- **Random playlist** — tracks play in random order continuously
- Craftable at **Fabricator** or **Manufacturer**

## Tracklist

1. Ossuary 6 - Air (Atmospheric, calm)
2. Achilles (Rock, epic)
3. Volatile Reaction (Rock, intense)
4. Ever Mindful (Contemporary, peaceful)
5. Crypto (Electronic, dark)
6. All This (Soundtrack, sweeping)
7. Dark Fog (Electronic, atmospheric)
8. Perspectives (Contemporary, thoughtful)
9. Interloper (Electronic, ominous)
10. Controlled Chaos (Electronic, energetic)
11. Impact Prelude (Soundtrack, dramatic)
12. Crusade (Soundtrack, adventurous)

## Crafting Recipe

- 5x Electronics
- 10x Copper Wire
- 5x Gold Wire
- 5x Steel Ingot
- 15,000 MJ power

## Installation

Install via JimK72's Icarus Mod Manager. The EXMODZ package includes both the data mod and the audio/mesh pak file.

## Credits

- **Music:** Kevin MacLeod (incompetech.com) — Licensed under Creative Commons: By Attribution 3.0 (CC BY 3.0)
- **Emergency Radio Mesh:** Gerardo Justel via Fab — Licensed under CC BY 4.0
- **Mod Framework:** JimK72's Icarus Mod Manager

## Changelog

### v0.4
- Re-imported FBX mesh with proper source textures (was using cooked assets)
- Created proper PBR materials: M_Radio (albedo, normal, roughness, metallic, AO, emissive), M_Glass (translucent with opacity), M_Invisible (hides ground plane)
- Fixed mesh ground plane visibility with invisible material
- Full clean cook and repackage

### v0.3
- Added 12 music tracks with spatial audio playback
- Custom Emergency Radio mesh with textured materials and emissive display
- Blueprint actor with AudioComponent and SoundCue playlist
- Packaged as combined EXMODZ with data mod + asset pak

### v0.2
- Workshop and crafting setup
- Deployable configuration
- Investigation notes for audio system

### v0.1
- Initial concept and item template
