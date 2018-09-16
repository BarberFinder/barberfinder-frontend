import React, { Component } from 'react';
import BarberShopForm from './BarberShopForm';

class BarberShop extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="form-wrapper">
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

export default BarberShop;
