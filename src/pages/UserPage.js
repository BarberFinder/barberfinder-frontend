import React, { Component } from 'react';
import User from '../components/User/User';
import Header from '../components/Header/Header';

class UserPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<User />
			</React.Fragment>
		);
	}
}

export default UserPage;
