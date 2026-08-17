// 16. Countdown timer to a date — date math, cleanup on unmount
import React, { useState, useEffect} from 'react'

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
        setTimeLeft(
            {
        days: days,
        hours: hoursRemaining,
        minutes: minutesLeft,
        seconds:secondsRemaining,
    }
        )
    };
    const targetDate = new Date("January 1, 2027 00:00:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds:0,
    });

    useEffect(() => {
        countDown();
        const interval = setInterval(() => {
            countDown();
        }, 1000);
        
        return () => {
            clearInterval(interval)
        };

    },[])
  return (
      <div>
          <span></span>
    </div>
  )
}

export default CountDownTimer