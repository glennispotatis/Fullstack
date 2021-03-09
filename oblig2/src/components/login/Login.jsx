import React from 'react';
import { Redirect, Link } from "react-router-dom";
import './Login.css';
import SignUp from '../forms/SignUp';
import '../forms/forms.css';

//This component is implementing more than one functionality only for academic purposes.
//If the app is connected to a Backend, the auth logic should be implemented in a different file (SOLID)
function Login(props) {
    if(props.redirect){
        return <Redirect to={props.redirect} />
    }

    return (
        <div className="Login">
            {!props.isAuth &&
                <>
                    <form action="" method="GET" onSubmit={props.handleLogIn}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" />
                        <button type="submit">Log In</button>
                    </form>
                    <Link to="/forgot">Forgot password?</Link>
                    <SignUp />
                </>}
        </div>
    );
}

export default Login;
