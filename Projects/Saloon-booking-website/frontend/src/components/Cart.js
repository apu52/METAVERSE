import React from 'react'
import Shop1 from '../pages/Shopesmens/Shop1';
import { useCart, useDispatchCart } from './Contextreducer'
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import { useState } from 'react';
import Model from '../pages/Model';
import Login2 from '../pages/Login2';
import { Link } from 'react-router-dom';


export default function Cart() {
    let finalprice=0
    const [cartview, setcartview] = useState(false)
    let navigate=useNavigate();
    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className=" text-center w-100 fs-3 mt-5">The Cart Is Empty</div>
                <Link className="self-aligh-center  mt-5 btn btn-dark w-50"style={{"marginLeft":"150px"}} to="/My-Orders"><u><h4>Go To My Orders</h4></u></Link>
            </div>
        )
    }
    const handleCheckout=async(e)=>{
        e.preventDefault();
        if(!localStorage.getItem("phoneNumber"))
        {
            setcartview(true)
            alert("Please Login To Continue")
        }
        else{

        
        let phonenumber=localStorage.getItem("phoneNumber");
        let response=await fetch("https://enableus-ybzk.onrender.com/api/orderData",
        {
            
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                    order_data:data,
                    phoneNumber:phonenumber,
                    order_date:new Date().toDateString()
                })
        }
        );
        if(response.status===200)
        {
            dispatch({type:"DROP"})
            window.location.reload(true)
        }
    }
}
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="fs-3 ms-3">
                            Summary
                        </div>
                    </div>
                </div>

                <hr />
                {
                    data.map((service, index) => (
                        <div className="container">
                            <div className="row">
                                <div className="col mt-3 ms-3">
                                    {service.service}
                                </div>
                                <div className="col mt-3 ">
                                    ₹{service.price}
                                </div>
                                <div className="col me-5">
                                    < div className="">
                                        <i class="bi bi-dash-circle btn " onClick={() => {
                                            if ((service.qty) !== 0) {
                                                service.qty=service.qty-1;
                                                dispatch({type:"UPDATE",qty:service.qty});
                                               
                                            }
                                            if ((service.qty) === 0) {
                                                service.visible=true;
                                               dispatch({type:"REMOVE",index:index})
                                               
                                            }
                                        }
                                        }></i>
                                        {service.qty}
                                        <i class="bi bi-plus-circle btn  " onClick={() => {service.qty=service.qty+1
                                         dispatch({type:"UPDATE",qty:service.qty});
                                        }} style={{ "position": "absolute" }}></i>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    ))
                }
                 <div className="container" style={{ "bottom": "20px", "right": "20px", "position": "fixed", "width": "250px", "textAlign": "center", "paddingBottom": "-50px" }}>
              <div className="row  py-2">
                <div className="col fs-4 fw-bold">
                {
                          data.map((service, index) => {
                            finalprice=finalprice+service.qty*service.price;
                            console.log(finalprice)
                          })

                }
                ₹{finalprice}
                </div>
                <div className="v col">
                <div className="btn-primary btn" style={{"bottom":"20px","right":"20px"}} onClick={handleCheckout}>Checkout</div>
                </div>
              </div>
            </div>
              
                            {cartview ? <Model onClose={() => setcartview(false)}><Login2/></Model> : null}
            </div>
        </div>
    )
}
