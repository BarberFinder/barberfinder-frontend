import React, { Component } from 'react';
import Signup from '../components/Signup/Signup';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class SignupPage extends Component {
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
				<Signup />
				<Footer />
			</React.Fragment>
		);
	}
}

export default SignupPage;
