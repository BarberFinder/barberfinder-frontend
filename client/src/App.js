import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;
