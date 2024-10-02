import React from 'react';

function DefaultBehaviour() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DefaultBehaviour;
