import React,{useState} from 'react'
import './Buycard.css'
import data from '../../data';

const Buycard = ({updateModal,elec,fur,dis,updatePrice}) => {
  const [logData, setLogData] = useState({ name: "", email: "" ,phone:"",electronics:0,furniture:0,dist:0});
  let name, value;
  const BuyData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLogData({ ...logData, [name]: value });
    
  };
  const [Price,setPrice]=useState(0)
  let prc;
  const Calculate = () => {
      let e=Number(logData.electronics);
      let f=Number(logData.furniture);
      let d=parseInt(logData.dist,10);
      prc=(e)*elec+(f)*fur+(d)*dis;
      // console.log(prc);
      // setPrice(prc);
      updatePrice({name:logData.name,e:e,f:f,d:d,price:prc,contact:logData.phone,email:logData.email});

  }
  return (
    <div style={{"display":"flex","justifyContent":"center", "alignItems":"center", "padding":"5%"}}>
      <div className='buycard-box'>
      <p className='buycard-header'>Book Now!</p>
      <div className='buycard-input-box'>
        <p>Name</p>
        <input className='buycard-input' type="text" placeholder='John' name="name" onChange={BuyData}></input>
      </div>
      <div className='buycard-input-box'>
        <p>Email</p>
        <input className='buycard-input' type="text" placeholder='John@gmail.com' name="email" onChange={BuyData} ></input>
      </div>
      <div className='buycard-input-box'>
        <p>Phone</p>
        <input className='buycard-input' type="text" placeholder='9654321876' name="phone" onChange={BuyData}></input>
      </div>
      <p style={{"fontFamily":"Montserrat","fontSize":"1.75rem","textDecoration":"underline","margin":"8%"}}><b>Items</b></p>
      <div className='buycard-Itemsbox'>
      <div className='buycard-Items-subbox'>
       <p>Electronics:</p> 
       <input className='buycard-Items-input' type="number" min="0" placeholder='0' name="electronics" onChange={BuyData}></input>
      </div>
      <div className='buycard-Items-subbox'>
       <p>Furniture:</p> 
       <input className='buycard-Items-input' type="number" min="0" placeholder='0' name="furniture" onChange={BuyData}></input>
      </div>
      </div>
      <div className='buycard-input-box'>
        <p>Shipping Distance (in KM)</p>
        <input style={{"width":"30%","textAlign":"center"}} className='buycard-input' min="0" type="number" placeholder='2' name="dist" onChange={BuyData}></input>
      </div>
        {/* <p className='buycard-price'>Estimated Price : <span style={{"textDecoration":"bold","color":"green"}}>Rs {Price}</span></p> */}
        <button className='buycard-button' onClick={()=>{updateModal();Calculate();}}>Book</button>
      </div>
    </div>
  )
}

export default Buycard;
