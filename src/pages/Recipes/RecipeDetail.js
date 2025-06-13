// src/pages/RecipeDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import './RecipeDetail.css'; // optional styling
import allImages from '../../utils/allImages';
import './RecipeDetail.css'



const recipeData = {
  'Milk Rice': {
    summary: 'A traditional Sri Lankan dish made with rice and coconut milk.',
    instructions: '1. Wash rice.\n2. Cook in coconut milk with salt.\n3. Let it cool.\n4. Serve with chili paste or banana.',
    image: 'mrimg',
  },
  'Hoppers': {
    summary: 'A traditional Sri Lankan dish made from fermented rice flour.',
    instructions: '1. Prepare batter with rice flour and coconut milk.\n2. Let ferment.\n3. Pour into hopper pan.\n4. Cook until crispy.',
    image: 'himg',
  },
    'String Hoppers': {
    summary: 'Soft steamed rice flour noodles often eaten with curry.',
    instructions: '1. Make a dough with rice flour and hot water.\n2. Press into string hopper molds.\n3. Steam until soft.\n4. Serve with curry or coconut milk.',
    image: 'cimg',
  },
    'Pittu': {
    summary: 'Steamed cylinders of rice flour and grated coconut.',
    instructions: '1. Mix roasted rice flour with grated coconut and salt.\n2. Steam in a bamboo or metal pittu maker.\n3. Serve with coconut milk and curry.',
    image: 'pimg',
  },
    'Dhal Curry': {
    summary: 'A comforting lentil curry made with red lentils, coconut milk, and spices.',
    instructions: '1. Boil lentils until soft.\n2. Add turmeric and salt.\n3. Fry onions, mustard seeds, curry leaves.\n4. Mix with coconut milk and simmer.\n5. Serve with rice.',
    image: 'rcimg',
  },
  'Lamprais': {
    summary: 'A Dutch Burgher-inspired dish with rice and accompaniments wrapped in banana leaves.',
    instructions: '1. Cook rice in stock.\n2. Prepare mixed meat curry, blachan, and eggplant moju.\n3. Wrap in banana leaf and bake.\n4. Serve hot.',
    image: 'lrimg',
  },
  'Kottu Roti': {
    summary: 'A popular street food made by chopping roti with vegetables, eggs, and spices.',
    instructions: '1. Chop godamba roti.\n2. Stir-fry with vegetables, eggs, and meat (optional).\n3. Add curry sauce.\n4. Mix and serve hot.',
    image: 'krimg',
  },
    'Coconut Roti': {
    summary: 'A popular street food made by chopping roti with vegetables, eggs, and spices.',
    instructions: '1. Chop godamba roti.\n2. Stir-fry with vegetables, eggs, and meat (optional).\n3. Add curry sauce.\n4. Mix and serve hot.',
    image: 'crimg',
  },
  'Fish Ambul Thiyal': {
    summary: 'A sour fish curry made with goraka and spices.',
    instructions: '1. Cut fish into chunks.\n2. Marinate with goraka paste and spices.\n3. Cook in a clay pot until dry.\n4. Serve with rice.',
    image: 'mbimg',
  },
'Brinjal Moju': {
    summary: 'A sweet and tangy Sri Lankan eggplant pickle.',
    instructions: `1. Slice eggplants into bite-size pieces, salt lightly and set aside.\n2. Mix vinegar, sugar, chili, turmeric, garlic, ginger.\n3. Rinse & pat eggplant; deep‑fry until golden. Drain.\n4. Fry sliced onions until soft.\n5. Add eggplant; pour spiced vinegar mixture.\n6. Simmer until syrupy. Cool and serve as a condiment.`,
    image: 'bmimg',
  },
  'Cashew Curry': {
    summary: 'Rich and creamy curry made with cashew nuts.',
    instructions: `1. Soak cashews in warm water for 30 mins and blend to paste.\n2. Sauté onions, garlic, ginger, green chili.\n3. Add curry powder, turmeric; fry until fragrant.\n4. Stir in cashew paste, coconut milk, salt.\n5. Simmer until thickened. Garnish with cilantro; serve with rice or bread.`,
    image: 'caimg',
  },
  'Chicken Curry': {
    summary: 'A classic spicy and flavorful Sri Lankan chicken curry.',
    instructions: `1. Marinate chicken with chili powder, turmeric, salt, garlic-ginger paste.\n2. Sauté onions and curry leaves until golden.\n3. Add chicken, fry until sealed.\n4. Pour coconut milk and a little water; simmer until chicken is cooked.\n5. Adjust salt, finish with lime juice and cilantro.`,
    image: 'ccimg',
  },
  'Prawns Curry': {
    summary: 'A spicy and tangy curry made with prawns.',
    instructions: `1. Clean prawns, marinate with turmeric, salt, chili powder.\n2. Fry onions, garlic, ginger until soft.\n3. Add curry powder and tomato puree.\n4. Add prawns, mix well and cook briefly.\n5. Pour thick coconut milk, simmer 5 mins.\n6. Garnish with cilantro and serve hot.`,
    image: 'pcimg',
  },
  'Crab Curry': {
    summary: 'Spicy and flavorful Sri Lankan crab curry.',
    instructions: `1. Clean crabs, cut into pieces.\n2. Marinate with turmeric and salt.\n3. Sauté onions, garlic, ginger, black pepper.\n4. Add curry powder, tomato paste, water.\n5. Add crab; cook covered until sauce thickens.\n6. Stir in coconut milk, simmer a few mins.\n7. Garnish with cilantro; serve with rice or roti.`,
    image: 'crcimg',
  },
  'Coconut Sambol': {
    summary: 'Fresh coconut relish, best served with rice or bread.',
    instructions: `1. Grate fresh coconut finely.\n2. Add chopped shallots, green chili.\n3. Squeeze lime juice; add salt.\n4. Optionally mix in Maldive fish flakes.\n5. Mix well and serve immediately for freshness.`,
    image: 'csimg',
  },
  'Baby Jackfruit Curry': {
    summary: 'Delicious curry made from tender baby jackfruit.',
    instructions: `1. Boil jackfruit chunks until tender; drain.\n2. Sauté onions, garlic, ginger, green chilies.\n3. Add jackfruit and a mix of curry powder, chili powder, turmeric.\n4. Pour coconut milk, simmer until flavors meld.\n5. Garnish with curry leaves and coriander.`,
    image: 'bjimg',
  },
  'Leaves Salad': {
    summary: 'A light and healthy Sri Lankan leafy salad.',
    instructions: `1. Gather fresh greens—lettuce, watercress, carrots, cucumber.\n2. Toss lightly with lime juice, salt, and pepper.\n3. Optionally add fresh herbs like mint or cilantro.\n4. Serve immediately as a crisp side.`,
    image: 'lsimg',
  },
  'Short Eats': {
    summary: 'Variety of small Sri Lankan savory snacks.',
    instructions: `1. Popular types: vadai, samoosa, cutlets, fish rolls.\n2. Prepare each filling (e.g., spiced lentils, meat, fish).\n3. Shape and deep-fry until golden and crisp.\n4. Serve hot with coconut chutney or ketchup.`,
    image: 'seimg',
  },
  'Kola Kanda': {
    summary: 'Herbal porridge made with rice and medicinal leaves.',
    instructions: `1. Wash rice; boil in water until porridge forms.\n2. Add chopped kanka leaves (gotu kola) and other herbs.\n3. Simmer until greens are soft.\n4. Sweeten with jaggery or honey; add a splash of coconut milk.`,
    image: 'klkimg',
  },
  'Herbal Drinks': {
    summary: 'Natural and refreshing Sri Lankan herbal beverages.',
    instructions: `1. Examples: lemongrass, ginger, cinnamon teas.\n2. Boil herbs in water for 5–10 mins.\n3. Strain; sweeten lightly with honey or jaggery.\n4. Serve hot or chilled over ice.`,
    image: 'hdimg',
  },
  'Sri Lankan Milk': {
    summary: 'Simply prepared, fresh local dairy drink.',
    instructions: `1. Use fresh full-fat cow’s milk.\n2. Bring to a gentle boil; simmer 2–3 mins.\n3. Cool slightly; drink warm or refrigerate.\n4. Serve plain or with tea/coffee.`,
    image: 'mimg',
  },
  'Special Coffee': {
    summary: 'Full-bodied Sri Lankan-style coffee.',
    instructions: `1. Use filter or French press with strong dark roast.\n2. Pour hot water; brew for 4 mins.\n3. Add sweetened condensed milk and sugar to taste.\n4. Serve hot—or with ice for iced coffee.`,
    image: 'cfimg',
  },
  'Special Tea': {
    summary: 'Authentic Ceylon black tea, strong and brisk.',
    instructions: `1. Boil water; steep 1 tsp loose Ceylon tea per cup for 3–5 mins.\n2. Strain; add sugar or milk if desired.\n3. Enjoy hot, or chill for iced tea.`,
    image: 'timg',
  },
  'Sweets': {
    summary: 'Traditional Sri Lankan sweet treats and desserts.',
    instructions: `1. Popular sweets: kavum, kokis, aluwa.\n2. Prepare each batter with rice flour, coconut, treacle.\n3. Shape and deep-fry or steam based on type.\n4. Cool and serve as festive snacks.`,
    image: 'swimg',
  },
  'Pan Cakes': {
    summary: 'Sri Lankan pancakes – sweet or savory.',
    instructions: `1. Mix rice or wheat flour with coconut milk, sugar, salt.\n2. Optionally add sliced banana or egg.\n3. Pour batter on hot griddle; flip once edges set.\n4. Cook until golden; serve with syrup or chutney.`,
    image: 'pcsimg',
  },
  'Cakes': {
    summary: 'Local Sri Lankan-style cakes—light, moist, fragrant.',
    instructions: `1. Common varieties: pol cake, banana cake.\n2. Cream butter/sugar; add eggs, flour, milk, baking powder.\n3. Mix in mashed fruit or coconut.\n4. Bake at 180 °C (350 °F) for ~30 mins.\n5. Cool and serve.`,
    image: 'cksimg',
  },
};


const RecipeDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);
  const recipe = recipeData[decodedTitle];

  if (!recipe) {
    return (
      <div className="container py-5 text-center">
        <h2>Recipe not found</h2>
        <button className="btn btn-warning mt-3" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">{decodedTitle}</h2>
      <div className="card mb-4 shadow-lg">
        <h1>Recipe Detail Page</h1>
        <img src={allImages[recipe.image]} className="card-img-top" alt={decodedTitle} />
        <div className="card-body">
          <p className="card-text"><strong>Summary:</strong> {recipe.summary}</p>
          <p className="card-text"><strong>Instructions:</strong></p>
          <pre className="card-text bg-light p-3 rounded">{recipe.instructions}</pre>
        </div>
      </div>
      <button className="btn btn-success" onClick={() => navigate('/')}>Back to Recipes</button>
    </div>
  );
};

export default RecipeDetail;
