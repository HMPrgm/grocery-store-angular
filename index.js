const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/grocery-store');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.get('/products', async (req,res)=> {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.send(await Product.find({}));
})



app.post('/cart', async (req,res) => {
    const {id} = req.body;
    const product = await Product.findById(id);
    console.log(product);
})

app.get('/cart', (req,res)=>{

})

const port = 5000 | 5001
app.listen(port, ()=>{
    console.log(`Listening on Port ${port}`)
})