import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeById, setRecipeById] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        const filteredRecipe = result.find(
          (recipe) => recipe.id === parseInt(id)
        );

        setRecipeById(filteredRecipe);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section: Recipe image and title */}
        <div className="bg-red-100 rounded-lg shadow-lg p-6">
          <img
            src={recipeById.image}
            alt={recipeById.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {recipeById.title}
          </h1>
          <p className="text-gray-600 text-lg">{recipeById.summary}</p>
        </div>

        {/* Right section: Ingredients and Instructions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {recipeById?.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-lg">
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            Instructions
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            {recipeById?.instructions?.map((step, index) => (
              <li key={index} className="text-lg">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
