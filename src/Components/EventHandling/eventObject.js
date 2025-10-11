import React from 'react';

function Object() {
  const handleClick = (event) => {
    console.log(event.type);
    alert('Button clicked!');
  };

  return (
    <div>
        <h1 style={{fontSize:"18px"}}>Event Object, Click to an: <nr></nr>
            <button style={{fontSize:"18px"}} onClick={handleClick}>Event</button>
        </h1>
    </div>
  );
}

export default Object;
