import React from 'react';

function PassingFunction() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1 style={{fontSize:"18px"}}>Passing function as a event handler, Click to an: <nr></nr>
      <button style={{fontSize:"18px"}} onClick={handleClick}>Event</button>
      </h1>
    </div>
  );
}

export default PassingFunction;
