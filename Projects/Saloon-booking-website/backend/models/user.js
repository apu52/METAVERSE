const { text } = require('express');
const mongoose=require('mongoose');

const { Schema }=mongoose;

const UserSchema=new Schema({
    phoneNumber:
    {
        type:String,
        required:true
    }
});

module.exports=mongoose.model('user',UserSchema);