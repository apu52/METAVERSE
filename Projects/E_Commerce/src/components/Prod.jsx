import React,{ useState} from "react"
import {Link} from "react-router-dom"
var dict=[];
export function getupdatedProd(){
    return dict;
}
const stars=["★","★★","★★★","★★★★","★★★★★"];
function Prod(props){
    const [showReview, setShowReview] = useState(false); // State to manage review visibility
    const[flag,setflag]=useState(false);
    const toggleReview = () => {
        setflag(!flag);
        setShowReview(!showReview); // Toggle the review visibility when "Description" is clicked
    };
    function updProduct(){
        dict=props;
        getupdatedProd();
    }
    function deletE(){
        var result=window.confirm("Are you sure?")
        if (result===true){
            delProduct();
        }
        else{
            return;
        }
    }
    async function delProduct(){
        let Id=props.id;
        await fetch(`https://marketplace-1-b3203472.deta.app/product/${Id}`,{
            method:"DELETE"
        })
        .then((res)=>{
        .catch(err => console.error(err))