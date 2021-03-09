import './forms.css';
import { UIDConsumer } from 'react-uid';

function ForgotPass(props) {
    return (
        <section className="log-in">
            <form action="" method="GET">
                <UIDConsumer name={id => `forgot-email-${id}`}>
                    {id => (
                        <>
                            <label htmlFor={id}>Your user email:</label>
                            <input id={id} type="email" name="email" required />
                        </>
                    )}
                </UIDConsumer>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
}

export default ForgotPass;