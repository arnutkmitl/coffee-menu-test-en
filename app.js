const menu = [
  { name: "Espresso", price: 3, desc: "Bold shot, medium roast", category: "Coffee" },
  { name: "Latte", price: 4.5, desc: "Whole milk, double shot", category: "Coffee" },
  { name: "Cappuccino", price: 4, desc: "Thick foam, dusted with cocoa", category: "Coffee" },
  { name: "Americano", price: 3.5, desc: "Espresso topped with hot water", category: "Coffee" },
  { name: "Mocha", price: 4.5, desc: "Espresso, chocolate, steamed milk", category: "Coffee" },
  { name: "Thai Iced Tea", price: 2.5, desc: "House recipe, less sweet on request", category: "Tea" }
];

function renderMenu(items) {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}<small>${item.desc}</small></span><span>$${item.price.toFixed(2)}</span>`;
    list.appendChild(li);
  }
}

let shownItems = menu;

function filterMenu(items, category) {
  if (category === "All") {
    return items;
  }
  return items.filter((item) => item.category === category);
}

function sortByPrice() {
  const sorted = [...shownItems].sort((a, b) => a.price - b.price);
  renderMenu(sorted);
}

for (const btn of document.querySelectorAll("#filters button")) {
  btn.addEventListener("click", () => {
    shownItems = filterMenu(menu, btn.dataset.category);
    renderMenu(shownItems);
  });
}

document.getElementById("sort-btn").addEventListener("click", sortByPrice);
renderMenu(menu);

document.getElementById("theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
