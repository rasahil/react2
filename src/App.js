import logo from './img1.png';
import Navbaar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Axiom Techguru <code></code> 
        </p>
        <p>To Explore React JS</p>

      <h1>My Name is :-Sahil</h1>
      </header>
    </div>
<Navbaar/>
    </div>
  );
}

export default App;
