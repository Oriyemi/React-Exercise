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
    <body style={isDarkMode ? darkMode:lightMode} className='min-h-screen flex justify-center items-center '>
      <button onClick={toggleDarkMode} className=" rounded-2xl p-4 text-2xl font-mono bg-[#00FF00] w-60 hover:bg-[#13e713] cursor-pointer">
        Toggle:{isDarkMode ? "dark" : "light"}
      </button>
    </body>
  );
}

export default Toggle;
