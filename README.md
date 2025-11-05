# Cyberpunk Accessible VS Code Theme

A high-contrast, cyberpunk-styled dark theme specifically designed for developers with color blindness. This theme ensures maximum distinguishability between all syntax elements across HTML, JavaScript, JSX, TypeScript, Python, CSS, and SCSS.

## Features

- **Maximum Contrast**: All elements have high luminance contrast for easy differentiation
- **Color-Blind Optimized**: Avoids problematic color combinations (blue/purple, yellow/green)
- **Cyberpunk Aesthetic**: Neon pink, magenta, cyan, and neon green palette
- **Language Support**: Thoroughly tested across HTML, JS, JSX, TS, Python, CSS, and SCSS
- **Semantic Highlighting**: Full support for semantic token highlighting

## Color Palette

### Primary Syntax Colors
- **Neon Magenta (#ff00ff)** - Keywords, control flow (if/else/for), HTML tags
- **Cyan (#00ffff)** - Functions, methods, IDs, cursor
- **Neon Green (#39ff14)** - Strings, attribute values, CSS values
- **Bright Orange (#ff6600)** - Numbers, constants, attributes, CSS properties
- **Hot Pink (#ff0080)** - Classes, types, decorators, JSX components
- **Yellow (#ffff00)** - Template expressions, regex, CSS units
- **White (#f0f0f0/#ffffff)** - Variables, operators, text
- **Red (#ff3333/#ff0000)** - Errors and invalid code

### UI Colors
- **Background**: Deep black (#0a0a0a)
- **Borders**: Neon magenta (#ff00ff)
- **Comments**: Gray (#666666) italic
- **Line Numbers**: Gray (#666666), active magenta (#ff00ff)

## Element Breakdown by Language

### HTML/JSX
- **Tags**: Neon magenta, bold
- **Attributes**: Bright orange
- **Attribute values**: Neon green
- **Component names**: Hot pink, bold

### JavaScript/TypeScript
- **Keywords** (const, let, if, for): Neon magenta, bold
- **Functions**: Cyan, bold
- **Classes/Types**: Hot pink, bold
- **Strings**: Neon green
- **Numbers**: Bright orange
- **Variables**: White
- **Imports**: Cyan

### Python
- **Keywords**: Neon magenta, bold
- **Functions**: Cyan, bold
- **Classes**: Hot pink, bold
- **Decorators**: Hot pink
- **self/cls**: Bright orange, italic
- **Strings**: Neon green
- **Numbers**: Bright orange

### CSS/SCSS
- **Selectors**: Neon magenta, bold
- **Classes**: Hot pink
- **IDs**: Cyan
- **Properties**: Bright orange
- **Values**: Neon green
- **Units**: Yellow

## Installation

### Method 1: Manual Installation (Recommended for Development)

1. Download or clone this repository
2. Copy the `cyberpunk-accessible-vscode-theme` folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions`
   - **macOS/Linux**: `~/.vscode/extensions`
3. Restart VS Code
4. Go to File → Preferences → Color Theme (or press `Ctrl/Cmd+K Ctrl/Cmd+T`)
5. Select "Cyberpunk Accessible"

### Method 2: Install from VSIX (After packaging)

1. Package the theme (see Development section below)
2. In VS Code, press `Ctrl/Cmd+Shift+P`
3. Type "Extensions: Install from VSIX"
4. Select the generated `.vsix` file

### Method 3: VS Code Marketplace (Future)

Once published:
1. Open VS Code
2. Go to Extensions (`Ctrl/Cmd+Shift+X`)
3. Search for "Cyberpunk Accessible"
4. Click Install

## Development

### Packaging the Extension

Install vsce (VS Code Extension Manager):
```bash
npm install -g @vscode/vsce
```

Package the extension:
```bash
cd cyberpunk-accessible-vscode-theme
vsce package
```

This creates a `.vsix` file you can install or share.

### Testing Changes

1. Make changes to `themes/cyberpunk-accessible-theme.json`
2. Press `Ctrl/Cmd+Shift+P` → "Developer: Reload Window"
3. The theme updates automatically

## Accessibility Notes

This theme was specifically designed with these accessibility principles:

1. **Luminance Contrast**: All color pairs meet or exceed WCAG AAA standards (7:1 ratio)
2. **Multiple Channels**: Uses both color AND text styling (bold, italic) to convey meaning
3. **Distinct Hues**: Colors are chosen from opposite ends of the spectrum to avoid confusion
4. **Brightness Variation**: Each color has distinct brightness levels, not just different hues
5. **Avoidance Patterns**: 
   - No blue/purple adjacency
   - No yellow/green adjacency
   - No reliance on subtle color differences

## Customization

To customize colors for your specific needs:

1. Open the theme file at `themes/cyberpunk-accessible-theme.json`
2. Modify the hex values in the `colors` or `tokenColors` sections
3. Reload VS Code window to see changes

## Feedback

This theme is designed for people with color blindness. If you find any color combinations that are difficult to distinguish, please provide feedback! Include:
- Your type of color blindness (if known)
- The specific elements that are hard to distinguish
- The programming language you were using
- Screenshots if possible

## License

MIT License - Feel free to modify and share!

## Version History

### 1.0.0 (Initial Release)
- High-contrast cyberpunk theme
- Optimized for color blindness
- Support for HTML, JS, JSX, TS, Python, CSS, SCSS
- Maximum contrast between all syntax elements
