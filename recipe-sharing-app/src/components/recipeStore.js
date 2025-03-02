import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (recipe) =>
    set((state) => ({
      recipes: state.recipes.filter((rc) => rc.id !== recipe.id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((rc) =>
        rc.id === updatedRecipe.id ? updatedRecipe : rc
      ),
    })),
}));

export default useRecipeStore;
