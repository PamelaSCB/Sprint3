// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

// Exercise 1

function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let i = 0,
    productPurchased,
    search = false;

  while (i < products.length && search === false) {
    if (products[i].id === id) {
      productPurchased = { ...products[i] };
      search = true;
    }
    i++;
  }

  // 2. Add found product to the cartList array
  if (search === true) cartList.push(productPurchased);

  console.table(cartList);
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;

  console.table(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array

  let i,
    price = 0,
    totalPrice = 0;

  for (i = 0; i < cartList.length; i++) {
    price = cartList[i].price;
    totalPrice += price;
  }

  console.log(totalPrice);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  let i, cartListItem, cartItem;

  for (i = 0; i < cartList.length; i++) {
    cartListItem = cartList[i];
    cartItem = cart.find((element) => element.id === cartListItem.id);

    if (cartItem === undefined) {
      cartListItem.quantity = 1;
      cartListItem.subTotal = cartListItem.price * cartListItem.quantity;

      cartListItem.subTotalWithDiscount = "not available";
      cart.push(cartListItem);
    } else {
      cartItem.quantity += 1;
      cartItem.subTotal = cartItem.price * cartItem.quantity;

      cartItem.subTotalWithDiscount = "not available";
    }
  }
  applyPromotionsCart();
  console.table(cart);
  //  Se creo el boton "Generate Cart" para que se pueda aplicar las funciones: generateCart() + applyPromotionsCart().
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  let i, cartItem;
  for (i = 0; i < cart.length; i++) {
    cartItem = cart[i];

    if (cartItem.id === 1 && cartItem.quantity >= 3) {
      cartItem.subTotalWithDiscount = Number(
        (10 * cartItem.quantity).toFixed(2)
      );
    }

    if (cartItem.id === 3 && cartItem.quantity >= 10) {
      cartItem.subTotalWithDiscount = Number(
        ((2 / 3) * cartItem.price * cartItem.quantity).toFixed(2)
      );
    }
  }

  console.table(cart);
  // La función applyPromotionsCart() esta aplicado en el boton "Generate Cart"
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let i,
    shoppingList = "",
    cartItem,
    cartTotal = 0;

  for (i = 0; i < cart.length; i++) {
    cartItem = cart[i];

    shoppingList += "<tr>";
    shoppingList += "<th scope='row'>" + cartItem.name + "</th>";
    shoppingList += "<td>" + cartItem.price + "</td>";
    shoppingList += "<td>" + cartItem.quantity + "</td>";
    if (cartItem.subTotalWithDiscount === "not available") {
      shoppingList += "<td>" + cartItem.subTotal + "</td>";
      cartTotal += cartItem.subTotal;
    } else {
      shoppingList += "<td>" + cartItem.subTotalWithDiscount + "</td>";
      cartTotal += cartItem.subTotalWithDiscount;
    }
    shoppingList += "</tr>";
  }
  document.getElementById("cart_list").innerHTML = shoppingList;
  document.getElementById("total_price").innerHTML = cartTotal.toFixed(2);

  // Se hizo dinamico el contador de productos en el boton "Cart Modal"
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart

  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  generateCart();
  printCart();
}
