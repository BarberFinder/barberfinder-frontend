import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
import PopularBarberGrid from '../components/PopularBarbers/PopularBarberGrid';
import Footer from '../components/Footer/Footer';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Fragment>
				<Header />
				<Carousel />
				<Services />
				<WhyUs />
				<PopularBarberGrid />
				<Footer />
			</Fragment>
		);
	}
}

export default Homepage;
