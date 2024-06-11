const mongoose = require("mongoose");
const Product = require('./models/product')
// const Cart = require('./models/cart')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/grocery-store');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

Product.deleteMany({})
.then(res => console.log(res))
.catch(e => console.log(e))
// Cart.deleteMany({})

Product.insertMany(
    [{
        name: "Apple",
        photo: "https://cdn-icons-png.freepik.com/512/123/123431.png",
        price: 1.49,
        category: "Fruit"
    },
    {
        name: "Banana",
        photo: "https://cdn-icons-png.freepik.com/512/5779/5779223.png",
        price: 1.49,
        category: "Fruit"
    },
    {
        name: "Blueberries",
        photo: "https://cdn-icons-png.flaticon.com/512/680/680942.png",
        price: 2.99,
        category: "Fruit"
    },
    {
        name: "Grapes",
        photo: "https://cdn-icons-png.flaticon.com/512/2836/2836932.png",
        price: 2.99,
        category: "Fruit"
    },
    {
        name: "Dragonfruit",
        photo: "https://cdn-icons-png.freepik.com/512/8645/8645298.png",
        price: 20.99,
        category: "Fruit"
    },
    {
        name: "Blackberries",
        photo: "https://cdn-icons-png.flaticon.com/512/3341/3341710.png",
        price: 2.49,
        category: "Fruit"
    },
    {
        name: "Strawberries",
        photo: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
        price: 3.49,
        category: "Fruit"
    },
    {
        name: "Orange",
        photo: "https://cdn-icons-png.flaticon.com/512/721/721098.png",
        price: 1.49,
        category: "Fruit"
    },
    {
      name: "Pineapple",
      photo: "https://cdn-icons-png.flaticon.com/512/8554/8554938.png",
      price: 2.49,
      category: "Fruit"
  }]
)
.then(res => console.log(res))
.catch(e => console.log(e))