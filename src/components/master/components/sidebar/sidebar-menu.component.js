import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import menus from './menu-link';

const MenuLink = ({ label: Label, to, activeOnlyWhenExact, classTag, classTreeView = '' }) => {
    
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                classTreeView += match ? classTreeView === '' ? 'active' : ' active' : '';
                return (
                    <li className={classTreeView} >
                        <Link to={to} >
                            <i className={classTag}></i>
                            <Label />
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class SidebarMenu extends Component {

    showTreeView = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        content={menu.content}
                        classTag={menu.classTag}
                        classTreeView={menu.classTreeView}
                    />
                );
            });
        }
        return result;
    }

    render() {
        return (
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                {this.showTreeView(menus)}
            </ul>
        );
    }
}

export default SidebarMenu;