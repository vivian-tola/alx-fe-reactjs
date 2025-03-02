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
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().include(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
