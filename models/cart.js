const mongoose = require('mongoose');
const Product = require('./product');
const Schema = mongoose.Schema;

const cartSchema  = new Schema({
    product : {
        type: Product,
        required: true
    },
    qty : {
        type: Number,
        required: true,
        min: 1
    }

});


module.exports = mongoose.model('Product', productSchema);