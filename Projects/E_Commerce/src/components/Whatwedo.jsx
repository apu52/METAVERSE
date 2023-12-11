import React from "react";
function WhatweDo(){
    return(
        <div id="our_work">
            <div className="left">
            <p className="work_title">What we do to help our customers in digital era.</p>
            <div className="receive" id="recid">
                <img  className="image_work" src={require('./images/order-confirmation-email.jpg')} alt="RECEIVE" width="100%" height="40%" />
                <p className="carousel_">Receive</p>
                <p className="promise">Receiving messages from any person using this website is very easy and cost efficient.</p>
            </div>
            </div>
            <div calss="right" id="senid">
            <div className="send">
                <img  className="image_work send_img" src={require('./images/ecommerce.png')} alt="Send" />
                <p className="carousel_">Send</p>
                <p className="promise">Sending messages to any person using this website is very easy and cost efficient.</p>
            </div>
            <div className="buy" id="buyid">
                <img  className="image_work" src={require('./images/white-background-photo.jpg')} alt="Buy" width="100%" height="40%" />
                <p className="carousel_">Buy</p>
                <p className="promise">Buy our product to get more and more dicount on upcoming sales and best products.</p>
            </div>
            </div>
        </div>
    )
}
export default WhatweDo;