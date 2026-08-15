// 4. Random quote generator — arrays, event handlers
import React, { useState } from "react";

function QuoteGen() {
  const quotes = [
    "Believe in yourself",
    "Never give up",
    "Stay focused",
    "You can do it",
  ];

  const [randomIndex, setRandomIndex] = useState("");

  const getRandomQuote = () => {
    setRandomIndex(Math.floor(Math.random() * quotes.length));
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center shadow-2xl">
        
        <h1 className="text-3xl font-bold text-white mb-8">
          Random Quote
        </h1>

        <div className="min-h-32 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed">
            {quotes[randomIndex]}
          </p>
        </div>

        <button
          onClick={getRandomQuote}
          className="bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
        >
          New Quote
        </button>

      </div>
    </div>
  );
}

export default QuoteGen;