// AdminRecipes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
// import AddRecipe from '../../Admin/AddRecipe';
import AddRecipe from './AddRecipe';
import { Link } from 'react-router-dom';


const AdminRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(res.data);
    } catch (err) {
      console.error("Failed to fetch recipes", err);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${id}`);
      fetchRecipes(); // refresh
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/recipes/edit/${id}`);
  };

  const handleAdd = () => {
    navigate('/admin/recipes/new');
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Manage Recipes</h3>
      
        <Link to="/admin/recipes/new" className="btn btn-success">
  + Add Recipe
</Link>
      </div>

      <div className="row">
        {recipes.map(recipe => (
          <div className="col-md-4 mb-4" key={recipe._id}>
            <div className="card h-100 position-relative">
              {recipe.fileUrl ? (
                recipe.fileUrl.endsWith('.pdf') ? (
                  <embed src={recipe.fileUrl} type="application/pdf" className="card-img-top" style={{ height: '200px' }} />
                ) : (
                  <img src={recipe.fileUrl} className="card-img-top" alt={recipe.title} style={{ height: '200px', objectFit: 'cover' }} />
                )
              ) : (
                <div className="card-img-top d-flex align-items-center justify-content-center bg-light" style={{ height: '200px' }}>
                  <span className="text-muted">No Image</span>
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                {recipe.content && <p className="card-text">{recipe.content.substring(0, 100)}...</p>}
              </div>
              <Dropdown className="position-absolute top-0 end-0 m-2">
                <Dropdown.Toggle variant="light" size="sm">⋮</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleEdit(recipe._id)}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => deleteRecipe(recipe._id)}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRecipes;
