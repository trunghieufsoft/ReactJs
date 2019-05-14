import * as Action from './../constants/action-types';
import * as Event from './../constants/event-types';
import { https } from './../utils/api.service';

export const actFetchAccountListRequest = () => {
    return dispatch => {
        return https.get('user', Event.GET_ALL).then(res => {
            dispatch(actFetchAccountList(res.data));
        });
    };
}

export const actFetchAccountList = (data) => {
    return {
        type : Action.FETCH_ACCOUNT_LIST,
        response : data
    }
}

export const actFetchAccountInformationRequest = (userId) => {
    return dispatch => {
        return https.get('user', Event.VIEW, userId).then(res => {
            dispatch(actFetchAccountInformation(res.data));
        });
    };
}

export const actFetchAccountInformation = (data) => {
    return {
        type : Action.FETCH_ACCOUNT_INFORMATION,
        response : data
    }
}

export const actWebLoginRequest = (webLogin) => {
    return dispatch => {
        var { username, password } = webLogin;
        return https.post('user', Event.WEB_LOGIN, { username, password }).then(res => {
            dispatch(actWebLogin(res.data, webLogin));
        });
    };
}

export const actWebLogin = (data, webLogin) => {
    return {
        type : Action.LOGIN,
        response : { data, webLogin }
    }
}

export const actWebLogoutRequest = (authenByCookie) => {
    return authenByCookie
    ? actWebLogout({data: true, success: true})
    : dispatch => {
        return https.get('user', Event.LOGOUT).then(res => {
            dispatch(actWebLogout(res.data));
        });
    };
}

export const actWebLogout = (data) => {
    return {
        type : Action.LOGOUT,
        response : data
    }
}

export const actCheckAuthentication = () => {
    return {
        type : Action.AUTHENTICATION,
        response : null
    }
}

export const actGetProfileRequest = () => {
    return dispatch => {
        return https.get('user', Event.GET_PROFILE).then(res => {
            dispatch(actGetProfile(res.data));
        });
    };
}

export const actGetProfile = (data) => {
    return {
        type : Action.FETCH_PROFILE,
        response : data
    }
}