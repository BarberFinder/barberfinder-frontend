const api = {
	signup: `${process.env.REACT_APP_API_URL}/auth/signup`,
	verifyToken: `${process.env.REACT_APP_API_URL}/auth/verify-token`,
	login: `${process.env.REACT_APP_API_URL}/auth/login`
};

export default api;
