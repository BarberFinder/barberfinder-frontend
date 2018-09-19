import React, { Component } from 'react';
import Login from '../components/Login/Login';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<React.Fragment>
				<Header center={true} />
				<Login />
				<Footer fixedBottom={true} />
			</React.Fragment>
		);
	}
}

export default LoginPage;
