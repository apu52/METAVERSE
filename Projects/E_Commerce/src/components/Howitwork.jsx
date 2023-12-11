import React from "react";
function HowitWork(){
    return(
        <div id="features" className="useZ">
        
            <h3 className="heading">How It Works</h3>
            <div className="row" style={{width: "100%"}}>
            <div className="col-lg-4 col-md-12 " style={{paddingLeft: "20px", paddingRight: "20px"}}>
                <i className="fa-solid fa-user-group fa-4x"></i>
                <h3>Create Group</h3>
                <p>Create Account and become the Member of our Community.</p>
            </div>
            <div className="col-lg-4 col-md-12" style={{paddingLeft: "20px", paddingRight: "20px"}}>
                <i className="fa-solid fa-circle-check fa-4x"></i>
                <h3>Get Authorised</h3>
                <p>Our App is authorised by play store and we don't let the data to leak.</p>
            </div>
            <div className="col-lg-4 col-md-12" style={{paddingLeft: "0", paddingRight: "0"}}>
                <i className="fa-solid fa-heart fa-4x"></i>
                <h3>Enjoy the App</h3>
                <p >We wish you enjoy the app and give your valuable feedback.</p>
            </div>
            </div>
        </div>
    )
}
export default HowitWork;