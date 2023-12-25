import { Link } from "react-router-dom";
import React from "react";
import "./Homepage.css";
import restaurant from "./Images/undraw_special_event_-4-aj8.svg";
import Typed from "typed.js";

function Homepage() {

  
  //typedjs
  const user=JSON.parse(localStorage.getItem("Data"));
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`"A Taste of Paradise, in Every Bite"`],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div id="home">

      <div className="Home">
        <div className="leftcontent">
          <i>
            {" "}
            Welcome to <span class="headerdiff">Taste Heaven!</span>
          </i>
          <br></br>
          <span className="typedjs" ref={el} />
          {/* <Typed/> */}
          <p className="registercontent">
            Experience a heavenly culinary journey by<br></br> diving into Taste
            Heaven today.
          </p>

         {!user&&<> <Link to = "/signup"><button className="rgstrbtn">SignUp</button></Link>
          <Link to = "/login"><button className="lgnbtn">Login</button></Link><p className="registercontent">New Here? Please SignUp</p></>}
          
        </div>
        <div className="rightcontent">
          <img className="homeImg" src={restaurant} alt="restaurant" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
