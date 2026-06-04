// App.jsx
import React, { useState } from 'react';

const App = () => {
  // Step 1: Create a state variable
  const [count, setCount] = useState(0);

  // Step 2: Functions to update state
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
