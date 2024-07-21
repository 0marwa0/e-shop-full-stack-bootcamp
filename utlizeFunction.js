export let SaveCartInLocalStorage = (cart) => {
  //convert the array into string because localsorage only except string

  let cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};
