import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signupReducer from './signupReducers';
import authReducer from './authReducers';
import barberReducer from './barberReducers';

export default combineReducers({
	auth: authReducer,
	signup: signupReducer,
	barber: barberReducer,
	routing: routerReducer
});
