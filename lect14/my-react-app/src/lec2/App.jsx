import { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemeButton from "./ThemeButton";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeButton />
    </ThemeContext.Provider>
  );
}

export default App;