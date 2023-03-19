import './App.css';
import Header from './components/Header'
import Dropdown22 from './components/Dropdown22'

function App() {
  return (
    <div className="App">

      <h6>this project will eventually display a virtual Enigma machine</h6>
      <h6>the fruit selection needs to be replaced with the wheels and window settings</h6>
      

      <Header />
        <h3>Wheel order (Walzenlage)</h3>
      <Dropdown22 />
        <h3>Ring setting (Ringstullung)</h3>
      <Dropdown22 />
        <h3>Wheel position window</h3>
      <Dropdown22 />

    </div>
  );
}

export default App;






