import React from 'react';

function Multiple() {
  const handleMouseEnter = () => {
    console.log('Mouse entered!');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left!');
  };

  return (
    <div>
        <h1 style={{fontSize:"18px"}}>Multiple Events: <nr></nr>
                <button style={{fontSize:"18px"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>hover over me</button>
        </h1>
    </div>
  );
}

export default Multiple;
