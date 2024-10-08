import useRecipeStore  from './recipeStore';

function RecipeList () {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div >
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <h6>{recipe.id}</h6>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;