const menu = [
  { name: "Espresso", price: 3, desc: "Bold shot, medium roast" },
  { name: "Latte", price: 4.5, desc: "Whole milk, double shot" },
  { name: "Cappuccino", price: 4, desc: "Thick foam, dusted with cocoa" },
  { name: "Americano", price: 3.5, desc: "Espresso topped with hot water" },
  { name: "Mocha", price: 4.5, desc: "Espresso, chocolate, steamed milk" },
  { name: "Thai Iced Tea", price: 2.5, desc: "House recipe, less sweet on request" }
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

function sortByPrice() {
  const sorted = [...menu].sort((a, b) => a.price - b.price);
  renderMenu(sorted);
}

document.getElementById("sort-btn").addEventListener("click", sortByPrice);
renderMenu(menu);

document.getElementById("theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
