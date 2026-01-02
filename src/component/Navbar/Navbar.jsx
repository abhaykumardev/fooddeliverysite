import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../Context/Storecontext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Correct way to get context values
  const { gettotalamount } = useContext(Storecontext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.mylogo} alt="" className="logo" />
      </Link>

      {/* Menu List */}
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            setMenu("Home");
            setIsOpen(false);
          }}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>

        <li
          onClick={() => {
            setMenu("Menu");
            setIsOpen(false);
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>

        <li
          onClick={() => {
            setMenu("Mobile-App");
            setIsOpen(false);
          }}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </li>

        <li
          onClick={() => {
            setMenu("Contact-Us");
            setIsOpen(false);
          }}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>

      {/* Right section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        {/* Cart Icon + Dot */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>

          {/* Dot shows only if amount > 0 */}
          {gettotalamount() > 0 && <div className="dot"></div>}
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Sign-In Button */}
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
