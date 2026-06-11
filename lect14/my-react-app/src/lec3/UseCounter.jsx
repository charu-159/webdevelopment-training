
import { useState } from "react";

function useCounter(initial) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(initial);

  return { count, inc, dec, reset };
}

export default useCounter;
