import React from 'react';

function Arguments() {
  const handleClick = (id, name, event) => {
    console.log(`Button clicked! ID: ${id}, Name: ${name}`);
    console.log('Event object:', event);
  };

  return (
    <div>
        <h1 style={{fontSize:"18px"}}>Passing Arguments, Click on Event to watch id: <nr></nr>
            <button style={{fontSize:"18px"}} onClick={(event) => handleClick(1, 'John', event)}>ID</button>
        </h1>
    </div>
  );
}

export default Arguments;
