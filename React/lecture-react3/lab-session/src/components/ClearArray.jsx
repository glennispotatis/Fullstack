import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];

class ClearArray extends Component {
    constructor(props) {
        super(props);
        this.state = { list: INITIAL_LIST }
        this.handleClear = this.handleClear.bind(this);
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.list.map(elem => <li key={elem}>{elem}</li>)}
                </ul>
                <button onClick={this.handleClear}>Clear</button>
            </>
        );
    }

    handleClear() {
        this.setState({
            list: []
        });
    }
}

export default ClearArray;