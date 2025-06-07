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
  const navigate = useNavigate(); // Initialize useNavigate
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');

  // Static sample recipes
  useEffect(() => {
    const sampleRecipes = [
      {
        title: 'Milk Rice',
        summary: 'A traditional Sri Lankan dish made with rice and coconut milk.',
        image: mrimg,
      },
      {
        title: 'Hoppers',
        summary: 'A traditional Sri Lankan dish made from fermented rice flour.',
        image: himg,
      },
      {
        title: 'String Hoppers',
        summary: 'Traditional Sri Lankan dish made with rice flour.',
        image: cimg,
      },
      {
        title: 'Pittu',
        summary: 'Traditional Sri Lankan dish made with rice flour.',
        image: pimg,
      },
      {
        title: 'Rice & Curry',
        summary: 'Traditional Sri Lankan dish made with rice flour.',
        image: rcimg,
      },
      {
        title: 'Lamprais',
        summary: 'Traditional Sri Lankan dish made with rice flour.',
        image: lrimg,
      },
      {
        title: 'Koththu Roti',
        summary: 'Traditional Sri Lankan dish made with rice flour.',
        image: krimg,
      },
      {
        title: 'Coconut Roti',
        summary: 'Traditional Sri Lankan dish made with rice flour.',
        image: crimg,
      },
      {
        title: 'Sri Lankan Fish Abulthiyal',
        summary: 'A spicy and flavorful fish curry dish.',
        image: mbimg,
      },
      {
        title: 'Sri Lankan Brinjol Moju',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: bmimg,
      },
      {
        title: 'Sri Lankan Cashew Curry',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: caimg,
      },
      {
        title: 'Sri Lankan Chicken Curry',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: ccimg,
      },
      {
        title: 'Prawns Curry',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: pcimg,
      },
      {
        title: 'Crab Curry',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: crcimg,
      },
      {
        title: 'Sri Lankan Coconut Sambol',
        summary: 'A spicy and flavorful cocounut dish made with grated coconut and spicies.',
        image: csimg,
      },
      {
        title: 'Baby Jackfruit Curry',
        summary: 'A spicy and flavorful cocounut dish made with grated coconut and spicies.',
        image: bjimg,
      },
      {
        title: 'Sri Lankan special Leaves Salad',
        summary: 'A spicy and flavorful short foods.',
        image: lsimg,
      },
      {
        title: 'Salads',
        summary: 'A spicy and flavorful short foods.',
        image: simg,
      },
      {
        title: 'Sri Lankan special Short eats',
        summary: 'A spicy and flavorful short foods.',
        image: seimg,
      },
      {
        title: 'Sri Lankan Kola Kanda ',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: klkimg,
      },
      {
        title: 'Sri Lankan Herbal Drinks ',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: hdimg,
      },
      {
        title: 'Sri Lankan Milk ',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: mimg,
      },
      {
        title: 'Sri Lankan Special coffee',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: cfimg,
      },
      {
        title: 'Sri Lankan special tea',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: timg,
      },
      {
        title: 'Sweets',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: swimg,
      },
      {
        title: 'Pan Cakes',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: pcsimg,
      },
      {
        title: 'Cakes',
        summary: 'A spicy and flavorful chicken curry dish.',
        image: cksimg,
      },
    ];
    setRecipes(sampleRecipes);
    setFiltered(sampleRecipes);
  }, []);

  const handleSearch = () => {
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredRecipes);
  };

  const askAI = () => {
    // Placeholder for now
    setAiAnswer(`Here's a mock answer about "${question}".`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Latest Recipies</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
      </div>

      
      {/* Recipe Cards */}
      {/* <div className="row">
        {filtered.map((recipe, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.summary}</p>
                <Link to={`/recipe/${encodeURIComponent(recipe.title)}`} className="RMbtn RMbtn-warning mt-3">Read More</Link>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p>No recipes found.</p>}
      </div> */}
    <div className="row">
      {filtered.map((recipe, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
          <div className="card h-100 shadow-sm">
            <img src={recipe.image} className="card-img-top" alt={recipe.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.summary}</p>

              {/* Centered Button */}
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


      {/* AI Section */}
     {/* Recipe Assistant Section */}
      <div className="recipe-assistant-container mt-5">
        <h3 className="assistant-title">Recipie Assistant...</h3>
        <input
          type="text"
          className="assistant-input"
          placeholder="Ask about recipes..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="assistant-button mt-3" onClick={askAI}>Ask</button>
        {aiAnswer && (
          <div className="assistant-answer mt-4">
            <strong>AI:</strong> {aiAnswer}
          </div>
        )}
        <p className="assistant-footer mt-3">What recipie are you craving today? I’ve got ideas!</p>
      </div>
    </div>
  );
};

export default Recipes;
