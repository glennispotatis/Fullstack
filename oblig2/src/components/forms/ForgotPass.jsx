import './forms.css';
import { UIDConsumer } from 'react-uid';

function ForgotPass(props) {
    return (
        <section className="forms">
            <form action="/success" method="GET">
                <UIDConsumer name={id => `forgot-email-${id}`}>
                    {id => (
                        <>
                            <label htmlFor={id}>Your user email:</label>
                            <input id={id} type="email" name="email" required />
                        </>
                    )}
                </UIDConsumer>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default ForgotPass;