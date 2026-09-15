// 20. Movie database (TMDB API) — pagination
import React, { useState, useEffect } from "react";

function MovieDb() {
  const [userSearch, setUserSearch] = useState("");
  const [Movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const movieSearch = async () => {
      if (!userSearch.trim()) {
        setMovie([]);
        setError(null);
        return;
      }
      setLoading(true);
      setError(null);
      setMovie([]);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(userSearch)}&page=1&api_key=${API_KEY}`,
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();

        setMovie(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieSearch();
  }, [userSearch]);
    
return (
  <div>
    <input
      type="text"
      placeholder="enter movie"
     onChange={(e) => setUserSearch(e.target.value)}
      value={userSearch}
    />
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "16px", padding: 0 }}>
      {Movie.map((movie) => (
        <li key={movie.id} style={{ width: "150px", textAlign: "center" }}>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          ) : (
            <div style={{ width: "150px", height: "225px", background: "#ccc" }}>
              No image
            </div>
          )}
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
  </div>
);
}

export default MovieDb;
