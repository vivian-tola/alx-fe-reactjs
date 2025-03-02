import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <>
      <h1>Recipe Manager</h1>
      <div className="recipe-manager">
        <AddRecipeForm />
        <RecipeList />
      </div>
    </>
  );
}

export default App;

{
  /* <div>
        <h1>Recipe Manager</h1>
        <AddRecipeForm />
        <RecipeList />
      </div> */
}
