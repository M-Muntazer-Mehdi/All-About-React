import React, { useState } from 'react';

function Arguments() {
  const [lastClick, setLastClick] = useState(null);

  const handleClick = (id, name, event) => {
    setLastClick({ id, name });
    console.log(`Button clicked! ID: ${id}, Name: ${name}`);
    console.log('Event object:', event);
  };

  return (
    <div>
      <h1 style={{fontSize:"18px"}}>Passing Arguments, Click on Event to watch id:</h1>
      <button style={{fontSize:"18px"}} onClick={(event) => handleClick(1, 'John', event)}>ID</button>
      {lastClick && (
        <div style={{marginTop:10, fontSize:"1.1rem", color:"#1976d2"}}>
          Clicked! ID: {lastClick.id}, Name: {lastClick.name}
        </div>
      )}
    </div>
  );
}

export default Arguments;
