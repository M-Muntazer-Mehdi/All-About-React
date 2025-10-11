import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

function Headerfile() {
    const [basicsOpen, setBasicsOpen] = useState(true);
    const [intermediateOpen, setIntermediateOpen] = useState(true);
    const [advancedOpen, setAdvancedOpen] = useState(true);
    const [modernOpen, setModernOpen] = useState(true);
    const [stateLibsOpen, setStateLibsOpen] = useState(true);
    const [perfAdvOpen, setPerfAdvOpen] = useState(true);
    return (
        <>
            <div className="sidebar-header">
                <div className="sidebar-header-brand">
                    <img src={logo} className="sidebar-logo" alt="React logo" />
                    <span className="sidebar-title">All About React</span>
                </div>
            </div>
            <div className={`sidebar-section${basicsOpen ? ' dropdown-active' : ''}`}> 
                <button className="sidebar-dropdown-toggle" onClick={() => setBasicsOpen(v => !v)}>
                    <span>Basics of React</span>
                    <span className={`dropdown-arrow${basicsOpen ? ' open' : ''}`}>▸</span>
                </button>
                {basicsOpen && (
                  <>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/intro/introduction" className="Home-link">Introduction to React</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-jsx" className="Home-link">Jsx Concepts</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-component" className="Home-link">Component Concept</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-rendering" className="Home-link">Conditional Rendering & lists</NavLink>
                    </div>
                  </>
                )}
            </div>
            <div className={`sidebar-section${intermediateOpen ? ' dropdown-active' : ''}`}> 
                <button className="sidebar-dropdown-toggle" onClick={() => setIntermediateOpen(v => !v)}>
                    <span>Intermediate Concepts</span>
                    <span className={`dropdown-arrow${intermediateOpen ? ' open' : ''}`}>▸</span>
                </button>
                {intermediateOpen && (
                  <>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-lifecycle" className="Home-link">Component Lifecycle</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-state" className="Home-link">State Management</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-event" className="Home-link">Event Handler</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-router" className="Home-link">React Router</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-forms" className="Home-link">Forms</NavLink>
                    </div>
                  </>
                )}
            </div>
            <div className={`sidebar-section${advancedOpen ? ' dropdown-active' : ''}`}> 
                <button className="sidebar-dropdown-toggle" onClick={() => setAdvancedOpen(v => !v)}>
                    <span>Advanced Concepts</span>
                    <span className={`dropdown-arrow${advancedOpen ? ' open' : ''}`}>▸</span>
                </button>
                {advancedOpen && (
                  <>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-context" className="Home-link">Context Api</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-loginFile" className="Home-link">Higher Order Component</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-BuggyComponent" className="Home-link">Error Boundaries</NavLink>
                    </div>
                  </>
                )}
            </div>
            <div className={`sidebar-section${modernOpen ? ' dropdown-active' : ''}`}> 
                <button className="sidebar-dropdown-toggle" onClick={() => setModernOpen(v => !v)}>
                    <span>Modern React Features</span>
                    <span className={`dropdown-arrow${modernOpen ? ' open' : ''}`}>▸</span>
                </button>
                {modernOpen && (
                  <>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-useMemo" className="Home-link">useMemo - Custom Hook</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-CustomHooks" className="Home-link">Custom Hooks</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-useTransition" className="Home-link">Concurrent Mode & useTransition</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-Suspense" className="Home-link">Suspense</NavLink>
                    </div>
                  </>
                )}
            </div>
            <div className={`sidebar-section${stateLibsOpen ? ' dropdown-active' : ''}`}> 
                <button className="sidebar-dropdown-toggle" onClick={() => setStateLibsOpen(v => !v)}>
                    <span>State Management Libraries</span>
                    <span className={`dropdown-arrow${stateLibsOpen ? ' open' : ''}`}>▸</span>
                </button>
                {stateLibsOpen && (
                  <>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-Redux" className="Home-link">Redux</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-MobX" className="Home-link">MobX</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-Zustand" className="Home-link">Zustand</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-ReactQuery" className="Home-link">React Query</NavLink>
                    </div>
                  </>
                )}
            </div>
            <div className={`sidebar-section${perfAdvOpen ? ' dropdown-active' : ''}`}> 
                <button className="sidebar-dropdown-toggle" onClick={() => setPerfAdvOpen(v => !v)}>
                    <span>Performance Optimization & Advanced Patterns</span>
                    <span className={`dropdown-arrow${perfAdvOpen ? ' open' : ''}`}>▸</span>
                </button>
                {perfAdvOpen && (
                  <>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-Portals" className="Home-link">Portals</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-RefsForwardingRefs" className="Home-link">Refs & Forwarding Refs</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-Fragment" className="Home-link">Fragment</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-ProfilerApi" className="Home-link">Profiler Api</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-StrictMode" className="Home-link">Strict Mode</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-RenderProps" className="Home-link">Render Props</NavLink>
                    </div>
                    <div className="sidebar-dropdown-list">
                      <NavLink to="/my-CompoundComponents" className="Home-link">Compound Components</NavLink>
                    </div>
                  </>
                )}
            </div>
            <nav className="sidebar-nav">
                {/* Extras if needed */}
            </nav>
        </>
    );
}
export default Headerfile;
