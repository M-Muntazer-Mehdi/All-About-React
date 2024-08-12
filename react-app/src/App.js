// src/App.js
import './App.css';
import JsxConcept from './Components/Jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Headerfile from './Components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-jsx" element={<JsxConcept />} />
          <Route path='/my-header' element={<Headerfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
