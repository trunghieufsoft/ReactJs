import React, { Component } from 'react';
import { AUTHOR } from './../../constants/key';

class Footer extends Component {

    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    {AUTHOR}
                </div>
                <strong>Copyright © 5/2019</strong> information technology.
            </footer>
        );
    }
}

export default Footer;