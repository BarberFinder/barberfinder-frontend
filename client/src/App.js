import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import Signup from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/login" render={(props) => <div>Login</div>} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</Router>
		);
	}
}

export default App;
