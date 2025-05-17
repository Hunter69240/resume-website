import { useState, useEffect } from "react";

function LightCursor() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background: `radial-gradient(circle 150px at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.4), transparent 80%)`,
        mixBlendMode: "screen",
      }}
    />
  );
}

export default LightCursor;
