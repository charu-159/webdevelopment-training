import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  function fun() {
    setCount(count);
  }

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={fun}>addd</button>
    </div>
  );
};

export default App;
