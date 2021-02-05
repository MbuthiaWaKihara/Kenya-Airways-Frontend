import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGOUT_USER,
} from './types';

const initialState = {
    isLoggedIn: false,
    loading: false,
    error: null,
    data: {
        name: '',
        id: '',
        email: '',
        password: '',
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER_REQUEST: 
        case SIGNUP_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null,
                isLoggedIn: true,
                data: action.payload,
            }
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    name: action.payload
                }
            }
        case LOGIN_USER_FAILURE:
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case LOGOUT_USER:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;