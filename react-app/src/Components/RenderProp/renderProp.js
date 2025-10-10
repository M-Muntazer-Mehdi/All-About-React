import React from "react";
import MouseTracker from "./MouseTracker";

export default function RenderProps() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Render Props Example</h1>
      <p>Move your mouse inside the box to see the coordinates:</p>

      <MouseTracker
        render={({ x, y }) => (
          <p style={{ color: "blue", fontWeight: "bold" }}>
            Mouse position: ({x}, {y})
          </p>
        )}
      />

      {/* Another example with different rendering */}
      <MouseTracker
        render={({ x, y }) => (
          <div style={{ marginTop: "10px", color: "green" }}>
            <strong>
              Coordinates squared: ({x * x}, {y * y})
            </strong>
          </div>
        )}
      />
    </div>
  );
}
