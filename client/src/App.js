import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BarberPage from './pages/BarberPage';
import { verifyToken } from './actions/authActions';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: this.props.isAuthenticated
		};
	}

	componentDidMount = async () => {
		if (localStorage.token) {
			await this.props.verifyToken(localStorage.token).then((response) => {
				this.setState({
					isAuthenticated: response.isAuthenticated
				});
			});
		}
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
					<Route path="/barber" component={BarberPage} />
				</Switch>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps, { verifyToken })(App);
