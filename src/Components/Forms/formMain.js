import React from "react";
import ControlledForm from "./controlledForm";
import UnControlledForm from "./unControlledForm";
import HandleFormControlled from "./handleFormUsingControlled";
import HandleFormUncontrolled from "./handleFormUsingUncontrolled";

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

function getFileCode(fname) {
  if(fname === "ControlledForm") return `import React, {useState} from "react";
function ControlledForm () {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleclick = (event) => {
    event.preventDefault();
    alert('Name: ' + name + ', Password: ' + password);
  }
  return(
    <form onSubmit={handleclick}>
      <h2> Controlled Form</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      </label>
      <br />
      <label>
        Password: 
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlledForm;`;
  if(fname === "UnControlledForm") return `import React, {useRef} from "react";
function UnControlledForm () {
  const name = useRef(null);
  const password = useRef(null);
  const handleclick = (event) => {
    event.preventDefault();
    alert('Name: ' + name.current.value + ', Password: ' + password.current.value);
  }
  return(
    <form onSubmit={handleclick}>
      <h2> UnControlled Form</h2>
      <label>Name:
        <input type="text" ref={name} />
      </label><br />
      <label>Password:
        <input type="text" ref={password} />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UnControlledForm;`;
  if(fname === "HandleFormControlled") return `import React, { useState } from 'react';
function HandleFormControlled() {
  const [formData, setFormData] = useState({name: '',email: '',message: ''});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Handle Form Using Controlled Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default HandleFormControlled;`;
  if(fname === "HandleFormUncontrolled") return `import React, { useRef } from 'react';
function HandleFormUncontrolled() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log('Form Submitted with Data:', submittedData);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Handle Form Using Uncontrolled Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea ref={messageRef} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default HandleFormUncontrolled;`;
  if(fname === "FormMain") return `import React from "react";
import ControlledForm from "./controlledForm";
import UnControlledForm from "./unControlledForm";
import HandleFormControlled from "./handleFormUsingControlled";
import HandleFormUncontrolled from "./handleFormUsingUncontrolled";

function FormMain () {
  return (
    <div>
      <ControlledForm />
      <UnControlledForm />
      <HandleFormControlled />
      <HandleFormUncontrolled />
    </div>
  );
}

export default FormMain;`;
  return '';
}

export default function FormsDemo() {
  return (
    <div style={{ width: '100%', padding: '0 2vw 40px 2vw', textAlign: 'left' }}>
      <header style={{ marginBottom: 18 }}>
        <h1 style={{ color: '#1976d2', fontSize: '2rem', margin: 0 }}>React Forms: Controlled & Uncontrolled</h1>
        <div style={{color:'#214570',fontSize:'1.12rem', marginTop:10}}>
          Learn the difference between controlled & uncontrolled forms. Try each below!
        </div>
      </header>
      {/* Controlled Form */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Controlled Form</h2>
        <div style={codeStyle}>{getFileCode("ControlledForm")}</div>
        <div style={outputStyle}><ControlledForm /></div>
        <div style={tipStyle}>A <b>controlled form</b> connects input values to React state and updates state on every change.</div>
      </section>
      {/* Uncontrolled Form */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Uncontrolled Form</h2>
        <div style={codeStyle}>{getFileCode("UnControlledForm")}</div>
        <div style={outputStyle}><UnControlledForm /></div>
        <div style={tipStyle}>An <b>uncontrolled form</b> manages input values via refs instead of React state. Good for quick forms or when React doesn’t need to track input.</div>
      </section>
      {/* Handle Form Using Controlled (Multi Field) */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Controlled Form (Multiple Fields)</h2>
        <div style={codeStyle}>{getFileCode("HandleFormControlled")}</div>
        <div style={outputStyle}><HandleFormControlled /></div>
        <div style={tipStyle}>For forms with many fields, store all values in an object for easy updates and validation.</div>
      </section>
      {/* Handle Form Using Uncontrolled (Refs, Multi Field) */}
      <section style={{marginBottom:'38px', borderTop:'2px solid #f0f4f7', paddingTop: '18px'}}>
        <h2 style={{ color: '#1976d2', fontSize: '1.17rem', margin:'0 0 7px' }}>Uncontrolled Form (Multiple Fields)</h2>
        <div style={codeStyle}>{getFileCode("HandleFormUncontrolled")}</div>
        <div style={outputStyle}><HandleFormUncontrolled /></div>
        <div style={tipStyle}>Refs give access to input DOM nodes directly (rarely needed except for legacy code or integration with non-React libraries).</div>
      </section>
      {/* Full Example File */}
      <section style={{marginBottom:'42px', borderTop:'2px solid #dbeaf7', paddingTop:'22px'}}>
        <h2 style={{ color: '#1155aa', fontSize: '1.17rem', margin:'0 0 7px' }}>Full Example: formMain.js</h2>
        <div style={codeStyle}>{getFileCode("FormMain")}</div>
        <h3 style={{margin:'17px 0 8px', color:'#1747a7', fontSize:'1.09rem'}}>Output:</h3>
        <div style={outputStyle}>
          <ControlledForm />
          <UnControlledForm />
          <HandleFormControlled />
          <HandleFormUncontrolled />
        </div>
      </section>
    </div>
  );
}