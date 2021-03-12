import { connect } from 'react-redux';

const TotalClicks = (props) => {
    return (
        <p>The total number of clicks during the execution of this app is: <strong>{props.clickCounter}</strong></p>
    );
}

const mapStateToProps = (state) => {
    return {
        clickCounter: state.clickCounter
    }
}

export default connect(mapStateToProps)(TotalClicks);