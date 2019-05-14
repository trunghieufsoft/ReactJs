import axios from 'axios';
import * as Config from '../constants/config';
import * as base from './base.service'

const get = async (controller, event, id = '') => {
    try {
        return axios({
            method: 'GET',
            url: `${Config.API_URL}/${controller}${event ? '/' + event : ''}/${id}`,
            data: {},
            headers: base.getHeaders()
        });
    }
    catch (err) {
        console.log(err);
    }
};
    
const post = async (controller, event, data = {}, id = '') => {
    try {
        return axios({
            method: 'POST',
            url: `${Config.API_URL}/${controller}${event ? '/' + event : ''}/${id}`,
            data: data,
            headers: base.getHeaders()
        });
    }
    catch (err) {
        console.log(err);
    }
};

const put = async (controller, event, data = {}, id) => {
    try {
        return axios({
            method: 'PUT',
            url: `${Config.API_URL}/${controller}${event ? '/' + event : ''}/${id}`,
            data: data,
            headers: base.getHeaders()
        });
    }
    catch (err) {
        console.log(err);
    }
};

const deleted = async (controller, event, id) => {
    try {
        return axios({
            method: 'DELETE',
            url: `${Config.API_URL}/${controller}${event ? '/' + event : ''}/${id}`,
            data: {},
            headers: base.getHeaders()
        });
    }
    catch (err) {
        console.log(err);
    }
};

export const https = { get, post, put, delete: deleted };