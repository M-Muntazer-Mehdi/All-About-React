// src/components/Home.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for Home
import logo from '../logo.svg'; // Adjust the path as needed

const Home = () => {
  const [username, setUsername] = useState('');
  
  const handleLogin = () => {
    if(username === 'Muntazer')
    {
      localStorage.setItem('username', username);
      <Link to="/my-header" className="Home-link">
      Learn React with Muntazer
    </Link>
    }
    else {
      alert("Plz, Enter 'Muntazer'");
    }
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="React logo" />
        <h5 className='Home-h5'>./src/home.js and save to Reload</h5>
      <input
        className='Home-h5'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        style={{fontSize: "18px"}}
      />
      <h6 className='Home-h6'>Enter name: 'Muntazer'</h6>
      <button className='Button1' onClick={handleLogin}>Login</button>
      </header>
    </div>
  );
}

export default Home;
