import React, { Component } from 'react';
import './forms.css'
import { UIDConsumer } from 'react-uid';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            password: '', 
            rePassword: '',
            error: '',
            button: true
        };
    }
    render() {
        return (
            <section className="sign-up">
                <h2>Not a user? Sign up below!</h2>
                <form action="/login" method="GET" >
                    <UIDConsumer name={id => `signup-firstName-${id}`}>
                        {id => (
                            <>
                                <label htmlFor={id}>First Name:</label>
                                <input id={id} type="text" name="firstName" required onChange={this.eventHandler} />
                            </>
                        )}
                    </UIDConsumer>
                    <UIDConsumer name={id => `signup-lastName-${id}`}>
                        {id => (
                            <>
                                <label htmlFor={id}>Last Name:</label>
                                <input id={id} type="text" name="lastName" required onChange={this.eventHandler} />
                            </>
                        )}
                    </UIDConsumer>
                    <UIDConsumer name={id => `signup-email-${id}`}>
                        {id => (
                            <>
                                <label htmlFor={id}>E-mail:</label>
                                <input id={id} type="email" name="email" required onChange={this.eventHandler} />
                            </>
                        )}
                    </UIDConsumer>
                    <UIDConsumer name={id => `signup-role-${id}`}>
                        {id => (
                            <>
                                <label htmlFor={id}>Role</label>
                                <select id={id} name="role" required onChange={this.eventHandler} >
                                    <option value="" defaultValue>Select</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </>
                        )}
                    </UIDConsumer>
                    <UIDConsumer name={id => `signup-password-${id}`}>
                        {id => (
                            <>
                                <label htmlFor={id}>Password:</label>
                                <input id={id} type="password" name="password" required onChange={this.eventHandler}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
                            </>
                        )}
                    </UIDConsumer>
                    <UIDConsumer name={id => `signup-rePassword-${id}`}>
                        {id => (
                            <>
                                <label htmlFor={id}>Confirm Password:</label>
                                <input id={id} type="password" name="rePassword" required onChange={this.eventHandler}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
                            </>
                        )}
                    </UIDConsumer>
                    <p>{this.state.error}</p>
                    <button type="submit" disabled={this.state.button}>Sign up</button>
                </form>
            </section>
        );
    }

    eventHandler = (event) => {
        let stateName = event.target.name;
        this.setState({[stateName]: event.target.value});
    };

    functions = () => {
        this.eventHandler();
        this.validate();
    }

    validate = () => {
        //event.preventDefault();
        let password = this.state.password;
        let rePassword = this.state.rePassword;

        if(password === rePassword && password.length !== 0 && rePassword.length !== 0){
            this.setState({button: false, error: ''});
        }else {
            this.setState({error: 'Passwords must match!', button: true});
        }
        
    }
}

export default SignUp;