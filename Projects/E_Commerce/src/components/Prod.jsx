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
            return res;
        })
        .then(()=>{
            window.location.reload(false);
        })
    }
    return (
        <div className="card" style={{width: "18rem"}}>
            {!showReview && (
            <img className="card-img-top" id="img_prod" src={props.imgurl} alt="Card image cap" />)}
            {showReview && (
            <div className={`card-img-top review ${showReview ? "show-review" : ""}`}>
                <h1>Description</h1>
                <p className="describe">{props.description}</p>
                <h1>Review</h1>
                <p className="ratings">{stars[(Math.floor(5*Math.random()))]}</p>
                <div className="update_del options">
                    <Link to="/update" style={{width:"100%",height:"100%"}}><button type="submit" onClick={updProduct} className="update_button button">Update</button></Link>
                    <button type="submit" onClick={deletE} className="delete_button button">Delete</button>
                </div>
            </div>
            )}
            <div className="product_body">
                <p className="card-title product_name">{props.title}</p>
                <p className="product_name"><strong>&#8377;</strong>&nbsp;{props.price}</p>
            </div>
            <div className="description">
                <p id="des" onClick={toggleReview}>{flag?"Image":"Description"}</p>
            </div>
            <div className="options">
                <div className="add_to_cart">
                    <a href="#">Add to Cart</a>
                </div>
                <div className="buy_now">
                    <a href="#" className="card-link">Buy Now</a>
                </div>
            </div>
        </div>
    )
}
export {Prod,dict};