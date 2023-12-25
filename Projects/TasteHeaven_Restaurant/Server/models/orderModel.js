const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
   
  },
  flatno:{
    type:String,
  
},
contact:{
    type:Number,
    
},
address:{
    type:String,
  
},
landmark:{
    type:String,
    
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
      price: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],

  order_id: {
    type: String,
    required: true,
  },
  Total_Price: {
    type: Number,
    required: true,
  },
  date:{
    type:String,
    required: true,
  },
  time:{
    type:String,
    required: true,
  }
},{timestamps:true});
//address, email se nikalo,
//user ka naam bhi email se nikalo as we are using email as user_id as it would be unique

const Order=mongoose.model('Order',orderSchema);
module.exports = Order;