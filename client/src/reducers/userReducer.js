import type from '../actions/types';

const initialState = {
	user: '',
	isUserLoaded: false
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case type.GET_USER:
			return {
				...state,
				user: action.payload.data,
				isUserLoaded: true
			};
		default:
			return state;
	}
};

export default user;
