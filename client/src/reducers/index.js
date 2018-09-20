import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducers';
import barberReducer from './barberReducers';
import reservationReducer from './reservationReducer';
import userReducer from './userReducer';

export default combineReducers({
	auth: authReducer,
	barber: barberReducer,
	user: userReducer,
	reservation: reservationReducer,
	routing: routerReducer
});
