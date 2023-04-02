import { useState, useEffect } from "react";

export default function timer() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <div className="countdown">{timeLeft} seconds left</div>
    </div>
  );
}
