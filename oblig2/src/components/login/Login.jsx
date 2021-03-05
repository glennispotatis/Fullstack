import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { isLoggedIn } from '../../utils/isAuth';
import './Login.css';

//This component is implementing more than one functionality only for academic purposes.
//If the app is connected to a Backend, the auth logic should be implemented in a different file (SOLID)
class Login extends Component {
    state = { redirect: null };

    componentDidMount() {
        const isAuth = isLoggedIn();
        this.setState({isAuth});
    }

    render() {
        
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="Login">
                {!this.state.isAuth && <button onClick={this.handleLogIn}>Log In</button>}
                {this.state.isAuth && <button onClick={this.handleLogOut}>Log Out</button>}
            </div>
        );
    }

    handleLogIn = () => {
        localStorage.setItem('userAuth', JSON.stringify(true));
        this.setState({ redirect: "/user" });
    };

    handleLogOut = () => {
        localStorage.removeItem('userAuth');
        this.setState({isAuth: false});

    };
}

export default Login;
