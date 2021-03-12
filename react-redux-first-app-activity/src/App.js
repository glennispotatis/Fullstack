import React, { Component } from 'react';
import ButtonWithCounter from './components/ButtonWithCounter';
import LastChoice from './components/LastChoice';
import TotalClicks from './components/TotalClicks';
import './App.css';
//Uncomment if you want to see how redux works (see console.log)
//import reduxTest from './redux/test';

class App extends Component {

  //Uncomment if you want to see how redux works (see console.log)
  // componentDidMount() {
  //   //we run the test
  //   reduxTest();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello, Redux!</h1>
        </header>
        <main>
          
          <div>
            <p>This will be a very simple redux app</p>

            <p>We want to do 2 tasks:</p>

            <ul>
              <li>To count the total number of clicks (ButtonWithCounter)</li>
              <li>to show which button was last pressed</li>
            </ul>
          </div>

          <TotalClicks />
          <LastChoice />

          <div className="flex-row">
            <ButtonWithCounter text="JS" />
            <ButtonWithCounter text="TS" />
            <ButtonWithCounter text="Nodejs" />
            <ButtonWithCounter text="React" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
