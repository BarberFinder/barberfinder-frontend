import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducers';
import barberReducer from './barberReducers';

export default combineReducers({
	auth: authReducer,
	barber: barberReducer,
	routing: routerReducer
});
