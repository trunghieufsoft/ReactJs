import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tasks extends Component {
    render() {
        return (
            <ul className="dropdown-menu">
                <li className="header">You have 6 tasks</li>
                <li>
                    <ul className="menu">
                        <li>
                            <Link to="/">
                                <h3>
                                    Design some buttons
                                    <small className="pull-right">20%</small>
                                </h3>
                                <div className="progress xs">
                                    <div className="progress-bar progress-bar-aqua w-20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                        <span className="sr-only">20% Complete</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="footer">
                    <Link to="/">View all</Link>
                </li>
            </ul>
        );
    }
}

export default Tasks;
