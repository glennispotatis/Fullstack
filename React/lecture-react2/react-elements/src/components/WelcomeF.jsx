import './Welcome.css';

function WelcomeF(props){
    return (
        <div className="Welcome">
            <p>Hello, {props.name}</p>
        </div>
    );
}

export default WelcomeF;