const express = require('express')
const router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const { json } = require('react-router-dom');

const jwbseceret='MyNameisDhruvAgarwal';

router.post("/createuser",
    // [
    // body('password', 'incorrect password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // const salt=await bcrypt.genSalt(10);
        // let secpassword=await bcrypt.hash(req.body.password,salt)
        try {
            await User.create({
                // name: req.body.name,
                // password:secpassword,
                // email: req.body.email,
                phoneNumber: req.body.phoneNumber
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })


router.post("/Login", [
body('password', 'incorrect password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
       
        try {
            let userphoneNumber=req.body.phoneNumber.toString();
            let userdata = await User.findOne({phoneNumber: {$all: userphoneNumber}});
           
            if (!userdata) {
                return res.status(400).json({ errors: "Try logging with correct credentials" });
            }

            const pwdCompare=await bcrypt.compare(req.body.password,userdata.password);
            if (!pwdCompare) {
                 console.log(userdata)
                return res.status(400).json({ errors: "password incorrect" });
            }
            const data={
                    user:{
                        id:userdata.id
                    }
            }
            const authToken=jwt.sign(data,jwbseceret);
            console.log(userdata)
            return res.json({ success: true,authToken:authToken });
            
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router;
