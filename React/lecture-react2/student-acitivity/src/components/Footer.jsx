import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <footer>
                <p>&#169; {this.props.cpr}</p>
            </footer>
        );
    }
}

export default Footer;