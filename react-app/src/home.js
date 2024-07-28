// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/my-jsx" className="App-link">
        Learn React with Muntazer
      </Link>
    </div>
  );
}

export default Home;
