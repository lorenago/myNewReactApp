// Import library for making a component
import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import  './TopMenu.scss';
import logo from '../../logo.svg';


// Make a component
class TopMenu extends Component {
    render() {
        return (
            <header className="viewStyle flex">
                {/* <header className="App-header" style={viewStyle}> */}
                <IconButton className="user-menuButton" color="primary" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <h4 className="textStyle">{this.props.headerText}</h4>
                <img src={logo} className="user-photo" alt="logo" />
                {/* <h4 style={textStyle}>{this.props.headerText}</h4> */}
            </header>
        );
    }
};

// Make the component available to other parts of the app
export default TopMenu;
