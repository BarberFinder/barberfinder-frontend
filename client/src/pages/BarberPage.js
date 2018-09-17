import React, { Component } from 'react';
import BarberShop from '../components/BarberShop/BarberShop';
import { Link, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import BarberShopProfile from '../components/BarberShop/BarberShopProfile';
import Profile from '../components/BarberShop/Profile';

class BarberPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { match } = this.props;
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/barber/create" component={BarberShop} />
					<Route path="/barber" component={Profile} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default BarberPage;
