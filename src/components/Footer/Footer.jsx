import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-column">
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Corporate Information</p>
        </div>

        <div className="footer-column">
          <h4>GROUP COMPANIES</h4>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>

        <div className="footer-column">
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        <div className="footer-column">
          <h4>CONSUMER POLICY</h4>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>

        <div className="footer-column">
          <h4>Mail Us:</h4>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
            Clove Embassy Tech Village, Bengaluru, Karnataka, India
          </p>

          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-column">
          <h4>Registered Office Address:</h4>
          <p>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
            Clove Embassy Tech Village, Bengaluru, Karnataka, India
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Become a Seller</p>
        <p>Advertise</p>
        <p>Gift Cards</p>
        <p>Help Center</p>
        <p>© 2026 YourStore.com</p>
      </div>
<h1><a href="#top">⬆️</a></h1>
    </footer>
  );
};

export default Footer;