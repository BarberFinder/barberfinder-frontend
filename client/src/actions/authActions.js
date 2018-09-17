import type from './types';
import axios from 'axios';
import auth from '../config/api/auth';

export const verifyToken = (token) => async (dispatch) => {
	axios
		.post(auth.verifyToken, { token: token })
		.then((res) => {
			dispatch({
				type: type.VERIFY_TOKEN,
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const login = (user) => (dispatch) => {
	axios
		.post(auth.login, { user: user })
		.then((res) => {
			dispatch({
				type: type.LOGIN,
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const logout = () => (dispatch) => {
	dispatch({
		type: type.LOGOUT,
		payload: false
	});
};

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
