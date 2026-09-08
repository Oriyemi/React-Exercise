import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Us</h1>

      <p>
        Welcome to our blog. We share useful articles about technology,
        customer support, agriculture, and other interesting topics.
      </p>

      <h2>What We Do</h2>

      <p>
        Our goal is to provide helpful and easy-to-understand information
        through our blog posts.
      </p>

      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default About;