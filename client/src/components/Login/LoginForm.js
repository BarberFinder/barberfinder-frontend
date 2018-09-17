import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { login, verifyToken } from '../../actions/authActions';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: this.props.email,
			password: this.props.password,
			isAuthenticated: this.props.isAuthenticated
		};
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	login = (e) => {
		e.preventDefault();
		this.props.login(this.state);
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.token) {
			localStorage.token = nextProps.token;
			this.props.verifyToken(localStorage.token);
		}
	}

	renderRedirect = () => {
		if (this.props.isAuthenticated) {
			return <Redirect to="/" />;
		}
	};

	render() {
		return (
			<React.Fragment>
				{this.renderRedirect()}
				<form onSubmit={this.login} className="form-horizontal">
					<div className="form-group">
						<div className="col-xs-12">
							<input
								type="email"
								name="email"
								onChange={this.handleInput}
								className="form-control"
								placeholder="Email / Username"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-12">
							<input
								type="password"
								name="password"
								className="form-control"
								placeholder="Password"
								onChange={this.handleInput}
								required
							/>
						</div>
					</div>
					{this.props.error_message ? (
						<div className="form-group">
							<div className="error-message col-xs-12">{this.props.error_message}</div>
						</div>
					) : (
						''
					)}

					<button onClick={this.login} id="login-button-form" className="default_btn col-xs-6" type="submit">
						Login
					</button>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		email: state.auth.email,
		password: state.auth.password,
		error_message: state.auth.error_message,
		token: state.auth.token
	};
};

export default withRouter(connect(mapStateToProps, { login, verifyToken })(LoginForm));
