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
    if (e.key === "ArrowDown") {
      setSelectedIndex((previousIndex) =>
        Math.min(previousIndex + 1, suggestions.length - 1),
      );
    }

    if (e.key === "ArrowUp") {
      setSelectedIndex((previousIndex) => Math.max(previousIndex - 1, 0));
    }
    if (e.key === "Enter") {
      if (selectedIndex >= 0) {
        setUserSearch(suggestions[selectedIndex].title);
        setSuggestions([]);
      }
    }
    if (e.key === "Escape") {
      setSuggestions([]);
      setSelectedIndex(-1);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userSearch}
        onChange={(e) => {
          setUserSearch(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <div>
        {suggestions.map((item, index) => (
          <div
            key={item.id}
            className={index === selectedIndex ? "bg-gray-200" : ""}
          >
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoCom;
