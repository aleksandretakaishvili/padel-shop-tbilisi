import React from "react";
import "./Footer.css";
import { PiCopyrightLight } from "react-icons/pi";
import { TfiInstagram } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="left-side-container">
          <div className="left-side-item">
            <h1>ნავიგაცია</h1>
            <div className="line"></div>
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
          <div className="left-side-item">
            <h1>ჩვენს შესახებ</h1>
            <div className="line"></div>
            <p>პადელის პირველი ონლაინ მაღაზია საქართველოში.</p>
          </div>
          <div className="left-side-item">
            <h1>სოციალური ქსელები</h1>
            <div className="line"></div>
            <div className="footer-social-icons">
              <a href="">
                <AiFillInstagram className="instagram" />
              </a>
              <a href="">
                <BiLogoTiktok className="tiktok" />
              </a>
            </div>
          </div>
        </div>
        <div className="right-side-container">
          <div className="right-side-header">
            <h2>
              მეტი ინფორმაციისთვის <br></br>
              შეავსეთ <BsFillArrowDownLeftSquareFill />
            </h2>
          </div>
          <div className="form-container">
            <label htmlFor="">სახელი</label>
            <input type="text" />
          </div>
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
