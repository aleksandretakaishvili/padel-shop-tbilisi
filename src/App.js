import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Assets/Components/Blocks/Navbar/Navbar";
import Home from "./Assets/Components/Pages/Home/Home";
import Product from "./Assets/Components/Pages/Products/Product";
import AboutPadel from "./Assets/Components/Pages/AboutPadel/About";
import Footer from "./Assets/Components/Blocks/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/what-is-padel" element={<AboutPadel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
