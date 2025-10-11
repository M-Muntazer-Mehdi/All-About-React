// src/Components/contextApi/useContext1.js
import React, { useContext } from 'react';
import { AuthContext } from './authContext';

const AuthStatus = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h2>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h2>
    </div>
  );
};

export default AuthStatus;
