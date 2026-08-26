// 25. News reader with category filters
import React, { useState, useEffect } from "react";
import.meta.env.VITE_NEWS_API_KEY

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
       const response = await fetch(
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
          const data = await response.json();
          setArticles(data.articles)
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
      };
      newSearch();
  }, []);

    return <div>
      {articles.map((item) => (
  <div key={item.id}>
    <p>{item.title}</p>
  </div>
))}
  </div>;
}

export default NewsReader;
