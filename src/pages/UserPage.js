import React, { Component } from 'react';
import User from '../components/User/User';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';
import { getBarber } from '../actions/barberActions';
import Loading from '../components/Common/Loading';

class UserPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getCurrentUser();
		this.props.getBarber();
	}
	render() {
		const { isUserLoaded, isBarberLoaded } = this.props;
		return !isUserLoaded && !isBarberLoaded ? (
			<Loading />
		) : (
			<React.Fragment>
				<Header />
				<User user={this.props.user} barbershop={this.props.barbershop} />
			</React.Fragment>
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

const mapDispatchToProps = (dispatch) => ({
	getCurrentUser: () => dispatch(getCurrentUser()),
	getBarber: () => dispatch(getBarber())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
