import React from 'react';
import useRecipeStore  from './recipeStore';
import { useNavigate  } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  useN
  const handleDelete = () => {
    deleteRecipe(recipeId);
    // You can add a redirect here after deleting, if needed
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
