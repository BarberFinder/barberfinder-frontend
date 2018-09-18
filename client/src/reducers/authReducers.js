import type from '../actions/types';

const initialState = {
	isAuthenticated: null,
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
	},
	user: ''
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case type.VERIFY_TOKEN:
			return {
				...state,
				isAuthenticated: action.payload.isAuthenticated,
				user: action.payload.user
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
			let payload = action.payload.data;
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
