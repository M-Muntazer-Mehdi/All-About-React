import React from 'react';

const sectionStyle = {
  padding: '26px 0 8px 0',
  borderTop: '2px solid #f1f3f6',
  marginTop: 24,
};
const codeBlockStyle = {
  background: '#f7fafd',
  border: '1px solid #e0e5ee',
  borderRadius: '6px',
  padding: '13px 16px',
  fontFamily: 'Fira Mono, Consolas, monospace',
  fontSize: '1rem',
  color: '#1256a7',
  overflowX: 'auto',
  margin: '9px 0 14px 0',
  wordBreak: 'break-all',
};
const infoBox = {
  background: '#eef4fb',
  borderLeft: '5px solid #1976d2',
  padding: '10px 17px',
  borderRadius: '7px',
  margin: '14px 0 18px 0',
  fontSize: '1.09rem',
  color: '#144170',
};
const tipBox = {
  background: '#e4f0fd',
  borderLeft: '5px solid #90caf9',
  padding: '8px 14px',
  borderRadius: '6px',
  fontStyle: 'italic',
  margin: '13px 0',
  color: '#1750a6',

};
export default function Introduction() {
  return (
    <div style={{ width: '100%', padding: '0 2.5vw 56px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2.17rem', fontWeight: 800, letterSpacing: '0.02em', marginBottom: 8, marginTop: 2 }}>Introduction to React</h1>
        <div style={{ color: '#294962', fontSize: '1.16rem', fontWeight: 400 }}>
          React is a powerful JavaScript library for building user interfaces, created by Facebook. It focuses on building reusable components, letting you efficiently develop large web apps that update data without reloading the page. React is the toolkit of choice for modern front-end development.
        </div>
        <div style={infoBox}>
          <b>React powers sites like Facebook, Instagram, and Netflix!</b> It’s open source, actively maintained, and has one of the largest communities in web development.
        </div>
      </header>

      <section aria-label="Why React" style={sectionStyle}>
        <h2 style={{ color: '#1a237e', fontSize: '1.35rem' }}>Why Learn React?</h2>
        <ul style={{ fontSize: '1.09rem', margin: '9px 0 0 17px', color: '#184063' }}>
          <li>Lets you build apps with interactive, stateful, and reusable UI components.</li>
          <li>Huge ecosystem and job demand.</li>
          <li>Easy integration with other frameworks and libraries.</li>
          <li>Keeps your code organized and maintainable.</li>
        </ul>
      </section>

      <section aria-label="Key Features" style={sectionStyle}>
        <h2 style={{ color: '#1a237e', fontSize: '1.32rem' }}>Key Features</h2>
        <ul style={{ fontSize: '1.06rem', margin: '6px 0 0 18px', color: '#283c53' }}>
          <li><b>Component-Based:</b> Build UI with independent pieces.</li>
          <li><b>Declarative:</b> Control what you want your app to look like, React handles updating the DOM.</li>
          <li><b>One-Way Data Flow:</b> Predictable data and easy debugging.</li>
          <li><b>Rich Ecosystem:</b> Routers, state management, testing, and more.</li>
        </ul>
      </section>

      <section aria-label="Prerequisites" style={sectionStyle}>
        <h2 style={{ color: '#1a237e', fontSize: '1.23rem' }}>Prerequisites</h2>
        <div style={infoBox}>
          You should understand <b>basic HTML & CSS</b>, <b>JavaScript fundamentals (ES6+)</b>, and be able to use a terminal/command prompt.
        </div>
      </section>

      <section aria-label="Step 1: Install Node.js" style={sectionStyle}>
        <h2 style={{ color: '#1976d2', fontSize: '1.16rem', fontWeight: 700 }}>Step 1: Install Node.js & npm</h2>
        <p>Go to <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a> and download the LTS (recommended) version. Both <b>node</b> and <b>npm</b> will be installed.</p>
        <div style={tipBox}>
          <span>Check install: </span>
          <span style={{ fontFamily: 'monospace', color: '#1976d2' }}>node -v</span> &nbsp;
          <span style={{ fontFamily: 'monospace', color: '#1976d2' }}>npm -v</span>
        </div>
      </section>

      <section aria-label="Step 2: Create App" style={sectionStyle}>
        <h2 style={{ color: '#1976d2', fontSize: '1.16rem', fontWeight: 700 }}>Step 2: Create Your React App</h2>
        <p>Use Create React App for an instant project setup:</p>
        <div style={codeBlockStyle}>npx create-react-app my-first-react-app</div>
        <p>Navigate and start:</p>
        <div style={codeBlockStyle}>
          cd my-first-react-app<br />npm start
        </div>
        <div style={tipBox}>Your browser will automatically open <b>http://localhost:3000</b>. Save your files and see updates instantly.</div>
      </section>

      <section aria-label="Step 3: Explore Structure" style={sectionStyle}>
        <h2 style={{ color: '#1976d2', fontSize: '1.16rem', fontWeight: 700 }}>Step 3: Understanding the Project Structure</h2>
        <ul style={{ fontFamily: 'Fira Mono, Consolas, monospace', fontSize:'1.03rem', margin: '7px 0 20px 19px', color:'#17486e' }}>
          <li><b>public/</b> – The static assets and main HTML file.</li>
          <li><b>src/</b> – All your React components and JavaScript lives here.
            <ul>
              <li><b>App.js</b> – Your main React component.</li>
              <li><b>index.js</b> – Entry point, renders <b>App</b> into the DOM.</li>
            </ul>
          </li>
          <li><b>package.json</b> – Project’s metadata, scripts & dependencies.</li>
        </ul>
        <div style={infoBox}>Open <b>src/App.js</b> and <b>src/App.css</b> to start editing your app!</div>
    </section>

      <section aria-label="Further Resources" style={{...sectionStyle, border: 'none'}}>
        <h2 style={{ color: '#1a237e', fontSize: '1.17rem' }}>Further Learning</h2>
        <ul style={{ fontSize: '1.09rem', margin: '2px 0 0 19px' }}>
          <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{color:'#1976d2',textDecoration:'underline'}}>Official React Docs</a></li>
          <li><a href="https://beta.reactjs.org/learn" target="_blank" rel="noopener noreferrer" style={{color:'#1976d2'}}>React Tutorials</a></li>
          <li><a href="https://www.freecodecamp.org/news/tag/react/" target="_blank" rel="noopener noreferrer" style={{color:'#1976d2'}}>FreeCodeCamp React Guide</a></li>
        </ul>
    </section>
  </div>
);
}
