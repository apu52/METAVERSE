import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import data from '../data';
import Navbar from '../components/Landing/Navbar'; 
//css
import '../Styles/LogisticProfile.css';
import Buycard from '../components/Logistic/Buycard';
import Footer from '../components/Landing/Footer';
import Modal from '../components/Logistic/Modal';
const LogisticProfile = () => {
  let {id}=useParams();
  let log=null;
  data.map((logi)=>{
    if(logi.id==id) {
      log=logi;
      return;
    }
  })
  const [showModal,setShowModal] =useState(false);
    const closeModal=()=>{
        setShowModal(false);
    }
    const [info,setInfo]=useState({name:"",e:0,f:0,d:0,price:0});
    const updatePrice=(pr)=>{
      setInfo(pr);
    }

  return (
    <div>
      {!log?<h1 style={{"fontWeight":"bold", "margin":"2%", "textAlign":"center","fontFamily":'Montserrat'}}>NO Logistic Service Found!</h1>:<div style={{"backgroundColor":"rgb(177, 231, 214)"}}>
      <Navbar/>
        <div className='logisticProfile-box'>
          <img className='logisticProfile-img' src={log.url}></img>
          <div className='logisticProfile-right'>
          <p className='logisticProfile-header'>{log.title}</p>
        <p className='logisticProfile-location'>{log.location}, India</p>
        <div className='logisticProfile-content'>
         {log.description}
        </div>
          </div>
         
        </div>
        <Buycard updateModal={()=>{setShowModal(true)}} elec={log.elec} fur={log.fur} dis={log.dis} updatePrice={updatePrice}/>
        {showModal&&<Modal closeModal={closeModal} Price={info}/>}
        <Footer/>
      </div>}
    </div>
  )
}

export default LogisticProfile
