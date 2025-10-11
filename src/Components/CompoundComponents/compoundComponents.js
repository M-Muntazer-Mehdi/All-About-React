import React, { createContext, useContext, useState } from 'react';

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
  minWidth: '350px',
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

function getCompoundCode(type) {
  if (type === 'basic') return `// WITHOUT Compound Components (props drilling)
<Accordion 
  title="Section 1" 
  content="Content here"
  isOpen={true}
  onToggle={handleToggle}
/>

// WITH Compound Components (flexible API)
<Accordion>
  <Accordion.Header>Section 1</Accordion.Header>
  <Accordion.Body>Content here</Accordion.Body>
</Accordion>`;
  if (type === 'implementation') return `import { createContext, useContext, useState } from 'react';

// Create context for internal state
const AccordionContext = createContext();

// Main component
function Accordion({ children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

// Sub-components that use the context
Accordion.Header = function AccordionHeader({ children }) {
  const { isOpen, toggle } = useContext(AccordionContext);
  return (
    <button onClick={toggle} className="accordion-header">
      {children} {isOpen ? '▼' : '▶'}
    </button>
  );
};

Accordion.Body = function AccordionBody({ children }) {
  const { isOpen } = useContext(AccordionContext);
  return isOpen ? <div className="accordion-body">{children}</div> : null;
};

export default Accordion;`;
  if (type === 'usage') return `import Accordion from './Accordion';

function App() {
  return (
    <div>
      <Accordion defaultOpen={true}>
        <Accordion.Header>What is React?</Accordion.Header>
        <Accordion.Body>
          React is a JavaScript library for building user interfaces.
        </Accordion.Body>
      </Accordion>
      
      <Accordion>
        <Accordion.Header>Why use React?</Accordion.Header>
        <Accordion.Body>
          React is fast, flexible, and has a great ecosystem.
        </Accordion.Body>
      </Accordion>
    </div>
  );
}`;
  if (type === 'tabs') return `// Tabs Compound Component
const TabsContext = createContext();

function Tabs({ children, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
};

Tabs.Tab = function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button 
      onClick={() => setActiveTab(index)}
      className={activeTab === index ? 'active' : ''}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ index, children }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === index ? <div>{children}</div> : null;
};`;
  return '';
}

// Accordion Compound Component Implementation
const AccordionContext = createContext();

function Accordion({ children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div style={{border: '1px solid #e0e0e0', borderRadius: 6, marginBottom: 10, overflow: 'hidden'}}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

Accordion.Header = function AccordionHeader({ children }) {
  const { isOpen, toggle } = useContext(AccordionContext);
  return (
    <button 
      onClick={toggle}
      style={{
        width: '100%',
        padding: '12px 16px',
        background: '#e3f2fd',
        border: 'none',
        textAlign: 'left',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '1.05rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <span>{children}</span>
      <span style={{color: '#1976d2'}}>{isOpen ? '▼' : '▶'}</span>
    </button>
  );
};

Accordion.Body = function AccordionBody({ children }) {
  const { isOpen } = useContext(AccordionContext);
  return isOpen ? (
    <div style={{padding: '16px', background: '#fff', borderTop: '1px solid #e0e0e0'}}>
      {children}
    </div>
  ) : null;
};

// Tabs Compound Component Implementation
const TabsContext = createContext();

function Tabs({ children, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div style={{border: '1px solid #e0e0e0', borderRadius: 6, overflow: 'hidden'}}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return (
    <div style={{display: 'flex', background: '#f5f5f5', borderBottom: '2px solid #1976d2'}}>
      {children}
    </div>
  );
};

Tabs.Tab = function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === index;
  return (
    <button 
      onClick={() => setActiveTab(index)}
      style={{
        padding: '12px 24px',
        background: isActive ? '#1976d2' : 'transparent',
        color: isActive ? '#fff' : '#546e7a',
        border: 'none',
        cursor: 'pointer',
        fontWeight: isActive ? 700 : 400,
        fontSize: '1rem',
        transition: 'all 0.2s'
      }}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ index, children }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === index ? (
    <div style={{padding: '20px', background: '#fff'}}>
      {children}
    </div>
  ) : null;
};

// Demo components
function AccordionDemo() {
  return (
    <div>
      <Accordion defaultOpen={true}>
        <Accordion.Header>What are Compound Components?</Accordion.Header>
        <Accordion.Body>
          Compound Components are a pattern where components work together to form a complete UI. 
          The parent manages state, and children components access it via Context.
        </Accordion.Body>
      </Accordion>
      
      <Accordion>
        <Accordion.Header>Why use this pattern?</Accordion.Header>
        <Accordion.Body>
          It provides a flexible, expressive API. Users can arrange sub-components however they want 
          while the parent maintains control of shared state and logic.
        </Accordion.Body>
      </Accordion>
      
      <Accordion>
        <Accordion.Header>Click to expand!</Accordion.Header>
        <Accordion.Body>
          Each accordion manages its own open/closed state independently. 
          Try clicking different headers!
        </Accordion.Body>
      </Accordion>
    </div>
  );
}

function TabsDemo() {
  return (
    <Tabs defaultTab={0}>
      <Tabs.List>
        <Tabs.Tab index={0}>Profile</Tabs.Tab>
        <Tabs.Tab index={1}>Settings</Tabs.Tab>
        <Tabs.Tab index={2}>Notifications</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel index={0}>
        <h3>Profile Tab</h3>
        <p>Your profile information goes here.</p>
      </Tabs.Panel>
      <Tabs.Panel index={1}>
        <h3>Settings Tab</h3>
        <p>Adjust your preferences here.</p>
      </Tabs.Panel>
      <Tabs.Panel index={2}>
        <h3>Notifications Tab</h3>
        <p>Manage your notification settings.</p>
      </Tabs.Panel>
    </Tabs>
  );
}

export default function CompoundComponentsDocsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>Compound Components Pattern</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Compound Components are a powerful React pattern for building flexible, expressive component APIs. Components work together, sharing implicit state!
        </div>
        <div style={infoBox}>
          <b>What are Compound Components?</b><br/>
          Compound Components is a pattern where related components work together as a unit. The parent component manages state, and child components access that state via Context. This creates a clean, flexible API similar to HTML elements like &lt;select&gt; and &lt;option&gt;.
        </div>
      </header>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Compound vs Regular Components</h2>
        <div style={codeStyle}>{getCompoundCode('basic')}</div>
        <div style={tipStyle}>
          Compound components let users compose UI flexibly. Instead of passing many props, users arrange sub-components as needed!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Implementation: Accordion</h2>
        <div style={codeStyle}>{getCompoundCode('implementation')}</div>
        <div style={tipStyle}>
          Use Context to share state between parent and children. Attach sub-components as properties on the parent (e.g., <code>Accordion.Header</code>).
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Usage Example</h2>
        <div style={codeStyle}>{getCompoundCode('usage')}</div>
        <div style={outputStyle}>
          <AccordionDemo />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Click the accordion headers to expand/collapse. Each accordion is independent, and the API is clean and intuitive!
        </div>
      </section>

      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Another Example: Tabs Component</h2>
        <div style={codeStyle}>{getCompoundCode('tabs')}</div>
        <div style={outputStyle}>
          <TabsDemo />
        </div>
        <div style={tipStyle}>
          <b>Try it:</b> Click the tab buttons to switch between panels. The Tabs component manages which tab is active, and panels render conditionally!
        </div>
      </section>

      <section style={{marginTop: 30, paddingTop: 18, borderTop: '2px solid #e5ecf5'}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Benefits of Compound Components</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Flexible API:</b> Users can arrange sub-components in any order.</li>
          <li><b>Less prop drilling:</b> State is shared via Context, not passed as props.</li>
          <li><b>Separation of concerns:</b> Each sub-component handles its own UI.</li>
          <li><b>Intuitive:</b> Feels like native HTML elements (e.g., &lt;select&gt;/&lt;option&gt;).</li>
          <li><b>Maintainable:</b> Easy to add new sub-components without breaking existing code.</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Real-World Examples</h2>
        <div style={infoBox}>
          <b>Popular libraries using Compound Components:</b><br/>
          • <b>Reach UI:</b> Menu, Tabs, Accordion<br/>
          • <b>React Bootstrap:</b> Dropdown, Nav, Card<br/>
          • <b>Chakra UI:</b> Menu, Tabs, Accordion, Modal<br/>
          • <b>Radix UI:</b> Almost all components use this pattern<br/><br/>
          This pattern is widely adopted in modern UI libraries!
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>When to Use Compound Components</h2>
        <ul style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 20px'}}>
          <li><b>Complex UI components:</b> Accordions, tabs, dropdowns, modals, menus</li>
          <li><b>Flexible layouts:</b> When users need control over arrangement</li>
          <li><b>Shared state:</b> When sub-components need to communicate with parent</li>
          <li><b>Component libraries:</b> Building reusable UI kits</li>
          <li><b>Design systems:</b> Creating consistent, composable patterns</li>
        </ul>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Implementation Steps</h2>
        <ol style={{fontSize: '1.05rem', color: '#2c4258', margin: '0 0 0 24px', lineHeight: 1.7}}>
          <li>Create a Context to share state between components</li>
          <li>Create the parent component with a Provider</li>
          <li>Create sub-components that consume the Context</li>
          <li>Attach sub-components as properties on the parent (e.g., <code>Parent.Child</code>)</li>
          <li>Users compose the components together!</li>
        </ol>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Best Practices</h2>
        <div style={infoBox}>
          ✅ <b>Use meaningful names</b> for sub-components (Header, Body, Footer, etc.)<br/>
          ✅ <b>Provide sensible defaults</b> so basic usage is simple<br/>
          ✅ <b>Document the API</b> - Show users how to compose components<br/>
          ✅ <b>Validate context usage</b> - Throw helpful errors if sub-components are used outside parent<br/>
          ✅ <b>Keep it simple</b> - Don't overuse; only for truly related components<br/>
          ❌ <b>Don't overengineer</b> - If simple props work fine, use them<br/>
          ❌ <b>Don't break composition</b> - Allow users flexibility in ordering
        </div>
      </section>

      <section style={{marginTop: 28}}>
        <h2 style={{ color: '#1565c0', fontSize: '1.2rem', marginBottom: 10 }}>Compound Components vs Other Patterns</h2>
        <div style={{marginTop: 15}}>
          <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.98rem'}}>
            <thead>
              <tr style={{background: '#e3f2fd'}}>
                <th style={{padding: 10, textAlign: 'left', border: '1px solid #90caf9'}}>Pattern</th>
                <th style={{padding: 10, textAlign: 'left', border: '1px solid #90caf9'}}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>Compound Components</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Complex UI with shared state, flexible composition</td>
              </tr>
              <tr style={{background: '#f9f9f9'}}>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>Regular Props</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Simple components, clear data flow</td>
              </tr>
              <tr>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>Render Props</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Share logic, let parent control rendering</td>
              </tr>
              <tr style={{background: '#f9f9f9'}}>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}><b>HOCs</b></td>
                <td style={{padding: 10, border: '1px solid #e0e0e0'}}>Add functionality to existing components</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

