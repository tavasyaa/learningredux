import counterReducer from './counter';
import loggedReducer from './isLogged.js';
import {combineReducers} from 'redux';

// we use this file to combine our reducers
const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer
})

export default allReducers;