import React,{useState} from "react"
import Navbar from "./Navbar"
import Footer from './Footer';
import {getupdatedProd} from './Prod.jsx'
function Update(){
    var dict={
        "title": "",
        "category": "",
        "price": "",
        "location": "New Delhi",
        "description": "",
        "imgurl": "",
        "metadata_user": "Meta",
        "isNegotiable": true,
        "isFeatured": true,
        "isPromoted": true
    }
    dict=getupdatedProd();
    const [title,setTitle]=useState(dict.title);
    const [price,setPrice]=useState(dict.price);
    const [category,setCategory]=useState(dict.category);
    const [description,setDescription]=useState(dict.description);
    const [img_url,setImgUrl]=useState(dict.imgurl);
    async function updProduct(){
        await fetch(`https://marketplace-1-b3203472.deta.app/product/${dict.id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            "title": title,
            "category": category,
            "price": price,
            "location": "New Delhi",
            "description": description,
            "img_url": img_url,
            "metadata_user": "Meta",
            "isNegotiable": true,
            "isFeatured": true,
            "isPromoted": true
        })
        },
        )
        .then(()=>{
        .catch(err => console.error(err))