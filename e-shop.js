let cart = [];

let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");
let card_container = document.getElementById("items");
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

let apiCall = () => {
  let promise = new Promise((resolve, reject) => {
    // fetch the data from the api
    let data = fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    // check if the data
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  });

  return promise;
};

window.onload = () => {
  apiCall()
    .then((data) => {
      // data is an array of 20 object :product
      // in order to loop through the array we need foreach
      // so I can have access to each and every element isnde this

      data.forEach((product) => {
        let card = document.createElement("div");
        card.classList = "card";
        // create the image cart
        let img_container = document.createElement("div");
        let product_img = document.createElement("img");
        product_img.id = "img";
        product_img.src = product.image;
        img_container.appendChild(product_img);
        card.appendChild(img_container);
        // create button and add it to the card

        let btn_container = document.createElement("div");
        let addBtn = document.createElement("button");
        addBtn.textContent = "Add to the cart";
        addBtn.addEventListener("click", () => {
          cart.push(product);
          console.log(product);
        });
        let card_name = document.createElement("div");
        let title = document.createElement("p");
        let price = document.createElement("p");
        card_name.classList = "card-name";
        card_name.appendChild(title);
        card_name.appendChild(price);
        title.textContent = product.title;
        price.textContent = product.price;
        card.appendChild(card_name);

        // let star_container = document.createElement("div");
        // let star1 = document.createElement("img");
        // let star2 = document.createElement("img");
        // let star3 = document.createElement("img");
        // let star4 = document.createElement("img");
        // let star5 = document.createElement("img");
        // star_container.classList = "stars-icon";
        // star1.src = "./images/star.png";
        // star2.src = "./images/star.png";
        // star3.src = "./images/star.png";
        // star4.src = "./images/star.png";
        // star5.src = "./images/star.png";
        // star_container.appendChild(star1);
        // star_container.appendChild(star2);
        // star_container.appendChild(star3);
        // star_container.appendChild(star4);
        // star_container.appendChild(star5);
        // card.appendChild(star_container);

        btn_container.appendChild(addBtn);
        card.appendChild(btn_container);
        card_container.appendChild(card);
      });
    })
    .catch(() => alert("We are working on it!!"));
};
