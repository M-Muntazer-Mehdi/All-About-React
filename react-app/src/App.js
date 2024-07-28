// App.js
import './App.css';
import JsxConcept from './Component/Jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './Component/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/my-jsx" element={<JsxConcept />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
