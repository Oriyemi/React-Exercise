// 33. Custom hooks collection — useDebounce, useFetch, useMediaQuery
import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceSearch() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <p>Normal value: {search}</p>

      <p>Debounced value: {debouncedSearch}</p>
    </div>
  );
}

export default DebounceSearch;