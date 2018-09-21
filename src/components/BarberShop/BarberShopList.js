import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBarberList } from '../../actions/barberActions';
import ReservationModal from '../Reservation/ReservationModal';
import BarberShopProfileList from './BarberShopProfileList';

class BarberShopList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getBarberList();
	}

	render() {
		return (
			<section className="blog_section padding barbershop_list">
				<div className="container">
					<div className="col-sm-8 xs-padding">
						<div className="blog_items">
							{this.props.barbershopList && this.props.barbershopList.map((barber, index) => (
								<BarberShopProfileList barber={barber} key={index} />
							))}
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

export default connect(mapStateToProps, { getBarberList })(BarberShopList);
