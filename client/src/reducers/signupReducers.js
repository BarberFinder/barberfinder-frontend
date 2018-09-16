import type from '../actions/types';

const initialState = {
	token: {},
	first_name: '',
	last_name: '',
	username: '',
	email: '',
	password: '',
	phone: '',
	birthday: {
		date: '',
		month: '',
		year: ''
	}
};

const signup = (state = initialState, action) => {
	switch (action.type) {
		case type.SIGNUP:
			return {
				...state,
				token: action.payload.token
			};
		default:
			return state;
	}
};

export default signup;
