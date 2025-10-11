import React from 'react';

function Inline() {
  return (
    <div>
        <h1 style={{fontSize:"18px"}}>Inline Event Handler, Click to an: <nr></nr>
            <button style={{fontSize:"18px"}} onClick={() => alert('Button clicked!')}>Event</button>
        </h1>
    </div>
  );
}

export default Inline;
