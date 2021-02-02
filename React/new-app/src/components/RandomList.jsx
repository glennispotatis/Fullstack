import React, { Component } from 'react';

class RandomList extends Component {
    constructor(props){
        super(props);
        this.list = ['apple', 'pineapple', 'pen'];
    }

    render() {
        return (
            <div className="randomList">
                <div>
                    <h2>Original List</h2>
                    <ul className="originalList">
                        {this.list.map(item=>{
                            return <li key={item}>{item}</li>
                        })}
                    </ul>
                    <button>Pull Element</button>
                    <button>Reset</button>
                </div>

                <div>
                    <h2>Random List</h2>
                    <ol className="pulledList">
                        <li>...</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default RandomList;