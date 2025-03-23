import { useEffect, useState } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        setRecipes(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes?.map((recipe) => (
        <div className="bg-red-100 rounded flex flex-col items-center p-2 hover:bg-red-200 hover:scale-105">
          <img
            src={recipe.image}
            // alt={recipe.title}
            className="h-20 w-full border-b rounded-full"
          />
          <div className="font-bold ">{recipe.title}</div>
          <div className="text-gray-500">{recipe.summary}</div>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
