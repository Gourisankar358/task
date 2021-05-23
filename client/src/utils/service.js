import React, { } from 'react';
import axios from 'axios';
import * as CONSTANT from './constant';

/**
 * 
 * @param {string} param 
 * @description Http get call using axios
 */
export const get = async (param) => {
    try {
        const res = await axios.get(CONSTANT.URL + param, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param {string} param 
 * @description Http get call using axios
 */
export const authget = async (param) => {
    try {
        const res = await axios.get(CONSTANT.URL + param, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('uToken')

            }

        })
        return res;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param {string} param 
 * @description Http post call using axios
 */
export const post = async (param, data) => {
    try {
        const res = await axios.post(CONSTANT.URL + param, JSON.stringify(data), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

/**
 * 
 * @param {string} param 
 * @description Http post call using axios
 */
export const authpost = async (param, data) => {
    try {
        const res = await axios.post(CONSTANT.URL + param, JSON.stringify(data), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('uToken')
            }

        })
        return res;
    } catch (error) {
        return error;
    }
}

export const authformpost = async (param, data) => {
    try {
        const res = await axios.post(CONSTANT.URL + param, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + localStorage.getItem('uToken')
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}