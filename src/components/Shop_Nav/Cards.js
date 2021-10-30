import React from "react";
import "../../style/Shop/Card.css";
import { CART } from "../../constants/constant";
function Cards(props) {
  const { productList } = props;

  return (
    <>
      <div className="groupCard">
        {productList &&
          productList.length > 0 &&
          productList.map((item) => {
            return (
              <div key={item._id} className="groupCard-column">
                <div className="card-wrapper">
                  <div className="card">
                    <img className="ItemImg" src={item.image} alt="Avatar" />
                    <div className="ItemTxt">
                      <h5>{item.productName}</h5>
                      <p>{item.description}</p>
                      <h6>{item.price.$numberDecimal} VND</h6>
                    </div>
                  </div>
                  <div className="card_btn ">ADD TO CART</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
