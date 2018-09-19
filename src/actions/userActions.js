import type from './types';
import axios from 'axios';

export const getCurrentUser = () => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.get(`${process.env.REACT_APP_API_URL}/user`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((res) => {
			dispatch({
				type: type.GET_USER,
				payload: res.data
			});
		})
		.catch((err) => {});
};
