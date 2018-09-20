import React, { Component } from 'react';
import defaultBarbershopProfileImage from '../../assets/default-barbershop.jpg';
import { Header } from 'semantic-ui-react';
import BarberShopNotFound from './BarberShopNotFound';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBarber } from '../../actions/barberActions';

class Barbershop extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const barbershop = this.props.barbershop;
		if (barbershop === null || barbershop === '') {
			return <BarberShopNotFound />;
		}

		const { name, image, tagline } = barbershop;
		let barbershopImage =
			image !== null ? `${process.env.REACT_APP_API_URL}/${image}` : defaultBarbershopProfileImage;
		return (
			<div className="barbershop_profile">
				<h2 style={{ marginLeft: '15px' }}>Your Barbershop</h2>
				<div className="col-sm-3 xs-padding">
					<div className="sidebar_widget mb-30">
						<img className="img-responsive" src={barbershopImage} alt={name} />
					</div>
				</div>
				<div className="col-sm-8 xs-padding">
					<div className="blog_items">
						<div className="col-sm-6">
							<div className="blog-post">
								<Link to="/barber">
									<Header as="h4" color="brown">
										{name}
									</Header>
								</Link>
								<p>{tagline}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		barbershop: state.barber.barbershop
	};
};

export default connect(mapStateToProps, { getBarber })(Barbershop);
