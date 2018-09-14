import React from 'react';
import Input from '../Common/Input';

const LoginForm = () => {
	const email = {
		type: 'email',
		name: 'email',
		placeholder: 'Email',
		className: 'col-xs-12',
		required: true
	};

	const password = {
		type: 'password',
		name: 'password',
		placeholder: 'Password',
		className: 'col-xs-12',
		required: true
	};
	return (
		<form className="form-horizontal">
			<div className="form-group">
				<Input input={email} />
			</div>
			<div className="form-group">
				<Input input={password} />
			</div>
			<button id="login-button-form" className="default_btn col-xs-6" type="submit">
				Login
			</button>
		</form>
	);
};

export default LoginForm;
