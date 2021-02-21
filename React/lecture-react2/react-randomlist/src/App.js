import './App.css';
import Randomlist from './components/randomlist';

function App() {
  return (
    <div className="App">
      <Randomlist list={['TS', 'JS', 'HTML']} />
      <Randomlist />
    </div>
  );
}

export default App;
