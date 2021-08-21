import React from 'react';

function RecipeIngredientEdit(ingredient) {
  return (
    <>
      <input
        className="recipe-edit__input"
        value={ingredient.name}
        type="text"
      />
      <input
        className="recipe-edit__input"
        value={ingredient.amount}
        type="text"
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}

export default RecipeIngredientEdit;
