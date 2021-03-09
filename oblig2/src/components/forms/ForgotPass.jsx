import './forms.css';

function ForgotPass(props) {
    return (
        <section className="log-in">
            <form action="" method="GET">
                <label htmlFor="email">Your user email:</label>
                <input type="email" name="email" required />
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}

export default ForgotPass;