import { combineReducers } from 'redux';
import users from './users';
import authorization from './authentication';

const appReducers = combineReducers({
    authorization,
    users
});

export default appReducers;