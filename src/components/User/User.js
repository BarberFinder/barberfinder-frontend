import React, { Component } from 'react';
import UserDetail from '../User/UserDetail';
import Barbershop from './BarberShop';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/userActions';
import { getBarber } from '../../actions/barberActions';
import Loading from '../Common/Loading';

class User extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getCurrentUser();
	}

	render() {
		const { isUserLoaded, isBarberLoaded } = this.props;
		return !isUserLoaded && !isBarberLoaded ? (
			<Loading />
		) : (
			<section className="blog_section padding user_profile">
				<div className="container">
					<UserDetail user={this.props.user} />
					<Barbershop barbershop={this.props.barbershop} />
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user,
		isUserLoaded: state.user.isUserLoaded,
		isBarberLoaded: state.barber.isBarberLoaded,
		barbershop: state.barber.barbershop
	};
};

export default connect(mapStateToProps, { getCurrentUser, getBarber })(User);
