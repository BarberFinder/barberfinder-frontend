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
	},
	user: '',
	isLoading: true,
	isSuccess: false
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
				isLoading: false,
				isSuccess: true
			};
		case type.LOGIN:
			let payload = action.payload.data;
			return {
				...state,
				error_message: payload.message,
				isAuthenticated: true,
				isLoading: false
			};
		default:
			return state;
	}
};

export default auth;
