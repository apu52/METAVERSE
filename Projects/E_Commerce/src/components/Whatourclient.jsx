import React from "react"
import ClientView from "./ClientView"
import views from "../views"
function clients(views){
    return (<ClientView
        key={views.id}
        opi={views.opi}
        name={views.name}
        image={views.image}
        active={views.active}
    />
    )

}
function WhatourClient(){
    return (
        <div>
            <div className="space"><h1>What our Clients Say</h1></div>
            <div id="testimonials">
                
                <div id="carouselExample2" className="carousel slide">
                    <div className="carousel-inner">
                        {views.map(clients)}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default WhatourClient;