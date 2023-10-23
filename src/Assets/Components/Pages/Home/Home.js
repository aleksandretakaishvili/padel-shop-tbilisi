import { React, useState } from "react";
import "./Home.css";
import banner1 from "../../../Images/mainbanner2.png";
import banner2 from "../../../Images/products-banner.png";

function Home() {
  const images = [banner1, banner2];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="home-container">
      <div>
        <a
          href="https://www.instagram.com/padel_shop_tbilisi/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <img src={images[currentImgIndex]} alt="" />
        </a>
        <button onClick={previousImage}>უკანა</button>
        <button onClick={nextImage}>შემდეგი</button>
      </div>
    </main>
  );
}

export default Home;
