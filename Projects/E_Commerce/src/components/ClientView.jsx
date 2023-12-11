import React from "react";

function ClientView(props){
    return (
        <div className={"carousel-item " + (props.active ? " active" : "")}>
            <h2 className="testimonial-text">{props.opi}</h2>
            <img className="testimonial-image" src={props.image} alt="lady-profile" />
            <em>{props.name}</em>
        </div>
    )
}
export default ClientView;
// Shopping from this platform has an enormous feeling it feels so comfortabel.{require(props.image)}