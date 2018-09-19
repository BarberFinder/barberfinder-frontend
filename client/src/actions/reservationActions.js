import type from './types';
import axios from 'axios';

export const createReservation = () => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.post(`${process.env.REACT_APP_API_URL}/reservation/create`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((res) => {
			dispatch({
				type: type.CREATE_RESERVATION,
				payload: res.data
			});
		})
		.catch((err) => {});
};
