const mongoose = require('mongoose');


const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
     state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    farmSize: {
        type: Number,
        required: true
    },
    farmType: {
        type: String,
        required: true
    },
    farmImage:[
        {
            type: String,
            required: true
        }
    ]

});



const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;