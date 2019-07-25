import React, { Component } from 'react';
import './header.css'
class Header extends Component {
        render() 
        { 
        return (
            <div>
                <h2 className="header">{this.props.heading}</h2>
            </div>
        );
    }
}
 
export default Header;