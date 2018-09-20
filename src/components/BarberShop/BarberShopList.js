import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBarberList } from '../../actions/barberActions';
import ReservationModal from '../Reservation/ReservationModal';
import BarberShopProfileList from './BarberShopProfileList';
import { Redirect } from 'react-router-dom';
import Loading from '../Common/Loading';
import axios from 'axios';

class BarberShopList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barbershopList: ''
		};
	}

	componentDidMount() {}

	handleRedirect() {
		if (!this.props.isAuthenticated) {
			return <Redirect to="/login" />;
		}
	}

	render() {
		return !this.props.isAuthenticated ? (
			<Redirect to="/login" />
		) : (
			<section className="blog_section padding barbershop_list">
				<div className="container">
					<div className="col-sm-8 xs-padding">
						<div className="blog_items">
							<BarberShopProfileList />
						</div>
					</div>
				</div>
				{/* <ReservationModal
					barber={this.props.barber}
					onCloseModal={this.closeModal}
					isOpen={this.state.isOpen}
				/> */}
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		barbershopList: state.barber.barbershopList,
		isAuthenticated: state.auth.isAuthenticated
	};
};

const mapDispatchToProps = (dispatch) => ({
	getBarberList: (data) => {
		dispatch(getBarberList(data));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(BarberShopList);
