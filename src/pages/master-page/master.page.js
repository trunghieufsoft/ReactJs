import React, { Component } from 'react';
import Header from '../../components/master/header.component';
import { Link, Route } from 'react-router-dom';
import Footer from '../../components/master/footer.component';
import Sidebar from '../../components/master/sidebar.component';
import * as Config from './../../constants/config';
import _ from 'lodash';

const MapLevelUrl = ({ index, icon, endUrl, to, title, end }) => {
    var exact = index === 0;
    return <Route
        path={to}
        exact={exact}
        children={() => {
            var active = end ? 'active' : '';
            var classTag = exact ? icon : ''
            return end ? (
                <li>
                    <i className={classTag}></i>
                    {title}
                </li>
            ) : (
                <li className={active} >
                    <Link to={to}>
                        <i className={classTag}></i>
                        {title}
                    </Link>
                </li>
            );
        }}
    />
}

class MasterPage extends Component {
    getTreeNode = (level, baseUrl = '', tree = []) => {
        if (_.size(level.endPoint) > 0) {
            baseUrl += level.url;
            tree.push({
                index: tree.length,
                url: baseUrl,
                endUrl: level.url,
                title: level.pageHeader.parent,
                end: false
            });
        }
        else {
            if (tree.length === 0) {
                baseUrl += level.url;
                tree.push({
                    index: tree.length,
                    url: baseUrl,
                    endUrl: level.url,
                    title: ' ' + level.pageHeader.parent,
                    end: true
                });
            }
            else {
                var last = _.last(tree)
                last.end = true;
            }
        }
        return _.size(level.endPoint) > 0 ? this.getTreeNode(level.endPoint, baseUrl, tree) : tree;
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    treeView = (infoPage) => {
        var result = null;
        if (_.size(infoPage) > 0) {
            var tree = this.getTreeNode(infoPage.level);
            
            result = tree.map((item, index) => {
                return (
                    <MapLevelUrl
                        key={index}
                        index={item.index}
                        to={item.url}
                        icon={infoPage.pageHeader.icon}
                        endUrl={item.endUrl}
                        title={item.title}
                        end={item.end}
                    />
                )
            })
        }
        return result;
    }

    render() {
        var { page } = this.props;
        var infoPage = _.find(Config.PAGE, (item) => { return item.baseUrl === page; });
        return (
            <div className="wrapper common">
                <Header />
                <aside className="main-sidebar">
                    <Sidebar />
                </aside>

                <div className="content-wrapper mh-572px">
                    <section className="content-header">
                        <h1>
                            {infoPage.pageHeader.page}
                            <small>{infoPage.description}</small>
                        </h1>
                        <ol className="breadcrumb">
                            {this.treeView(infoPage)}
                            {/* <li><Link to={'/' + infoPage.baseUrl}><i className={infoPage.pageHeader.icon}></i> {infoPage.pageHeader.page}</Link></li>
                            <li className="active">{_.join(infoPage.level, ' > ')}</li> */}
                        </ol>
                    </section>

                    <section className="content container-fluid">

                    </section>
                </div>

                <Footer />

                <aside className="control-sidebar control-sidebar-dark">
                    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                        {/* <li className="active"><Link href="/control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></Link></li>
                        <li><Link to="/control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></Link></li> */}
                    </ul>
                    <div className="tab-content">
                        {/* <div className="tab-pane active" id="control-sidebar-home-tab">
                            <h3 className="control-sidebar-heading">Recent Activity</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <Link to="">
                                        <i className="menu-icon fa fa-birthday-cake bg-red"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                                            <p>Will be 23 on April 24th</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                            <h3 className="control-sidebar-heading">Tasks Progress</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <Link to="">
                                        <h4 className="control-sidebar-subheading">
                                            Custom Template Design
                                            <span className="pull-right-container">
                                                <span className="label label-danger pull-right">70%</span>
                                            </span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-danger w-70"></div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
                        <div className="tab-pane" id="control-sidebar-settings-tab">
                            <form method="post">
                                <h3 className="control-sidebar-heading">General Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Report panel usage
                                        <input type="checkbox" className="pull-right" checked={false} onChange={this.onChange} />
                                    </label>

                                    <p>
                                        Some information about this general settings option
                                    </p>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </aside>
                <div className="control-sidebar-bg"></div>
            </div>
        );
    }
}

export default MasterPage;
