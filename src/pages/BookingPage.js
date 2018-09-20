import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Booking from '../components/User/Booking';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';
import Loading from '../components/Common/Loading';

class BookingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getCurrentUser();
	}

	render() {
		const { isUserLoaded } = this.props;
		return !isUserLoaded ? (
			<Loading />
		) : (
			<React.Fragment>
				<Header />
				<Booking booking={this.props.user.reservations} />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user,
		isUserLoaded: state.user.isUserLoaded
	};
};

export default connect(mapStateToProps, { getCurrentUser })(BookingPage);
