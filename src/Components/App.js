import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      namename: 'new',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr',
      ingredients: [{ id: uuidv4(), name: 'Name', amount: '1 Tbs' }],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <div>
      <RecipeList
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      { id: '1', name: 'Chicken', amount: '1 Kg' },
      { id: 2, name: 'salt', amount: '1 Tbs' },
    ],
  },
  {
    id: 2,
    name: 'Plain Mutton',
    servings: 5,
    cookTime: '0:45',
    instructions:
      '1. Put paprika on mutton\n2. Put mutton in oven\n3. Eat mutton',
    ingredients: [
      { id: '1', name: 'Mutton', amount: '3 Kg' },
      { id: 2, name: 'Paprika', amount: '2 Tbs' },
    ],
  },
];

export default App;