import React from 'react';

const LoginForm = () => {
	return (
		<form className="form-horizontal">
			<div className="form-group">
				<div className="col-xs-12">
					<input type="email" name="email" className="form-control" placeholder="Email" required />
				</div>
			</div>
			<div className="form-group">
				<div className="col-xs-12">
					<input type="password" name="password" className="form-control" placeholder="Password" required />
				</div>
			</div>
			<button id="login-button-form" className="default_btn col-xs-6" type="submit">
				Login
			</button>
		</form>
	);
};

export default LoginForm;
