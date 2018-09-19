import type from '../actions/types';

const initialState = {
	reservationDate: '',
	email: '',
	phone: '',
	isDoneReservation: ''
};

const reservation = (state = initialState, action) => {
	switch (action.type) {
		case type.CREATE_RESERVATION:
			const data = action.payload.data;
			return {
				...state,
				isDoneReservation: data.status
			};
		default:
			return state;
	}
};

export default reservation;
