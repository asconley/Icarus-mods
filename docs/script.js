/* ═══════════════════════════════════════════
   AgentKush Icarus Mods — script.js
   Particle canvas (credit: Zayon) + catalog
   + Premium effects: scramble, tilt, magnetic,
     spotlight, card glow
   ═══════════════════════════════════════════ */

// --- PARTICLE CANVAS (Zayon's moving dots) ---
// OffscreenCanvas when supported (separate thread), fallback to main thread
const canvas = document.getElementById('particle-canvas');
const rootStyles = getComputedStyle(document.documentElement);
const accentMatch = rootStyles.getPropertyValue('--accent-rgb').trim();
const rgbAccent = accentMatch || '232, 123, 53';

let particleWorker = null;

if (canvas.transferControlToOffscreen && window.Worker) {
    // --- OFFSCREEN PATH: particles run on a Web Worker ---
    try {
        const offscreen = canvas.transferControlToOffscreen();
        particleWorker = new Worker('./particle-worker.js');
        particleWorker.postMessage({
            type: 'init',
            canvas: offscreen,
            width: window.innerWidth,
            height: window.innerHeight,
            accent: rgbAccent
        }, [offscreen]);

        window.addEventListener('resize', () => {
            particleWorker.postMessage({
                type: 'resize',
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
    } catch (e) {
        // OffscreenCanvas transfer failed, fall through to main thread
        particleWorker = null;
    }
}

if (!particleWorker) {
    // --- MAIN THREAD FALLBACK ---
    const ctx = canvas.getContext('2d');
    let width, height, particles;

    function initParticles() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        const count = Math.min(120, Math.floor(width * height / 8000));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgbAccent}, ${p.opacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${rgbAccent}, 0.6)`;
            ctx.fill();
        });
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', initParticles);
    initParticles();
    animateParticles();
}

// --- MOD DATA ---
const MODS=[{"name":"Absolute Chaos - Core","folder":"AbsoluteChaos_Core","version":"0.2.1","description":"Base layer of the Absolute Chaos modpack.","category":"Mod Packs","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/AbsoluteChaos_Core","download":"https://github.com/AgentKush/Icarus-mods/raw/main/AbsoluteChaos_Core/AbsoluteChaos_Core.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/AbsoluteChaos_Core-v0.2.1"},{"name":"Agent's BioLab","folder":"Agents_BioLab","version":"2.0","description":"Adds all Bio Lab Legendary weapons to the Workshop! Includes Frontier Revolver, Kinetic Rifle, Tactical Bow, Mining Armature, Ape Club, Heavy Flamethrower, Anti-materiel Rifle, Javelin Launcher, Slash Sword, Sandwyrm Chainsaw, and Sandwyrm Sniper.","category":"Workshop & Items","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Agents_BioLab","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Agents_BioLab/Agents_BioLab.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Agents_BioLab-v2.0"},{"name":"Agents Individual Item Kits","folder":"Agents_Individual_Item_Kits","version":"4.0","description":"2056 individual item kits with real game icons in a single workshop tab.","category":"Workshop & Items","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Agents_Individual_Item_Kits","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Agents_Individual_Item_Kits/Agents_Individual_Item_Kits.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Agents_Individual_Item_Kits-v4.0"},{"name":"Always Show Buildings On Map","folder":"Always_show_buildings_on_map","version":"1.0","description":"Always shows player-built structures on the map and minimap without requiring any special stats or radar.","category":"Building & Construction","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Always_show_buildings_on_map","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Always_show_buildings_on_map/Always_show_buildings_on_map.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Always_show_buildings_on_map-v1.0"},{"name":"Ammo Crafting Overhaul","folder":"Ammo_Crafting_Overhaul","version":"1.0","description":"48 new ammo recipes.","category":"Combat & Defense","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Ammo_Crafting_Overhaul","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Ammo_Crafting_Overhaul/Ammo_Crafting_Overhaul.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Ammo_Crafting_Overhaul-v1.0"},{"name":"Armor Set Bonuses Enhanced","folder":"Armor_Set_Bonuses_Enhanced","version":"2.0","description":"Enhanced armor set bonuses with 3-piece partial bonuses for mix-and-match builds.","category":"Combat & Defense","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Armor_Set_Bonuses_Enhanced","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Armor_Set_Bonuses_Enhanced/Armor_Set_Bonuses_Enhanced.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Armor_Set_Bonuses_Enhanced-v2.0"},{"name":"Bestiary Fix","folder":"Bestiary_Fix","version":"1.1","description":"Adds missing Kill/Skin experience events for Sulfur Worm, Sulfur Vesper, Cave Worm, and Vesper to help Bestiary tracking.","category":"Quality of Life","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Bestiary_Fix","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Bestiary_Fix/Bestiary_Fix.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Bestiary_Fix-v1.1"},{"name":"Creature Difficulty Scaling","folder":"Creature_Difficulty_Scaling","version":"2.2","description":"Dynamic creature level scaling for level 500 cap.","category":"Survival & Difficulty","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Creature_Difficulty_Scaling","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Creature_Difficulty_Scaling/Creature_Difficulty_Scaling.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Creature_Difficulty_Scaling-v2.2"},{"name":"Creature Drop Enhancer","folder":"Creature_Drop_Enhancer","version":"1.0","description":"Doubles all creature butchery and skinning outputs across 62 recipes.","category":"Survival & Difficulty","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Creature_Drop_Enhancer","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Creature_Drop_Enhancer/Creature_Drop_Enhancer.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Creature_Drop_Enhancer-v1.0"},{"name":"Culinex Food Boost Fix","folder":"Culinex_Food_Boost_Fix","version":"2.7","description":"Fixes Culinex (Chef's Backpack) 25% food effectiveness boost to apply to all cooked foods.","category":"Food & Consumables","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Culinex_Food_Boost_Fix","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Culinex_Food_Boost_Fix/Culinex_Food_Boost_Fix.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Culinex_Food_Boost_Fix-v2.7"},{"name":"Dev Tools Kit","folder":"Dev_Tools_Kit","version":"1.1.2","description":"Unlocks 10 hidden developer tools from the workshop including Thor Hammer (fly mode), Fireball, Inspection Tool, Transform Tool, Destroy Tool, and more.","category":"Workshop & Items","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Dev_Tools_Kit","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Dev_Tools_Kit/Dev_Tools_Kit.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Dev_Tools_Kit-v1.1.2"},{"name":"Exotic Economy Overhaul","folder":"Exotic_Economy_Overhaul","version":"2.0","description":"Full currency exchange system with 52 recipes.","category":"Economy & Resources","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Exotic_Economy_Overhaul","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Exotic_Economy_Overhaul/Exotic_Economy_Overhaul.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Exotic_Economy_Overhaul-v2.0"},{"name":"Extended Spoil Timers","folder":"Extended_Spoil_Timers","version":"1.2","description":"Extends decay timers on 29 items.","category":"Food & Consumables","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Extended_Spoil_Timers","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Extended_Spoil_Timers/Extended_Spoil_Timers.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Extended_Spoil_Timers-v1.2"},{"name":"Extended Wire and Pipe Tool","folder":"Extended_Wire_and_Pipe_Tool","version":"1.0","description":"Extends power cable and water/fuel pipe connection range by 10x.","category":"Building & Construction","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Extended_Wire_and_Pipe_Tool","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Extended_Wire_and_Pipe_Tool/Extended_Wire_and_Pipe_Tool.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Extended_Wire_and_Pipe_Tool-v1.0"},{"name":"Fast Processing (10x)","folder":"FastProcessing_All_10x","version":"4.8","description":"All crafting and processing 10x faster.","category":"Processing Speed","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/FastProcessing_All_10x","download":"https://github.com/AgentKush/Icarus-mods/raw/main/FastProcessing_All_10x/FastProcessing_All_10x.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/FastProcessing_All_10x-v4.8"},{"name":"Fast Processing (15x)","folder":"FastProcessing_All_15x","version":"4.8","description":"All crafting and processing 15x faster.","category":"Processing Speed","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/FastProcessing_All_15x","download":"https://github.com/AgentKush/Icarus-mods/raw/main/FastProcessing_All_15x/FastProcessing_All_15x.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/FastProcessing_All_15x-v4.8"},{"name":"Fast Processing (25x)","folder":"FastProcessing_All_25x","version":"4.8","description":"All crafting and processing 25x faster.","category":"Processing Speed","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/FastProcessing_All_25x","download":"https://github.com/AgentKush/Icarus-mods/raw/main/FastProcessing_All_25x/FastProcessing_All_25x.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/FastProcessing_All_25x-v4.8"},{"name":"Fast Processing (5x)","folder":"FastProcessing_All_5x","version":"4.8","description":"All crafting and processing 5x faster.","category":"Processing Speed","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/FastProcessing_All_5x","download":"https://github.com/AgentKush/Icarus-mods/raw/main/FastProcessing_All_5x/FastProcessing_All_5x.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/FastProcessing_All_5x-v4.8"},{"name":"Fast Processing (Instant)","folder":"FastProcessing_Instant","version":"4.8","description":"All crafting and processing instant.","category":"Processing Speed","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/FastProcessing_Instant","download":"https://github.com/AgentKush/Icarus-mods/raw/main/FastProcessing_Instant/FastProcessing_Instant.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/FastProcessing_Instant-v4.8"},{"name":"Faster Crafting","folder":"Faster_Crafting","version":"1.4","description":"All crafting and processing 2x faster.","category":"Processing Speed","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Faster_Crafting","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Faster_Crafting/Faster_Crafting.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Faster_Crafting-v1.4"},{"name":"Fish and Farming Boost","folder":"Fish_Farming_Boost","version":"1.1","description":"Farming and fishing overhaul with 335 changes.","category":"Food & Consumables","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Fish_Farming_Boost","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Fish_Farming_Boost/Fish_Farming_Boost.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Fish_Farming_Boost-v1.1"},{"name":"Hardcore Rebalance Pack","folder":"Hardcore_Rebalance_Pack","version":"2.0","description":"For survivors who think Icarus is too easy. 4-tier creature scaling, 37 alpha hunters, rebalanced horde waves, deadly weather, harsher survival.","category":"Survival & Difficulty","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Hardcore_Rebalance_Pack","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Hardcore_Rebalance_Pack/Hardcore_Rebalance_Pack.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Hardcore_Rebalance_Pack-v2.0"},{"name":"Hidden Building Pieces","folder":"Hidden_Building_Pieces","version":"3.0.0","description":"Unlocks 60 hidden building pieces including diagonal curved sets, frames, corner stairs, roof peaks, and half-pieces for 11+ materials.","category":"Building & Construction","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Hidden_Building_Pieces","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Hidden_Building_Pieces/Hidden_Building_Pieces.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Hidden_Building_Pieces-v3.0.0"},{"name":"Indestructible Tools & Weapons","folder":"Indestructible_Tools_Weapons","version":"1.8","description":"All tools, weapons, armor, buildings, doors, and crafting stations will never break.","category":"Quality of Life","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Indestructible_Tools_Weapons","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Indestructible_Tools_Weapons/Indestructible_Tools_Weapons.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Indestructible_Tools_Weapons-v1.8"},{"name":"Modular Affliction Adjuster","folder":"Modular_Affliction_Adjuster","version":"2.0","description":"Reduces stat penalties, extends escalation times, and reduces damage over time by ~50%.","category":"Quality of Life","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Modular_Affliction_Adjuster","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Modular_Affliction_Adjuster/Modular_Affliction_Adjuster.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Modular_Affliction_Adjuster-v2.0"},{"name":"Modular Buff Enhancer","folder":"Modular_Buff_Enhancer","version":"1.1","description":"83 core buffs plus 156 food buffs, all boosted by ~50%.","category":"Quality of Life","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Modular_Buff_Enhancer","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Modular_Buff_Enhancer/Modular_Buff_Enhancer.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Modular_Buff_Enhancer-v1.1"},{"name":"More Eye Colours","folder":"MoreEyeColours","version":"2.0","description":"60 new eye colors across every color family, plus unlocked hidden content.","category":"Quality of Life","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/MoreEyeColours","download":"https://github.com/AgentKush/Icarus-mods/raw/main/MoreEyeColours/MoreEyeColours.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/MoreEyeColours-v2.0"},{"name":"Night Vision Goggles","folder":"NightVisionGoggles","version":"2.0","description":"Craftable Night Vision Goggles with improved durability, no decay, lighter weight.","category":"Workshop & Items","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/NightVisionGoggles","download":"https://github.com/AgentKush/Icarus-mods/raw/main/NightVisionGoggles/NightVisionGoggles.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/NightVisionGoggles-v2.0"},{"name":"No Food Spoilage","folder":"No_Food_Spoilage","version":"2.0","description":"Prevents all food spoilage.","category":"Food & Consumables","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/No_Food_Spoilage","download":"https://github.com/AgentKush/Icarus-mods/raw/main/No_Food_Spoilage/No_Food_Spoilage.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/No_Food_Spoilage-v2.0"},{"name":"Passive Ore Extractor Drills","folder":"Passive_Ore_Extractor_Drills","version":"7.6","description":"23 passive ore extractors — one per ore type.","category":"Economy & Resources","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Passive_Ore_Extractor_Drills","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Passive_Ore_Extractor_Drills/Passive_Ore_Extractor_Drills.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Passive_Ore_Extractor_Drills-v7.6"},{"name":"Performance Optimizer","folder":"Performance_Optimizer","version":"2.2","description":"FPS optimization — PAK config overrides plus data table changes for reduced spawns, slower hordes, extended decay, boosted fuel.","category":"Quality of Life","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Performance_Optimizer","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Performance_Optimizer/Performance_Optimizer.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Performance_Optimizer-v2.2"},{"name":"Solar Panel Expansion","folder":"Solar_Panel_Expansion","version":"1.0","description":"All solar panels and solar backpack in a dedicated Workshop tab with fair pricing.","category":"Workshop & Items","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Solar_Panel_Expansion","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Solar_Panel_Expansion/Solar_Panel_Expansion.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Solar_Panel_Expansion-v1.0"},{"name":"Stack Size Overhaul","folder":"Stack_Size_Overhaul","version":"1.3","description":"Increases stack sizes on 1232 items.","category":"Economy & Resources","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Stack_Size_Overhaul","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Stack_Size_Overhaul/Stack_Size_Overhaul.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Stack_Size_Overhaul-v1.3"},{"name":"Tier Upgrade Forge","folder":"Tier_Upgrade_Forge","version":"1.1","description":"26 tool/weapon upgrade recipes.","category":"Economy & Resources","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Tier_Upgrade_Forge","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Tier_Upgrade_Forge/Tier_Upgrade_Forge.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Tier_Upgrade_Forge-v1.1"},{"name":"Trap and Defense Expansion","folder":"Trap_Defense_Expansion","version":"1.1","description":"Defense expansion with 23 recipes using real game items.","category":"Combat & Defense","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Trap_Defense_Expansion","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Trap_Defense_Expansion/Trap_Defense_Expansion.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Trap_Defense_Expansion-v1.1"},{"name":"Turret Variants","folder":"Turret_Variants","version":"3.0","description":"15 new automated turret variants with unique characteristics.","category":"Combat & Defense","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Turret_Variants","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Turret_Variants/Turret_Variants.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Turret_Variants-v3.0"},{"name":"Waste Not","folder":"Waste_Not","version":"2.2","description":"Mining yields useful secondary resources instead of Stone.","category":"Economy & Resources","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Waste_Not","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Waste_Not/Waste_Not.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Waste_Not-v2.2"},{"name":"Workshop Recyclers","folder":"Workshop_Recyclers","version":"5.3","description":"Two recycling machines (Biofuel T3 + Organic T4) plus an Incinerator for instant item destruction.","category":"Workshop & Items","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Workshop_Recyclers","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Workshop_Recyclers/Workshop_Recyclers.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Workshop_Recyclers-v5.3"},{"name":"Deployable Deep Ore Nodes","folder":"Deployable_Deep_Ore_Nodes","version":"1.0","description":"23 ore types as placeable deep mining nodes. Kit system with Workshop + Fabricator crafting.","category":"Economy & Resources","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/Deployable_Deep_Ore_Nodes","download":"https://github.com/AgentKush/Icarus-mods/raw/main/Deployable_Deep_Ore_Nodes/Deployable_Deep_Ore_Nodes.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/Deployable_Deep_Ore_Nodes-v1.0"},{"name":"Absolute Chaos Pack","folder":"AbsoluteChaos_Pack","version":"0.2.1","description":"Full Absolute Chaos modpack — all modules combined.","category":"Mod Packs","readme":"https://github.com/AgentKush/Icarus-mods/tree/main/AbsoluteChaos_Pack","download":"https://github.com/AgentKush/Icarus-mods/raw/main/AbsoluteChaos_Pack/AbsoluteChaos_Pack.EXMODZ","release":"https://github.com/AgentKush/Icarus-mods/releases/tag/AbsoluteChaos_Pack-v0.2.1"}];

const FEATURED_MODS=["Workshop_Recyclers","Agents_Individual_Item_Kits","Passive_Ore_Extractor_Drills"];
const CATEGORY_ICONS={"Workshop & Items":"🏪","Building & Construction":"🏗️","Processing Speed":"⚡","Combat & Defense":"⚔️","Survival & Difficulty":"💀","Economy & Resources":"💎","Food & Consumables":"🍖","Quality of Life":"✨","Mod Packs":"📦"};
const CATEGORY_ORDER=["Workshop & Items","Building & Construction","Processing Speed","Combat & Defense","Survival & Difficulty","Economy & Resources","Food & Consumables","Quality of Life","Mod Packs"];
let activeCategory=null;

// --- FEATURED ---
function renderFeatured(){
    const s=document.getElementById('featured-section');
    const f=MODS.filter(m=>FEATURED_MODS.includes(m.folder));
    if(!f.length)return;
    let h='<div class="featured-header"><span class="featured-star">⭐</span><h2>Popular Mods</h2><span class="featured-star">⭐</span></div><div class="featured-grid">';
    f.forEach(m=>{h+=`<div class="featured-card reveal"><div class="featured-badge">Popular</div><div class="mod-name">${m.name}</div><div class="mod-desc">${m.description}</div><div class="mod-actions"><a href="${m.download}" class="download-btn">Download</a><a href="${m.readme}">README</a></div></div>`});
    h+='</div>';s.innerHTML=h;
}

// --- FILTER CHIPS ---
function renderChips(){
    const c=document.getElementById('filter-chips');
    let h='<span class="chip active" onclick="setCategory(null,this)">All</span>';
    CATEGORY_ORDER.forEach(cat=>{h+=`<span class="chip" onclick="setCategory('${cat}',this)">${CATEGORY_ICONS[cat]||''} ${cat}</span>`});
    c.innerHTML=h;
}

function setCategory(cat,el){
    activeCategory=cat;
    document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    el.classList.add('active');
    filterMods(document.getElementById('search').value);
}

// --- CATALOG ---
function renderCatalog(mods){
    const catalog=document.getElementById('mod-catalog');
    const categories={};
    CATEGORY_ORDER.forEach(c=>{categories[c]=[]});
    mods.forEach(m=>{if(!categories[m.category])categories[m.category]=[];categories[m.category].push(m)});
    let html='';
    for(const cat of CATEGORY_ORDER){
        const cm=categories[cat];if(!cm||!cm.length)continue;
        const icon=CATEGORY_ICONS[cat]||"📁";
        html+=`<div class="category reveal" data-category="${cat}"><div class="category-header"><div class="category-icon">${icon}</div><h2>${cat}</h2><span class="category-count">${cm.length} mods</span></div><div class="mod-grid stagger-children">`;
        cm.forEach(m=>{html+=`<div class="mod-card reveal" data-name="${m.name.toLowerCase()}" data-desc="${m.description.toLowerCase()}" data-folder="${m.folder}" data-category="${m.category}"><div class="mod-header"><span class="mod-name">${m.name}</span><span class="mod-version">v${m.version}</span></div><div class="mod-meta"><span class="download-count" id="dl-${m.folder}"></span></div><div class="mod-desc">${m.description}</div><div class="mod-actions"><a href="${m.download}" class="download-btn">Download</a><a href="${m.readme}">README</a><a href="${m.release}">Release</a></div></div>`});
        html+='</div></div>';
    }
    catalog.innerHTML=html;
    observeRevealElements();
}

// --- SEARCH + FILTER ---
function filterMods(q){
    q=q.toLowerCase().trim();let any=false;
    document.querySelectorAll('.mod-card').forEach(c=>{
        const n=c.dataset.name,d=c.dataset.desc,cat=c.dataset.category;
        const v=(!q||n.includes(q)||d.includes(q))&&(!activeCategory||cat===activeCategory);
        c.classList.toggle('hidden',!v);if(v)any=true;
    });
    document.querySelectorAll('.category').forEach(c=>{c.classList.toggle('hidden',c.querySelectorAll('.mod-card:not(.hidden)').length===0)});
    document.getElementById('no-results').classList.toggle('hidden',any);
}

// --- SCROLL ANIMATIONS ---
function observeRevealElements(){
    const o=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible')})},{threshold:.05,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal:not(.visible)').forEach(el=>o.observe(el));
}

// --- NAVBAR + BACK TO TOP (throttled for perf) ---
let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
            document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 100);
            document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
            scrollTicking = false;
        });
    }
}, { passive: true });

// --- DOWNLOAD COUNTS ---
async function fetchDownloads(){
    let p=1,all=[];
    while(true){try{const r=await fetch(`https://api.github.com/repos/AgentKush/Icarus-mods/releases?per_page=100&page=${p}`);if(!r.ok)break;const d=await r.json();if(!d.length)break;all=all.concat(d);if(d.length<100)break;p++}catch(e){break}}
    const counts={};let total=0;
    all.forEach(r=>{const f=(r.tag_name||'').replace(/-v[\d.]+$/,'');const dl=(r.assets||[]).reduce((s,a)=>s+(a.download_count||0),0);counts[f]=(counts[f]||0)+dl;total+=dl});
    MODS.forEach(m=>{const el=document.getElementById('dl-'+m.folder);if(el){const c=counts[m.folder]||0;el.textContent=c>0?c.toLocaleString()+' downloads':''}});
    const dlEl=document.getElementById('dl-total');if(dlEl){dlEl.textContent=total>0?total.toLocaleString():'—'}
}

// --- COUNTING ANIMATION (Zayon suggestion) ---
function animateCounters() {
    document.querySelectorAll('.number[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = '+';
        const duration = 1000;
        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = current.toLocaleString() + (progress >= 1 ? suffix : '');
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

/* ═══════════════════════════════════════════
   PREMIUM EFFECTS
   ═══════════════════════════════════════════ */

// --- TEXT SCRAMBLE HERO ---
function textScramble(el, finalText) {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let frame = 0;
    const totalFrames = finalText.length * 3;
    const revealed = [];

    // Start with empty and build up
    for (let i = 0; i < finalText.length; i++) {
        revealed.push({ char: '', done: false, revealAt: Math.floor(Math.random() * totalFrames * 0.7) + 4 });
    }

    // Add blinking cursor span
    const cursor = document.createElement('span');
    cursor.className = 'scramble-cursor';
    cursor.textContent = '';

    function tick() {
        let output = '';
        let allDone = true;

        for (let i = 0; i < finalText.length; i++) {
            if (frame >= revealed[i].revealAt) {
                revealed[i].done = true;
                revealed[i].char = finalText[i];
            } else {
                allDone = false;
                revealed[i].char = chars[Math.floor(Math.random() * chars.length)];
            }
            output += revealed[i].char;
        }

        el.textContent = output;
        el.appendChild(cursor);
        frame++;

        if (!allDone && frame < totalFrames + 10) {
            requestAnimationFrame(tick);
        } else {
            // Final state: clean text + cursor
            el.textContent = finalText;
            el.appendChild(cursor);
        }
    }

    // Clear and start
    el.textContent = '';
    el.appendChild(cursor);
    requestAnimationFrame(tick);
}

// --- SPOTLIGHT CURSOR (hero section only) ---
function initSpotlightCursor() {
    const hero = document.getElementById('hero');
    const spotlight = document.getElementById('heroSpotlight');
    if (!hero || !spotlight) return;

    // Only active on desktop
    if (window.innerWidth < 768) return;

    hero.addEventListener('mousemove', (e) => {
        spotlight.style.left = e.clientX + 'px';
        spotlight.style.top = e.clientY + 'px';
        spotlight.style.opacity = '1';
    });

    hero.addEventListener('mouseleave', () => {
        spotlight.style.opacity = '0';
    });
}

// --- MAGNETIC BUTTONS ---
function initMagneticButtons() {
    if (window.innerWidth < 768) return;

    const buttons = document.querySelectorAll('.magnetic-btn');
    const PULL_DISTANCE = 80;  // px radius of influence
    const PULL_STRENGTH = 0.3; // multiplier

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < PULL_DISTANCE) {
                const tx = dx * PULL_STRENGTH;
                const ty = dy * PULL_STRENGTH;
                btn.style.transform = `translate(${tx}px, ${ty}px)`;
            }
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// --- CARD CURSOR-FOLLOW GLOW ---
function initCardGlow() {
    if (window.innerWidth < 768) return;

    // Use event delegation on the catalog container for better perf
    const catalog = document.getElementById('mod-catalog');
    const featured = document.getElementById('featured-section');

    function handleCardMove(e) {
        const card = e.target.closest('.mod-card, .featured-card');
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    }

    if (catalog) catalog.addEventListener('mousemove', handleCardMove, { passive: true });
    if (featured) featured.addEventListener('mousemove', handleCardMove, { passive: true });
}

// --- VANILLA TILT INIT ---
function initVanillaTilt() {
    if (typeof VanillaTilt === 'undefined') return;
    if (window.innerWidth < 768) return;

    // Mod cards — subtle tilt
    const modCards = document.querySelectorAll('.mod-card');
    if (modCards.length) {
        VanillaTilt.init(modCards, {
            max: 4,
            speed: 400,
            glare: false,
            'max-glare': 0,
            perspective: 1200,
            gyroscope: false
        });
    }

    // Featured cards — slightly more dramatic
    const featuredCards = document.querySelectorAll('.featured-card');
    if (featuredCards.length) {
        VanillaTilt.init(featuredCards, {
            max: 6,
            speed: 400,
            glare: true,
            'max-glare': 0.08,
            perspective: 1000,
            gyroscope: false
        });
    }
}

// --- SCROLL PROGRESS BAR (inject into DOM) ---
function initScrollProgress() {
    // Check if CSS scroll-driven animations are supported
    if (!CSS.supports || !CSS.supports('animation-timeline', 'scroll(root)')) return;

    // Only inject if not already present
    if (document.querySelector('.scroll-progress')) return;

    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.prepend(bar);
}

// --- REDUCED MOTION CHECK ---
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// --- INIT ---
renderFeatured();
renderChips();
renderCatalog(MODS);
fetchDownloads();
document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible'));
animateCounters();

// --- SERVICE WORKER REGISTRATION ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
}

// Premium effects (respect reduced motion)
if (!prefersReducedMotion()) {
    // Scramble the hero title for that hacker-terminal feel
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        textScramble(heroTitle, 'AGENTKUSH');
    }

    initSpotlightCursor();
    initMagneticButtons();
    initCardGlow();
    initScrollProgress();

    // Vanilla Tilt — slight delay to ensure DOM is fully painted
    requestAnimationFrame(() => {
        initVanillaTilt();
    });
}
