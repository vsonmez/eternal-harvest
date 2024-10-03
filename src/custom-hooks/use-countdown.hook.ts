import React from "react";
import { useState, useEffect } from "react";

const useCountdown = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive && count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      setIsActive(false);
      setCount(initialCount);
    }

    return () => clearInterval(timer);
  }, [isActive, count, initialCount]);

  const startCountdown = React.useCallback(
    (newCount?: number) => {
      setIsActive(true);
      setCount(newCount || initialCount);
    },
    [initialCount]
  );

  return { count, isActive, startCountdown };
};

export default useCountdown;
