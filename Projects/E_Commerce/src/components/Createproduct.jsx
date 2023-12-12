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
                alert('Product Created Successfully and added to Product List.');
            })
        }
        catch(error){
            console.log(error);
        }
    }
    const handleButtonClick = async () => {
        await createProduct();
    };
    return (
        <div>
            <Navbar />
            <div className="create_form container">
                <div className="option__">
                    <p id="create_option">Create Product</p>
                </div>
                <div className="inputs__">
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Name of Product' required/>
                    <input type='text' value={category}  onChange={(e)=>setCategory(e.target.value)} placeholder='Category'/>
                    <input type='number' value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder='Price'/>
                    <input type='text' value={img_url}  onChange={(e)=>setImgUrl(e.target.value)} placeholder='Image URL'/>
                    <textarea  value={description}  onChange={(e)=>setDescription(e.target.value)} placeholder="Description"></textarea>
                    <button id="button_" onClick={handleButtonClick} type="submit">Create</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Create;