
import * as Key from '../constants/key';

export const getHeaders = () => {
    var token = localStorage.getItem(Key.TOKEN);
    var hasToken = token !== null;
    return hasToken ? {
        'Authorization': 'Bearer ' + token
    } : null;
}