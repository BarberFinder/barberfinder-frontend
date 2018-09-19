import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBarberList } from '../../actions/barberActions';
import Loading from '../Common/Loading';
import BarberShopProfileList from './BarberShopProfileList';

class BarberShopList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getBarbershopList();
	}

	render() {
		if (this.props.barbershopList.length === 0) {
			return <Loading />;
		}
		return (
			<section className="blog_section padding barbershop_list">
				<div className="container">
					<div className="col-sm-8 xs-padding">
						<div className="blog_items">
							{this.props.barbershopList.map((barber, index) => (
								<BarberShopProfileList barber={barber} key={index} />
							))}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		barbershopList: state.barber.barbershopList
	};
};

const mapDispatchToProps = (dispatch) => ({
	getBarbershopList: () => dispatch(getBarberList())
});

export default connect(mapStateToProps, mapDispatchToProps)(BarberShopList);
