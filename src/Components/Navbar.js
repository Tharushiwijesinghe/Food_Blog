import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/logo.png';
import '../Styles/Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top navbar-expand-lg ${isScrolled ? 'navbar-scrolled' : ''} ${isExpanded ? 'navbar-expanded' : ''}`}>
      <div className="container-fluid px-4 py-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={image}
            alt="FoodieBlog Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span>LankanTaST</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center justify-content-center ms-auto mb-2 mb-lg-0 gap-3">
            {[
              { to: "/", text: "Home" },
              { to: "/recipes", text: "Recipes" },
              { to: "/about", text: "About" },
              { to: "/contact", text: "Contact" },
            ].map(({ to, text, icon }) => (
              <li className="nav-item" key={to}>
                <Link to={to} className="nav-link" onClick={() => setIsExpanded(false)}>
                  <i className={`${icon} me-2`}></i>{text}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <Link to="/admin" className="admin-text login-btn" onClick={() => setIsExpanded(false)}>
                <i className="fas fa-sign-in-alt me-2"></i>Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
