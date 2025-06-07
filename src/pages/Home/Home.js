import React, {useState, useEffect} from 'react';
import './Home.css';
import bgImage from '../../assets/p17.webp'; 
import img1 from '../../assets/p9.webp';
import img2 from '../../assets/p61.jpg';
import img3 from '../../assets/p59.webp';
import img4 from '../../assets/p69.jpg';// The dark background hero image
import { Link } from 'react-router-dom';


const images = [bgImage,img1, img2, img3, img4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section bg-dark d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className="overlay">
        <div className="content text-center">
          <p className="subtitle">Authentic Sri Lankan Cuisine</p>
          <h1 className="display-3 fw-bold">Welcome to <span className="brand-name">LankanTaST</span></h1>
          <p className="lead">Discover delicious recipes, food stories, and kitchen tips from uthentic Sri Lankan Culinary experience.</p>
          <Link to="/recipes" className="btn btn-lg mt-3 btn-custom"> Explore Recipies </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
