import React, { Component } from 'react';
import BarberShopForm from './BarberShopForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BarberShop extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderRedirect = () => {
		if (!this.props.isAuthenticated) {
			return <Redirect to="/login" />;
		}
	};

	render() {
		return (
			<div className="form-wrapper">
				{this.renderRedirect()}
				<section className="book_section padding">
					<div className="container book_form">
						<div className="section_heading mb-20">{/* <h2></h2> */}</div>
						<BarberShopForm />
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps)(BarberShop);
