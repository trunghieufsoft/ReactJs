import * as Types from '../constants/action-types';
import { CookieStorage } from 'cookie-storage';
import _ from 'lodash';
import * as Key from '../constants/key';

var initialState = [];
var clock = new Date();
var expires = new Date(clock.setMinutes(clock.getMinutes() + 30));
const cookieStorage = new CookieStorage({
    expires: expires,
    path: '/'
});

const authorization = (state = initialState, action) => {
    var { response, type } = action;
    var index = -1;
    switch (type) {
        case Types.LOGIN:
            if (response.data.success) {
                if (typeof (Storage) !== 'undefined') {
                    localStorage.clear();
                    cookieStorage.clear();
                    if (response.webLogin.remember) {
                        localStorage.setItem(Key.TOKEN, response.data.data);
                    } else {
                        cookieStorage.setItem(Key.TOKEN, response.data.data);
                    }
                    state = [{ authentication: true }];
                } else {
                    alert('Trình duyệt của bạn không hỗ trợ!');
                }
            }
            else {
                index = _.findIndex(Key.ERROR, item => { return item.errorCode === response.data.error.errorCode; });
                alert(Key.ERROR[index].message);
            }
            return [...state];
        case Types.LOGOUT:
            if (response.success) {
                if (typeof (Storage) !== 'undefined') {
                    localStorage.clear();
                    cookieStorage.clear();
                } else {
                    alert('Trình duyệt của bạn không hỗ trợ!');
                }
                state = [{ authentication: false }];
            }
            else {
                index = _.findIndex(Key.ERROR, item => { return item.errorCode === response.data.error.errorCode; });
                alert(Key.ERROR[index].message);
            }
            return [...state];
        case Types.AUTHENTICATION:
            if (typeof (Storage) !== 'undefined') {
                var tokenLocal = localStorage.getItem(Key.TOKEN);
                var tokenCookie = cookieStorage.getItem(Key.TOKEN);
                state = [{ authentication: (tokenLocal !== null || tokenCookie !== null) }];
            } else {
                alert('Trình duyệt của bạn không hỗ trợ!');
            }
            return [...state];
        default: return [...state];
    }
};

export default authorization;