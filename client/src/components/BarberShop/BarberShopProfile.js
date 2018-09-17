import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBarber } from '../../actions/barberActions';
import Loading from '../Common/Loading';
import days from '../../helper/days';
import { Redirect } from 'react-router-dom';

class BarberShopProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barbershop: this.props.barbershop
		};
	}

	componentDidMount = async () => {
		await this.props.getBarber();
		console.log(this.props.isAuthenticated);
	};

	render() {
		if (!this.props.isAuthenticated) {
			return <Redirect to="/login" />;
		} else {
			if (this.props.barbershop) {
				const { name, phone, services, address, city, operation_hours } = this.props.barbershop;
				return (
					<React.Fragment>
						{operation_hours && services ? (
							<div className="contact_section bd-bottom padding">
								<div className="container">
									<div className="wrapper">
										<div className="col-sm-6">
											<section className="pricing_section">
												<div className="price_wrap">
													<h3>Operation Hours</h3>
												</div>
												{operation_hours.map((operation_hour, index) => (
													<div key={index} className="operation-hours">
														<div>
															<h4>
																{
																	days.find((day) => day.number == operation_hour.day)
																		.name
																}
															</h4>
															<span>{operation_hour.open_hour.toString()}</span>
															&nbsp;-&nbsp;
															<span>{operation_hour.close_hour.toString()}</span>
															<br />
														</div>
														<br />
													</div>
												))}
											</section>
											<section className="pricing_section">
												<div className="price_wrap">
													<h3>Services</h3>
													<ul className="price_list">
														{services.map((service, index) => (
															<li key={index}>
																<h4>{service.service_name}</h4>
																<span className="price">Rp. {service.price}</span>
															</li>
														))}
													</ul>
												</div>
											</section>
										</div>
										<div className="col-sm-6 ">
											<div className="contact_info barbershop-profile">
												<h2>{name}</h2>
												<p>
													<span>Phone: </span>
													{phone}
													<br /> <span>Address: </span>
													{address}
													<br />
													<span>City: </span>
													{city}
													<br />
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							<Loading />
						)}
					</React.Fragment>
				);
			} else {
				return <div>Make your barbershop right now</div>;
			}
		}
	}
}

const mapStateToProps = (state) => {
	return {
		barbershop: state.barber.barbershop,
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps, { getBarber })(BarberShopProfile);
