// src/App.js
import './App.css';
import JsxConcept from './Components/Jsx/Jsx';
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
import LoginHoc from './Components/higherOrderComponent/loginHoc';
import ProtectedComponent from './Components/higherOrderComponent/protectedHeader';
import BuggyComponent from './Components/errorBoundaries/buggyComponent';
import ErrorBoundaries from './Components/errorBoundaries/errorBoundariesFile';
import ProductList from './Components/Hooks/useMemo-useCallback';
import Redux from './Components/Redux/mainfile';
import MobXComponent from './Components/MobX/mobX';
import ZustandComponent from './Components/Zustand/zustand';
import ReactQuery from './Components/reactQuery/mainFile';
import Portals from './Components/Portals/portals';
import RefsForwardingRefs from './Components/Refs&ForwardingRefs/refs';
import Fragment from './Components/Fragment/fragment';
import ProfilerApi from './Components/profilerApi/profiler';

function App() {
  return (
    //Nested Routes Example
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/my-header' element={<Headerfile />} />
            <Route path="/my-jsx" element={<JsxConcept />} />
            <Route path='/my-component' element= {<Component />} />
            <Route path='/my-rendering' element = {<RenderingMain />} />
            <Route path='/my-lifecycle' element = {<Lifecycle />} />
            <Route path='/my-state' element = {<StateManagement />} />
            <Route path='/my-event' element = {<EventHandler />} />
            <Route path='/my-forms' element = {<FormMain />} />
            <Route path='/my-context' element = {<ContextApi />} />
            <Route path='/my-loginFile' element = {<LoginHoc />} />
            <Route path='/my-ProtectedComponent' element={<ProtectedComponent />} />
            <Route path='/my-BuggyComponent' element={
              <ErrorBoundaries>
              <BuggyComponent throwError={true} />
              </ErrorBoundaries>
            } />
            <Route path='my-useMemo' element={<ProductList />} />
            <Route path='/my-Redux' element={<Redux />} />
            <Route path='/my-MobX' element={<MobXComponent />} />
            <Route path='/my-Zustand' element={<ZustandComponent />} />
            <Route path='/my-ReactQuery' element={<ReactQuery />} />
            <Route path='/my-Portals' element={<Portals />} />
            <Route path='/my-RefsForwardingRefs' element={<RefsForwardingRefs />} />
            <Route path='/my-Fragment' element={<Fragment />} />
            <Route path='/my-ProfilerApi' element={<ProfilerApi />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
