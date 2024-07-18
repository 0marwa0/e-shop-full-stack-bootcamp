import { apiCall } from "./apiCalls.js";
import { createCartIem } from "./displayFunctions.js";

let cart = [];
let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");
let modal_content = document.querySelector(".modal-content");
// when click outside the modal content hide the the overlay
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

cartIcon.addEventListener("click", () => {
  overlay.style.display = "block";
});
modal_content.addEventListener("click", (e) => {
  console.log(e);
  e.stopPropagation();
});

// function that shows items inside the cart

let showCartItems = () => {
  modal_content.innerHTML = "";
  cart.forEach((item) => {
    let { image, title, price } = item;
    let cartItem = document.createElement("div");
    let cart_img_container = document.createElement("div");
    let cart_img = document.createElement("img");
    let deleteBtn = document.createElement("button");
    cartItem.classList = "cart_item";
    cart_img.id = "cart-item-img";
    cart_img_container.classList = "cart-item-img-container";
    cart_img.src = image;
    deleteBtn.textContent = "x";
    cart_img_container.appendChild(cart_img);
    cartItem.appendChild(cart_img_container);
    cartItem.appendChild(deleteBtn);
    modal_content.appendChild(cartItem);
  });
};
export let addItemToCart = (product) => {
  let isItemInCart = cart.find((item) => {
    return product.id == item.id;
  });
  if (!isItemInCart) {
    cart.push({ ...product, item_quantity: 1 });
    showCartItems();
  } else {
    cart.map((item) => {
      if (item.id == product.id) {
        return { ...product, item_quantity: item.item_quantity++ };
      } else {
        return item;
      }
    });
  }

  console.log(cart, "its already in the cart ");
};

window.onload = () => {
  apiCall()
    .then((data) => {
      // data is an array of 20 object :product
      // in order to loop through the array we need foreach
      // so I can have access to each and every element isnde this
      data.forEach((product) => {
        createCartIem(product);
      });
    })
    .catch(() => alert("We are working on it!!"));
};
