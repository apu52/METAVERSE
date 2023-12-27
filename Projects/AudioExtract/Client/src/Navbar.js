import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = (props) => {

  const navigate= useNavigate();
  const Logout=()=>{
    toast.success("Logged Out Successfully");
    localStorage.removeItem("useraudify");
   const user= JSON.parse(localStorage.getItem("useraudify"));
   
   props.updateUser(user);
   
 
  }
  return (
    <>

<nav className="navbar" style={props.blur}>
      <div className="left">
        <Link className="link" to="/">
          <h3>{props.title}</h3>
        </Link>
        <Link className="link" to="/about">
          <h4>About Us</h4>
        </Link>
      </div>
      <div className="right">
        <div className="form-check form-switch">
          <input
            onClick={props.togglemode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
        <a href="/">
          <button onClick={Logout} className="signout">Sign Out</button>
        </a>
      </div>
    </nav> 
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Navbar;
