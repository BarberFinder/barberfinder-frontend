import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BarberPage from './pages/BarberPage';

class App extends Component {
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

export default App;
