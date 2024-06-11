const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product')


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/grocery-store');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/products', (req,res)=> {
    res.send(Product.find({}));
})



app.post('/cart', (req,res) => {
    const {id} = req.body;
    const product = Product.findById(id);
    console.log(product);
})

app.get('/cart', (req,res)=>{

})

const port = 5000 | 5001
app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
})