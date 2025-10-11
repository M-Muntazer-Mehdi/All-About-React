import React from 'react';
import { Routes, Route, Link, useParams, useNavigate, NavLink } from 'react-router-dom';

const codeStyle = {
  background: '#fafbff',
  border: '1px solid #e0e7f0',
  borderRadius: '6px',
  padding: '11px 18px',
  margin: '13px 0 10px 0',
  fontFamily: 'Fira Mono, Consolas, monospace',
  fontSize: '1rem',
  color: '#1976d2',
  overflowX: 'auto',
  whiteSpace: 'pre',
};
const outputStyle = {
  background: '#f1f5fd',
  border: '1px solid #b7cbec',
  borderRadius: '6px',
  padding: '11px 15px',
  marginBottom: '8px',
  color: '#214570',
  fontSize: '1.09rem',
  fontFamily: 'inherit',
  width: 'fit-content',
  minWidth: '300px',
};
const tipStyle = {
  background: '#e4f0fd',
  borderLeft: '5px solid #1976d2',
  padding: '8px 14px',
  borderRadius: '6px',
  fontSize: '0.99rem',
  fontStyle: 'italic',
  margin: '0 0 22px 0',
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

function getRouterCode(type) {
  if (type === 'basic') return `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`;
  if (type === 'params') return `import { useParams } from 'react-router-dom';
function UserProfile() {
  const { userId } = useParams();
  return <h2>User Profile: {userId}</h2>;
}
// In Routes:
<Route path="/user/:userId" element={<UserProfile />} />`;
  if (type === 'navigate') return `import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // After successful login
    navigate('/dashboard');
  };
  return <button onClick={handleLogin}>Login</button>;
}`;
  if (type === 'navLink') return `import { NavLink } from 'react-router-dom';
function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}`;
  if (type === 'nested') return `function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
// Layout component uses <Outlet />
function Layout() {
  return (
    <div>
      <nav>...</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}`;
  return '';
}

// Demo components for live example
function DemoHome() {
  return <div style={{padding: 20}}><h2>Home Page</h2><p>Welcome to the home page!</p></div>;
}

function DemoAbout() {
  return <div style={{padding: 20}}><h2>About Page</h2><p>Learn about React Router.</p></div>;
}

function DemoContact() {
  const navigate = useNavigate();
  return (
    <div style={{padding: 20}}>
      <h2>Contact Page</h2>
      <button onClick={() => navigate('/')} style={{padding: '8px 16px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer'}}>
        Go to Home (Programmatic Navigation)
      </button>
    </div>
  );
}

function DemoUser() {
  const { userId } = useParams();
  return (
    <div style={{padding: 20}}>
      <h2>User Profile</h2>
      <p>Viewing profile for user ID: <strong>{userId}</strong></p>
    </div>
  );
}

function RouterDemo() {
  return (
    <div style={{border: '2px solid #1976d2', borderRadius: 8, padding: 15, background: '#f9fcff'}}>
      <div style={{marginBottom: 15, padding: 10, background: '#e3f2fd', borderRadius: 6}}>
        <p style={{margin: '0 0 10px', fontSize: '0.95rem', color: '#546e7a'}}>
          <strong>Note:</strong> This is a visual demonstration of React Router concepts. In a real app, these would be actual navigable routes.
        </p>
        <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
          <span style={{padding: '6px 12px', background: '#1976d2', color: '#fff', borderRadius: 5, fontSize: '0.9rem'}}>/ → Home</span>
          <span style={{padding: '6px 12px', background: '#1976d2', color: '#fff', borderRadius: 5, fontSize: '0.9rem'}}>/about → About</span>
          <span style={{padding: '6px 12px', background: '#1976d2', color: '#fff', borderRadius: 5, fontSize: '0.9rem'}}>/user/:id → User Profile</span>
        </div>
      </div>
      <div style={{padding: 20, background: '#fff', borderRadius: 6}}>
        <DemoHome />
        <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #e0e0e0'}} />
        <DemoAbout />
        <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #e0e0e0'}} />
        <DemoContact />
        <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #e0e0e0'}} />
        <div style={{padding: 20}}>
          <h2>User Profile (Dynamic Route Example)</h2>
          <p>URL: /user/123 would show: User ID: <strong>123</strong></p>
          <p>URL: /user/456 would show: User ID: <strong>456</strong></p>
        </div>
      </div>
    </div>
  );
}

export default function ReactRouterDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Router</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          React Router enables client-side routing in React apps, letting you build single-page applications with multiple views and navigation.
        </div>
        <div style={infoBox}>
          <b>What is React Router?</b><br/>
          React Router is the standard routing library for React. It keeps your UI in sync with the URL, enables navigation without page reloads, and supports nested routes, dynamic parameters, and programmatic navigation.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Basic Routing Setup</h2>
        <div style={codeStyle}>{getRouterCode('basic')}</div>
        <div style={tipStyle}>
          Wrap your app with <code>BrowserRouter</code>, define <code>Routes</code>, and use <code>Link</code> for navigation. Each <code>Route</code> renders a component when the URL matches its path.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Dynamic Route Parameters (useParams)</h2>
        <div style={codeStyle}>{getRouterCode('params')}</div>
        <div style={tipStyle}>
          Use <code>:paramName</code> in the route path and <code>useParams()</code> hook to access URL parameters. Perfect for user profiles, product pages, etc.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Programmatic Navigation (useNavigate)</h2>
        <div style={codeStyle}>{getRouterCode('navigate')}</div>
        <div style={tipStyle}>
          Use <code>useNavigate()</code> to navigate programmatically (e.g., after form submission, login, etc.). Great for redirects and dynamic navigation.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Active Links (NavLink)</h2>
        <div style={codeStyle}>{getRouterCode('navLink')}</div>
        <div style={tipStyle}>
          <code>NavLink</code> automatically adds an "active" class to the current route's link. Perfect for navigation menus and highlighting the current page.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Nested Routes</h2>
        <div style={codeStyle}>{getRouterCode('nested')}</div>
        <div style={tipStyle}>
          Nested routes let you build layouts with shared UI (like sidebars). Use <code>&lt;Outlet /&gt;</code> in the parent to render child routes.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Live Demo: React Router in Action</h2>
        <div style={outputStyle}>
          <RouterDemo />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Click the navigation links to see route changes. Notice the URL updates without page reload, and dynamic params work for User 123!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Key React Router Concepts</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>BrowserRouter:</b> Uses HTML5 history API for clean URLs (no hash #).</li>
          <li><b>Routes & Route:</b> Define what component renders for each URL path.</li>
          <li><b>Link:</b> Navigation without page reload (use instead of &lt;a&gt;).</li>
          <li><b>useParams:</b> Access dynamic URL parameters.</li>
          <li><b>useNavigate:</b> Programmatically navigate to different routes.</li>
          <li><b>NavLink:</b> Link with automatic active state styling.</li>
          <li><b>Outlet:</b> Renders child routes in nested route structures.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use React Router</h2>
        <div style={infoBox}>
          <b>Use React Router when building:</b><br/>
          • Single-page applications (SPAs) with multiple views<br/>
          • Apps with navigation menus and multiple pages<br/>
          • Dynamic content based on URL parameters<br/>
          • Protected routes (combining with authentication)<br/><br/>
          <b>Note:</b> For server-side rendering or static sites, consider Next.js which has built-in routing.
        </div>
      </section>
    </div>
  );
}

