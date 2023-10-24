import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../Images/logo2.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { TfiInstagram } from "react-icons/tfi";
import { GoMail } from "react-icons/go";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function burgerClickHandler() {
    setIsOpen((prev) => !prev);
  }

  const [hasShadow, setHasShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`navbar-container  ${!isOpen && hasShadow ? "shadow" : ""}`}
      >
        <div className="burger-icon" onClick={burgerClickHandler}>
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </div>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/padel_shop_tbilisi/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiInstagram />
          </a>
        </div>
      </div>

      <nav className={isOpen ? "open" : "close"}>
        <ul>
          <li>
            <NavLink
              to="/"
              activeclassname="active"
              onClick={burgerClickHandler}
            >
              მთავარი
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              activeclassname="active"
              onClick={burgerClickHandler}
            >
              პროდუქცია
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/what-is-padel"
              activeclassname="active"
              onClick={burgerClickHandler}
            >
              რა არის პადელი ?
            </NavLink>
          </li>
        </ul>
        <div className="bottom-info">
          <div className="email-info-container">
            <GoMail />
            <p>padelshoptbilisi@gmail.com</p>
          </div>
          <div className="insta-info-container">
            <a
              href="https://www.instagram.com/padel_shop_tbilisi/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <TfiInstagram />
              <p>padel_shop_tbilisi</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
