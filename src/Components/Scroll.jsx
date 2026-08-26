// 23. Infinite scroll feed — IntersectionObserver

import React, { useState, useEffect, useRef } from "react";

function Scroll() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const observerRef = useRef(null);

 
  useEffect(() => {
    const scrollFeed = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();

        // Add the new posts to the existing posts
        setPosts((previousPosts) => [...previousPosts, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    scrollFeed();
  }, [currentPage]);

  // Watch the sentinel
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setCurrentPage((previousPage) => previousPage + 1);
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Infinite Scroll Feed
      </h1>

      {posts.map((post) => (
        <div
          key={post.id}
          className="border-b p-4 mb-4"
        >
          <h2 className="text-xl font-semibold mb-2">
            {post.title}
          </h2>

          <p>
            {post.body}
          </p>
        </div>
      ))}

      {loading && (
        <p className="text-center py-4">
          Loading more posts...
        </p>
      )}

      {error && (
        <p className="text-center py-4">
          {error}
        </p>
      )}

      {/* Sentinel */}
      <div
        ref={observerRef}
        className="h-10"
      ></div>
    </div>
  );
}

export default Scroll;