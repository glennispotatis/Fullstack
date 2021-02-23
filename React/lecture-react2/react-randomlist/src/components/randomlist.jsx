import React, { Component } from 'react';
import './randomlist.css'

class Randomlist extends Component {
    constructor(props) {
        super(props);
        this.listA = [...this.props.list];
        this.state = { randomList: [] }
        this.handlePull = this.handlePull.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        return (
            <section>
                <h2>Original list</h2>
                <ul>
                    {this.props.list.map((item) => {
                        //const isItemNotPulled = this.props.list.find((elem) => elem === item);
                        //const stringClass = isItemNotPulled ? '' : "status_strike";
                        return <li key={item}>{item}</li>;
                    })}
                </ul>

                <button onClick={this.handlePull}>Pull Element</button>
                <button onClick={this.handleReset}>Reset</button>

                <h2>Random elements removed from list</h2>
                <ol>
                    {this.state.randomList.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ol>
            </section>
        );
    }

    handlePull() {
        if (!this.listA.length) return null;
        const randomIndex = Math.floor(Math.random() * this.listA.length);
        const randomElem = this.listA.splice(randomIndex, 1)[0];

        this.setState((state) => {
            return {
                randomList: [...state.randomList, randomElem]
            };
        });
    }

    handleReset(){
        this.setState({
            randomList: []
        },() => {
            this.listA = [...this.props.list]
        })
    }
}

Randomlist.defaultProps = {
    list: ['pen', 'pineapple', 'apple']
}


export default Randomlist;