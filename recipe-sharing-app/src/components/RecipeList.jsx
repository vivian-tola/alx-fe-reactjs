import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, setSearchTerm } =
    useRecipeStore();

  return (
    <div className="recipe-lists">
      <div>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
