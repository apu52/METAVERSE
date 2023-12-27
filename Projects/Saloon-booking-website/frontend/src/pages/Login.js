import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import Navebar from '../components/Navebar'

export default function Login() {
  const [credentials, setcredentials] = useState({ phoneNumber: "",password: "" })
let navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, phoneNumber: credentials.phoneNumber }))
        const response = await fetch("https://enableus-ybzk.onrender.com/api/Login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ password: credentials.password.toString(), phoneNumber: credentials.phoneNumber })
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials")
        }
        if (json.success) {
          localStorage.setItem("phoneNumber",credentials.phoneNumber);
          localStorage.setItem("authToken",json.authToken);
          navigate('/')
      }

    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: [event.target.value] })
    }
  return (
    <>
    <nav className="navbar navbar-expand navbar-light" style={{"fontFamily":"Arial","marginBottom":"-20px"}}>
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
          <Link className="nav-link active" to=""><u>Register As A worker</u></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-3 btn" to="/">GoBack</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    <hr/>
    
    <div className="container-fluid w-50 mt-5">
    <form onSubmit={handleSubmit}>
  <div className="mb-3" style={{"zIndex":"9"}}>
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.phoneNumber} name='phoneNumber' onChange={onchange} placeholder="phone number"/>
    <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} name='password' onChange={onchange}/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <button type="submit" className="btn ms-3 fs-5 " style={{"border":"none"}}><Link to="/SignUp">Create A New User?</Link></button>
</form>
    </div>
    </>
  )
}
