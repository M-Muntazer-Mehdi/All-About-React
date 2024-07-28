
import './App.css';
import JsxConcept from './concepts/Jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/my-jsx" component={JsxConcept} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
