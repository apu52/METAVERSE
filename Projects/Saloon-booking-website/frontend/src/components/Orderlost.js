import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatchCart } from './Contextreducer';
export default function Orderlost() {
     let dispatch =useDispatchCart();
    const handlelost=()=>{
        dispatch({type:"DROP"})
    }
  return (
    <div>
       <div>
                <div className=" text-center w-100 fs-3 mt-5">Your Orders Will Be lost</div>
                <Link className="self-aligh-center  mt-5 btn btn-danger w-25 fw-bold"style={{"marginLeft":"220px"}} onClick={{handlelost}} to="/Man-Salon"><h4>Continue</h4></Link>
            </div>
    </div>
  )
}
