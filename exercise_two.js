// 2.1 Create a new Product Object
// HINT: The product properties should be the following
// The product name shoulf be "milk"
// The product price should be 5
// The product category should be "drink"

const product = {
  name: "milk",
  price: 5,
  category: "drink",
}; // change this line

// 2.2 Create a Product Constructor function
function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;

  return this;
}

const muffin = new Product("muffin", 1, "breakfast");

// 2.3 Create several products with the constructor
// EXAMPLE:
// const bread = new Product("bread", 9, "food")

// Create a product called "tomato" with a price of 2
// and category "vegetables"
const tomato = new Product("tomato", 2, "vegetables"); // Change this line
// Create a product called "apple" with a price of 1.5
// and category "fruits"
const apple = new Product("apple", 1.5, "fruits"); // Change this line

// Create a product called "chocolate" with a price of 50
// and category "sweets"
const chocolate = new Product("chocolate", 50, "sweets"); // Change this line

// 2.4 Calculate the total price of a shopping list
const shoppingList = [tomato, apple, chocolate];

function calculateTotal(productList) {
  let sum = 0;
  productList.forEach((product) => {
    sum = sum + product.price;
  });
  return sum;
}

const totalPrice = calculateTotal(shoppingList);

// 2.4 Use Object properties in real life

const gummyBears = new Product("gummyBears", 4, "sweets");
const banana = new Product("banana", 1, "fruits");
const snikers = new Product("snikers", 6, "sweets");
const orange = new Product("orange", 3, "fruits");

const unhealthyShoppingList = [orange, snikers, banana, gummyBears];

// 2.5.1 Filter fruits from the shopping list
// TODO: create a new shopping list by removing the sweets with a filter
function healtyFoodFilter(product) {
  return product.category !== "sweets";
}

const healthyShoppingList = unhealthyShoppingList.filter(healtyFoodFilter);

// 2.5.2 Filter the sweets from the shopping list

function sweetsFilter(product) {
  return product.category == "sweets";
}

const sweetsList = unhealthyShoppingList.filter(sweetsFilter);

// 2.6 Use Objects in combination with another objects

const person = {
  firstName: "Harry",
  lastName: "Potter",
  job: {
    // nested object
    name: "wizard",
    salary: 0,
    started_at: new Date("2010-01-01"),
  },
};

// TODO: Extract the year when the person started their job
const started_at = new Date(person.job.started_at).getFullYear(); // 2010

// 2.7 Use the for ... in loop to get an Object properties
const store = {
  name: "Grocery Store",
  type: "normal",
  size: "medium",
  location: "Berlin",
};

// return all the store properties using a for ... in loop
function getProperties() {
  let getKeys = [];
  for (let key in store) {
    getKeys.push(key);
  }
  return getKeys;
}

// 2.8 Sum product prices using object properties
let productPrices = {
  milk: 3,
  apple: 6,
  bread: 23,
};

// TODO: Complete getTotalPrice to return the sum of all the product prices
// The function should work with objects with any number of properties
function getTotalPrice(productPricesObject) {
  let sum = 0;
  let keyList = Object.keys(productPrices);
  keyList.forEach((product) => {
    sum = sum + productPricesObject[product];
  });
  return sum;
}
// 2.9 Add a tax to the product prices
const productPricesNet = {
  milk: 3,
  apple: 6,
  bread: 23,
};

// TODO: Complete applyTax to return the prices with VAT 19%
function applyTax(productPricesNet) {
  //Object.defineProperty(productPricesNet, 'taxes', {value: 3, writable: false})
  let keyList = Object.keys(productPricesNet);
  let newObject = {};
  keyList.forEach((product) => {
    newObject[product] = 1.19 * productPricesNet[product];
  });
  return productPricesNet;
  // The new price should include the tax: old_price * 1.19
}

const productPricesBrutto = applyTax(productPricesNet);

// ------- THE END ------------------------------------
/*
   _____          _   __          ___ _   _     _____                            
  / ____|        | |  \ \        / (_) | | |   |  __ \                           
 | |     ___   __| | __\ \  /\  / / _| |_| |__ | |  | |_ __ __ _  __ _  ___  ___ 
 | |    / _ \ / _` |/ _ \ \/  \/ / | | __| '_ \| |  | | '__/ _` |/ _` |/ _ \/ __|
 | |___| (_) | (_| |  __/\  /\  /  | | |_| | | | |__| | | | (_| | (_| | (_) \__ \
  \_____\___/ \__,_|\___| \/  \/   |_|\__|_| |_|_____/|_|  \__,_|\__, |\___/|___/
                                                                  __/ |          
                                                                 |___/           
*/

// DO NOT TOUCH THIS CODE
module.exports = function testWrapper() {
  return {
    one: product,
    two: {
      Product,
      muffin,
    },
    three: {
      apple,
      tomato,
      chocolate,
    },
    calculateTotal,
    healtyFoodFilter,
    sweetsFilter,
    started_at,
    getProperties,
    getTotalPrice,
    applyTax,
  };
};
