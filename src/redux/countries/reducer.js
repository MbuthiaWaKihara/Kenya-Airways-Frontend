import {
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_FAILURE,
} from './types';

const initialState = {
    loading: false,
    error: null,
    all: [],
}

const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_REQUEST: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                all: action.payload,
            }
        case FETCH_COUNTRIES_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default: return state;
    }
}

export default countriesReducer;