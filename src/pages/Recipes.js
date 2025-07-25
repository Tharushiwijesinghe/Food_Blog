import React, { useState, useEffect } from 'react';
import '../Styles/Recipes.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Recipes = () => {
  const API_BASE = process.env.REACT_APP_API_BASE;
  
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [message, setMessage] = useState("");
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    fetchRecipes();
  }, []);

const fetchRecipes = async () => {
  try {
    const res = await axios.get(`${API_BASE}/api/recipes`);
    console.log('API response:', res.data);

    if (Array.isArray(res.data)) {
      setRecipes(res.data);
      setFiltered(res.data);
    } else {
      console.warn("API did not return an array. Got:", res.data);
      setRecipes([]);
      setFiltered([]);
    }
  } catch (err) {
    console.error("Failed to fetch recipes:", err);
    setRecipes([]);
    setFiltered([]);
  }
};


  const handleSearch = () => {
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredRecipes);
  };

  const handleDeleteClick = async (title) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await axios.delete(`${API_BASE}/api/recipes/${encodeURIComponent(title)}`);
        await fetchRecipes(); // Refresh the recipe list after deletion
        setFiltered(filtered.filter(recipe => recipe.title !== title));
      } catch (error) {
        console.error('Error deleting recipe:', error);
      }
    }
  };

  
   return (
    <div className="container py-5">
      <div className="recipe-container">
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
      </div>
     

      <div className="row">
       {Array.isArray(filtered) && filtered.map((recipe)  => {
  const isExpanded = expandedCards[recipe.title] || false;

  const toggleExpanded = () => {
    setExpandedCards(prev => ({
      ...prev,
      [recipe.title]: !prev[recipe.title],
    }));
  };
  

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={recipe.title}>
      <div className="card h-100 shadow-sm position-relative">
        <div className="dropdown position-absolute top-0 end-0 m-2">
          <button
            className="btn btn-sm btn-light"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            &#8942;
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <Link className="dropdown-item" to={`/admin/recipes/edit/${encodeURIComponent(recipe.title)}`}>
                Edit
              </Link>
            </li>
            <li>
              <button className="dropdown-item text-danger" onClick={() => handleDeleteClick(recipe.title)}>
                Delete
              </button>
            </li>
          </ul>
        </div>

        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{recipe.title}</h5>
          <p className={`card-text ${isExpanded ? 'expanded' : ''}`}>
            {recipe.summary}
          </p>
          <div className="mt-auto d-flex justify-content-center">
            <button className="RMbtn" onClick={toggleExpanded}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
})}

      </div>
      <div className="text-center mt-4">
        <Link to="/admin" className="Add-btn">Add New Recipe</Link>
      </div>

    </div>
    
  );
};

export default Recipes;