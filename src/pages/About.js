import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from "../assets/p65.avif";
import '../Styles/About.css'; // Adjust the path as necessary



const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5 about-page">
      <div className="row align-items-center about-container">
        <div className="col-md-6 ">
          <h2 className="mb-3">Welcome to LankanTast 🇱🇰</h2>
          <p>
            At <strong>LankanTast</strong>, we're passionate about bringing the vibrant flavors of Sri Lanka
            to your table. Whether you're a home cook, food lover, or curious traveler, we offer an authentic taste
            of Sri Lankan cuisine through rich stories, traditional recipes, and cultural insights.
          </p>

          <p>
            Our blog features dishes from every corner of the island — from spicy curries and hoppers to sweet treats like
            kavum and kokis. We believe food connects people and tells stories passed down through generations.
          </p>

          <h5 className="mt-4 text-warning">🍛 What We Offer:</h5>
          <ul>
            <li>Authentic Sri Lankan recipes with step-by-step guides</li>
            <li>Fusion dishes and creative twists</li>
            <li>Cooking tips, kitchen hacks, and spice knowledge</li>
          </ul>

          <p className="mt-4 font-weight-bold">
            Thank you for being part of the LankanTast journey!
          </p>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={profileImage}
            alt="LankanTast"
            className="img-fluid shadow rounded"
            style={{ maxHeight: '380px', borderRadius: '12px' }}
          />
        </div>
      </div>

      {/* <div className="text-center mt-5">
        <button className="btn btn-AI" onClick={() => navigate('/recipes#ai-assistant')}>
            ← Chat with Our Food AI
        </button>

      </div> */}
    </div>
  );
};

export default About;
