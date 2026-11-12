const test = require("node:test");
const assert = require("node:assert");
const { filterMenu, sortItemsByPrice } = require("../menu-logic.js");

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
