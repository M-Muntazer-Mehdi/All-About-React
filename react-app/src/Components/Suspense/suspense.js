import React, { Suspense, lazy } from "react";

// Lazy-load the component
const LazyComponent = lazy(() => import("./LazyComponent"));

export default function SuspenseDemo() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Suspense Example</h1>
      <p>
        The lazy component below will load asynchronously. While loading, a fallback UI is displayed.
      </p>

      {/* Suspense fallback */}
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
