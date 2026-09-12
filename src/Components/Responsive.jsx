import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

function Responsive() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {isMobile ? (
        <h1>📱 You are on mobile</h1>
      ) : (
        <h1>💻 You are on desktop</h1>
      )}
    </div>
  );
}

export default Responsive;