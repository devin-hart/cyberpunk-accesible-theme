/* 
 * CYBERPUNK ACCESSIBLE THEME - Color Preview
 * This file demonstrates all the color choices across different languages
 */

// ============================================
// JAVASCRIPT / TYPESCRIPT
// ============================================

// Keywords (MAGENTA) and control flow
import React, { useState, useEffect } from 'react';
const myVar = 42;
let counter = 0;

// Functions (CYAN)
function calculateTotal(price, quantity) {
  // Strings (NEON GREEN)
  const message = "Processing order...";
  // Template expressions (YELLOW)
  const output = `Total: ${price * quantity}`;
  
  // Numbers (ORANGE)
  const tax = 0.08;
  const total = price * quantity * (1 + tax);
  
  // Control flow (MAGENTA)
  if (total > 100) {
    return total * 0.9;
  } else {
    return total;
  }
}

// Classes (HOT PINK)
class ShoppingCart {
  constructor(items) {
    // this keyword (ORANGE)
    this.items = items;
    this.total = 0;
  }
  
  // Methods (CYAN)
  checkout() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

// ============================================
// JSX / REACT
// ============================================

// JSX Components (HOT PINK)
const ProductCard = ({ name, price, inStock }) => {
  // Hooks (CYAN)
  const [quantity, setQuantity] = useState(1);
  
  return (
    /* HTML Tags (MAGENTA) */
    <div className="product-card" id="featured-product">
      {/* Attributes (ORANGE), Values (NEON GREEN) */}
      <h2 className="title">{name}</h2>
      <p className="price">${price}</p>
      
      {/* Keywords (MAGENTA) */}
      {inStock ? (
        <button onClick={() => setQuantity(quantity + 1)}>
          Add to Cart
        </button>
      ) : (
        <span className="out-of-stock">Sold Out</span>
      )}
    </div>
  );
};

// ============================================
// PYTHON
// ============================================

# Comments (GRAY italic)

# Decorators (HOT PINK)
@dataclass
@property
class Product:
    """Classes (HOT PINK)"""
    
    # Keywords (MAGENTA), self (ORANGE italic)
    def __init__(self, name, price):
        self.name = name  # Strings (NEON GREEN)
        self.price = price  # Numbers (ORANGE)
        self.quantity = 0
    
    # Methods/Functions (CYAN)
    def calculate_total(self, tax_rate=0.08):
        # Variables (WHITE)
        subtotal = self.price * self.quantity
        tax = subtotal * tax_rate
        
        # f-strings (NEON GREEN with YELLOW interpolation)
        return f"Total: ${subtotal + tax:.2f}"
    
    # Control flow (MAGENTA)
    def is_available(self):
        if self.quantity > 0:
            return True
        else:
            return False

# List comprehension with multiple color elements
prices = [item.price for item in products if item.is_available()]

# ============================================
// CSS / SCSS
// ============================================

/* Selectors (MAGENTA) */
.product-card {
  /* Properties (ORANGE), Values (NEON GREEN) */
  background-color: #1a1a1a;
  border: 2px solid #ff00ff;
  padding: 20px;
  /* Units (YELLOW) */
  margin: 10px;
  border-radius: 8px;
}

/* IDs (CYAN) */
#featured-product {
  box-shadow: 0 4px 8px rgba(255, 0, 255, 0.3);
}

/* Classes (HOT PINK) */
.title {
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
}

.price {
  color: #39ff14;
  font-size: 18px;
}

/* Pseudo-classes (MAGENTA) */
.button:hover {
  background-color: #ff00ff;
  transform: scale(1.05);
}

/* SCSS Variables */
$primary-color: #ff00ff;
$secondary-color: #00ffff;

/* SCSS Nesting */
.cart {
  .item {
    /* Properties (ORANGE) */
    display: flex;
    
    &:hover {
      background: lighten($primary-color, 10%);
    }
  }
}

// ============================================
// HTML
// ============================================

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Tags (MAGENTA), Attributes (ORANGE), Values (NEON GREEN) -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyberpunk Store</title>
</head>
<body>
  <!-- Class names (should be ORANGE in attributes) -->
  <div class="container" id="main-content">
    <h1 class="heading">Welcome</h1>
    <p class="description">High contrast theme demonstration</p>
    
    <!-- Inline styles -->
    <button style="background: #ff00ff; color: #000;">
      Click Me
    </button>
  </div>
  
  <script src="app.js"></script>
</body>
</html>

// ============================================
// EDGE CASES & SPECIAL SCENARIOS
// ============================================

// Error highlighting (RED)
const invalid = undefined.property; // Error!

// Regular expressions (YELLOW)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// JSON
{
  "name": "Product",  // Keys (CYAN), Values (NEON GREEN)
  "price": 29.99,     // Numbers (ORANGE)
  "inStock": true     // Constants (ORANGE)
}

// TypeScript specific
interface ProductInterface {  // Types (HOT PINK)
  name: string;
  price: number;
  quantity?: number;
}

type CartItem = {
  product: ProductInterface;
  quantity: number;
};

// Markdown
# Heading (MAGENTA)
**Bold text** (ORANGE)
*Italic text* (CYAN)
[Link text](url) (NEON GREEN)
`code` (HOT PINK)

/*
 * COLOR SUMMARY:
 * - MAGENTA (#ff00ff): Keywords, tags, selectors
 * - CYAN (#00ffff): Functions, IDs, cursor
 * - NEON GREEN (#39ff14): Strings, values
 * - ORANGE (#ff6600): Numbers, attributes, properties
 * - HOT PINK (#ff0080): Classes, types, components
 * - YELLOW (#ffff00): Template expressions, units, regex
 * - WHITE: Variables, text
 * - RED: Errors
 * - GRAY: Comments
 */
