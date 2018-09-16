import type from './types';
import axios from 'axios';
import auth from '../config/api/auth';

export const signup = (user) => (dispatch) => {
	return new Promise((resolve, reject) => {
		axios
			.post(auth.signup, user)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				dispatch({
					type: type.SIGNUP,
					payload: res.data
				});
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
