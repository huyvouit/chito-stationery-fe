import React from "react";
import "../../style/Shop/CardItems.css";
import { Link } from "react-router-dom";

function CardItems(props) {
  return (
    <>
    <div className="card-wrapper">
    <div className="card">
        <img className="ItemImg" src={props.src} alt="Avatar" />
        <div className="ItemTxt">
          <h5>{props.text}</h5>
          <p>{props.description}</p>
          <h6>{props.price} VND</h6>
        </div>
        
      </div>  
      <Link to="/" className="card_btn">
          ADD TO CART
        </Link> 
    </div>
         
    </>
  );
}

export default CardItems;
