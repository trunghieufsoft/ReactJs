import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actWebLoginRequest } from '../../actions/user';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: false
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { username, password, remember } = this.state;
        var webLogin = { username, password, remember };

        this.props.onLogin(webLogin);
    }

    render() {
        var { username, password, remember } = this.state;
        return (
            <div className="content-login">
                <div className="background-login"></div>
                <div className="login-box login-page">
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group has-feedback">
                                <input
                                    className="form-control"
                                    id="username"
                                    placeholder="User Name"
                                    name="username"
                                    type="text"
                                    autoFocus={true}
                                    value={username}
                                    onChange={this.onChange}
                                    required
                                />
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    autoComplete="true"
                                    onChange={this.onChange}
                                    required
                                />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-8">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"
                                                name="remember"
                                                value="Remember Me"
                                                onChange={this.onChange}
                                                checked={remember}
                                            /> Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>
                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="/" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using Facebook</a>
                            <a href="/" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using Google+</a>
                        </div>
                        <a href="/">I forgot my password</a><br />
                        <a href="/" className="text-center">Register a new membership</a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (webLogin) => {
            dispatch(actWebLoginRequest(webLogin));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
