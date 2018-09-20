import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBarber } from '../../actions/barberActions';
import Loading from '../Common/Loading';
import days from '../../helper/days';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BarberNotFound from './BarberNotFound';
import barberHelper from '../../helper/barber';

class BarberShopProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barbershop: this.props.barbershop
		};
	}

	componentDidMount = async () => {
		await this.props.getBarber();
	};

	render() {
		if (this.props.barbershop) {
			const { name, phone, services, address, city, operation_hours } = this.props.barbershop;
			let newOperationHours = barberHelper.getOperationHours(operation_hours);
			return (
				<React.Fragment>
					{operation_hours && services ? (
						<div className="contact_section bd-bottom padding">
							<div className="container">
								<div className="wrapper">
									<div className="col-sm-6 ">
										<Link to="/barber/edit">
											<Button basic color="green" icon labelPosition="right">
												Edit
												<Icon name="edit outline" />
											</Button>
										</Link>
										<br />
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
									<div className="col-sm-6">
										<section className="pricing_section">
											<div className="price_wrap">
												<h3>Operation Hours</h3>
											</div>
											{newOperationHours.map((operation_hour, index) => (
												<div key={index} className="operation-hours">
													<div>
														<h4>{operation_hour.day.name}</h4>
														<span>{operation_hour.hour.open_hour}</span>
														&nbsp;-&nbsp;
														<span>{operation_hour.hour.close_hour}</span>
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
								</div>
							</div>
						</div>
					) : (
						<Loading />
					)}
				</React.Fragment>
			);
		} else {
			return <BarberNotFound />;
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
