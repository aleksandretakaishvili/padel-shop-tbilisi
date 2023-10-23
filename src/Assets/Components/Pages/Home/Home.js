import React from "react";
import "./Home.css";
import MainImg from "../../../Images/mainbanner2.png";

function Home() {
  return (
    <main className="home-container">
      <div>
        <a
          href="https://www.instagram.com/padel_shop_tbilisi/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          target="_blank"
        >
          <img src={MainImg} alt="Main Banner" />
        </a>
      </div>
    </main>
  );
}

export default Home;