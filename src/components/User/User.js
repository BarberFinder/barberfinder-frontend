import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-router-dom';

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

const mapStateToProps = (state) => {
	return {
		user: state.user.user
	};
};

export default connect(mapStateToProps, {})(User);
