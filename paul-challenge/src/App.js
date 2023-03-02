import { useState } from "react";
import "./App.css";
import Shapes from "./components/Shapes";

function App() {
  const [circles, setCircles] = useState([]);
  const [undoneCircles, setUndoneCircles] = useState([]);
  const [type, setType] = useState("circle");
  const [size, setSize] = useState(30);

  function addCircle(e) {
    setCircles((prevCircles) => [
      ...prevCircles,
      {
        x: e.clientX,
        y: e.clientY,
        id: crypto.randomUUID(),
        shape: type,
        size: size,
      },
    ]);
  }

  function undoCircleHandler() {
    if (circles.length > 0) {
      const newCircleArr = [...circles];
      const poppedCircle = newCircleArr.pop();
      setCircles(newCircleArr);
      setUndoneCircles((prev) => [...prev, poppedCircle]);
    }
  }

  function redoCircleHandler() {
    if (undoneCircles.length > 0) {
      const newUndoneCircles = [...undoneCircles];
      const poppedCircle = newUndoneCircles.pop();
      setUndoneCircles(newUndoneCircles);
      setCircles((prev) => [...prev, poppedCircle]);
    }
  }
  return (
    <div
      className="App"
      style={{
        background: "#333333",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", zIndex: "2" }}>
        <button onClick={undoCircleHandler} disabled={circles.length <= 0}>
          Undo
        </button>
        <button
          onClick={redoCircleHandler}
          disabled={undoneCircles.length <= 0}
        >
          Redo
        </button>
        <button onClick={() => setType("circle")}>Circle</button>
        <button onClick={() => setType("square")}>Square</button>
        <button onClick={() => setType("triangle")}>Triangle</button>
        <input
          type="range"
          min="1"
          max="100"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          class="slider"
          id="myRange"
        ></input>
      </div>
      <div
        style={{ width: "100vw", height: "100vh", position: "relative" }}
        onClick={addCircle}
      >
        {circles.map((circle) => (
          <Shapes
            top={circle.y}
            left={circle.x}
            key={circle.id}
            shape={circle.shape}
            size={circle.size}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
