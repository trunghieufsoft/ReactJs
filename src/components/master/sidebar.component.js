import React, { Component } from 'react';
import UserPanel from './components/sidebar/user-panel.component';
import SidebarMenu from './components/sidebar/sidebar-menu.component';

class Sidebar extends Component {

    render() {
        return (
            <section className="sidebar">
                <UserPanel />
                <div className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="search" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button type="submit" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>
                <SidebarMenu />
            </section>
        );
    }
}

export default Sidebar;