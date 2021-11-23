import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart_context";
import { useHistory } from "react-router-dom";
import "../../style/Shop/Card.css";
import { ProductContext } from "../../contexts/product_context";

function Cards() {
  const { productList } = useContext(ProductContext);
  const { addItem } = useContext(CartContext);

  let history = useHistory();
  const handleClickItemPassDetail = (item) => {
    history.push("/detail/" + item._id);
  };

  return (
    <>
      <div className="groupCard">
        {productList &&
          productList.length > 0 &&
          productList.map((item) => {
            return (
              <div key={item._id} className="card-wrapper">
                <div
                  className="card"
                  onClick={() => handleClickItemPassDetail(item)}
                >
                  <div className="card-img">
                    <img src={item.image} alt="Avatar" />
                  </div>
                  <div className="ItemTxt">
                    <h5>{item.productName}</h5>
                    <p>{item.description}</p>
                    <h4>{item.price.$numberDecimal} VND</h4>
                  </div>
                </div>
                <div className="card_btn " onClick={() => addItem(item, 1, 0)}>
                  ADD TO CART
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
