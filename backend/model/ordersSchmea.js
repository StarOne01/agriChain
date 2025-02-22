const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    userid : {
        type: String,
        required: true
    },
    sellerId: {
        type: String,
        required: true
    },
    productid: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    }
});


const orderSchmea = mongoose.model('Orders', OrdersSchema);
module.exports = orderSchmea;