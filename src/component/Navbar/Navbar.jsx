import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../Context/Storecontext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const { gettotalamount } = useContext(Storecontext);

  const handleClick = (name) => {
    setMenu(name);
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/" onClick={() => handleClick("Home")}>
        <img src={assets.mylogo} alt="logo" className="logo" />
      </Link>

      {/* Menu */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li className={menu === "Home" ? "active" : ""}>
          <Link to="/" onClick={() => handleClick("Home")}>Home</Link>
        </li>

        <li className={menu === "Menu" ? "active" : ""}>
          <Link to="/menu" onClick={() => handleClick("Menu")}>Menu</Link>
        </li>

        <li className={menu === "Mobile-App" ? "active" : ""}>
          <Link to="/mobile-app" onClick={() => handleClick("Mobile-App")}>
            Mobile App
          </Link>
        </li>

        <li className={menu === "Contact-Us" ? "active" : ""}>
          <Link to="/contact" onClick={() => handleClick("Contact-Us")}>
            Contact Us
          </Link>
        </li>

        {/* ✅ MOBILE SIGN IN BUTTON */}
        <li className="mobile-login">
          <button
            onClick={() => {
              setShowLogin(true);
              setIsOpen(false);
            }}
          >
            Sign In
          </button>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        {/* Cart */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          {gettotalamount() > 0 && <div className="dot"></div>}
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* DESKTOP SIGN IN */}
        <button className="desktop-login" onClick={() => setShowLogin(true)}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
