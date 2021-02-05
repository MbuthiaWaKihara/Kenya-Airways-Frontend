import {
    SEARCH_FLIGHT_FAILURE,
    SEARCH_FLIGHT_REQUEST,
    SEARCH_FLIGHT_SUCCESS,
} from './types';

const initialState = {
    loading: false,
    didFetch: false,
    flights: [],
    error: '',
}

const flightsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_FLIGHT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_FLIGHT_SUCCESS: 
            return {
                ...state,
                loading: false,
                didFetch: true,
                flights: action.payload,
            }
        case SEARCH_FLIGHT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default flightsReducer;