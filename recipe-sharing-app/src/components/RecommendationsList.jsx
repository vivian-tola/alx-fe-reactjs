import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Generate recommendations when the component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => useRecipeStore.getState().addFavorite(recipe.id)}>
              Add to Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No recommendations available. Add some favorites to get recommendations!</p>
      )}
    </div>
  );
};

export default RecommendationsList;