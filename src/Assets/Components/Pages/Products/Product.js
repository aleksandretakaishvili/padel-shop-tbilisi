import { React, useState } from "react";
import "./Product.css";
import ProductCard from "../../Blocks/ProductCard/ProductCard";
import productData from "../../../Data/productData";

function Product() {
  const productsData = productData.products;

  const [filteredItems, setFilteredItems] = useState(productsData);
  const [activeButton, setActiveButton] = useState("");

  function handleClick(prop, value) {
    if (prop) {
      const filterCondition = productsData.filter((product) => {
        return product[prop] === value;
      });
      setFilteredItems(filterCondition);
      setActiveButton(value);
    } else {
      setFilteredItems(productsData);
      setActiveButton("");
    }
  }

  return (
    <main className="product-page-wrapper">
      <div className="filter-btns-container">
        <button
          onClick={() => handleClick()}
          className={
            activeButton === "" ? "filter-btn active-button" : "filter-btn"
          }
        >
          All
        </button>
        <button
          onClick={() => handleClick("brand", "Babolat")}
          className={
            activeButton === "Babolat"
              ? "filter-btn active-button"
              : "filter-btn"
          }
        >
          Babolat
        </button>
        <button
          onClick={() => handleClick("brand", "Bullpadel")}
          className={
            activeButton === "Bullpadel"
              ? "filter-btn active-button"
              : "filter-btn"
          }
        >
          Bullpadel
        </button>
        <button
          onClick={() => handleClick("brand", "Wilson")}
          className={
            activeButton === "Wilson"
              ? "filter-btn active-button"
              : "filter-btn"
          }
        >
          Wilson
        </button>
        <button
          onClick={() => handleClick("brand", "Vairo")}
          className={
            activeButton === "Vairo" ? "filter-btn active-button" : "filter-btn"
          }
        >
          Vairo
        </button>
      </div>
      <div className="product-wrapper">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Product;
