import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'; 
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Recipes from './pages/Recipes/Recipes';
import Admin from './pages/Admin/Admin';// Adjust the path as necessary
import Footer from './Components/Footer/Footer';
import RecipeDetail from './pages/Recipes/RecipeDetail';
import AdminRecipes from './pages/Admin/AdminRecipes';


import AddRecipe from './pages/Admin/AddRecipe';

import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';


// const Home = () => <h2>Home Page</h2>;
// const Recipes = () => <h2>Recipes Page</h2>;
// const About = () => <h2>About Page</h2>;
// const Contact = () => <h2>Contact Page</h2>;
// const Admin = () => <h2>Admin Dashboard</h2>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:title" element={<RecipeDetail />} />
          <Route path="/admin/recipes" element={<AdminRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/recipes" element={isAuthenticated() ? <AdminRecipes /> : <Navigate to="/admin" />} />
          
         

<Route path="/admin/recipes" element={<AdminRecipes />} />
<Route path="/admin/recipes/new" element={<AddRecipe />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
