import React from "react"
import {useState} from "react"
import Navbar from "./Navbar"
import Footer from './Footer';
function Create(){
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [description,setDescription]=useState("");
    const [img_url,setImgUrl]=useState("");
    let data={
        "title": title,
        "category": category,
        "price": price,
        "location": "New Delhi",
        "description": description,
        "img_url": img_url,
        "isNegotiable": true,
        "isFeatured": true,
        "isPromoted": true
    };
    async function createProduct(){
        if (data.title=="" || data.price=="" || data.description==""){
            alert("Fields are needed to fill");
            return;
        }
        try{
            await fetch("https://marketplace-1-b3203472.deta.app/product",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
            },
            )
            .then((result)=>{
            .catch(err => console.error(err))