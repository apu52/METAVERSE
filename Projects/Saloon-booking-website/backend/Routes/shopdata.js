const express = require('express')
const router = express.Router();


router.post('/shopdata',(req,res)=>{
    try {
        res.send([global.shop_details])
        
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }

})

module.exports = router;