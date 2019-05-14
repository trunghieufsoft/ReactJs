import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actWebLogoutRequest } from '../../../../actions/user';
import * as Key from '../../../../constants/key';

class UserMenu extends Component {

    onLogout = (e) => {
        var authenByCookie = localStorage.getItem(Key.TOKEN) === null;
        this.props.onLogout(authenByCookie);
    }

    render() {
        return (
            <ul className="dropdown-menu">
                <li className="user-header">
                    <img src={'dist/img/user2-160x160.jpg'} className="img-circle" alt="" />

                    <p>
                        {'Alexander Pierce - Web Developer'}
                        <small>{'Member since Nov. 2012'}</small>
                    </p>
                </li>
                <li className="user-body">
                    <div className="row">
                        <div className="col-xs-4 text-center">
                            <Link to="/">Followers</Link>
                        </div>
                        <div className="col-xs-4 text-center">
                            <Link to="/">Sales</Link>
                        </div>
                        <div className="col-xs-4 text-center">
                            <Link to="/">Friends</Link>
                        </div>
                    </div>
                </li>
                <li className="user-footer">
                    <div className="pull-left">
                        <Link to="/" className="btn btn-default btn-flat">Profile</Link>
                    </div>
                    <div className="pull-right">
                        <Link to="#" onClick={this.onLogout} className="btn btn-default btn-flat">Sign out</Link>
                    </div>
                </li>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogout: (authenByCookie) => {
            dispatch(actWebLogoutRequest(authenByCookie));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
