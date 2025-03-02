import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetailsPage from "./components/RecipeDetailsPage";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const HomePage = () => {
  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="favorites" element={<FavoritesList />} />
          <Route path="recommendations" element={<RecommendationsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
