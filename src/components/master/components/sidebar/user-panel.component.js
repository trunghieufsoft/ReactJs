import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPanel extends Component {

    render() {
        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="../dist/img/user2-160x160.jpg" className="img-circle" alt="" />
                </div>
                <div className="pull-left info">
                    <p>Alexander Pierce</p>
                    <Link to="/"><i className="fa fa-circle text-success"></i> Online</Link>
                </div>
            </div>
        );
    }
}

export default UserPanel;