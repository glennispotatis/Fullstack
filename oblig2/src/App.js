import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import USERS from './users';

import Home from './components/home/Home';
import UserList from './components/user-list/user-list';
import NotFound from './components/NotFound';
import About from './components/about/About';
import PrivateRoute from './routes/PrivateRoute';
import Login from './components/login/Login';
import ForgotPass from './components/forms/ForgotPass';
import Nav from './components/nav/Nav';
import { isLoggedIn } from './utils/isAuth';
import SignUp from './components/forms/SignUp';


class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/home-office"
    this.state = {
      myUser: { ...USERS[0] },
      users: [...USERS]
    }
  }

  componentDidMount(){
    const isAuth = isLoggedIn();
    this.setState({isAuth});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <header className="App-header">
              <Nav isAuth={this.state.isAuth} handleLogOut={this.handleLogOut} />
            </header>
            <main>
              <Switch>
                <PrivateRoute exact path="/dashboard">
                  <UserList users={this.state.users} />
                </PrivateRoute>
                <PrivateRoute exact path="/user">
                  <Home user={this.state.myUser} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />
                </PrivateRoute>
                <Route exact path="/login">
                  <Login handleLogIn={this.handleLogIn} redirect={this.state.redirect} isAuth={this.state.isAuth} />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                <Route exact path="/forgot">
                  <h1>So you forgot your password?</h1>
                  <ForgotPass />
                </Route>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }

  handleLogIn = () => {
    localStorage.setItem('userAuth', JSON.stringify(true));
    this.setState({ redirect: "/user", isAuth: true });
  };

  handleLogOut = () => {
    localStorage.removeItem('userAuth');
    this.setState({ redirect: null, isAuth: false });
  };

  updateUserPlace = (onCampus) => {
    const place = onCampus ? 'on-campus' : 'home-office';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].place = place;

      return {
        myUser: {
          ...state.myUser,
          place
        },
        users: newUserList
      }
    });
  }

  updateUserStatus = (available) => {
    const status = available ? 'available' : 'busy';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].status = status;

      return {
        myUser: {
          ...state.myUser,
          status
        },
        users: newUserList
      }
    });
  }
}

export default App;