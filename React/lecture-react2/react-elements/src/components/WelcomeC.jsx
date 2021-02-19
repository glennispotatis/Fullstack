import React, { Component } from 'react';

class WelcomeC extends Component {
    render() {
        return (
            <div className="Welcome">
                <p>Hello, {this.props.name}</p>
            </div>
        );
    }
}

export default WelcomeC;