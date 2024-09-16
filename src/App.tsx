import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const countChanger = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="card">
      <button onClick={countChanger}>count is {count}</button>
    </div>
  );
}

export default App;
