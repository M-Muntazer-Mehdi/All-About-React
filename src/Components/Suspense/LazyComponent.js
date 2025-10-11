import React from "react";

export default function LazyComponent() {
  return (
    <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
      <h2>I am a lazy-loaded component!</h2>
      <p>Suspense handled my loading state while I was being fetched asynchronously.</p>
    </div>
  );
}
