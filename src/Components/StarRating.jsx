//  Star rating widget — separate hover and selected state
import React, { useState } from "react";

function StarRating() {
  const [selectedState, setSelectedState] = useState(0);
  const [hoverState, setHoverState] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
          <span onMouseEnter={() => {
              setHoverState(star)
          } } key={star}>⭐</span>
      ))}
    </div>
  );
}

export default StarRating;
