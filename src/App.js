import React, { Component } from 'react';
import Login from './components/login/Login';
import routes from './routes';
import NotFoundPage from './pages/not-found-page/not-found.page';
import { connect } from 'react-redux';
import { actCheckAuthentication } from './actions/user';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

    componentDidMount = () => {
        this.props.checkAuthentication();
    }

    render = () => {
        var { authorization } = this.props;
        var JSX = authorization.length > 0 ? (
            this.renderBody(authorization[0].authentication)
        ) : (
            <NotFoundPage />
        );
        return JSX;
    }

    renderBody = (authentication) => {
        return (
            <Router>
                <Switch>
                    <Route path="/login" render={
                        props => {
                            return !authentication ? (
                                <Login {...props} />
                            ) : (
                                <Redirect to={{ pathname: '/' }} />
                            )
                        }
                    } />
                    {this.showContentRoute(routes, authentication)}
                </Switch>
            </Router>
        );
    }

    showContentRoute = (routes, isAuthen) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <ProtectedRoute
                        key={index}
                        loggedIn={isAuthen}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}

const ProtectedRoute  = ({ component: Component, loggedIn, path, key, ...rest}) => {
    return (
        <Route
            key={key}
            path={path}
            {...rest}
            render={
                props => {
                    return loggedIn ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {
                                    prevLocaltion: path,
                                    error: "bạn cần đăng nhập trước!"
                                }
                            }}
                        />
                    )
                }
            }
        >
        </Route>
    );
}

const mapStateToProps = state => {
    return {
        authorization: state.authorization
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        checkAuthentication: () => {
            dispatch(actCheckAuthentication());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
