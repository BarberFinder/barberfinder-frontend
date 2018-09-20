import React, { Component } from 'react';
import BookingDetail from './BookingDetail';

class Booking extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const booking = this.props.booking;
		return (
			<React.Fragment>
				<section className="blog_section padding user_profile">
					<div className="container">
						<div className="user_booking">
							<table className="table table-striped">
								<thead>
									<tr>
										<th>Date</th>
										<th>Time</th>
										<th>BarberShop</th>
									</tr>
								</thead>
								<tbody>
									{booking.map((detail, index) => <BookingDetail key={index} detail={detail} />)}
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Booking;
