import React from 'react';
import Recipe from './Recipe.jsx';

export default function RecipeList({
  recipes,
  handleRecipeAdd,
  handleRecipeDelete,
}) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              handleRecipeDelete={handleRecipeDelete}
              {...recipe}
            />
          );
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-cotainer">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
