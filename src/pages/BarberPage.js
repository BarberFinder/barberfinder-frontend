import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import BarberShopProfile from '../components/BarberShop/BarberShopProfile';
import BarberShop from '../components/BarberShop/BarberShop';
import BarberShopList from '../components/BarberShop/BarberShopList';

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
					<Route exact path="/barber" component={BarberShopProfile} />
					<Route path="/barber/list" component={BarberShopList} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default BarberPage;
