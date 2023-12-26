require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');
const mongourl=process.env.MONGO_URL
const ShopDetails = require('./models/shopdata')

const fs = require('fs');

const mongoDB =async() =>{
    await mongoose.connect(mongourl, { useNewUrlParser: true },async(err, result)=>{
    if(err) console.log("---", err)
    else{

        //one time import
        const data = JSON.parse(fs.readFileSync('shop_data.json', 'utf8')); // Read the JSON file
        console.log(data)
        await ShopDetails.insertMany(data); 
            
        console.log("Data imported successfully");

        console.log("connected"); 
        const fetched_data = await mongoose.connection.db.collection ("ShopDetails");
    
        fetched_data.find({}).toArray (function(err, data) {
            
        if(err) console.log(err);
        else{
            global.shop_details=data;
        };
        })
    }
    
    



});

}
module.exports=mongoDB;

