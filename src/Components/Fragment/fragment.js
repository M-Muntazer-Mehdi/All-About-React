import React from "react";

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
  minWidth: '240px',
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

function getCodeForFragments(type) {
  if (type === 'shorthand') return `function TableRows() {
  return (
    <>
      <tr><td>1</td><td>John Doe</td><td>30</td></tr>
      <tr><td>2</td><td>Jane Smith</td><td>25</td></tr>
      <tr><td>3</td><td>Mike Johnson</td><td>40</td></tr>
    </>
  );
}`;
  if (type === 'explicit') return `function TableRows() {
  return (
    <React.Fragment>
      <tr><td>1</td><td>John Doe</td><td>30</td></tr>
      <tr><td>2</td><td>Jane Smith</td><td>25</td></tr>
    </React.Fragment>
  );
}`;
  if (type === 'fullExample') return `import React from "react";
function TableRows() {
  return (
    <>
      <tr><td>1</td><td>John Doe</td><td>30</td></tr>
      <tr><td>2</td><td>Jane Smith</td><td>25</td></tr>
      <tr><td>3</td><td>Mike Johnson</td><td>40</td></tr>
    </>
  );
}
export default function Fragment() {
  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>React Fragments Example</h1>
      <p>Using Fragments allows us to return multiple table rows without adding extra wrapper elements.</p>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Age</th></tr>
        </thead>
        <tbody>
          <TableRows />
        </tbody>
      </table>
    </div>
  );
}`;
  return '';
}

function TableRows() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>John Doe</td>
        <td>30</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jane Smith</td>
        <td>25</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Mike Johnson</td>
        <td>40</td>
      </tr>
    </>
  );
}

export default function FragmentDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Fragments</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Fragments let you group multiple elements without adding extra nodes to the DOM. Perfect for clean markup!
        </div>
        <div style={infoBox}>
          <b>What are Fragments?</b><br/>
          A Fragment is a wrapper that doesn't create an extra DOM element. Use <code>&lt;&gt;...&lt;/&gt;</code> or <code>&lt;React.Fragment&gt;...&lt;/React.Fragment&gt;</code> when you need to return multiple elements from a component.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Fragment Shorthand Syntax</h2>
        <div style={codeStyle}>{getCodeForFragments('shorthand')}</div>
        <div style={tipStyle}>
          The shorthand <code>&lt;&gt;...&lt;/&gt;</code> is the most common way to use Fragments. It's clean and concise!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Explicit Fragment Syntax</h2>
        <div style={codeStyle}>{getCodeForFragments('explicit')}</div>
        <div style={tipStyle}>
          Use <code>&lt;React.Fragment&gt;</code> when you need to pass keys (e.g., when mapping over an array).
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: Table with Fragments</h2>
        <div style={codeStyle}>{getCodeForFragments('fullExample')}</div>
        <div style={outputStyle}>
          <div style={{ padding: "30px", fontFamily: "Arial" }}>
            <h1>React Fragments Example</h1>
            <p>Using Fragments allows us to return multiple table rows without adding extra wrapper elements.</p>
            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <TableRows />
              </tbody>
            </table>
          </div>
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Inspect the DOM—you'll see no extra wrapper divs around the table rows. Fragments keep your markup clean!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use Fragments</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Tables:</b> Return multiple rows/cells without breaking table structure.</li>
          <li><b>Lists:</b> Group list items without extra wrapper elements.</li>
          <li><b>Conditional rendering:</b> Return multiple elements conditionally.</li>
          <li><b>Clean DOM:</b> Avoid unnecessary divs that break CSS or semantics.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Key vs No Key</h2>
        <div style={infoBox}>
          <b>Shorthand <code>&lt;&gt;</code>:</b> Cannot accept keys or attributes.<br/><br/>
          <b>Explicit <code>&lt;React.Fragment key={'{'}...{'}'}&gt;</code>:</b> Can accept a <code>key</code> prop (useful when mapping arrays).
        </div>
      </section>
    </div>
  );
}
