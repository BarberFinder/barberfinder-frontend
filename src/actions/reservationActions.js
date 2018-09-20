import type from './types';
import axios from 'axios';

export const createReservation = (postData) => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.post(
			`${process.env.REACT_APP_API_URL}/reservation/create`,
			{
				data: postData
			},
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		.then((res) => {
			dispatch({
				type: type.CREATE_RESERVATION,
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const getReservation = () => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.get(`${process.env.REACT_APP_API_URL}/reservation`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((res) => {
			dispatch({
				type: type.GET_RESERVATION,
				payload: res.data
			});
		})
		.catch((err) => {});
};
