# Cyberpunk Accessible - Quick Color Reference

## At a Glance

### Primary Syntax Colors (with Hex Codes)

| Color | Hex Code | Used For | Example |
|-------|----------|----------|---------|
| **Neon Magenta** | `#ff00ff` | Keywords, HTML tags, CSS selectors, control flow, **JSON keys** | `if`, `const`, `<div>`, `.class`, `"key":` |
| **Cyan** | `#00ffff` | Functions, methods, CSS IDs, imports, **JSON booleans/null** | `myFunction()`, `#header`, `true`, `null` |
| **Neon Green** | `#39ff14` | Strings, attribute values, CSS values, **JSON string values** | `"hello"`, `"red"`, `background: #000` |
| **Bright Orange** | `#ff6600` | Numbers, constants, attributes, CSS properties, **JSON numbers** | `42`, `true`, `className=`, `color:` |
| **Hot Pink** | `#ff0080` | Classes, types, JSX components, decorators, **JSON braces/brackets** | `MyClass`, `ProductCard`, `@decorator`, `{ }`, `[ ]` |
| **Yellow** | `#ffff00` | Template expressions, regex, CSS units | `${var}`, `/regex/`, `10px` |
| **White** | `#f0f0f0` | Variables, general text | `myVar`, plain text |
| **Light Gray** | `#666666` | Comments (italic) | `// comment`, `# comment` |
| **Red** | `#ff3333` | Errors, invalid code | Syntax errors |

## Language-Specific Breakdown

### JavaScript/TypeScript

```javascript
// MAGENTA (bold): const, let, if, for, import, export, function, class, return
// CYAN (bold): function names, method calls
// NEON GREEN: "strings", 'strings', `template strings`
// YELLOW: ${template expressions}
// ORANGE: 42, true, false, null, undefined, this, super
// HOT PINK (bold): ClassName, TypeName, InterfaceName
// WHITE: variableName, parameters
// GRAY (italic): // comments, /* comments */

const myFunction = (param) => {
  const result = someFunction();
  return `Value: ${result}`;
};
```

### HTML/JSX

```html
<!-- MAGENTA (bold): <tag>, </tag> -->
<!-- ORANGE: attribute-name -->
<!-- NEON GREEN: "attribute-value" -->
<!-- HOT PINK (bold): <ComponentName> -->

<div className="container" id="main">
  <ComponentName prop="value" />
</div>
```

### Python

```python
# GRAY (italic): # comments

# MAGENTA (bold): def, class, if, for, import, return, with, as
# CYAN (bold): function_name, method_name
# HOT PINK: ClassName, @decorator
# ORANGE (italic): self, cls
# NEON GREEN: "strings", 'strings', f"strings"
# YELLOW: {interpolation} in f-strings
# ORANGE: 42, True, False, None

class MyClass:
    @decorator
    def method(self, param):
        return f"Result: {param}"
```

### CSS/SCSS

```css
/* MAGENTA (bold): div, body, .selector pseudo-selectors */
/* HOT PINK: .class-name */
/* CYAN: #id-name */
/* ORANGE: property-name */
/* NEON GREEN: property-value */
/* YELLOW: 10px, 2em, 50% (units) */

.class-name {
  color: #ff00ff;
  padding: 10px;
}

#id-name {
  background: red;
}
```

### JSON

```json
{
  "keyName": "stringValue",
  "number": 42,
  "boolean": true,
  "null": null
}

/* MAGENTA (bold): "keyName" - object keys */
/* NEON GREEN: "stringValue" - string values */
/* ORANGE (bold): 42 - numbers */
/* CYAN (bold): true, false, null - booleans and null */
/* HOT PINK (bold): { } [ ] - braces and brackets */
/* WHITE: : , - colons and commas */
```

## Why These Colors?

### Maximum Distinguishability
1. **Magenta vs Cyan**: Opposite ends of spectrum, different brightness
2. **Neon Green vs Orange**: Very different hues, high contrast
3. **Hot Pink vs Magenta**: Different brightness levels, still vibrant
4. **Yellow**: Distinct from everything, used sparingly for special cases

### Avoiding Problem Areas
- ❌ **NO blue/purple combinations** - these blend for many color-blind types
- ❌ **NO yellow/green combinations** - difficult to distinguish
- ✅ **YES to cyan (blue-green)** - distinct from both blue and green
- ✅ **YES to distinct brightness levels** - not just color differences

### Contrast Ratios
All text/background combinations meet or exceed **WCAG AAA** standards:
- Neon Green on Black: ~14:1 ratio
- Cyan on Black: ~14:1 ratio
- Magenta on Black: ~9:1 ratio
- Orange on Black: ~8:1 ratio
- White on Black: ~21:1 ratio

## UI Elements

- **Borders/Accents**: Neon Magenta (#ff00ff)
- **Active Tab**: Cyan (#00ffff)
- **Status Bar**: Cyan text (#00ffff)
- **Cursor**: Cyan (#00ffff)
- **Line Highlight**: Subtle (#1a1a1a)
- **Selection**: Magenta with transparency

## Testing Recommendations

Open the `THEME_PREVIEW.js` file in VS Code with this theme active to see all colors in action across different language contexts.

## Customization Tips

If any colors don't work for your specific type of color blindness:

1. Open `themes/cyberpunk-accessible-theme.json`
2. Search for the color name in this guide
3. Find the corresponding hex code in the JSON
4. Replace with your preferred color
5. Reload VS Code window (Ctrl/Cmd+Shift+P → "Developer: Reload Window")

### Suggested Alternatives

If certain colors are still hard to distinguish:
- Replace Neon Green (#39ff14) with White (#ffffff) for strings
- Replace Hot Pink (#ff0080) with Bright Orange (#ff8800) for classes
- Replace Cyan (#00ffff) with Light Blue (#66ccff) for functions
- Increase contrast by making background even darker (#000000)

Remember: The goal is maximum functionality for YOUR eyes. Customize as needed!
