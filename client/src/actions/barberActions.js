import type from './types';
import axios from 'axios';
import barber from '../config/api/barber';

export const getBarber = () => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.get(barber.getBarber, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((res) => {
			dispatch({
				type: type.GET_BARBER,
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const createBarber = (postData) => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	return new Promise((resolve, reject) => {
		axios
			.post(
				barber.create,
				{ data: postData },
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
			.then((res) => {
				dispatch({
					type: type.CREATE_BARBER,
					payload: res.data
				});
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
