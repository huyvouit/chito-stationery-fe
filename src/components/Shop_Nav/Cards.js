import React from "react";
import candy from "../../assets/Images/candy.jpg";
import summer from "../../assets/Images/summer.jpg";
import CardItems from "./CardItems";
import "../../style/Shop/Card.css";

function Cards(props) {
  const { productList } = props;
  return (
    <>
      <div className="groupCard">
        {productList.map((item) => {
          return (
            <div className="groupCard-column">
              <CardItems
                key={item._id}
                src={item.image}
                price={item.price.$numberDecimal}
                text={item.productName}
                description= {item.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
