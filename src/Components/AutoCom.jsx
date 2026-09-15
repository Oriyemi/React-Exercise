// 24. Autocomplete/typeahead — debounce plus keyboard navigation
import React, { useState, useEffect } from "react";

function AutoCom() {
  const [userSearch, setUserSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchInput = setTimeout(async () => {
        if (!userSearch.trim()) {
          setSuggestions([]);
        setSelectedIndex(-1);
        setError(null);
        return;
      }
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${userSearch}`,
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
          setSuggestions(data.products);
          setSelectedIndex(-1);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(searchInput);
    };
  }, [userSearch]);

    const handleKeyDown = (e) => {
       if (suggestions.length === 0) {
      return;
    }
        if (e.key === "ArrowDown") {
         e.preventDefault();
      setSelectedIndex((previousIndex) =>
        Math.min(previousIndex + 1, suggestions.length - 1),
      );
    }

        if (e.key === "ArrowUp") {
         e.preventDefault();
      setSelectedIndex((previousIndex) => Math.max(previousIndex - 1, 0));
    }
    if (e.key === "Enter") {
      if (selectedIndex >= 0) {
        setUserSearch(suggestions[selectedIndex].title);
          setSuggestions([]);
           setSelectedIndex(-1);
      }
    }
    if (e.key === "Escape") {
      setSuggestions([]);
      setSelectedIndex(-1);
    }
    };
    
   return (
  <div className="min-h-screen bg-gray-100 flex justify-center pt-16 px-4">
    <div className="w-full max-w-xl">
      
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Product Autocomplete
      </h1>

      <div className="relative">
        <input
          type="text"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                     outline-none focus:border-purple-500 focus:ring-2 
                     focus:ring-purple-200 bg-white"
        />

        {loading && (
          <p className="mt-2 text-sm text-gray-500">
            Searching...
          </p>
        )}

        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}

        {suggestions.length > 0 && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
            {suggestions.map((item, index) => (
              <div
                key={item.id}
                className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 transition ${
                  index === selectedIndex
                    ? "bg-purple-100"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  setUserSearch(item.title);
                  setSuggestions([]);
                  setSelectedIndex(-1);
                }}
              >
                <p className="font-medium text-gray-800">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        )}

        {!loading &&
          userSearch.trim() &&
          suggestions.length === 0 &&
          !error && (
            <p className="mt-2 text-sm text-gray-500">
              No products found.
            </p>
          )}
      </div>
    </div>
  </div>
);
}

export default AutoCom;
