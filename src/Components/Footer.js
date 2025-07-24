import React from 'react';
import '../Styles/Footer.css';
import image from '../assets/logo.png';
import { FaFacebookF, FaYoutube, FaPinterestP, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top border-top "></div>
      <div className="container text-center text-md-start py-5">
        <div className="row">
          {/* Logo & Description */}
          <div className="col-md-4 mb-4 text-center">
            <img src={image} alt="food-blog Logo" className="footer-logo mb-2" />
            <p className="footer-description">
              Let's try sri lankan cusine with healthy snacks, and can prepare them on request, complemented by bamboo blinds and glass paintings.
            </p>
          </div>

          {/* Quick Links */}
          <div className='quick-links col-md-4 mb-4'>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-contact">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/recipes" className="footer-link">Recipes</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled footer-contact">
              <li><FaEnvelope className="me-2" /> lankantastofficial99@gmail.com</li>
              <li><FaWhatsapp className="me-2" /> +94 76 395 7457</li>
              <li><FaMapMarkerAlt className="me-2" /> Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-3">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaYoutube /></a>
          <a href="#" className="social-icon"><FaPinterestP /></a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <hr className="footer-divider" />
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
