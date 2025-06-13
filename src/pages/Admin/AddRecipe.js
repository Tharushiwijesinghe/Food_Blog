// AddRecipe.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (file) formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/recipes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/admin/recipes'); // Go back to list
    } catch (err) {
      console.error("Failed to add recipe", err);
    }
  };

  return (
    <div className="container py-5">
      <h3>Add New Recipe</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" required value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea className="form-control" rows="4" value={content} onChange={e => setContent(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image or PDF</label>
          <input type="file" className="form-control" onChange={e => setFile(e.target.files[0])} />
        </div>

       <Link to="/recipes" className="btn btn-success">Add Recipe</Link>
      </form>
    </div>
  );
};

export default AddRecipe;
