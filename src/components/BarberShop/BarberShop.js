import React, { Component } from 'react';
import BarberShopForm from './BarberShopForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BarberShop extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="form-wrapper">
				<section className="book_section padding">
					<div className="container book_form">
						<div className="section_heading mb-20">{/* <h2></h2> */}</div>
						<BarberShopForm path={this.props.match.path} />
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		barbershop: state.barber.barbershop
	};
};

export default connect(mapStateToProps)(BarberShop);
