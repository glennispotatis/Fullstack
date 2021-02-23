import './App.css';
import CustomList from './components/CustomList';

function App() {
  return (
    <div className="App">
      <CustomList />
      <CustomList list={['TS', 'JS', 'HTML']} controls={['push', 'reset']} />
    </div>
  );
}

export default App;
