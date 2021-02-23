import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];

class PushArray extends Component {
    constructor(props) {
        super(props);
        this.state = { list: INITIAL_LIST };
        this.handleClear = this.handleClear.bind(this);
        this.handlePush = this.handlePush.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() { 
        return (
        <>
            <ul>
                {this.state.list.map(elem=><li key={elem}>{elem}</li>)}
            </ul>
            <button onClick={this.handleClear}>Clear</button>
            <button onClick={this.handlePush}>Push random string</button>
            <button onClick={this.handleReset}>Reset</button>
        </>
        );
    }

    handleClear(){
        this.setState({
            list: []
        });
    }

    handlePush(){
        const randomString = Math.random().toString(36).substring(2, 7);

        this.setState((state)=>{
            return {
                list: [...state.list, randomString]
            }
        });
    }

    handleReset(){
        this.setState({
            list: INITIAL_LIST
        });
    }
}

export default PushArray;