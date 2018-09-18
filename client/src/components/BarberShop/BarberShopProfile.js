import React, { Component } from 'react';
import BarberShopProfileDetail from './BarberShopProfileDetail';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="form-wrapper">
					<section className="book_section padding">
						<div className="container book_form">
							<BarberShopProfileDetail />
						</div>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default Profile;
