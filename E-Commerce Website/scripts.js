let cart = [];

function addToCart(productName, productPrice) {
  // Add product to cart array
  cart.push({ name: productName, price: productPrice });

  // Update cart button text
  document.getElementById("cart-btn").innerText = `Cart (${cart.length})`;

  // Update cart modal
  updateCartModal();
}

function updateCartModal() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartItems.innerHTML = ''; // Clear current cart items

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPriceElement.textContent = total.toFixed(2);
}

function openCart() {
  document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

function checkout() {
  alert("Proceeding to checkout!");
  cart = []; // Clear cart after checkout
  updateCartModal();
  closeCart();
}

// Open cart modal when cart button is clicked
document.getElementById("cart-btn").addEventListener("click", openCart);
