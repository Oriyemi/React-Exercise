import React, { useState, useEffect } from "react";

function CountDownTimer() {
  const countDown = () => {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    const totalSeconds = Math.floor(difference / 1000);
    const minutesRemaing = Math.floor(totalSeconds / 60);
    const secondsRemaining = totalSeconds % 60;
    const hours = Math.floor(minutesRemaing / 60);
    const minutesLeft = minutesRemaing % 60;
    const days = Math.floor(hours / 24);
    const hoursRemaining = hours % 24;

    setTimeLeft({
      days: days,
      hours: hoursRemaining,
      minutes: minutesLeft,
      seconds: secondsRemaining,
    });
  };

  const targetDate = new Date("January 1, 2027 00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    countDown();

    const interval = setInterval(() => {
      countDown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">

        <div className="text-center mb-10">
          <p className="text-purple-400 font-medium uppercase tracking-[0.3em] text-sm mb-3">
            Countdown
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            New Year 2027
          </h1>

          <p className="text-gray-400 mt-3">
            Time remaining until January 1, 2027
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-bold text-white">
              {timeLeft.days}
            </p>
            <p className="text-gray-500 uppercase tracking-wider text-sm mt-2">
              Days
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-bold text-white">
              {timeLeft.hours}
            </p>
            <p className="text-gray-500 uppercase tracking-wider text-sm mt-2">
              Hours
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-bold text-white">
              {timeLeft.minutes}
            </p>
            <p className="text-gray-500 uppercase tracking-wider text-sm mt-2">
              Minutes
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center">
            <p className="text-4xl md:text-5xl font-bold text-purple-400">
              {timeLeft.seconds}
            </p>
            <p className="text-gray-500 uppercase tracking-wider text-sm mt-2">
              Seconds
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CountDownTimer;