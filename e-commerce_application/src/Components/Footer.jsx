import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="follow-us-on-paragraph" >
        Follow us On
      </div>
        <button className="footer-buttons"><FaFacebook/></button>
        <button className="footer-buttons"><FaInstagram/></button>
        <button className="footer-buttons"><FaTwitter/></button>
      <div className="All-rights-reserved">
        <p>&copy;All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
