import React, { Component } from 'react';
import UserDetail from '../User/UserDetail';
import Barbershop from './BarberShop';

class User extends Component {
	render() {
		return (
			<section className="blog_section padding user_profile">
				<div className="container">
					<UserDetail user={this.props.user} />
					<Barbershop barbershop={this.props.barbershop} />
				</div>
			</section>
		);
	}
}

export default User;
