import React from "react";
import Audiolist from "./Audiolist";
import "./home.css";

const Home = (props) => {
  return (
    <div style={props.blur}>
      <div className="home" style={props.home_style}>
        {
          <Audiolist
            wel_style={props.wel_style}
            my_style={props.my_style}
            p_style={props.p_style}
            title={props.title}
            popupfun={props.popupfun}
          />
        }
      </div>
    </div>
  );
};

export default Home;
