// 30. Blog with React Router — dynamic route params
import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      slug: "technology",
      title: "The Future of Technology",
      description: "Learn about the latest trends in technology.",
    },
    {
      slug: "support",
      title: "Why Customer Support Matters",
      description: "Discover why great customer support is important.",
    },
    {
      slug: "agriculture",
      title: "The Future of Agriculture",
      description: "Explore how technology is changing agriculture.",
    },
  ];

  return (
    <div>
      <h1>Blog</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>
            <Link to={`/blog/${blog.id}`}>
              {/* When person click this particular blog, carry them go that blog's page. */}
              {blog.title}
            </Link>
          </h2>

          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog; 