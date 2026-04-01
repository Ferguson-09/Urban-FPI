'use strict';

let cart = [];

// LOAD CART FROM STORAGE
function loadCart() {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  if (savedCart) {
    cart = savedCart;
    displayCart();
  }
}
loadCart();

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// DISPLAY CART
function displayCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartContainer.innerHTML += `
      <div>
        ${item.name} - $${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  cartContainer.innerHTML += `<h3>Total: $${total}</h3>`;
}

// REMOVE ITEM
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// LOGIN MODAL
function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function login() {
  alert("Logged in!");
  closeLogin();
}

// FORM VALIDATION
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
    return false;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email");
    return false;
  }

  alert("Message sent!");
  return true;
}