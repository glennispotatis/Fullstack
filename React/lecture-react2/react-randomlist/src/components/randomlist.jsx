import React, { Component } from 'react';
import './randomlist.css'

class Randomlist extends Component {
    constructor(props) {
        super(props);
        this.staticList = [...this.props.list];
        this.listA = [...this.props.list];
        this.listB = [];
    }

    handlePullElement(){
        this.setState()
    }

    render() {
        return (
            <section>
                <h2>Original list</h2>
                <ul>
                    {this.listA.map((item) => {
                        //const isItemNotPulled = this.listA.find((elem) => elem === item);
                        //const stringClass = isItemNotPulled ? '' : 'className="status_strike"';
                        return <li key={item}>{item}</li>;
                    })}
                </ul>

                <button onClick={this.handlePullElement}>Pull Element</button>
                <button>Reset</button>

                <h2>Random elements removed from list</h2>
                <ol>
                    {this.listB.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ol>
            </section>
        );
    }
}

Randomlist.defaultProps = {
    list: ['pen', 'pineapple', 'apple']
}


export default Randomlist;