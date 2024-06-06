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

module.exports = mongoose.model('Product', productSchema);