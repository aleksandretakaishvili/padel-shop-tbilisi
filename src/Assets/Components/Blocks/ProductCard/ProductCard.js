import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  const { name, brand, weigth, shape, imgUrl } = props.product;

  return (
    <div className="product-card-container">
      <img src={imgUrl} alt="" />
      <div className="product-info">
        <h2>
          {brand} {name}
        </h2>
        <p>წონა: {weigth} გრ</p>
        <p>
          ფორმა: <span>{shape}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
