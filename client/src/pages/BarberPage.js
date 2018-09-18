import React, { Component } from 'react';
import BarberShop from '../components/BarberShop/BarberShop';
import { Link, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import BarberShopProfile from '../components/BarberShop/BarberShopProfile';

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
					<Route path="/barber/edit" render={(props) => <BarberShop {...props} />} />
					<Route path="/barber" component={BarberShopProfile} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default BarberPage;
