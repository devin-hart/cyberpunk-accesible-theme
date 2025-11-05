# Quick Start - Installing Your Theme

## Installation Steps

### Option 1: Quick Manual Install (Easiest)

1. **Find your VS Code extensions folder:**
   - **Windows**: `C:\Users\YourUsername\.vscode\extensions`
   - **macOS**: `~/.vscode/extensions` 
   - **Linux**: `~/.vscode/extensions`

2. **Copy the theme folder:**
   - Copy the entire `cyberpunk-accessible-vscode-theme` folder into your extensions directory

3. **Restart VS Code**

4. **Activate the theme:**
   - Press `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (Mac)
   - OR go to: File → Preferences → Color Theme
   - Select **"Cyberpunk Accessible"**

### Option 2: Package as VSIX (For Sharing)

If you want to package this as a `.vsix` file to share or install more formally:

1. **Install the packaging tool:**
   ```bash
   npm install -g @vscode/vsce
   ```

2. **Navigate to the theme folder:**
   ```bash
   cd cyberpunk-accessible-vscode-theme
   ```

3. **Package it:**
   ```bash
   vsce package
   ```

4. **Install the VSIX:**
   - In VS Code: `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type: "Extensions: Install from VSIX"
   - Select the generated `.vsix` file

## Testing the Theme

1. Open the included `THEME_PREVIEW.js` file in VS Code
2. This file shows all the colors in action across different languages
3. Check that you can easily distinguish:
   - HTML tags vs attributes vs values
   - Keywords vs functions vs variables
   - Strings vs numbers vs constants
   - Classes vs types vs components

## Customizing Colors

If you need to adjust any colors:

1. Open: `themes/cyberpunk-accessible-theme.json`
2. Find the color you want to change (use `COLOR_REFERENCE.md` as a guide)
3. Replace the hex code
4. Save the file
5. Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"

## Need Help?

Check these files:
- **README.md** - Full documentation
- **COLOR_REFERENCE.md** - Complete color guide with all hex codes
- **THEME_PREVIEW.js** - Test file showing all colors in use

## Troubleshooting

**Theme not showing up?**
- Make sure the folder is in the right extensions directory
- Restart VS Code completely
- Check that the folder structure is intact (package.json and themes/theme.json should exist)

**Colors look wrong?**
- Make sure you selected "Cyberpunk Accessible" not another theme
- Try reloading the window: `Ctrl+Shift+P` → "Developer: Reload Window"

**Want to tweak colors?**
- Edit `themes/cyberpunk-accessible-theme.json`
- Use the hex codes from `COLOR_REFERENCE.md` as a guide
- Reload window after saving changes

Enjoy your new accessible cyberpunk theme! 🎨⚡
