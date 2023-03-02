function Circle({ top, left, size }) {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        top: top,
        left: left,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
}
function Square({ top, left, size }) {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        top: top,
        left: left,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
}
function Triangle({ top, left, size }) {
  return (
    <div
      style={{
        width: "0",
        height: "0",
        position: "absolute",
        top: top,
        left: left,
        transform: "translate(-50%, -50%)",
        borderLeft: `${size}px solid transparent`,
        borderRight: `${size}px solid transparent`,
        borderBottom: `${size + size / 4}px solid whitesmoke`,
      }}
    ></div>
  );
}

export default function Shapes({ top, left, shape, size }) {
  function renderShape(shape) {
    switch (shape) {
      case "circle":
        return <Circle top={top} left={left} size={size} />;
      case "triangle":
        return <Triangle top={top} left={left} size={size} />;
      case "square":
        return <Square top={top} left={left} size={size} />;
      default:
        return <Circle top={top} left={left} size={size} />;
    }
  }

  return renderShape(shape);
}
