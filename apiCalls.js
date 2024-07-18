export let apiCall = () => {
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
