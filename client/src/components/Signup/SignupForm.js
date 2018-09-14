import React, { Component } from 'react';
import Input from '../Common/Input';
import BirthdaySelect from '../Common/BirthdaySelect';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const last_name = {
			type: 'text',
			name: 'last_name',
			placeholder: 'Last name',
			className: 'col-xs-6',
			required: true
		};

		const first_name = {
			type: 'text',
			name: 'first_name',
			placeholder: 'First name',
			className: 'col-xs-6',
			required: true
		};

		const username = {
			type: 'text',
			name: 'username',
			placeholder: 'Username',
			className: 'col-xs-12',
			required: true
		};

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
					<Input input={first_name} />
					<Input input={last_name} />
				</div>
				<div className="form-group">
					<Input input={username} />
				</div>
				<div className="form-group">
					<Input input={email} />
				</div>
				<div className="form-group">
					<Input input={password} />
				</div>
				<BirthdaySelect />
				<button id="signup-button-form" className="default_btn col-xs-6" type="submit">
					Sign up
				</button>
				<div id="msg-status" className="alert" role="alert" />
			</form>
		);
	}
}

export default SignupForm;
