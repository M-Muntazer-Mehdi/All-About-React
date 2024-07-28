import logo from './logo.svg';
import './App.css';
import JsxConcept from './concepts/Jsx';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
      <h1>Home Page</h1>
      <Link to="/another-page" className="App-link">
        Learn React with Muntazer
      </Link>
    </div>
      </header>
    </div>
  );
}

export default App;
