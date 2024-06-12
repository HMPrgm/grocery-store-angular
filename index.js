const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product')
const cors = require('cors')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/grocery-store');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//TODO REPLACE CART WITH CART DATABASE
const cart = []

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.get('/products', async (req,res)=> {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send(await Product.find({}));
})



app.post('/cart', async (req,res) => {
  const {id} = req.body;
  const product = await Product.findById(id);
  console.log(product);
  if (!cart.find(val => val.product._id == id)){
    cart.push({
      qty:1,
      product
    })
  } else {
    cart.find(val => val.product._id == id).qty++
  }
})

app.get('/cart', (req,res)=>{
  res.send(cart)
})

const port = 5000 | 5001
app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
})