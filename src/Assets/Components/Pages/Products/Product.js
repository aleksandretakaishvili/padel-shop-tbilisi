import React from "react";
import "./Product.css";
import ProductCard from "../../Blocks/ProductCard/ProductCard";
import productData from "../../../Data/productData";

function Product() {
  const productsData = productData.products;

  return (
    <main className="product-page-wrapper">
      <div className="product-wrapper">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Product;
