import React from "react"
// import products from "../products";
// function clients(views){
    
//   return (
//       <Images
//           key={views.id}
//           image={views.image}
//       />
//   );
// }
function Carousel(){
    return (
        <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={require('./images/homepage.png')} className="d-block w-100" alt="Product1" />
                  </div>
                  <div className="carousel-item">
                    <img src={require('./images/homepage.png')} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={require('./images/homepage.png')} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon previous" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon next" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
        </div>
    )
}
export default Carousel;