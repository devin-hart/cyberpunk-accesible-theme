# 🎨 Cyberpunk Accessible Theme - Installation Guide

## Step-by-Step Installation

### Step 1: Download and Extract

1. **Download the ZIP file** (cyberpunk-accessible-vscode-theme.zip)
2. **Extract it** to get the `cyberpunk-accessible-vscode-theme` folder

### Step 2: Find Your VS Code Extensions Folder

Your extensions folder location depends on your operating system:

- **Windows**: `C:\Users\YourUsername\.vscode\extensions\`
  - Or type: `%USERPROFILE%\.vscode\extensions` in File Explorer
  
- **macOS**: `/Users/YourUsername/.vscode/extensions/`
  - Or type in Terminal: `open ~/.vscode/extensions`
  
- **Linux**: `/home/YourUsername/.vscode/extensions/`
  - Or type in Terminal: `cd ~/.vscode/extensions`

**Note**: The `.vscode` folder might be hidden. You may need to:
- **Windows**: Show hidden files in File Explorer
- **macOS/Linux**: Press `Cmd+Shift+.` in Finder or use `ls -la` in Terminal

### Step 3: Copy the Theme

1. **Copy** the entire `cyberpunk-accessible-vscode-theme` folder
2. **Paste** it into your `.vscode/extensions/` directory
3. The final path should look like:
   - Windows: `C:\Users\YourUsername\.vscode\extensions\cyberpunk-accessible-vscode-theme\`
   - macOS/Linux: `~/.vscode/extensions/cyberpunk-accessible-vscode-theme/`

### Step 4: Restart VS Code

Close and reopen VS Code completely.

### Step 5: Activate the Theme

**Method 1 (Keyboard Shortcut):**
- Windows/Linux: Press `Ctrl+K` then `Ctrl+T`
- macOS: Press `Cmd+K` then `Cmd+T`
- Select **"Cyberpunk Accessible"** from the list

**Method 2 (Menu):**
- Go to: **File → Preferences → Theme → Color Theme**
- Select **"Cyberpunk Accessible"**

**Method 3 (Command Palette):**
- Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
- Type: "Color Theme"
- Select **"Cyberpunk Accessible"**

## Verify Installation

1. Open the `THEME_PREVIEW.js` file (included in the theme folder)
2. You should see:
   - **Magenta** keywords (if, const, function)
   - **Cyan** function names
   - **Neon green** strings
   - **Orange** numbers
   - **Hot pink** class names

## Troubleshooting

### "Theme not appearing in the list"

**Check the folder structure:**
```
.vscode/extensions/
└── cyberpunk-accessible-vscode-theme/
    ├── package.json
    ├── themes/
    │   └── cyberpunk-accessible-theme.json
    └── [other files]
```

If the structure is wrong, you might have double-nested folders. Make sure `package.json` is directly inside `cyberpunk-accessible-vscode-theme`.

### "Colors look wrong or default"

1. Make sure you selected "Cyberpunk Accessible" (not another theme)
2. Try reloading: `Ctrl+Shift+P` → "Developer: Reload Window"
3. Check if there are any errors: `Ctrl+Shift+P` → "Developer: Show Logs" → "Extensions"

### "Still not working"

Try the alternative installation method using the command line:

**Windows (PowerShell):**
```powershell
Copy-Item -Path "C:\path\to\extracted\cyberpunk-accessible-vscode-theme" -Destination "$env:USERPROFILE\.vscode\extensions\" -Recurse
```

**macOS/Linux (Terminal):**
```bash
cp -r /path/to/extracted/cyberpunk-accessible-vscode-theme ~/.vscode/extensions/
```

Then restart VS Code.

## Next Steps

- Check `COLOR_REFERENCE.md` for the complete color breakdown
- Open `THEME_PREVIEW.js` to see all colors in action
- Customize colors by editing `themes/cyberpunk-accessible-theme.json` if needed

## Need to Customize?

If any colors don't work for your eyes:

1. Open: `themes/cyberpunk-accessible-theme.json`
2. Find the color using `COLOR_REFERENCE.md`
3. Change the hex code
4. Save and reload VS Code window

Enjoy your cyberpunk accessible theme! 🚀
