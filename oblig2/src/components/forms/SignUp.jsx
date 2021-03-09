import './forms.css'
import { UIDConsumer } from 'react-uid';

function SignUp(props) {
    return (
        <section className="sign-up">
            <h2>Not a user? Sign up below!</h2>
            <form action="" method="GET" >
                <UIDConsumer name={id => `signup-firstName-${id}`}>
                    {id => (
                        <>
                            <label htmlFor={id}>First Name:</label>
                            <input id={id} type="text" name="firstName" required />
                        </>
                    )}
                </UIDConsumer>
                <UIDConsumer name={id => `signup-lastName-${id}`}>
                    {id => (
                        <>
                            <label htmlFor={id}>Last Name:</label>
                            <input id={id} type="text" name="lastName" required />
                        </>
                    )}
                </UIDConsumer>
                <UIDConsumer name={id => `signup-email-${id}`}>
                    {id => (
                        <>
                            <label htmlFor={id}>First Name:</label>
                            <input id={id} type="email" name="email" required />
                        </>
                    )}
                </UIDConsumer>
                <UIDConsumer name={id => `signup-role-${id}`}>
                    {id => (
                        <>
                            <label htmlFor={id}>Role</label>
                            <select id={id} name="role" required >
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
                            <input id={id} type="password" name="password" required />
                        </>
                    )}
                </UIDConsumer>
                <UIDConsumer name={id => `signup-rePassword-${id}`}>
                    {id => (
                        <>
                            <label htmlFor={id}>Confirm Password:</label>
                            <input id={id} type="password" name="rePassword" required />
                        </>
                    )}
                </UIDConsumer>
                <input type="submit" value="Sign up" className="btn" />
            </form>
        </section>
    )
}

export default SignUp;