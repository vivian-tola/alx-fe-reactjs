import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: "",
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
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().include(state.searchTerm.toLowerCase())
      ),
    })),
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
