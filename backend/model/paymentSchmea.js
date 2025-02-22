const mongoose = require('mongoose');



const paymentSchema = new mongoose.Schema({
    userid : {
        type: String,
        required: true
    },
    orderid: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    paymentMode: {
        type: String,
        required: true
    },
    refnumber: {
        type: String,
        required: true
    }
});


const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;