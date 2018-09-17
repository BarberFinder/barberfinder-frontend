import BarberShopProfile from './BarberShopProfile';
import React, { Component } from 'react';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="form-wrapper">
				<section className="book_section padding">
					<div className="container book_form">
						<BarberShopProfile />
					</div>
				</section>
			</div>
		);
	}
}

export default Profile;
