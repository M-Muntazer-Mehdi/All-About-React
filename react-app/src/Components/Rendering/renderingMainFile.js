import React, { useState } from 'react';
import { IfStatement, TernaryOperator, LogicalOperator, SwitchStatement, ListOperator } from './Rendering';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  const [status, setStatus] = useState('loggedOut');
  const items = [
    { id: 1, name: 'Muntazer' },
    { id: 2, name: 'Bakar' },
    { id: 3, name: 'Abdullah' }
  ];

  return (
    <div className="App">
      <h1>Conditional Rendering Examples</h1>

      <h2>Using 'if' statement:</h2>
      <IfStatement isLoggedIn={isLoggedIn} />

      <h2>Using 'Ternary' Operator:</h2>
      <TernaryOperator isLoggedIn={isLoggedIn}/>

      <h2>Using Logical '&'' Operator:</h2>
      <LogicalOperator isLoggedIn={isLoggedIn}/>

      <h2>Using 'Switch' statement:</h2>
      <SwitchStatement isLoggedIn={isLoggedIn}/>

      <h2>Using 'List' Operator:</h2>
      <ListOperator items={items}/>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login State
      </button>
    </div>
  );
}

export default App;
