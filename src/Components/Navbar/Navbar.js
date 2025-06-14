import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/logo.png'; // Adjust the path as necessary
import './Navbar.css'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top ">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={image}// If in public folder
            alt="FoodieBlog Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span >LankanTaST</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">Recipies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;
