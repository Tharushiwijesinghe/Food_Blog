import React, { useState, useEffect } from 'react';

import './Recipes.css';
import {useNavigate} from 'react-router-dom'; // Import useNavigate for navigation
import mrimg from '../../assets/p6.jpg'; // Assuming you have a local image
import himg from '../../assets/p21.jpg'; // Assuming you have a local image
import cimg from '../../assets/p22.jpg'; // Assuming you have a local image
import mbimg from '../../assets/p48.webp';
import bmimg from '../../assets/p46.webp';
import caimg from '../../assets/p47.webp';
import ccimg from '../../assets/p26.webp';
import csimg from '../../assets/p27.webp';
import seimg from '../../assets/p52.jpg';
import timg from '../../assets/p35.jpg';
import cfimg from '../../assets/p55.jpg';
import mimg from '../../assets/p57.webp';
import pimg from '../../assets/p29.jpg';
import rcimg from '../../assets/p24.webp';
import lrimg from '../../assets/p41.png';
import bjimg from '../../assets/p42.jpg';
import lsimg from '../../assets/p43.jpg';
import simg from '../../assets/p45.jpg';
import krimg from '../../assets/p39.jpg';
import crimg from '../../assets/p40.webp';
import pcimg from '../../assets/p49.jpg';
import crcimg from '../../assets/p25.webp';
import klkimg from '../../assets/p34.jpg';
import hdimg from '../../assets/p37.jpg';
import swimg from '../../assets/p54.jpg';
import pcsimg from '../../assets/p23.jpg';
import cksimg from '../../assets/p58.webp';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');

  // ✅ Static sample recipes
  useEffect(() => {
    const sampleRecipes = [
      { title: 'Milk Rice', summary: 'A traditional Sri Lankan dish made with rice and coconut milk.', image: mrimg },
      { title: 'Hoppers', summary: 'A traditional Sri Lankan dish made from fermented rice flour.', image: himg },
      { title: 'String Hoppers', summary: 'Traditional Sri Lankan dish made with rice flour.', image: cimg },
      { title: 'Pittu', summary: 'Traditional Sri Lankan dish made with rice flour.', image: pimg },
      { title: 'Rice & Curry', summary: 'Traditional Sri Lankan dish made with rice flour.', image: rcimg },
      { title: 'Lamprais', summary: 'Traditional Sri Lankan dish made with rice flour.', image: lrimg },
      { title: 'Koththu Roti', summary: 'Traditional Sri Lankan dish made with rice flour.', image: krimg },
      { title: 'Coconut Roti', summary: 'Traditional Sri Lankan dish made with rice flour.', image: crimg },
      { title: 'Sri Lankan Fish Abulthiyal', summary: 'A spicy and flavorful fish curry dish.', image: mbimg },
      { title: 'Sri Lankan Brinjol Moju', summary: 'A spicy and flavorful eggplant dish.', image: bmimg }, // ✅ Corrected summary
      { title: 'Sri Lankan Cashew Curry', summary: 'A spicy and flavorful cashew curry.', image: caimg },
      { title: 'Sri Lankan Chicken Curry', summary: 'A spicy and flavorful chicken curry dish.', image: ccimg },
      { title: 'Prawns Curry', summary: 'A spicy and flavorful prawns curry dish.', image: pcimg },
      { title: 'Crab Curry', summary: 'A spicy and flavorful crab curry dish.', image: crcimg },
      { title: 'Sri Lankan Coconut Sambol', summary: 'Made with grated coconut and spices.', image: csimg },
      { title: 'Baby Jackfruit Curry', summary: 'A flavorful jackfruit curry.', image: bjimg },
      { title: 'Sri Lankan Leaves Salad', summary: 'A fresh leaves-based salad.', image: lsimg },
      { title: 'Salads', summary: 'A mix of fresh vegetables.', image: simg },
      { title: 'Sri Lankan Short Eats', summary: 'Savory short eats variety.', image: seimg },
      { title: 'Sri Lankan Kola Kanda', summary: 'A traditional herbal porridge.', image: klkimg },
      { title: 'Sri Lankan Herbal Drinks', summary: 'Natural and herbal beverages.', image: hdimg },
      { title: 'Sri Lankan Milk', summary: 'Local dairy drink.', image: mimg },
      { title: 'Sri Lankan Special Coffee', summary: 'Spiced Sri Lankan coffee.', image: cfimg },
      { title: 'Sri Lankan Special Tea', summary: 'Ceylon black and flavored teas.', image: timg },
      { title: 'Sweets', summary: 'Sri Lankan traditional sweets.', image: swimg },
      { title: 'Pan Cakes', summary: 'Sweet or savory Sri Lankan pancakes.', image: pcsimg },
      { title: 'Cakes', summary: 'Local cake varieties.', image: cksimg },
    ];
    setRecipes(sampleRecipes);
    setFiltered(sampleRecipes);
  }, []);

  // ✅ Search handler
  const handleSearch = () => {
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredRecipes);
  };

  // ✅ AI assistant - calling backend
  const askAI = async () => {
    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAiAnswer(data.answer);
    } catch (error) {
      console.error('Error asking AI:', error);
      setAiAnswer('Something went wrong. Please try again.');
    }
  };


  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Latest Recipes</h2>

      {/* ✅ Search Bar with Button */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-secondary" onClick={handleSearch}>Search</button>
      </div>

      {/* ✅ Recipe Cards */}
      <div className="row">
        {filtered.map((recipe, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.summary}</p>
                <div className="mt-auto d-flex justify-content-center">
                  <Link
                    to={`/recipe/${encodeURIComponent(recipe.title)}`}
                    className="btn btn-warning"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Recipe Assistant Section */}
      <div className="recipe-assistant-container mt-5">
        <h3 className="assistant-title">Recipe Assistant</h3>
        <input
          type="text"
          className="assistant-input"
          placeholder="Ask me anything about Sri Lankan recipes..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="assistant-button mt-3" onClick={askAI}>Ask</button>

        {aiAnswer && (
          <div className="assistant-answer mt-4">
            <strong>AI:</strong> {aiAnswer}
          </div>
        )}

        <p className="assistant-footer mt-3">What recipe are you craving today? I’ve got ideas!</p>
      </div>
    </div>
  );
};

export default Recipes;

