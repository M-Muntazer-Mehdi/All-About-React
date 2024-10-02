import React, { useRef } from 'react';

function HandleFormUncontrolled() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log('Form Submitted with Data:', submittedData);
    // Reset form fields (optional)
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Handle Form Using Uncontrolled Form</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref={messageRef} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HandleFormUncontrolled;
