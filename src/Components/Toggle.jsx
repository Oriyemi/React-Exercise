import React, { useState } from "react";
// Light/dark toggle — boolean state driving classes
function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const lightMode = {
    backgroundColor: "white",
    color: "black",
  };

  const darkMode = {
    backgroundColor: "black",
    color:"white",
  }


 
  return (
    <div>
      <button onClick={toggleDarkMode}>
        Toggle:{isDarkMode ? "light" : "dark"}
      </button>
    </div>
  );
}

export default Toggle;
