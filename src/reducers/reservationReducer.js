import type from '../actions/types';

const initialState = {
	reservationDate: '',
	email: '',
	phone: '',
	isDoneReservation: false,
	booking: ''
};

const reservation = (state = initialState, action) => {
	switch (action.type) {
		case type.CREATE_RESERVATION:
			const data = action.payload.data;
			return {
				...state,
				isDoneReservation: data.isDone
			};
		case type.GET_RESERVATION:
			return {
				...state,
				boooking: action.payload.data
			};
		default:
			return state;
	}
};

export default reservation;
