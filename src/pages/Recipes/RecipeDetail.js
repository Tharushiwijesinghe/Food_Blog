import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const recipeDetails = {
  'Milk Rice': {
    content: 'Milk rice (Kiribath) is a Sri Lankan staple, made by cooking rice with coconut milk...',
  },
  'Hoppers': {
    content: 'Hoppers (Appa) are bowl-shaped pancakes made with fermented rice flour...',
  },
  'Sri Lankan Chicken Curry': {
    content: 'This curry is rich with spices, onions, garlic, ginger, and coconut milk...',
  },
};

const RecipeDetail = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const navigate = useNavigate();

  const recipe = recipeDetails[decodedTitle];

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">{decodedTitle}</h2>
      <p>{recipe.content}</p>
      <button className="btn btn-secondary mt-4" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
};

export default RecipeDetail;
