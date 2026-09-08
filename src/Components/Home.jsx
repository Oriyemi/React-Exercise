import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <h1>This is Home Page</h1>

          <Link to="/blog">Read our Blog</Link>
          <Link to="/about">Check About Us </Link>
    </div>
  );
}

export default Home;