import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, verifyToken } from '../../actions/authActions';
import Loading from '../Common/Loading';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: this.props.email,
			password: this.props.password,
			isAuthenticated: this.props.isAuthenticated,
			isLoading: this.props.isLoading
		};
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		});
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	login = (e) => {
		e.preventDefault();
		this.props.login(this.state);
		this.setState({
			isLoading: true
		});
	};

	renderLoading = () => {
		if (!this.props.isAuthenticated) {
			return <Loading />;
		} else {
			return <Redirect to="/" />;
		}
	};

	render() {
		return this.state.isLoading ? (
			<React.Fragment>{this.renderLoading()}</React.Fragment>
		) : (
			<React.Fragment>
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
		token: state.auth.token,
		isLoading: state.auth.isLoading
	};
};

export default connect(mapStateToProps, { login, verifyToken })(LoginForm);
