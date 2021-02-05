import { combineReducers } from 'redux';
import testReducer from './test/reducer';
import countriesReducer from './countries/reducer';
import userReducer from './user/reducer';
import flightsReducer from './flights/reducer';

const rootReducer = combineReducers({
    test: testReducer,
    countries: countriesReducer,
    user: userReducer,
    flights: flightsReducer,
});

export default rootReducer;