import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Recipes from './pages/Recipes';
import Admin from './pages/Admin';// Adjust the path as necessary
import Footer from './Components/Footer';
// import RecipeDetail from './pages/RecipeDetail';
import AdminRecipes from './pages/Admin';
import AddRecipe from './pages/AddRecipe';

import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          {/* <Route path="/recipes/:title" element={<RecipeDetail />} /> */}
          <Route path="/admin/recipes" element={<AdminRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/admin/recipes" element={isAuthenticated() ? <AdminRecipes /> : <Navigate to="/admin" />} /> */}
          <Route path="/admin/recipes/new" element={isAuthenticated() ? <AddRecipe /> : <Navigate to="/admin" />} />
          <Route path="/admin/recipes/edit/:title" element={isAuthenticated() ? <AddRecipe /> : <Navigate to="/admin" />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
