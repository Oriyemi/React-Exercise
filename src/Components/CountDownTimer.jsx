// 16. Countdown timer to a date — date math, cleanup on unmount
import React, { useState, useEffect} from 'react'

function CountDownTimer() {
    const countDown = () => {
        const currentDate = new Date();
        const difference = targetDate - currentDate
        
    };
    const targetDate = new Date("January 1, 2027 00:00:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds:0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
          
        }, 1000);
        
        return () => {
            clearInterval()
        };

    },[])
  return (
      <div>
          <span></span>
    </div>
  )
}

export default CountDownTimer