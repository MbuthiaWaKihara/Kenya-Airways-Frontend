import {
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_FAILURE,
} from './types';
import axios from 'axios';

export const fetchAllCountries = () => (async dispatch => {
    dispatch({
        type: FETCH_COUNTRIES_REQUEST,
    });

    try {
        const res = await axios.get('https://restcountries.eu/rest/v2/all');
        dispatch({
            type: FETCH_COUNTRIES_SUCCESS,
            payload: res.data,
        });
    } catch(error) {
        dispatch({
            FETCH_COUNTRIES_FAILURE,
            payload: error.message,
        });
    }
})