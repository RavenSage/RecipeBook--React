import React from 'react';

function RecipeIngredientEdit(props) {
  const { ingredient, handleIndregientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIndregientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        value={ingredient.name}
        type="text"
        onClick={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        value={ingredient.amount}
        onClick={(e) => handleChange({ amount: e.target.value })}
        type="text"
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}

export default RecipeIngredientEdit;
