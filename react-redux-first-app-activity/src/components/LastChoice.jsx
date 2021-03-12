import { connect } from 'react-redux';

const LastChoice = (props) => {
    return (
        <p>Your last choice was: <strong>{props.lastChoice || 'none'}</strong></p>
    );
}

const mapStateToProps = (state) => {
    return {
        lastChoice: state.selectedTechnology
    }
}

//2nd argument is null or not passed (only subscribe)
export default connect(mapStateToProps)(LastChoice);