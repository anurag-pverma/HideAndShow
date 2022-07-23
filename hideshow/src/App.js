import logo from './logo.svg';
import './App.css';
import Hideshow from './Components/Hideshow';
import Toggleapp from './Components/Toggleapp';
import Fetchapi from './Components/Fetchapi';

function App() {
  return (
    <div className="App">
     <Hideshow/>
     <Toggleapp/>
     <Fetchapi/>
    </div>
  );
}

export default App;
