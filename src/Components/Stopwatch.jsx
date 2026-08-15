import React, { useState, useRef } from "react";

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef({});

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center shadow-2xl">
        
        <h1 className="text-2xl font-bold text-white mb-8">
          Stopwatch
        </h1>

        <div className="bg-gray-950 border border-gray-800 rounded-xl py-8 mb-8">
          <p className="text-gray-400 text-sm mb-2">
            Time passed
          </p>

          <h2 className="text-5xl font-mono font-bold text-white">
            {secondsPassed.toFixed(3)}
          </h2>

          <p className="text-gray-500 mt-2">
            seconds
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition duration-200"
          >
            Start
          </button>

          <button
            onClick={handleStop}
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition duration-200"
          >
            Stop
          </button>
        </div>

      </div>
    </div>
  );
}

export default Stopwatch;