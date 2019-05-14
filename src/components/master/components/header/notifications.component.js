import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notifications extends Component {
    render() {
        return (
            <ul className="dropdown-menu">
                <li className="header">header</li>
                <li>
                    <ul className="menu">
                        <li>
                            <Link to="/">
                                <i className="fa fa-users text-aqua"></i> body
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="footer"><Link to="/">View all</Link></li>
            </ul>
        );
    }
}

export default Notifications;
