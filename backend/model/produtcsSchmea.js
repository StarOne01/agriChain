const mongoose = require('mongoose');



const productsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productImage:[
        {
            type: String,
            required: true
        }
    ],
    productDescription: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    sellerId: {
        type: String,
        required: true
    }
});


const Products = mongoose.model('Products', productsSchema);

module.exports = Products;