import './App.css';
import WelcomeF from './components/WelcomeF';
import WelcomeC from './components/WelcomeC';

function App() {
  return (
    <div className="App">
      <h1>Our body...</h1>
      <WelcomeF />
      <WelcomeF name="John Doe" />
      <WelcomeF name={23} />

      <h2>With classes</h2>
      <WelcomeC />
      <WelcomeC name="John Doe" />
      <WelcomeC name={23} />
    </div>
  );
}

export default App;
