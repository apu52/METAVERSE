const express = require('express');
const order = require('../models/order');
const router = express.Router();


router.post("/orderData",async(req,res)=>{
    console.log("jjj")
    let data=req.body.order_data
    await data.splice(0,0,{order_date:req.body.order_date})
    let phn=await order.findOne({'phoneNumber':req.body.phoneNumber})
    if(phn==null)
    {
        try {
            await order.create({
                phoneNumber:req.body.phoneNumber,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
       
        
    } catch (error) {
        console.error(error.message);
        res.send("Server Error",error.message)
    }
}
else{
    try {
        await order.findOneAndUpdate({phoneNumber:(req.body.phoneNumber)},
            {$push :{order_data:data}}).then(()=>{
                res.json({success:true})
            })
            
        
    } catch (error) {
        console.error(error.message);
        res.send("Server Error",error.message)
    }
}

})
router.post("/myorderData",async(req,res)=>{
    try {
        let mydata= await order.findOne({'phoneNumber':req.body.phoneNumber})
        res.json({orderData:mydata})
    } catch (error) {
        res.send("Server Error",error.message)
    }
}
)
module.exports = router;