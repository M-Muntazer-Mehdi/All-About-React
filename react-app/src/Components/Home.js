// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for Home
import logo from '../logo.svg'; // Adjust the path as needed

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="React logo" />
        <h5 className='Home-h5'>./src/home.js and save to Reload</h5>
        <Link to="/my-jsx" className="Home-link">
          Learn React with Muntazer
        </Link>
      </header>
    </div>
  );
}

export default Home;
