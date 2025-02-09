import { useState } from "react";

// custom hook
export const useCounter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => {
    setCounterValue((previous) => previous + 1);
  };

  const decrement = (info: string) => {
    console.log(`${info} - ${counterValue}`);
    setCounterValue((prev) => prev - 1);
  };

  return { counterValue, increment, decrement };
};
