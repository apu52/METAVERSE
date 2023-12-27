import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navebar from "../components/Navebar";

  export default function Home() {
    return (
      <div>
        <div className="conatiner-fluid">
          <div className="bg-img">
            <Navebar />
            <div className="tag">Beauty and cleanliness, all in one place.</div>
            <div className="container w-75 h-100 chooseimage rounded" style={{ "marginTop": "100px" }}>
              <div className="card-group self-align-center w-100 h-100 ">
                <div className="card h-75 m-5 rounded" style={{"width": "18rem"}}>
                 <Link to="./Man-Salon"><img src={require('./man-getting-his-beard-shaved-with-razor.jpg')} className="card-img-top" alt="..." /></Link>
                  <div className="card-body bg-dark ">
                    <h5 className="card-title text-white text-aligh-center">Men And Women Salons</h5>
                  </div>
                </div>
                <div className="card h-75 m-5 border rounded" style={{"width": "18rem"}}>
                <Link to="./House-Workers"> <img src={require('./smiling-young-cleaning-guy-wearing-uniform-cap-holding-bucket-cleaning-tools-with-mop.jpg')} className="card-img-top" alt="..." /></Link>
                  <div className="card-body bg-dark">
                    <h5 className="card-title text-white text-aligh-center">Home Workers</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="container-fluid " style={{ "marginTop": "250px" }}><Footer /></div>

      </div>
    );
  }
