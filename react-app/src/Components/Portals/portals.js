import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [showNormal, setShowNormal] = useState(false);
  const [showPortal, setShowPortal] = useState(false);

  return (
    <div
      style={{
        height: "200px",
        overflow: "scroll",
        border: "2px solid #aaa",
        position: "relative",
      }}
    >
      <p style={{ padding: 20 }}>Scroll down ↓</p>

      <div style={{ height: "1000px", background: "#eee", padding: 20 }}>
        <button onClick={() => setShowNormal(true)}>Open Normal Modal</button>
        <button
          style={{ marginLeft: 10 }}
          onClick={() => setShowPortal(true)}
        >
          Open Portal Modal
        </button>

        {showNormal && (
          <div
            style={{
              position: "absolute",
              top: "150px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "white",
              border: "2px solid red",
              padding: "20px",
              zIndex: 1,
            }}
          >
            <p>🚫 Normal Modal (inside scroll)</p>
            <button onClick={() => setShowNormal(false)}>Close</button>
          </div>
        )}

        {showPortal &&
          ReactDOM.createPortal(
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                border: "2px solid green",
                padding: "20px",
                zIndex: 999,
              }}
            >
              <p>✅ Portal Modal (fixed on screen)</p>
              <button onClick={() => setShowPortal(false)}>Close</button>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}
