import React from "react";
import "./Product.css";
import ProductCard from "../../Blocks/ProductCard/ProductCard";
import productData from "../../../Data/productData";
import banner from "../../../Images/products-banner.png";

function Product() {
  const productsData = productData.products;

  return (
    <main className="product-page-wrapper">
      <img src={banner} alt="" />
      <div className="product-wrapper">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Product;
