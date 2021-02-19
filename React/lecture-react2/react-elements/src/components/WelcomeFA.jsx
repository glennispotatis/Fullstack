import './Welcome.css';

function WelcomeFA(props){
    return (
        <div className="Welcome">
            <p>Hello, {props.name}</p>
        </div>
    );
}

WelcomeFA.defaultProps = {
    name: 'Jane Doe'
};

export default WelcomeFA;