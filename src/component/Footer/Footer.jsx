import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.mylogo} alt="" />
          <p>
            “Good food brings people together — and we love being part of your
            journey. Whether you're discovering new flavors or enjoying your
            favorites, we’re here to serve fresh choices every day. Thank you
            for choosing us!”
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy</li>
           </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
             <li>+91 989882989</li>
             <li>abhay9115k@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 ©  Let’s Order.com All rights reserved. Unauthorized use is prohibited.
      </p>
    </div>
  );
};

export default Footer;
