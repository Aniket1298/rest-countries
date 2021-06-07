import React from "react";

import Header from "./components/header";
import Main from "./components/main";

export default function App() {
  const [theme, setTheme] = useState("hsl(0, 0%, 98%)");
  const [mode, setMode] = useState("light");
  function changetheme() {
    if (mode == "light") {
      setMode("dark");

      setTheme("hsl(207, 26%, 17%)");
    } else {
      setMode("light");
      setTheme("hsl(0, 0%, 90%)");
    }
  }
  return (
    <div
      className="App"
      style={{ backgroundColor: theme, minHeight: window.innerHeight }}
    >
      <Header mode={mode} changetheme={changetheme} />
      <Main mode={mode} />
    </div>
  );
}
