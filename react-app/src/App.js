// src/App.js
import './App.css';
import JsxConcept from './Components/Jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Headerfile from './Components/Header';
import Component from './Components/Component/Component';
import RenderingMain from './Components/Rendering/renderingMainFile';
import Lifecycle from './Components/componentLifecycle/Lifecycle'
import StateManagement from './Components/stateManagement/stateMainFile' 
import EventHandler from './Components/EventHandling/eventHandler';
import FormMain from './Components/Forms/formMain';
import ContextApi from './Components/contextApi/contextMain';

function App() {
  return (
    //Wrap App.js with the AuthProvider
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-jsx" element={<JsxConcept />} />
            <Route path='/my-header' element={<Headerfile />} />
            <Route path='/my-component' element= {<Component />} />
            <Route path='/my-rendering' element = {<RenderingMain />} />
            <Route path='/my-lifecycle' element = {<Lifecycle />} />
            <Route path='/my-state' element = {<StateManagement />} />
            <Route path='/my-event' element = {<EventHandler />} />
            <Route path='/my-forms' element = {<FormMain />} />
            <Route path='/my-context' element = {<ContextApi />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
