import * as Types from './../constants/action-types';
var initialState = [];

const users = (state = initialState, action) => {
    var { response } = action;
    switch (action.type) {
        case Types.FETCH_ACCOUNT_LIST:
            state = response;
            return [...state];
        default: return [...state];
    }
};

export default users;