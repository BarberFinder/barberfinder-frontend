import type from './types';
import axios from 'axios';
import auth from '../config/api/auth';

export const verifyToken = (token) => (dispatch) => {
	return new Promise((resolve, reject) => {
		axios
			.post(auth.verifyToken, { token: token })
			.then((res) => {
				dispatch({
					type: type.VERIFY_TOKEN,
					payload: res.data
				});
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
