import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];
const DEFAULT_CONTROLS = ['clear', 'push', 'reset'];

class CustomList extends Component {
    constructor(props) {
        super(props);
        this.state = { list: this.props.list, controls: this.props.controls };
        this.handleClear = this.handleClear.bind(this);
        this.handlePush = this.handlePush.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.list.map(elem => <li key={elem}>{elem}</li>)}
                </ul>
                {this.isControlSet('clear') && <button onClick={this.handleClear}>Clear</button>}
                {this.isControlSet('push') && <button onClick={this.handlePush}>Push random string</button>}
                {this.isControlSet('reset') && <button onClick={this.handleReset}>Reset</button>}
            </>
        );
    }

    handleClear() {
        console.log(this.props.controls);
        this.setState({
            list: []
        });
    }

    handlePush() {
        console.log(this.props.controls);
        const randomString = Math.random().toString(36).substring(2, 7);

        this.setState((state) => {
            return {
                list: [...state.list, randomString]
            }
        });
    }

    handleReset() {
        this.setState({
            list: this.props.list
        });
    }

    isControlSet(controlName) {
        return this.props.controls.find(elem => elem === controlName);
    }

    static defaultProps = {
        list: INITIAL_LIST,
        controls: DEFAULT_CONTROLS
    };
}



export default CustomList;