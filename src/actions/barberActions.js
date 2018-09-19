import type from './types';
import axios from 'axios';

export const getBarber = () => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.get(`${process.env.REACT_APP_API_URL}/barber`, {
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
	axios
		.post(`${process.env.REACT_APP_API_URL}/barber/create`, postData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data'
			}
		})
		.then((res) => {
			dispatch({
				type: type.CREATE_BARBER,
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const editBarber = (postData, barberId) => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.put(`${process.env.REACT_APP_API_URL}/barber/edit/${barberId}`, postData, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data'
			}
		})
		.then((res) => {
			dispatch({
				type: type.EDIT_BARBER,
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const getBarberList = () => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.get(`${process.env.REACT_APP_API_URL}/barber/list`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((res) => {
			dispatch({
				type: type.GET_BARBER_LIST,
				payload: res.data
			});
		})
		.catch((err) => {});
};

export const getBarberById = (id) => (dispatch) => {
	let token = '';
	if (localStorage.token) {
		token = localStorage.token;
	}
	axios
		.get(`${process.env.REACT_APP_API_URL}/barber/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then((res) => {
			dispatch({
				type: type.GET_BARBER_BY_ID,
				payload: res.data
			});
		})
		.catch((err) => {});
};
