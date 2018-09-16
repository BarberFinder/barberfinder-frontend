import React, { Component } from 'react';
import BarberShop from '../components/BarberShop/BarberShop';
import { Link, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import { withRouter } from 'react-router-dom';
import { getBarber } from '../actions/barberActions';
import { connect } from 'react-redux';

class BarberPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barbershop: this.props.barbershop
		};
	}

	componentDidMount() {
		this.props.getBarber();
		console.log(this.props);
	}

	render() {
		console.log(this.props);
		const { match } = this.props;
		return (
			<React.Fragment>
				<Header />
				<Route path={`${match.url}/:create`} component={BarberShop} />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		barbershop: state.barber.barbershop
	};
};

export default withRouter(connect(mapStateToProps, { getBarber })(BarberPage));
