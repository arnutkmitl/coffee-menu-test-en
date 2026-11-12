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

// Export for Node.js tests; the browser skips this block
if (typeof module !== "undefined") {
  module.exports = { filterMenu, sortItemsByPrice };
}
