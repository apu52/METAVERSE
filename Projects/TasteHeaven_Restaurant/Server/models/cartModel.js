const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  food: [
    {
      id: {
        type: Number,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        // required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      
    },
  ],
  Total_Price:{
    type:Number,
    required: true,
  }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
