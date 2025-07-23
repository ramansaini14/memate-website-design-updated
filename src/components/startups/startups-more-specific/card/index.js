import React from "react";
import './style.css';

const MoreSpecificCard = (props) => {
  return (
    <div
      className="more-specific-card"
    >
        <div className="more-specific-card-logo" style={{background:props.background}}>
            <img src={props.card_image} alt="card_image"/>
        </div>

        <p className="more-specific-card-heading">{props.heading}</p>
        <p className="more-specific-card-description" style={{width:props.width}}>{props.description}</p>
    </div>
  );
};

export default MoreSpecificCard;
