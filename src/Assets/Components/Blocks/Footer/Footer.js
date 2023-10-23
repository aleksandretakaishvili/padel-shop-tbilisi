import React from "react";
import "./Footer.css";
import { PiCopyrightLight } from "react-icons/pi";
import { TfiInstagram } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-nav">
          <h1>გვერდები</h1>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                მთავარი
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" activeClassName="active">
                პროდუქცია
              </NavLink>
            </li>
            <li>
              <NavLink to="/what-is-padel" activeClassName="active">
                რა არის პადელი ?
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="about-us">
          <h1>ჩვენს შესახებ</h1>
          <p>
            Padel Shop Tbilisi - პირველი ქართული ონლაინ მაღაზია, სადაც პადელის
            მოყვარულებს საშუალება ეძლევათ შეიძინონ, პადელის აქსესუარები.
          </p>
        </div>
      </footer>
      <div className="bottom-footer">
        <p>
          <span>
            <PiCopyrightLight />
          </span>
          All rights reserved
        </p>
        <a
          href="https://www.instagram.com/padel_shop_tbilisi/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiInstagram />
        </a>
      </div>
    </>
  );
}

export default Footer;
