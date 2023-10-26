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
            activeButton === "" ? "filter-btns active-button" : "filter-btns"
          }
        >
          ყველა
        </button>
        <button
          onClick={() => handleClick("brand", "Babolat")}
          className={
            activeButton === "Babolat"
              ? "filter-btns active-button"
              : "filter-btns"
          }
        >
          ბაბოლატი
        </button>
        <button
          onClick={() => handleClick("brand", "Bullpadel")}
          className={
            activeButton === "Bullpadel"
              ? "filter-btns active-button"
              : "filter-btns"
          }
        >
          ბულპადელი
        </button>
        <button
          onClick={() => handleClick("brand", "Wilson")}
          className={
            activeButton === "Wilson"
              ? "filter-btns active-button"
              : "filter-btns"
          }
        >
          ვილსონი
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
