const mongoose = require("mongoose");
const Product = require('./models/product')
// const Cart = require('./models/cart')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/grocery-store');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

Product.find({})
.then((data)=> {
    console.log(data)
})
.catch(e=>console.log(e))