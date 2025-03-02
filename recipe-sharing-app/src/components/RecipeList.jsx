import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe-lists">
      {recipes.map((recipe) => (
        <Link
          to={`recipe/${recipe.id}`}
          key={recipe.id}
          className="recipe-list"
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
