import React, { Component } from 'react';
import BarberShop from '../components/BarberShop/BarberShop';
import { Link, Route } from 'react-router-dom';
import Header from '../components/Header/Header';

class BarberPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { match } = this.props;
		return (
			<React.Fragment>
				<Header />
				<div>
					<Link to={`${match.url}/create`}>Create Barber</Link>|
				</div>
				<hr />
				<Route path={`${match.url}/create`} component={BarberShop} />
			</React.Fragment>
		);
	}
}

export default BarberPage;
