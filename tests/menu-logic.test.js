const test = require("node:test");
const assert = require("node:assert");
const { filterMenu, sortItemsByPrice, addToCart, cartSummary } = require("../menu-logic.js");

const sample = [
  { name: "Latte", price: 4.5, category: "Coffee" },
  { name: "Thai Iced Tea", price: 2.5, category: "Tea" },
  { name: "Espresso", price: 3, category: "Coffee" },
  { name: "Brownie", price: 4.5, category: "Pastries" }
];

test("filtering Coffee returns only coffee items", () => {
  const result = filterMenu(sample, "Coffee");
  assert.deepStrictEqual(result.map((item) => item.name), ["Latte", "Espresso"]);
});

test("the All category returns every item", () => {
  assert.strictEqual(filterMenu(sample, "All").length, 4);
});

test("a category with no items returns an empty list", () => {
  assert.deepStrictEqual(filterMenu(sample, "Fruit"), []);
});

test("sorts by price, lowest first", () => {
  const prices = sortItemsByPrice(sample).map((item) => item.price);
  assert.deepStrictEqual(prices, [2.5, 3, 4.5, 4.5]);
});

test("sorting does not change the original list", () => {
  sortItemsByPrice(sample);
  assert.strictEqual(sample[0].name, "Latte");
});

test("adding to the cart does not change the original cart", () => {
  const cart = [];
  const newCart = addToCart(cart, sample[0]);
  assert.strictEqual(cart.length, 0);
  assert.strictEqual(newCart.length, 1);
});

test("cart summary counts items and adds up prices", () => {
  const cart = addToCart(addToCart([], sample[0]), sample[1]);
  assert.deepStrictEqual(cartSummary(cart), { count: 2, total: 7 });
});

test("an empty cart has 0 items and a $0 total", () => {
  assert.deepStrictEqual(cartSummary([]), { count: 0, total: 0 });
});
