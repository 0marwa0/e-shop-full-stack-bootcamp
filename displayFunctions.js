import { addItemToCart } from "./e-shop.js";

let card_container = document.getElementById("items");

export let createCartIem = (product) => {
  let card = document.createElement("div");
  card.classList = "card";
  // create the image cart
  let img_container = document.createElement("div");
  let product_img = document.createElement("img");
  product_img.id = "img";

  let { image, title, price } = product;

  product_img.src = image;
  img_container.appendChild(product_img);
  card.appendChild(img_container);
  // create button and add it to the card

  let btn_container = document.createElement("div");
  let addBtn = document.createElement("button");
  addBtn.textContent = "Add to the cart";
  addBtn.addEventListener("click", () => {
    addItemToCart(product);
  });

  let card_name = document.createElement("div");
  let title_p = document.createElement("p");
  let price_p = document.createElement("p");
  card_name.classList = "card-name";
  card_name.appendChild(title_p);
  card_name.appendChild(price_p);
  title_p.textContent = title;
  price_p.textContent = price + " $";
  card.appendChild(card_name);

  let star_container = document.createElement("div");
  star_container.classList = "stars-icon";
  card.appendChild(star_container);

  for (let i = 1; i < product.rating.rate; i++) {
    let startImg = document.createElement("img");
    startImg.src = "./images/star.png";
    star_container.appendChild(startImg);
  }

  btn_container.appendChild(addBtn);
  card.appendChild(btn_container);
  card_container.appendChild(card);
};
