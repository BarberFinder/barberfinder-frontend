import type from '../actions/types';

const initialState = {
	isAuthenticated: false
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case type.VERIFY_TOKEN:
			return {
				...state,
				isAuthenticated: action.payload.isAuthenticated
			};
		default:
			return state;
	}
};

export default auth;
