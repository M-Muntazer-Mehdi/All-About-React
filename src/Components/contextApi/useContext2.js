// src/Components/contextApi/useContext2.js
import React, { useContext } from 'react';
import { AuthContext } from './authContext';

const AuthComponent = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={login}>Log In</button>
      ) : (
        <button onClick={logout}>Log Out</button>
      )}
    </div>
  );
};

export default AuthComponent;
