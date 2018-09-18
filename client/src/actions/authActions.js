import type from './types';
import axios from 'axios';

export const verifyToken = (token) => async (dispatch) => {
	axios
		.post(`${process.env.REACT_APP_API_URL}/auth/verify-token`, { token: token })
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
		.post(`${process.env.REACT_APP_API_URL}/auth/login`, { user: user })
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
	axios
		.post(`${process.env.REACT_APP_API_URL}/auth/signup`, user)
		.then((res) => {
			localStorage.setItem('token', res.data.token);
			dispatch({
				type: type.SIGNUP,
				payload: res.data
			});
		})
		.catch((err) => {});
};
