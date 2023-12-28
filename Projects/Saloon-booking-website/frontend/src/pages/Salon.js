import React,{useEffect,useState} from 'react'
import Navebar from '../components/Navebar'
import { Link } from 'react-router-dom'
import Shopcard from '../components/Shopcard';

export default function Salon() {
  const handlelogout=()=>{
    localStorage.removeItem("phoneNumber")
  }
  const [shopdata, setshopdata] = useState([]);
  const loaddata=async()=>{
      let response=await fetch("http://localhost:5000/api/shopdata",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }

      });
         response=await response.json();
         setshopdata(response[0]);
        


  }
  useEffect(() => {
    loaddata();
  }, [])
  

  return (
   
    <div >
    <nav className="navbar navbar-expand navbar-light mb-1" style={{"fontFamily":"Arial","marginBottom":"-20px"}}>
  <div className="container-fluid">
    <Link className="navbar-brand mx-3 fw-bold" style={{"fontSize":"30px","color":"#5a4444","fontFamily":"Arial"}} to="/"  >Enable US</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav me-5 " style={{"fontSize":"15px"}}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Why To Choose Us?</Link>
        </li>
        <li className="nav-item">
          {(localStorage.getItem("phoneNumber"))?
          <Link className="nav-link active" onClick={handlelogout} to="/login">Logout</Link>
          :<Link className="nav-link active" to="/login">Login/Signup</Link>}
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-3 btn" to="/">GoBack</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<div className=" card text-center" style={{"transform":"none"}}>
<div className="card-header">
  <ul className="nav nav-tabs card-header-tabs">
    <li className="nav-item">
      <Link className="nav-link active " aria-current="true" to="../Man-Salon">Men Salons</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link  " to="../Women-Salon">Women Salons</Link>
    </li>
    {/* <li className="nav-item">
      <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
    </li> */}
  </ul>
</div>
<div className="card-body">
<div className="row mb-5">
    {
      shopdata!==[]
      ? shopdata.map((data)=>{
        return (

          <div key={data._id} className="col-12 col-md-6 col-lg-3 ms-5 mb-5 mt-3">
              <Shopcard shopname={data.ShopName} imgsrc={data.img} type={data.Type} link={data.Link}/>
    
          </div>
         
        )
      })
      : <div>""""</div>
    }
  </div>
  {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
</div>
</div>
   </div>
  
  )
}


