import axios from 'axios';
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
} from './types';

export const loginUser = userCredentials => (async dispatch => {
    dispatch({
        type: LOGIN_USER_REQUEST,
    });

    try {
        const res = await axios.post('/auth/login', userCredentials);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data.data,
        });
    } catch(error) {
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: error.response.data.message,
        });
    }
});

export const signupUser = userCredentials => (async dispatch => {
    dispatch({
        type: SIGNUP_USER_REQUEST,
    });

    try {
        const res = await axios.post('/auth/register', userCredentials);
        dispatch({
            type: SIGNUP_USER_SUCCESS,
            payload: res.data.message,
        });
    } catch(error) {
        dispatch({
            type: SIGNUP_USER_FAILURE,
            payload: error.response.data.message,
        });
    }
})