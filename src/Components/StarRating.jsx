import React, { useState } from "react";

function StarRating() {
  const [selectedState, setSelectedState] = useState(0);
  const [hoverState, setHoverState] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  const displayedRating = hoverState > 0 ? hoverState : selectedState;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div
        onMouseLeave={() => setHoverState(0)}
        className="flex flex-col items-center gap-3 rounded-lg bg-white p-6 shadow-sm"
      >
       

        <div className="flex gap-1">
          {stars.map((star) => (
            <span
              onMouseEnter={() => {
                setHoverState(star);
              }}
              onClick={() => {
                setSelectedState(star);
              }}
              key={star}
              className={`cursor-pointer text-3xl transition-colors ${
                star <= displayedRating
                  ? "text-[#F5C518]"
                  : "text-slate-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        
      </div>
    </div>
  );
}

export default StarRating;