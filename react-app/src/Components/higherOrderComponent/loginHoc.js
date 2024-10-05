import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginHoc = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Muntazer') {
      localStorage.setItem('username', username);
      navigate('/my-ProtectedComponent');
    } else {
      alert('Invalid username. Please enter "Muntazer".');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginHoc;
