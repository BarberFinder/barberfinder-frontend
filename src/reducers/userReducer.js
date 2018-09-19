import type from '../actions/types';

const initialState = {
	user: '',
	isLoading: true
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case type.GET_USER:
			return {
				...state,
				user: action.payload.data,
				isLoading: false
			};
		default:
			return state;
	}
};

export default user;
