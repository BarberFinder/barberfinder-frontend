import React, { Component } from 'react';
import { Image, Modal, Transition } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import moment from 'moment';
import barberHelper from '../../helper/barber';
import { createReservation } from '../../actions/reservationActions';
import { connect } from 'react-redux';
import Loading from '../Common/Loading';
import { Redirect } from 'react-router-dom';

class ReservationModalForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reservationDate: this.props.reservationDate,
			email: this.props.email,
			phone: this.props.phone,
			barbershopId: '',
			isDoneReservation: this.props.isDoneReservation
		};
	}

	handleReservationDate = (event, { name, value }) => {
		if (this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	componentDidMount() {
		this.setState({
			barbershopId: this.props.barber.id
		});
	}

	createReservation = (e) => {
		e.preventDefault();
		this.props.createReservation(this.state);
	};

	render() {
		const barber = this.props.barber;
		// let operation_hours = barberHelper.getOperationHours(barber.operation_hours);
		return (
			<Transition duration="500" visible={this.props.isOpen} animation="scale" duration={500}>
				<Modal centered={false} className="modal_appointment" dimmer={true} open={this.props.isOpen}>
					<div className="wrapper">
						<div className="col-sm-6 col-xs-12">
							<div className="blog_post">
								{/* <Image wrapped size="medium" src={`${process.env.REACT_APP_API_URL}/${barber.image}`} /> */}
								<div className="blog_content borderless pl-0">
									{/* <h4>{barber.name}</h4> */}
									<br />
									{/* <p>{barber.phone}</p> */}
									{/* <p>{barber.address}</p> */}
								</div>
								<div className="modal_appointment_operation_hours">
									<h3>Operation Hours</h3>
									{/* {operation_hours.map((hour, index) => (
										<div key={index}>
											<div
												style={{ float: 'left', minWidth: '100px' }}
												className="day_operation_hour"
											>
												<p>{hour.day.name}</p>
											</div>
											<div className="time_operation_hour">
												<p>
													{hour.hour.open_hour}
													{' - '}
													{hour.hour.close_hour}{' '}
												</p>
											</div>
										</div>
									))} */}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-xs-12">
							<div className="section_heading mb-40">
								<h2>Appointment Now</h2>
								<p>
									Get your great Hairstyle.
								</p>
							</div>
							<form className="form-horizontal">
								<div className="form-group">
									<div className="col-xs-12 col-sm-8">
										<DateTimeInput
											name="reservationDate"
											placeholder="Date Time"
											minDate={moment()}
											value={this.state.reservationDate}
											iconPosition="left"
											onChange={this.handleReservationDate}
											className="full_width"
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-12 col-sm-8">
										<input
											type="email"
											name="email"
											value={this.state.email}
											className="form-control"
											onChange={this.handleInput}
											placeholder="Your Email"
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-8">
										<label>Optional</label>
										<input
											type="text"
											name="phone"
											className="form-control"
											onChange={this.handleInput}
											value={this.state.phone}
											placeholder="Your phone"
										/>
									</div>
								</div>
								<div className="button-wrapper col-xs-12 col-sm-12 pull-left">
									<button
										onClick={(e) => this.createReservation(e)}
										className="default_btn mr-10"
										type="submit"
									>
										Book Now
									</button>
									<button className="close_btn" onClick={(e) => this.props.onCloseModal(e)}>
										Close
									</button>
								</div>
								<div id="msg-status" className="alert" role="alert" />
							</form>
						</div>
					</div>
				</Modal>
				{!this.state.isDoneReservation || !this.props.isDoneReservation ? <Loading /> : ''}
			</Transition>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		reservationDate: state.reservation.reservationDate,
		email: state.reservation.email,
		phone: state.reservation.phone,
		isDoneReservation: state.reservation.isDoneReservation
	};
};

export default connect(mapStateToProps, { createReservation })(ReservationModalForm);
