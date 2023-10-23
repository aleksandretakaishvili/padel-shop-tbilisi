import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  const { name, brand, weigth, shape, imgUrl } = props.product;

  return (
    <div className="product-card-container">
      <img src={imgUrl} alt="product image" />
      <div className="product-info">
        <h1>
          {brand} {name}
        </h1>
        <p>წონა: {weigth} გრ</p>
        <p>ფორმა: {shape}</p>
      </div>
    </div>
  );
}

export default ProductCard;
