const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema(
  {
    userid:{
        type: String,
        required: true,
    },
    name:{
      type: String,
      required: true,
  },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
    },
    bookid: {
      type: String,
      required: true,
    },
    e: {
        type: Number,
        required: true,
      },
      f: {
        type: Number,
        required: true,
      },
      dis: {
        type: Number,
        required: true,
      },
      day: {
        type: Number,
        required: true,
      },
    logid: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status:{
      type:Number,
      default:0,
    },
    message:{
      type: String,
    },
    ddate:{
      type:String,
    }
  },
  { timestamps: true }
);
//address, email se nikalo,
//user ka naam bhi email se nikalo as we are using email as user_id as it would be unique

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
