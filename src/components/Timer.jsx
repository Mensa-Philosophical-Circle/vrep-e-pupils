import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Timer = ({time}) => {
  const [timeLeft, setTimeLeft] = useState(time); // 30 minutes in seconds

  const calculateTimeLeft = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    return { hours, minutes, seconds };
  };

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        navigate("/exam");

        clearInterval(interval);

        // Timer has reached 0, handle any desired actions here
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [timeLeft]);

  const { hours, minutes, seconds } = calculateTimeLeft();

  return (
    <div>
      <p>{hours} : {minutes} : {seconds}</p>
    </div>
  );
};

export default Timer;
