# Installing Icarus Mods on a G-Portal Server

A step-by-step guide for installing mods on a G-Portal-hosted Icarus dedicated server using JimK72's Icarus Mod Manager (IMM).

---

## What you need

- An active G-Portal Icarus server
- **JimK72's Icarus Mod Manager** installed locally
- The `.EXMODZ` (or `.pak`) files for the mods you want
- FTP/file access to your G-Portal server (Server panel → File Browser, or FTP client)

---

## Part 1 — Build the merged mod files in IMM

### Step 1 — Get the mods you want

In the Mod Manager, you have two options:

- **Download Mods button** — opens an in-app browser. Grab the mods you want, then close the download tab / return to the main window.
- **Import existing mods** — use the buttons on the right side:
  - **Import EXMODZ File** — for `.EXMODZ` mods you already have
  - **Extract Mod from PAK File** — for `.pak` mods you already have

### Step 2 — Add mods to the install list

Once your mods appear in the **Extracted Mods** list (left panel):

1. **Right-click** anywhere in the Extracted Mods list
2. Click **"Add All mods to Install List"**

The **Mods to Install** column (next to it) will populate alphabetically with everything from Extracted Mods.

> Make sure every mod you want is in the Mods to Install column — that's what gets merged.

### Step 3 — Merge

Click **"Install All Listed Mods"** at the top of the Mods to Install column.

The merge process runs. When it finishes you'll see **`IMM_Merged_Mod_P`** listed under *"Icarus mods folder:"* on the right side of the Mod Manager.

### Step 4 — Open the output folder

Click the **"Open Icarus Mod Folder"** button. This opens:

```
<Icarus install>\Icarus\Content\Paks\mods\
```

Inside you'll see two files the Mod Manager just created:

| File | Type | Size (example) |
|---|---|---|
| `IMM_Merged_Mod` | Text Document | ~2 KB |
| `IMM_Merged_Mod_P.pak` | PAK File | ~1.5 GB (depends on mods) |

**These are the two files you need to upload to the server.**

---

## Part 2 — Upload to G-Portal

### Step 5 — Stop the server

In the G-Portal control panel, click **Stop**. Wait for the status to show *Offline* before continuing.

### Step 6 — Open the server's file browser

Use G-Portal's web file manager (*Server panel → File Browser*) or an FTP client with your G-Portal credentials.

### Step 7 — Create the `mods` folder

Navigate to:

```
Icarus/Content/Paks/
```

The `mods` folder **does not exist** on a fresh G-Portal server — **you have to create it yourself**.

Right-click → New Folder → name it exactly `mods` (lowercase).

Final path on the server:

```
Icarus/Content/Paks/mods/
```

### Step 8 — Upload the two merged files

Upload both files from your local `Paks/mods/` folder into the server's new `Paks/mods/` folder:

- `IMM_Merged_Mod` (the txt file)
- `IMM_Merged_Mod_P.pak`

### Step 9 — Restart the server

Back in G-Portal, click **Start**. The server reads the merged files on startup and installs the mods.

You should now be able to join with the same merged mod set on your client.

---

## Part 3 — Common gotchas

### "I can't join the server"

Your client's mod list doesn't match the server's. Both sides must have the **identical merged mod files**. Either:

- Re-merge on your client with the same mod list and replace your local files, **or**
- Replace the server's files with whatever your client currently has

### "I added/updated a mod but the server hasn't changed"

**The server does NOT auto-update mods.** Every time you add a mod, remove a mod, or update a mod to a new version, you need to:

1. Re-merge in IMM (to regenerate `IMM_Merged_Mod` + `IMM_Merged_Mod_P.pak`)
2. Stop the server
3. **Delete the old two files** from the server's `Paks/mods/` folder
4. Upload the freshly-merged two files
5. Restart the server

There's no shortcut — replace both files every time.

### "Mods don't seem to be loading"

Check that:

- The folder is exactly `Icarus/Content/Paks/mods/` (lowercase `mods`)
- Both files are present (the txt and the PAK)
- The PAK ends in `_P.pak` exactly — Unreal Engine only loads files with that suffix from this folder

---

## Quick reference

```
Local (made by Mod Manager):
  E:\SteamLibrary\steamapps\common\Icarus\Icarus\Content\Paks\mods\
    ├── IMM_Merged_Mod          (txt, ~2 KB)
    └── IMM_Merged_Mod_P.pak    (the merged PAK)

Server (G-Portal):
  Icarus/Content/Paks/mods/      ← create this folder
    ├── IMM_Merged_Mod
    └── IMM_Merged_Mod_P.pak
```

That's the whole loop: merge in IMM → grab the two files → drop them in the server's `mods` folder → restart. Repeat any time the mod list changes.
