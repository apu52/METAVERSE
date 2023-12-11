import React from "react"
import { useRef,useState,useEffect } from "react"
import Navbar from "./Navbar"
import {Prod} from "./Prod"
import Footer from "./Footer"
import Loading from "./Loading"
import "bootstrap/dist/css/bootstrap.min.css"
function products(product){
    return (<Prod
        key={product.key}
        id={product.id}
        title={product.title}
        price={product.price}
        imgurl={product.imgurl}
        description={product.description}
        category={product.category}
    />
    )
}
export function usePreviousUrl() {
    const prevUrlRef = useRef();
    useEffect(() => {
        prevUrlRef.current = window.location.href;
        }, []);
    console.log(prevUrlRef.current);
    return prevUrlRef.current;
}
function Product(){
    const [flag,setflag]=useState(true);
    const [product,setproduct]=useState([]);
    async function getProducts(){
        const url="https://marketplace-1-b3203472.deta.app/search/promoted"
        const response = await fetch(url);
        const result=await response.json();
        let dict=[]
        for (let i=0;i<result.length;i++){
            dict.push({
                key:i+1,
                id: result[i]._id.$oid,
                title:result[i].title,
                price:result[i].price,
                imgurl:result[i].img_url,
                description:result[i].description,
                category:result[i].category
            })
        }
        setflag(false);
        setproduct(dict);
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div>
            <Navbar />
            <div className="products">
                {product.map(products)}
            </div>
            {flag ? <Loading /> : null}
            <Footer />
        </div>
    )
}
export default Product;