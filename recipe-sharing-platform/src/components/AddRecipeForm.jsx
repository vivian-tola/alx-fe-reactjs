import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const validate = () => {
    if (!title || !ingredients || !steps) {
      setErrors("All fields are required!");
      return;
    }
    const ingredientsList = ingredients
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);

    if (ingredientsList.length < 2) {
      setErrors("Ingredients must contain at least two items.");
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validate()

    if (!title || !ingredients || !steps) {
      setErrors("All fields are required!");
      return;
    }

    const ingredientsList = ingredients
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter(Boolean);
    const stepsList = steps
      .split("\n")
      .map((step) => step.trim())
      .filter(Boolean);

    if (ingredientsList.length < 2) {
      setErrors("Ingredients must contain at least two items.");
      return;
    }

    // Reset error message if validation passes
    setErrors("");
    const newRecipe = {
      title,
      ingredients: ingredientsList,
      steps: stepsList,
    };
    console.log("New Recipe:", newRecipe);

    // Reset form fields after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto sm:p-2 md:p-4 p-6 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Add New Recipe
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-lg font-medium mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 text-lg font-medium mb-2"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, each on a new line"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-gray-700 text-lg font-medium mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter preparation steps, each on a new line"
          />
        </div>

        {/* Error Message */}
        {errors && <p className="text-red-500 text-center mb-4">{errors}</p>}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto hover:bg-blue-600 transition duration-300"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
