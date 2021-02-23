import React, { Component } from 'react';

class CustomList extends Component {
    constructor(props) {
        super(props);
        this.state = { list: this.props.list };
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
            {this.clear &&<button onClick={this.handleClear}>Clear</button>}
            {this.controls !== 'push' &&<button onClick={this.handlePush}>Push random string</button>}
            {this.controls !== 'reset' &&<button onClick={this.handleReset}>Reset</button>}
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
            list: this.props.list
        });
    }
}

CustomList.defaultProps = {
    list: ['apple', 'pineapple', 'pen']
};

export default CustomList;