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
            alert('Product Updated Successfully!! You can check in Products Section.');
        })
    }
    const handleButtonClick = async () => {
        await updProduct();
    };
    return (
        <div>
            <Navbar />
            <div className="create_form container">
                <div className="option__">
                    <p id="create_option">Update Product</p>
                </div>
                <div className="inputs__">
                    <label>Title*</label>
                    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Name of Product'/>
                    <label>Category</label>
                    <input type='text' value={category}  onChange={(e)=>setCategory(e.target.value)} placeholder='Category'/>
                    <label>Price*</label>
                    <input type='number' value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder='Price'/>
                    <label>Image_URL</label>
                    <input type='text' value={img_url}  onChange={(e)=>setImgUrl(e.target.value)} placeholder='Image URL'/>
                    <label>Description*</label>
                    <textarea  value={description}  onChange={(e)=>setDescription(e.target.value)} placeholder="Description"></textarea>
                    <button id="button_" onClick={handleButtonClick} type="submit">Update</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Update;