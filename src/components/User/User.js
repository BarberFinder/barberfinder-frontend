import React, { Component } from 'react';
import Sidebar from './Sidebar';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<section className="blog_section padding">
				<div className="container">
					<Sidebar />
				</div>
			</section>
		);
	}
}

export default User;
