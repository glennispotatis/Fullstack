import React from 'react';
import { Redirect, Link } from "react-router-dom";
import './Login.css';
import SignUp from '../forms/SignUp';
import '../forms/forms.css';
import { UIDConsumer } from 'react-uid';

//This component is implementing more than one functionality only for academic purposes.
//If the app is connected to a Backend, the auth logic should be implemented in a different file (SOLID)
function Login(props) {
    if (props.redirect) {
        return <Redirect to={props.redirect} />
    }

    return (
        <div className="Login">
            {!props.isAuth &&
                <>
                    <form action="#" method="GET" onSubmit={props.handleLogIn}>
                        <UIDConsumer name={ id => `login-email-${id}`}>
                            {id => (
                                <>
                                    <label htmlFor={id}>E-mail:</label>
                                    <input id={id} type="email" name="email" />
                                </>
                            )}
                        </UIDConsumer>
                        <UIDConsumer name={ id => `login-password-${id}`}>
                            {id => (
                                <>
                                    <label htmlFor={id}>Password:</label>
                                    <input id={id} type="password" name="password" />
                                </>
                            )}
                        </UIDConsumer>
                        <button type="submit">Log In</button>
                    </form>
                    <Link to="/forgot">Forgot password?</Link>
                    <SignUp />
                </>}
        </div>
    );
}

export default Login;
