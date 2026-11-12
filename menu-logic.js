// Menu functions that don't touch the page, kept separate so they can be tested automatically

function filterMenu(items, category) {
  if (category === "All") {
    return items;
  }
  return items.filter((item) => item.category === category);
}

function sortItemsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

function addToCart(cart, item) {
  return [...cart, item];
}

function cartSummary(cart) {
  const total = cart.map((item) => item.price).reduce((a, b) => a + b, 0);
  return { count: cart.length, total };
}

// Export for Node.js tests; the browser skips this block
if (typeof module !== "undefined") {
  module.exports = { filterMenu, sortItemsByPrice, addToCart, cartSummary };
}
