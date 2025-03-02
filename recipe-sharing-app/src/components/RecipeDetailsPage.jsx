import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails'

const RecipeDetailsPage = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  return <RecipeDetails recipeId={parseInt(id)} />; // Pass the recipeId as a prop
};

export default RecipeDetailsPage;