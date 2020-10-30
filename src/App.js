import './App.css';
import AddItems from './Components/AddItems';
import CounterHooks from './Components/CounterHooks';
import HooksCounter from './Components/HooksCounter';
import InputHooks from './Components/InputHooks';

function App() {
  return (
    <div className="App">
      <HooksCounter/>
      <CounterHooks/>
     <InputHooks/>
     <AddItems/>
    </div>
  );
}

export default App;
