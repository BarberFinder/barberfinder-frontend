import type from '../actions/types';

const initialState = {
	isAuthenticated: false,
	token: '',
	first_name: '',
	last_name: '',
	username: '',
	email: '',
	password: '',
	phone: '',
	error_message: '',
	birthday: {
		date: '',
		month: '',
		year: ''
	}
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case type.VERIFY_TOKEN:
			return {
				...state,
				isAuthenticated: action.payload.isAuthenticated
			};
		case type.LOGOUT:
			return {
				...state,
				isAuthenticated: action.payload
			};
		case type.SIGNUP:
			return {
				...state,
				token: action.payload.token
			};
		case type.LOGIN:
			const payload = action.payload.data;
			return {
				...state,
				error_message: payload.message,
				token: payload.token
			};
		default:
			return state;
	}
};

export default auth;
