const addProduct = () => {
  const productNameField = document.getElementById("Product-name");
  const productQuantityField = document.getElementById("Product-Quantity");
  const productNameValue = productNameField.value;
  const productQuantityValue = productQuantityField.value;
  productNameField.value = "";
  productQuantityField.value = "";

  displayProduct(productNameValue, productQuantityValue);
  saveLocalStorage(productNameValue, productQuantityValue);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("productContainer");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  ul.appendChild(li);
};

const getLocalStorageData = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveLocalStorage = (product, quantity) => {
  const cart = getLocalStorageData();
  cart[product] = quantity;
  const stringyFide = JSON.stringify(cart);
  localStorage.setItem("cart", stringyFide);
};

const displayProductFromLocalStorage = () => {
  const storedCart = getLocalStorageData();
  for (let product in storedCart) {
    const quantity = storedCart[product];
    displayProduct(product, quantity);
  }
};

displayProductFromLocalStorage();
