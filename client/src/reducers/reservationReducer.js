import type from '../actions/types';

const initialState = {
	reservation: {
		reservationDate: '',
		email: '',
		phone: ''
	}
};

const reservation = (state = initialState, action) => {
	switch (action.type) {
		case type.CREATE_RESERVATION:
			return state;
		default:
			return state;
	}
};

export default reservation;
