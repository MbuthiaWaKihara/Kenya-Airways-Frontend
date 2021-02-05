import {
    SEARCH_FLIGHT_FAILURE,
    SEARCH_FLIGHT_REQUEST,
    SEARCH_FLIGHT_SUCCESS,
} from './types'
import axios from 'axios';

export const searchFlights = searchParams => (async dispatch => {
    dispatch({
        type: SEARCH_FLIGHT_REQUEST,
    });

    try {
        const res = await axios.get(`/flight/search?from=${searchParams.from}&to=${searchParams.to}&planeClass=${searchParams.planeClass}`);
        dispatch({
            type: SEARCH_FLIGHT_SUCCESS,
            payload: res.data,
        });
    } catch(error) {
        dispatch({
            type: SEARCH_FLIGHT_FAILURE,
            payload: error.res.data,
        });
    }
});