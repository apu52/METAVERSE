import { Link } from "react-router-dom";
import React from "react";
import "./Homepage.css";
import truck from "../Images/truck.jpg";
import Typed from "typed.js";

function Homepage() {

  
  //typedjs
  const user=JSON.parse(localStorage.getItem("Data"));
  // const el = React.useRef(null);

  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [`"India's largest 
  //     logistics services"`],
  //     typeSpeed: 50,
  //   });
  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <div id="home">

      <div className="Home">
        <div className="leftcontent">
          <i>
            {" "}
            Welcome to <span class="headerdiff">
            Transit-Masters!</span>
          </i>
          <br></br>
          <span className="typedjs"  >India's largest 
      logistics services</span>
          {/* <Typed/> */}
          {/* <p className="registercontent">
          We are India's largest fully integrated
          logistics services provider
          </p> */}

         {!user&&<> <Link to = "/signup"><button className="rgstrbtn">SignUp</button></Link>
          <Link to = "/login"><button className="lgnbtn">Login</button></Link><p className="registercontent">New Here? Please SignUp</p></>}
          
        </div>
        <div className="rightcontent">
          <img className="homeImg" src={truck} alt="restaurant" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
