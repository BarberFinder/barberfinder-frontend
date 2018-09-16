import type from './types';
import axios from 'axios';
import auth from '../config/api/auth';

export const signup = (user) => (dispatch) => {
	axios
		.post(auth.signup, user)
		.then((res) => {
			localStorage.setItem('token', res.data.token);
			dispatch({
				type: type.SIGNUP,
				payload: res.data
			});
		})
		.catch((err) => {});
};
