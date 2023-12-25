import React from 'react'
import spinner from './spinner.gif';

function Spinner({title}) {
  return (
    <div style={{"backgroundColor":"#f5f6f9","height":"100vh"}}>
    <div style={{"backgroundColor":"#f5f6f9","display":"flex","justifyContent":"center","alignItems":"center","height":"50vh"}}>
      <img  style={{"backgroundColor":"#f5f6f9","display":"block"}} src={spinner}/>
      </div>
      <div style={{"backgroundColor":"#f5f6f9","fontFamily":"Montserrat","fontSize":"45px","textAlign":"center","padding":"2%","color":"blueviolet","fontWeight":"600"}}>
      {title}
    </div>
    </div>
  )
}

export default Spinner
