const mongoose=require('mongoose');
const addressSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
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

});

const Address = mongoose.model('Address',addressSchema);
module.exports = Address;