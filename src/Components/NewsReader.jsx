// 25. News reader with category filters
import React, { useState, useEffect } from "react";

function NewsReader() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const newSearch = async () => {
      setLoading(true);
      setError(null);

      try {
        const categories = [
          "business",
          "technology",
          "sports",
          "health",
        ];

        const responses = await Promise.all(
          categories.map((currentCategory) =>
            fetch(
              `https://newsapi.org/v2/top-headlines?country=us&category=${currentCategory}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
            )
          )
        );

        for (const response of responses) {
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
        }

        const data = await Promise.all(
          responses.map((response) => response.json())
        );

        const allArticles = data.flatMap((result, index) =>
          result.articles.map((article) => ({
            ...article,
            category: categories[index],
          }))
        );

        setArticles(allArticles);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    newSearch();
  }, []);

  // FILTER
  const filteredArticles =
    category === "all"
      ? articles
      : articles.filter((item) => item.category === category);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          News Reader
        </h1>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">

          <button
            onClick={() => setCategory("all")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              category === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setCategory("technology")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              category === "technology"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Technology
          </button>
          
          <button
            onClick={() => setCategory("business")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              category === "business"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Business
          </button>


          <button
            onClick={() => setCategory("sports")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              category === "sports"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Sports
          </button>

          <button
            onClick={() => setCategory("health")}
            className={`px-5 py-2 rounded-full font-medium transition ${
              category === "health"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            Health
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-600 text-lg">
            Loading news...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 text-lg">
            {error}
          </p>
        )}

        {/* Articles */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredArticles.map((item) => (
              <div
                key={item.url}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {item.urlToImage && (
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />
                )}

                <div className="p-5">

                  <p className="text-sm text-blue-600 font-semibold uppercase mb-2">
                    {item.category}
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>

                  <p className="text-sm text-gray-400">
                    {item.source?.name}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                  >
                    Read more →
                  </a>

                </div>
              </div>
            ))}

          </div>
        )}

        {/* No results */}
        {!loading &&
          !error &&
          filteredArticles.length === 0 && (
            <p className="text-center text-gray-500 text-lg mt-10">
              No articles found.
            </p>
          )}

      </div>
    </div>
  );
}

export default NewsReader;