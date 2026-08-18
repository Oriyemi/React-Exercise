// Recipe search — debouncing user input
import React, { useState, useEffect } from "react";

function RecipeSearch() {
  const [userSearch, setUserSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchTimer = setTimeout(async () => {
      if (!userSearch.trim()) {
        setRecipe([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      setRecipe([]);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearch}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();

        if (!data.meals) {
          setError("No recipes found");
          setRecipe([]);
          return;
        }

        setRecipe(data.meals);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [userSearch]);

 return (
  <div className="min-h-screen bg-gray-100 px-6 py-10">
    <div className="mx-auto max-w-6xl">

      
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Recipe Finder
        </h1>

        <p className="mt-2 text-gray-500">
          Search for delicious recipes and discover their ingredients
        </p>
      </div>

     
      <div className="mx-auto mb-10 max-w-xl">
        <input
          type="text"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          placeholder="Search for a recipe..."
          className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-800 shadow-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
        />
      </div>

     
      {loading && (
        <p className="mb-6 text-center text-lg font-medium text-orange-500">
          Searching for recipes...
        </p>
      )}

     
      {error && (
        <p className="mb-6 text-center font-medium text-red-500">
          {error}
        </p>
      )}

    
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipe.map((item) => (
          <div
            key={item.idMeal}
            className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="h-56 w-full object-cover"
            />

           
            <div className="p-6">

              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                {item.strMeal}
              </h2>

              <h3 className="mb-3 text-lg font-semibold text-orange-500">
                Ingredients
              </h3>

              <div className="space-y-2">
                {Array.from({ length: 20 }, (_, index) => {
                  const ingredient =
                    item[`strIngredient${index + 1}`];

                  const measure =
                    item[`strMeasure${index + 1}`];

                  if (!ingredient) return null;

                  return (
                    <p
                      key={index}
                      className="border-b border-gray-100 pb-2 text-sm text-gray-600"
                    >
                      <span className="font-medium text-gray-800">
                        {measure}
                      </span>{" "}
                      {ingredient}
                    </p>
                  );
                })}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}

export default RecipeSearch;