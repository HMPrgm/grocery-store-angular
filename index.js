const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product');
const cors = require('cors');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/grocery-store');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//TODO REPLACE CART WITH CART DATABASE
let cart = [];
const success = {
  status:200,
  message:"Request Processed"
}
const notFound = {
  status:404,
  message:"Information not found"
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/products', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send(await Product.find({}));
})



app.post('/cart', async (req, res) => {
  let { id, qty } = req.body;
  qty = qty ? qty : 1;
  try {
    const product = await Product.findById(id);
    if (!cart.find(val => val.product._id == id)) {
      cart.push({
        qty,
        product
      });
    } else {
      cart.find(val => val.product._id == id).qty += qty;
    }
    res.send(success)
  } catch (e) {
    console.log(e);
    res.send(notFound)
  }
})

app.post('/checkout', (req,res) => {
  cart = [];
})

app.get('/cart', (req, res) => {
  res.send(cart);
})

const port = 5000 | 5001
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});