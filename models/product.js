const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema  = new Schema({
    name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        required: true
      }
});

productSchema.virtual('formattedPrice').get(function() {
return `$${this.price.toFixed(2)}`;
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;