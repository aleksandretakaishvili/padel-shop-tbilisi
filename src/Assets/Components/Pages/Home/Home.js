import { React, useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImgIndex]);

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
      </div>
    </main>
  );
}

export default Home;
