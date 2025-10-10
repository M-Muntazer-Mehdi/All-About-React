import React, { useRef, forwardRef } from "react";

// Reusable input component with forwarded ref
const TextField = forwardRef((props, ref) => {
  return <input ref={ref} {...props} style={{ padding: 8, margin: 5, width: 200 }} />;
});

export default function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleFocusName = () => {
    nameRef.current.focus(); // parent controls child directly
  };

  const handleFocusEmail = () => {
    emailRef.current.focus();
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>Ref & ForwardRef Example</h2>

      {/* Forwarded refs allow parent to control these inputs */}
      <TextField ref={nameRef} placeholder="Name" />
      <TextField ref={emailRef} placeholder="Email" />

      <div style={{ marginTop: 20 }}>
        <button onClick={handleFocusName} style={{ marginRight: 10 }}>
          Focus Name
        </button>
        <button onClick={handleFocusEmail}>Focus Email</button>
      </div>
    </div>
  );
}
