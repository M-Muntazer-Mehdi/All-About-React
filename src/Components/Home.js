// src/components/Home.js
import React from 'react';
import './Home.css';
import logo from '../logo.svg';

// List of topics in roadmap: {id, title, desc}
const ROADMAP_TOPICS = [
  { id: 'roadmap', title: 'React Roadmap', desc: 'Big picture of React journey.' },
  { id: 'intro', title: 'Introduction to React', desc: 'What is React? Why use it?' },
  { id: 'setup', title: 'Setup & Environment', desc: 'Tools & installation.' },
  { id: 'jsx', title: 'JSX', desc: 'JSX syntax, embedding expressions.' },
  { id: 'components', title: 'Components', desc: 'Function/class, props & state.' },
  { id: 'rendering', title: 'Rendering Elements', desc: 'DOM updates, conditional/lists.' },
  { id: 'lifecycle', title: 'Lifecycle & useEffect', desc: 'Mounting, updating, hooks.' },
  { id: 'state', title: 'State Management', desc: 'useState/useReducer, patterns.' },
  { id: 'events', title: 'Event Handling', desc: 'Handlers, arguments.' },
  { id: 'forms', title: 'Forms', desc: 'Controlled & uncontrolled.' },
  { id: 'context-api', title: 'Context API', desc: 'Global state/context.' },
  { id: 'router', title: 'React Router', desc: 'Navigation & routing.' },
  { id: 'hoc', title: 'Higher Order Components', desc: 'Reusable logic.' },
  { id: 'error-boundaries', title: 'Error Boundaries', desc: 'Catching render errors.' },
  { id: 'hooks', title: 'Hooks', desc: 'Custom hooks, useContext, useMemo, useCallback.' },
  { id: 'concurrent', title: 'Concurrent Mode', desc: 'Advanced async rendering.' },
  { id: 'suspense', title: 'Suspense & Lazy', desc: 'Code splitting, lazy loading.' },
  { id: 'redux', title: 'Redux', desc: 'State workflow, actions/store.' },
  { id: 'mobx', title: 'MobX', desc: 'Observable state.' },
  { id: 'zustand', title: 'Zustand', desc: 'Minimal global state.' },
  { id: 'react-query', title: 'React Query', desc: 'Async server state.' },
  { id: 'performance', title: 'Performance', desc: 'Memoization, profiler.' },
  { id: 'patterns', title: 'Advanced Patterns', desc: 'Render props, compound components.' },
  { id: 'portals', title: 'Portals', desc: 'Render outside parent.' },
  { id: 'refs', title: 'Refs/ForwardRefs', desc: 'Accessing DOM instances.' },
  { id: 'fragments', title: 'Fragments', desc: 'Multiple children.' },
  { id: 'strictmode', title: 'Strict Mode', desc: 'Development-time checks.' },
  { id: 'profiler-api', title: 'Profiler API', desc: 'Render timing analysis.' },
];

const MAIN_TOPICS = [
  { id: 'jsx', title: 'JSX', desc: 'JSX syntax, embedding expressions.' },
  { id: 'components', title: 'Components', desc: 'Props, state, and structure.' },
  { id: 'state', title: 'State Management', desc: 'Hooks, context, and advanced state patterns.' },
  { id: 'router', title: 'React Router', desc: 'Navigation and client-side routing.' },
  { id: 'context-api', title: 'Context API', desc: 'Global state management.' },
  { id: 'performance', title: 'Performance', desc: 'Optimization, memoization, profiler.' },
  { id: 'patterns', title: 'Advanced Patterns', desc: 'HOCs, render props, compound components.' },
];

export default function Home() {
  return (
    <div className="landing-root">
      <header className="hero-section">
        <img src={logo} className="hero-logo" alt="React logo" />
        <h1 className="hero-title">All About React</h1>
        <span className="notes-badge">📚 Complete Learning Resource</span>
        <h2 className="hero-subtitle">Master React from basics to advanced patterns with interactive code examples, live demos, and comprehensive tutorials</h2>
        <div className="landing-actions">
          <a href="/All-About-React.pdf" target="_blank" rel="noopener noreferrer" className="notes-btn">
            📄 Download PDF Notes
          </a>
          <a href="/intro/introduction" className="cta-btn">Start Learning →</a>
        </div>
      </header>
      <section className="topics-section" id="topics">
        <h3>What You'll Learn</h3>
        <p style={{textAlign: 'center', fontSize: '1.15rem', color: '#546e7a', marginBottom: '30px', maxWidth: '720px', margin: '0 auto 30px'}}>
          Dive into React with hands-on examples, covering everything from fundamentals to advanced state management and performance optimization.
        </p>
        <div className="topics-grid">
          {MAIN_TOPICS.map(topic => (
            <div
              key={topic.id}
              className="topic-card-btn main-topic-btn unclickable-topic"
            >
              <span className="topic-title">{topic.title}</span>
              <span className="topic-desc">{topic.desc}</span>
            </div>
          ))}
        </div>
        <div className="explore-btn-row">
          <a href="/intro/introduction" className="explore-full-roadmap-btn">Explore All Topics →</a>
        </div>
      </section>
      <footer className="footer">
        <p style={{margin: '0 0 10px', fontSize: '1.1rem', color: '#61dafb', fontWeight: 600}}>All About React</p>
        <p style={{margin: 0}}>Created with ❤️ by Muntazer | <a href="https://github.com/muntazer" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </div>
  );
}
