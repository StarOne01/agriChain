const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
  state: {
    type: String,
  },
  district: {
    type: String,
  },
  village: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  farmSize: {
    type: Number,
  },
  farmType: {
    type: String,
  },
  farmImage: [
    {
      type: String,
    },
  ],
});

const Farmer = mongoose.model("Farmer", farmerSchema);

module.exports = Farmer;
