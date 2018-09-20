import React, { Component } from 'react';
import BirthdaySelect from '../Common/BirthdaySelect';
import { signup } from '../../actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loading from '../Common/Loading';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: this.props.first_name,
			last_name: this.props.last_name,
			username: this.props.username,
			email: this.props.email,
			password: this.props.password,
			phone: this.props.phone,
			isAuthenticated: this.props.isAuthenticated,
			birthday: {
				date: this.props.birthday.date,
				month: this.props.birthday.month,
				year: this.props.birthday.year
			},
			isLoading: this.props.isLoading,
			isSuccess: this.props.isSuccess
		};
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		});
	}

	submitForm = (e) => {
		e.preventDefault();

		let userBirthday = null;
		const { year, month, date } = this.state.birthday;

		if (parseInt(year, 10) > 0 && parseInt(month, 10) > 0 && parseInt(date, 10) > 0) {
			userBirthday = new Date(`${year}-${month}-${date}`);
		}
		const user = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			birthday: userBirthday,
			phone: this.state.phone
		};
		this.props.signup(user);
		this.setState({
			isLoading: true
		});
	};

	renderLoading = () => {
		if (!this.props.isSuccess) {
			return <Loading />;
		} else {
			return <Redirect to="/login" />;
		}
	};

	handleBirthday = (e) => {
		const birthdayClone = { ...this.state.birthday };
		birthdayClone[e.target.name] = e.target.value;
		this.setState({
			birthday: birthdayClone
		});
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return this.state.isLoading ? (
			<React.Fragment>{this.renderLoading()}</React.Fragment>
		) : (
			<React.Fragment>
				<form onSubmit={this.submitForm} className="form-horizontal">
					<div className="form-group">
						<div className="col-xs-6">
							<input
								type="text"
								onChange={this.handleInput}
								name="first_name"
								className="form-control"
								placeholder="First name"
								required
							/>
						</div>
						<div className="col-xs-6">
							<input
								type="text"
								onChange={this.handleInput}
								name="last_name"
								className="form-control"
								placeholder="Last name"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-12">
							<input
								type="text"
								onChange={this.handleInput}
								name="username"
								className="form-control"
								placeholder="Username"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-12">
							<input
								type="email"
								onChange={this.handleInput}
								name="email"
								className="form-control"
								placeholder="Email"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-12">
							<input
								type="password"
								onChange={this.handleInput}
								name="password"
								className="form-control"
								placeholder="Password"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-12">
							<input
								type="text"
								onChange={this.handleInput}
								name="phone"
								className="form-control"
								placeholder="Phone"
							/>
						</div>
					</div>
					<BirthdaySelect onHandleBirthday={(e) => this.handleBirthday(e)} />
					<button
						onClick={this.submitForm}
						id="signup-button-form"
						className="default_btn col-xs-6"
						type="submit"
					>
						Sign up
					</button>
					<div id="msg-status" className="alert" role="alert" />
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		first_name: state.auth.first_name,
		last_name: state.auth.last_name,
		username: state.auth.username,
		email: state.auth.email,
		password: state.auth.password,
		phone: state.auth.phone,
		birthday: state.auth.birthday,
		isSuccess: state.auth.isSuccess,
		isLoading: state.auth.isLoading
	};
};

const mapDispatchToProps = (dispatch) => ({
	signup: (data) => {
		dispatch(signup(data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
