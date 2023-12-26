import React from 'react'
import { Link } from 'react-router-dom'


export default function Shopcard(props) {
  return (
    
        
                
  <div className="card" style={{"width": "18rem","color":"black"}}>
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.shopname}</h5>
    <p className="card-text">{props.type}</p>
    <Link to={props.link} state={{ Title:{props:props.shopname} }} className="btn btn-primary">Visit Salon</Link>
  </div>
</div>
                
           
       
  )
}
