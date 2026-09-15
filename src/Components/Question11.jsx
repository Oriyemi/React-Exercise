// Image carousel — index wraparound logic
import React, { useState } from "react";
import poto1 from "../assets/poto1.jpg";
import poto2 from "../assets/poto2.jpg";
import poto3 from "../assets/poto3.jpg";
import poto4 from "../assets/poto4.jpg";

function Carousel() {
  const images = [poto1, poto2, poto3, poto4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="flex items-center gap-6 rounded-3xl bg-[#8B1E3F] p-6 shadow-2xl">
        
        <button
          onClick={handlePrevious}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition duration-300 hover:bg-white/20 hover:scale-110"
        >
          ←
        </button>

        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            className="h-96 w-96 object-cover transition duration-300"
            src={images[currentIndex]}
            alt=""
          />
        </div>

        <button
          onClick={handleNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition duration-300 hover:bg-white/20 hover:scale-110"
        >
          →
        </button>

      </div>
    </div>
  );
}

export default Carousel;