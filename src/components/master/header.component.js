import React, { Component } from 'react';
import Messages from './components/header/messages.component';
import Notifications from './components/header/notifications.component';
import Tasks from './components/header/tasks.component';
import UserMenu from './components/header/user-menu.component';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header className="main-header" >
                <Link to="/" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </Link>
                <nav className="navbar navbar-static-top" role="navigation" >
                    <Link to="" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </Link>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <Link to="" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">{/* 4 */}</span>
                                </Link>
                                <Messages />
                            </li>

                            <li className="dropdown notifications-menu">
                                <Link to="" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell-o"></i>
                                    <span className="label label-warning">{/* 10 */}</span>
                                </Link>
                                <Notifications />
                            </li>
                            <li className="dropdown tasks-menu">
                                <Link to="" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-flag-o"></i>
                                    <span className="label label-danger">6</span>
                                </Link>
                                <Tasks />
                            </li>
                            <li className="dropdown user user-menu">
                                <Link to="" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src={'dist/img/user2-160x160.jpg'} className="user-image" alt="" />
                                    <span className="hidden-xs">{'Alexander Pierce'}</span>
                                </Link>
                                <UserMenu />
                            </li>
                            <li>
                                <Link to="" data-toggle="control-sidebar"><i className="fa fa-gears"></i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;