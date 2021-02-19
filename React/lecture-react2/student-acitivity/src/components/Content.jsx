import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <section>
                <p>Heeeelp</p>
                <div>
                    {this.props.children}
                </div>
                <img src={this.props.src} alt="Beautiful"/>
            </section>
        );
    }
}

export default Content;