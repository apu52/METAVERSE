const { text } = require('express');
const mongoose=require('mongoose');
const router = require('../Routes/CreateUser');

const { Schema }=mongoose;

const OrderSchema=new Schema({

    phoneNumber:
    {
        type:String,
        required:true,
        unique:true
    },
    order_data:
    {
        type:Array,
        required:true
        
    }
})
module.exports=mongoose.model('order',OrderSchema)