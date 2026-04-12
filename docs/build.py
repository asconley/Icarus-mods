#!/usr/bin/env python3
"""Rebuild docs/index.html from EXMOD files and categories.json."""

import json
import os
import re
import glob

REPO = "AgentKush/Icarus-mods"
BASE = f"https://github.com/{REPO}"
RAW = f"{BASE}/raw/main"


def main():
    # Load category mapping
    with open("docs/categories.json") as f:
        categories = json.load(f)

    # Scan all mod folders for EXMOD files
    mods = []
    new_categories = False
    for folder in sorted(os.listdir(".")):
        if not os.path.isdir(folder) or folder.startswith("."):
            continue

        # Find any .EXMOD file in the folder (handles case mismatches)
        exmod_files = glob.glob(os.path.join(folder, "*.EXMOD"))
        if not exmod_files:
            continue
        exmod = exmod_files[0]

        try:
            with open(exmod) as f:
                data = json.load(f, strict=False)
        except json.JSONDecodeError:
            print(f"  SKIP (broken JSON): {exmod}")
            continue

        name = data.get("name", folder)
        version = data.get("version", "1.0")
        file_name = data.get("fileName", folder)

        # Get description - first paragraph only, clean for display
        desc = data.get("description", "")
        desc = desc.split("\r\n\r\n\r\n")[0]
        desc = desc.replace("\r\n", " ").strip()
        if len(desc) > 200:
            desc = desc[:197] + "..."

        category = categories.get(folder, "Uncategorized")
        if folder not in categories:
            categories[folder] = "Uncategorized"
            new_categories = True
            print(f"  NEW MOD: {folder} (set to Uncategorized)")

        mods.append({
            "name": name,
            "folder": folder,
            "version": version,
            "description": desc,
            "category": category,
            "readme": f"{BASE}/tree/main/{folder}",
            "download": f"{RAW}/{folder}/{file_name}.EXMODZ",
            "release": f"{BASE}/releases/tag/{folder}-v{version}"
        })

    # Update categories.json if new mods were found
    if new_categories:
        with open("docs/categories.json", "w") as f:
            json.dump(categories, f, indent=4, ensure_ascii=True)
            f.write("\n")

    # Calculate stats
    total_mods = len(mods)
    total_entries = 0
    total_recipes = 0
    for folder_name in os.listdir("."):
        if not os.path.isdir(folder_name) or folder_name.startswith("."):
            continue
        exmod_files = glob.glob(os.path.join(folder_name, "*.EXMOD"))
        if not exmod_files:
            continue
        try:
            with open(exmod_files[0]) as f:
                data = json.load(f, strict=False)
        except json.JSONDecodeError:
            continue
        for row in data.get("Rows", []):
            items = row.get("File_Items", [])
            total_entries += len(items)
            if "D_ProcessorRecipes" in row.get("CurrentFile", ""):
                total_recipes += len(items)

    # Read current index.html
    with open("docs/index.html") as f:
        html = f.read()

    # Replace MODS array
    mods_json = json.dumps(mods, ensure_ascii=True, separators=(",", ": "))
    html = re.sub(
        r"const MODS = \[.*?\];",
        f"const MODS = {mods_json};",
        html,
        flags=re.DOTALL
    )

    # Update stats in hero section
    # Match from <div class="stats"> through to the hero-links div (exclusive)
    stats_html = (
        '<div class="stats">\n'
        f'        <div class="stat-box"><div class="number">{total_mods}+</div><div class="label">Mods</div></div>\n'
        f'        <div class="stat-box"><div class="number">{total_entries:,}+</div><div class="label">Data Entries</div></div>\n'
        f'        <div class="stat-box"><div class="number">{total_recipes:,}+</div><div class="label">Recipes</div></div>\n'
        '        <div class="stat-box"><div class="number">100%</div><div class="label">Free</div></div>\n'
        '    </div>\n\n'
        '    <div class="hero-links">'
    )
    html = re.sub(
        r'<div class="stats">.*?<div class="hero-links">',
        stats_html,
        html,
        flags=re.DOTALL
    )

    # Update subtitle mod count
    html = re.sub(
        r'A collection of \d+\+ mods',
        f'A collection of {total_mods}+ mods',
        html
    )

    with open("docs/index.html", "w") as f:
        f.write(html)

    print(f"Site updated: {total_mods} mods, {total_entries:,} entries, {total_recipes:,} recipes")


if __name__ == "__main__":
    main()
