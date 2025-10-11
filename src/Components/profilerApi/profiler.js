import React, { useState, useEffect, Profiler } from "react";

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

function getProfilerCode(type) {
  if (type === 'fetchUsers') return `function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [];
      for (let i = 1; i <= 1000; i++) {
        users.push({ id: i, name: \`User \${i}\` });
      }
      resolve(users);
    }, 1000);
  });
}`;
  if (type === 'UserList') return `function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`;
  if (type === 'callback') return `const onRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  console.log(\`Profiler [\${id}] - \${phase}\`);
  console.log(\`Actual duration: \${actualDuration}ms\`);
  console.log(\`Base duration: \${baseDuration}ms\`);
};`;
  if (type === 'fullExample') return `import React, { useState, useEffect, Profiler } from "react";
function fetchUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      const users = [];
      for (let i = 1; i <= 1000; i++) {
        users.push({ id: i, name: \`User \${i}\` });
      }
      resolve(users);
    }, 1000);
  });
}
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(\`Profiler [\${id}] - \${phase}: \${actualDuration}ms\`);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Profiler Example</h1>
      <p>Check console for render timings of the UserList component.</p>
      <Profiler id="UserList" onRender={onRenderCallback}>
        <UserList users={users} />
      </Profiler>
    </div>
  );
}`;
  return '';
}

// Simulate backend fetch
function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [];
      for (let i = 1; i <= 1000; i++) {
        users.push({ id: i, name: `User ${i}` });
      }
      resolve(users);
    }, 1000);
  });
}

// Component rendering a list of users
function UserList({ users }) {
  return (
    <ul style={{maxHeight: 300, overflowY: 'auto', paddingLeft: 20}}>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function ProfilerDemoComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(`Profiler [${id}] - ${phase}: ${actualDuration.toFixed(2)}ms`);
    console.log(`Base Duration: ${baseDuration.toFixed(2)}ms`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Profiler Example</h1>
      <p>Check the browser console for render timings of the UserList component (mount and update phases).</p>
      <div style={{background: '#fff9e6', border: '1px solid #ffd700', padding: 10, borderRadius: 6, marginBottom: 15}}>
        <strong>Note:</strong> Open your browser's Developer Console (F12) to see detailed render metrics logged in real-time!
      </div>
      <Profiler id="UserList" onRender={onRenderCallback}>
        <UserList users={users} />
      </Profiler>
    </div>
  );
}

export default function ProfilerDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Profiler API</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          The Profiler API measures how often and how long a React component renders. Perfect for performance optimization!
        </div>
        <div style={infoBox}>
          <b>What is the Profiler API?</b><br/>
          React's <code>&lt;Profiler&gt;</code> component tracks rendering performance. Wrap any part of your tree to collect metrics about render time, phases, and more. Use it to find slow components and optimize your app.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Profiler Callback Function</h2>
        <div style={codeStyle}>{getProfilerCode('callback')}</div>
        <div style={tipStyle}>
          The callback receives performance metrics each time the profiled tree commits. Log or track <code>actualDuration</code> to identify slow renders.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>UserList Component (to Profile)</h2>
        <div style={codeStyle}>{getProfilerCode('UserList')}</div>
        <div style={tipStyle}>
          A simple list component that renders 1000 users. We'll profile it to see render performance.
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: Profiler in Action</h2>
        <div style={codeStyle}>{getProfilerCode('fullExample')}</div>
        <div style={outputStyle}>
          <ProfilerDemoComponent />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Watch the console and the metrics box above the list. You'll see how long it took to render the UserList component!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Profiler Callback Parameters</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>id:</b> The id prop you gave to the Profiler.</li>
          <li><b>phase:</b> "mount" or "update" (tells you if it's first render or re-render).</li>
          <li><b>actualDuration:</b> Time spent rendering the Profiler tree for this commit.</li>
          <li><b>baseDuration:</b> Estimated time to render the entire subtree without memoization.</li>
          <li><b>startTime:</b> When React began rendering this update.</li>
          <li><b>commitTime:</b> When React committed this update.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use Profiler</h2>
        <div style={infoBox}>
          <b>Use Profiler to:</b><br/>
          • Identify slow components in your app.<br/>
          • Compare performance before/after optimizations.<br/>
          • Track rendering metrics in production (though it adds overhead).<br/><br/>
          <b>Note:</b> Profiler is disabled in production builds by default unless you explicitly opt in.
        </div>
      </section>
    </div>
  );
}
