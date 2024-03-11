import { useEffect, useState } from "react";
import { getTimeDiff, calculateMilliseconds } from "../utils";

const useTimer = (days, hours) => {
  const timeInMs = Date.now() + calculateMilliseconds(days, hours);
  const [timeLeft, setTimeLeft] = useState(timeInMs - Date.now());

  useEffect(() => {
    const id = setTimeout(() => {
      // We can set conditions here like timeLeft > 0
      setTimeLeft((prev) => prev - 1000);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  return getTimeDiff(timeLeft);
};
export default useTimer;
