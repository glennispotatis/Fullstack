import React, { Component } from 'react';

const INITIAL_LIST = ['apple', 'pineapple', 'pen'];

class EmptyArray extends Component {
    constructor(props) {
        super(props);
        this.state = { list: INITIAL_LIST }
    }
    render() { 
        return ( 
            <ul>
                {this.state.list.map(elem=><li key={elem}>{elem}</li>)}
            </ul>
        );
    }
}

export default EmptyArray;