import React from 'react'
import { Link } from "react-router-dom";
import './LogisticCard.css'
const LogisticCard = ({id,name,url,details,location}) => {
  return (
    <div>
      <div className='logistic-box'>
      <img className='logistic-img' src={url}/>
      <div className='logistic-rightsection'>
        <p className='logistic-header'>{name}</p>
        <p className='logistic-location'>{location}, India</p>
        <div className='logistic-content'>
         {details}
        </div>
        <Link to={`logistic/${id}`}><button className='logistic-button'>View</button></Link>
      </div>
      </div>
    </div>
  )
}

export default LogisticCard
