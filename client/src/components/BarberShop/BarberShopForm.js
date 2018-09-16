import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { TimeInput } from 'semantic-ui-calendar-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BarberService from './BarberService';

class BarberShopForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			services: this.props.services,
			name: this.props.name,
			tagline: this.props.tagline,
			phone: this.props.phone,
			address: this.props.address,
			operation_hours: this.props.operation_hours
		};
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleServicerNameChange = (index) => (e) => {
		const newServices = this.state.services.map((service, sindex) => {
			if (index !== sindex) return service;
			return { ...service, service_name: e.target.value };
		});

		this.setState({ services: newServices });
	};

	handleServicePriceChange = (index) => (e) => {
		const newServices = this.state.services.map((service, sindex) => {
			if (index !== sindex) return service;
			return { ...service, service_price: e.target.value };
		});

		this.setState({ services: newServices });
	};

	handleTimeInput = (e, { name, value }) => {
		let newOperationHours = [];
		const day = name.substring(0, 1);
		const time = name.substring(2);
		this.state.operation_hours.map((operation_hour) => {
			if (operation_hour['day'] === day) {
				operation_hour[time] = value;
			}
			return (newOperationHours = [ ...newOperationHours, operation_hour ]);
		});
		this.setState({
			operation_hours: newOperationHours
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	handleAddService = (e) => {
		e.preventDefault();
		this.setState({ services: this.state.services.concat([ { service_name: '', service_price: '' } ]) });
	};

	handleRemoveService = (idx) => () => {
		this.setState({ services: this.state.services.filter((s, sidx) => idx !== sidx) });
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="form-horizontal">
				<div className="col-sm-3" />

				<div className="col-sm-9">
					<h2>Profile</h2>
					<div className="form-group row">
						<div className="col-xs-12">
							<input
								onChange={this.handleInput}
								type="text"
								name="name"
								className="form-control"
								placeholder="Name"
								required
							/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-xs-12">
							<input
								onChange={this.handleInput}
								type="text"
								name="tagline"
								className="form-control"
								placeholder="Tagline"
								required
							/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-xs-12">
							<input
								onChange={this.handleInput}
								type="text"
								name="phone"
								className="form-control"
								placeholder="Phone"
								required
							/>
						</div>
					</div>
					<div className="form-group row">
						<div className="col-xs-12">
							<textarea
								onChange={this.handleInput}
								rows="3"
								name="address"
								className="form-control"
								placeholder="Address"
							/>
						</div>
					</div>
					<h2>Services</h2>
					{this.state.services.map((service, index) => (
						<BarberService
							onServicePriceChangeHandler={this.handleServicePriceChange}
							onServiceNameChangeHandler={this.handleServicerNameChange}
							onRemoveServiceHandler={this.handleRemoveService}
							index={index}
							service={service}
							key={index}
							{...this.props}
						/>
					))}
					<Button
						color="black"
						onClick={this.handleAddService}
						content="Add Service"
						icon="plus circle"
						labelPosition="left"
					/>
					<h2>Operation Hours</h2>
					{this.state.operation_hours.map((operation_hour, index) => (
						<div key={index} className="form-group">
							<div className="col-sm-2">
								<label>{operation_hour.name}</label>
							</div>
							<div className="col-sm-4">
								<TimeInput
									name={`${operation_hour.day}_open_time`}
									placeholder="Open"
									value={operation_hour.open_time}
									iconPosition="left"
									onChange={this.handleTimeInput}
								/>
							</div>
							<div className="col-sm-4">
								<TimeInput
									name={`${operation_hour.day}_close_time`}
									placeholder="Close"
									value={operation_hour.close_time}
									iconPosition="left"
									onChange={this.handleTimeInput}
								/>
							</div>
						</div>
					))}
					<button onClick={this.handleSubmit} className="default_btn col-xs-4">
						Create
					</button>
				</div>
			</form>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		services: state.barber.services,
		name: state.barber.name,
		tagline: state.barber.tagline,
		phone: state.barber.phone,
		address: state.barber.address,
		operation_hours: state.barber.operation_hours
	};
};

export default withRouter(connect(mapStateToProps)(BarberShopForm));
