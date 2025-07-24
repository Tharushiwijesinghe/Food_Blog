import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../Styles/AddRecipes.css';
import { FaArrowLeft } from 'react-icons/fa';

const AddRecipe = () => {
  const { title } = useParams(); // for edit mode
  const [isEdit, setIsEdit] = useState(false);
  const [existingImage, setExistingImage] = useState(null);

  const [formTitle, setFormTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Fetch recipe if editing
  useEffect(() => {
    if (title) {
      fetchRecipeToEdit(title);
      setIsEdit(true);
    }
  }, [title]);

  const fetchRecipeToEdit = async (title) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/recipes/${encodeURIComponent(title)}`);
      const recipe = res.data;
      setFormTitle(recipe.title);
      setContent(recipe.content);
      setExistingImage(recipe.image);
    } catch (error) {
      console.error('Error fetching recipe for edit:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formTitle || !content) {
      setMessage('All fields are required');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', formTitle);
      formData.append('content', content);
      if (file) formData.append('file', file);

      if (isEdit) {
        // Update existing recipe
        await axios.put(`http://localhost:5000/api/recipes/${encodeURIComponent(title)}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setMessage('✅ Recipe updated successfully!');
      } else {
        // Add new recipe
        await axios.post('http://localhost:5000/api/recipes', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setMessage('✅ Recipe added successfully!');
      }

      setTimeout(() => {
        navigate('/recipes');
      }, 1500);

    } catch (error) {
      console.error('Error submitting recipe:', error);
      setMessage(error.response?.data?.message || '❌ Failed to submit recipe');
    }
  };

  return (
    <div className="add-container py-5">
      <h3>{isEdit ? 'Edit Recipe' : 'Add New Recipe'}</h3>
      <form onSubmit={handleSubmit} className= "form-add" encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            placeholder="Recipe Title"
            className="form-control"
            required
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            disabled={isEdit} // Optional: Lock title in edit mode
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            placeholder="Recipe Content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image or PDF</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
          {isEdit && existingImage && (
            <img
              src={existingImage}
              alt="Current"
              className="mt-2"
              style={{ maxHeight: '150px', borderRadius: '8px' }}
            />
          )}
        </div>

        <button type="submit" className="Add-btn">
          {isEdit ? 'Update Recipe' : 'Add Recipe'}
        </button>
        {message && <p className="message mt-2">{message}</p>}
      </form>

      <div className="backbtn d-flex align-items-center mb-3">
        <FaArrowLeft
          style={{ cursor: 'pointer', color: '#ffc107', fontSize: '1.5rem' }}
          onClick={() => navigate('/recipes')}
        />
      </div>
    </div>
  );
};

export default AddRecipe;

