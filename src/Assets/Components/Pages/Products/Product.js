import { React, useState } from "react";
import "./Product.css";
import ProductCard from "../../Blocks/ProductCard/ProductCard";
import productData from "../../../Data/productData";
import { BsArrowDownShort } from "react-icons/bs";

function Product() {
  const productsData = productData.products;

  const [filteredItems, setFilteredItems] = useState(productsData);
  function handleClick(prop, value) {
    const filterCondition = productsData.filter((product) => {
      return product[prop] === value;
    });
    setFilteredItems(filterCondition);
    setIsClicked((prev) => !prev);
  }

  const [isClicked, setIsClicked] = useState(false);
  function handle() {
    setIsClicked((prev) => !prev);
  }

  return (
    <main className="product-page-wrapper">
      <div className="filter-container">
        <div>
          <h2 onClick={handle} className={isClicked && `margin-bottom`}>
            ბრენდი <BsArrowDownShort />
          </h2>
          {isClicked && (
            <div className="filter">
              <button>ყველა</button>
              <button onClick={() => handleClick("brand", "Babolat")}>
                ბაბოლატი
              </button>
              <button>ბულპადელი</button>
              <button>ვილსონი</button>
            </div>
          )}
        </div>
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
