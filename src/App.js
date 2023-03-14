import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Dropdown from './components/Dropdown'

function App() {
  return (
    <div className="App">

      <h6>this project will eventually display a virtual working Enigma machine</h6>
      <h6>the fruit selection needs to be replaced with the wheels and window settings</h6>
      

      <Header />

      <Dropdown />
      <h1></h1>
      <Dropdown />

    </div>
  );
}

export default App;






{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}