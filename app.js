const menu = [
  { name: "Espresso", price: 3, desc: "Bold shot, medium roast", category: "Coffee" },
  { name: "Latte", price: 4.5, desc: "Whole milk, double shot", category: "Coffee" },
  { name: "Cappuccino", price: 4, desc: "Thick foam, dusted with cocoa", category: "Coffee" },
  { name: "Americano", price: 3.5, desc: "Espresso topped with hot water", category: "Coffee" },
  { name: "Mocha", price: 4.5, desc: "Espresso, chocolate, steamed milk", category: "Coffee" },
  { name: "Thai Iced Tea", price: 2.5, desc: "House recipe, less sweet on request", category: "Tea" },
  { name: "Croissant", price: 3, desc: "Real butter, baked fresh every morning", category: "Pastries" },
  { name: "Brownie", price: 4.5, desc: "Rich dark chocolate", category: "Pastries" }
];

function renderMenu(items) {
  const list = document.getElementById("menu-list");
  list.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}<small>${item.desc}</small></span><span>$${item.price.toFixed(2)}</span>`;
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    addBtn.addEventListener("click", () => {
      cart = addToCart(cart, item);
      renderCart();
    });
    li.appendChild(addBtn);
    list.appendChild(li);
  }
}

let shownItems = menu;
let cart = [];

function renderCart() {
  const { count, total } = cartSummary(cart);
  document.getElementById("cart-summary").textContent = `Cart: ${count} items, total $${total.toFixed(2)}`;
}

function sortByPrice() {
  renderMenu(sortItemsByPrice(shownItems));
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

document.getElementById("clear-cart-btn").addEventListener("click", () => {
  cart = [];
  renderCart();
});
