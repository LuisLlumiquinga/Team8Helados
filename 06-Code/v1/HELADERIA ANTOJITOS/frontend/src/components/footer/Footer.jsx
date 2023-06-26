import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer">        
        <div className="copyright">
        <span>&copy; 2023. Todos los derechos reservados. Desarrollo de Aplicaciones Web</span></div>
        <br />
      </div>
    </div>
  );
};

export default Footer;