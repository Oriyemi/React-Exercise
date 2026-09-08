import React from "react";
import { useParams, Link } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();

  const blogs = [
    { 
      slug: "technology",
      title: "The Future of Technology",
      content:
        "Technology is changing the way we live, work, communicate, and solve problems. Artificial intelligence, cloud computing, and software development are creating new opportunities around the world.",
    },
    {
      slug: "support",
      title: "Why Customer Support Matters",
      content:
        "Customer support is an important part of every successful business. Good support helps customers solve problems, builds trust, and creates a better experience for users.",
    },
    {
      slug: "agriculture",
      title: "The Future of Agriculture",
      content:
        "Agriculture is becoming more advanced through the use of technology. Farmers can now use data, sensors, drones, and other tools to improve productivity and manage their farms more effectively.",
    },
  ];

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return (
      <div>
        <h1>Blog post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{blog.title}</h1>

      <p>{blog.content}</p>

      <Link to="/blog">← Back to Blog</Link>
    </div>
  );
}

export default BlogPost;