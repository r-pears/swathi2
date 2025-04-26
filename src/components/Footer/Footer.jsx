import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    // footer tag
    // dont use id in React
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p>
            CookHub brings you simple, delicious recipes to inspire your cooking
            journey. Join us and explore a world of flavors, one dish at a time!
          </p>
          <div className="footer-social-icons">
            {/* missing alt descriptions */}
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>WEBSITE</h2>
          <ul>
            {/* should be links inside the <li> */}
            <li>Home</li>
            <li>About Us</li>
            <li>Recipes</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            {/* should be anchors inside the <li> */}
            <li>+46 87456321</li>
            <li>contact@cookhub.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-cpoyright">
        Copyright 2025 CookHub.com. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
