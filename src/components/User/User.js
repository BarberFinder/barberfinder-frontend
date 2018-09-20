import React, { Component } from 'react';
import UserDetail from '../User/UserDetail';
import Barbershop from './BarberShop';

class User extends Component {
	render() {
		return (
			<section className="blog_section padding user_profile">
				<div className="container">
					<UserDetail />
					<Barbershop />
				</div>
			</section>
		);
	}
}

export default User;
