import React, { useState } from "react";

// MouseTracker uses a render prop to let parent decide UI
export default function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{
        height: "200px",
        border: "2px solid #333",
        marginTop: "20px",
        padding: "10px",
      }}
      onMouseMove={handleMouseMove}
    >
      {render(position)}
    </div>
  );
}
