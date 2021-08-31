import React from 'react';

function RecipeIngredientEdit(props) {
  const { ingredient, handleIndregientChange } = props;

  function handleChange(changes) {
    handleIndregientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        value={ingredient.name}
        type="text"
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        value={ingredient.amount}
        onInput={(e) => handleChange({ amount: e.target.value })}
        type="text"
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}

export default RecipeIngredientEdit;
