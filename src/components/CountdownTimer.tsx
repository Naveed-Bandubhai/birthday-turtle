
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let targetDate = new Date(now.getFullYear(), 4, 1); // May is month 4 (0-indexed)
      
      // If current date is past May 1st this year, target next year
      if (now > targetDate) {
        targetDate = new Date(now.getFullYear() + 1, 4, 1);
      }
      
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-romantic-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-12">Counting Down to Your Special Day</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <span className="block text-4xl md:text-5xl font-bold text-romantic-pink mb-2">{timeLeft.days}</span>
            <span className="text-sm md:text-base">Days</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <span className="block text-4xl md:text-5xl font-bold text-romantic-pink mb-2">{timeLeft.hours}</span>
            <span className="text-sm md:text-base">Hours</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <span className="block text-4xl md:text-5xl font-bold text-romantic-pink mb-2">{timeLeft.minutes}</span>
            <span className="text-sm md:text-base">Minutes</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <span className="block text-4xl md:text-5xl font-bold text-romantic-pink mb-2">{timeLeft.seconds}</span>
            <span className="text-sm md:text-base">Seconds</span>
          </div>
        </div>
        <p className="text-center mt-8 text-lg">Until Your Birthday on May 1st ✨</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
