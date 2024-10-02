import React from 'react';

function DefaultBehaviour() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{fontSize:"18px"}} type="text" placeholder="Enter your name" />
      <button style={{fontSize:"18px"}} type="submit">Submit</button>
    </form>
  );
}

export default DefaultBehaviour;
