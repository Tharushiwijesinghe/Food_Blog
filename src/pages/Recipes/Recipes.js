import React, { useState, useEffect } from 'react';
import './Recipes.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// import Typewriter from "typewriter-effect";
// import ReactMarkdown from "react-markdown";

// Image imports
import mrimg from '../../assets/p6.jpg';
import himg from '../../assets/p21.jpg';
import cimg from '../../assets/p22.jpg';
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

const Recipes = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');

  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const sampleRecipes = [
      { title: 'Milk Rice', summary: 'A traditional Sri Lankan dish made with rice and coconut milk.', image: mrimg },
      { title: 'Hoppers', summary: 'A traditional Sri Lankan dish made from fermented rice flour.', image: himg },
      { title: 'String Hoppers', summary: 'Traditional Sri Lankan dish made with rice flour.', image: cimg },
      { title: 'Pittu', summary: 'Traditional Sri Lankan dish made with rice flour.', image: pimg },
      { title: 'Rice & Curry', summary: 'Traditional Sri Lankan dish made with rice flour.', image: rcimg },
      { title: 'Lamprais', summary: 'Traditional Sri Lankan dish wrapped and baked in banana leaf.', image: lrimg },
      { title: 'Koththu Roti', summary: 'Chopped roti stir-fried with vegetables and meat.', image: krimg },
      { title: 'Coconut Roti', summary: 'Flatbread made with grated coconut.', image: crimg },
      { title: 'Sri Lankan Fish Abulthiyal', summary: 'A spicy and flavorful fish curry dish.', image: mbimg },
      { title: 'Brinjal Moju', summary: 'A sweet and tangy eggplant pickle.', image: bmimg },
      { title: 'Cashew Curry', summary: 'Rich curry made with cashew nuts.', image: caimg },
      { title: 'Chicken Curry', summary: 'A spicy and flavorful chicken curry.', image: ccimg },
      { title: 'Prawns Curry', summary: 'A spicy and flavorful prawns curry dish.', image: pcimg },
      { title: 'Crab Curry', summary: 'A spicy and flavorful crab curry dish.', image: crcimg },
      { title: 'Coconut Sambol', summary: 'Side dish made with grated coconut.', image: csimg },
      { title: 'Baby Jackfruit Curry', summary: 'Delicious jackfruit curry.', image: bjimg },
      { title: 'Leaves Salad', summary: 'Healthy Sri Lankan leafy salad.', image: lsimg },
      { title: 'Short Eats', summary: 'Sri Lankan savory snacks.', image: seimg },
      { title: 'Kola Kanda', summary: 'Herbal porridge for breakfast.', image: klkimg },
      { title: 'Herbal Drinks', summary: 'Natural, refreshing herbal drinks.', image: hdimg },
      { title: 'Sri Lankan Milk', summary: 'Local dairy drink.', image: mimg },
      { title: 'Special Coffee', summary: 'Traditional Sri Lankan coffee.', image: cfimg },
      { title: 'Special Tea', summary: 'Authentic Ceylon tea.', image: timg },
      { title: 'Sweets', summary: 'Traditional sweet treats.', image: swimg },
      { title: 'Pan Cakes', summary: 'Sweet or savory Sri Lankan pancakes.', image: pcsimg },
      { title: 'Cakes', summary: 'Local cake varieties.', image: cksimg },
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

  const handleAsk = async () => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/chat`,
        { message }
      );
      setBotResponse(response.data.reply);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error:", error.message);
      setBotResponse("Failed to get response from the bot. Please try again later.");
      setIsModalOpen(true);
    }
    setMessage("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAsk();
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Latest Recipes</h2>

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

      <div className="row">
        {filtered.map((recipe, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.summary}</p>
                <div className="mt-auto d-flex justify-content-center">
                  <Link to={`/recipes/${encodeURIComponent(recipe.title)}`} className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/admin" className="btn"> + Add New Recipe </Link>
      </div>

    </div>
    
  );
};

export default Recipes;
