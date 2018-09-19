import type from '../actions/types';

const initialState = {
	user: ''
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case type.GET_USER:
			return {
				...state,
				user: action.payload.data
			};
		default:
			return state;
	}
};

export default user;
