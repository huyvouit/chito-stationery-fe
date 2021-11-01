import React, { useContext } from "react";
import "../../style/Shop/Card.css";
import { CART } from "../../constants/constant";
import { CartContext } from "../../contexts/cart_context";
function Cards(props) {
  const { productList } = props;
  const { addItem } = useContext(CartContext);
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
                  <div className="card_btn " onClick={() => addItem(item)}>
                    ADD TO CART
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
