
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Admin.css'; // Optional custom styling
import axios from 'axios';


const Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[message, setMessage] = useState('');
  const[isError, setIsError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password
      });

      const { token } = res.data;

      // Save token to localStorage
      localStorage.setItem('adminToken', token);
      setMessage('Login successful!');
      setIsError(false);

      // Redirect to admin recipes/dashboard
     setTimeout(() => {
        navigate('/admin/recipes/new');
      }, 1000); // Redirect after a short delay

    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
      setIsError(true);
    }
  };

  return (
    <div className="Admin-container py-5 d-flex flex-column align-items-center">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
        alt="Admin"
        className="mb-4" 
        style={{ width: '60px', height: '60px' }}
      />
      <h2 className="text-center mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: '400px', width: '100%' }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button type="submit" className="admin-btn ">Login</button>
      </form>
    </div>
  );
};

export default Admin;
