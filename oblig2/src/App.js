import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="login">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
