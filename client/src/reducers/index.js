import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducers';
import barberReducer from './barberReducers';
import reservationReducer from './reservationReducer';

export default combineReducers({
	auth: authReducer,
	barber: barberReducer,
	reservation: reservationReducer,
	routing: routerReducer
});
