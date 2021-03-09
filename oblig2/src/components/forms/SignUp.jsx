import './forms.css'

function SignUp(props) {
    return (
        <section className="sign-up">
            <h2>Not a user? Sign up below!</h2>
            <form action="" method="GET" >
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" required />

                <label htmlFor="email">E-Mail: </label>
                <input type="email" name="email" required />

                <label htmlFor="role">Role</label>
                <select name="role" required >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" required />
                <label htmlFor="rePassword">Confirm Password:</label>
                <input type="password" name="rePassword" required />

                <input type="submit" value="Sign up" className="btn"/>
            </form>
        </section>
    )
}

export default SignUp;