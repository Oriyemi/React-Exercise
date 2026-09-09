import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <nav>
        <Link to="/homenavigate">HomePageNavigate</Link>
        <Link to="/">HomePage</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to=""></Link>
        <Link to="/aboutpage">About-Page</Link>
        <Link to=""></Link>
      </nav>
    </div>
  );
}

export default Homepage;
