import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import ReservationModal from '../Reservation/ReservationModal';

class BarberShopProfileList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isAuthenticated: this.props.isAuthenticated,
			barbershopList: []
		};
	}

	openModal = (e) => {
		e.preventDefault();
		this.setState({
			isOpen: true
		});
	};

	closeModal = (e) => {
		e.preventDefault();
		this.setState({
			isOpen: false
		});
	};

	componentDidMount() {
		let token = '';
		if (localStorage.token) {
			token = localStorage.token;
		}
		axios
			.get(`${process.env.REACT_APP_API_URL}/barber/list`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((res) => {
				this.setState({
					barbershopList: res.data.data
				});
			})
			.catch((err) => {});
	}

	render() {
		const barbers = this.state.barbershopList.map((barber, index) => {
			return (
				<div key={index} className="col-xs-6">
					<div className="blog_post">
						<img
							className="img_profile_list"
							src={`${process.env.REACT_APP_API_URL}/${barber.image}`}
							alt={barber.name}
						/>
						<div className="blog_content">
							<h4>
								<Link to="/">{barber.name}</Link>
							</h4>
							<p>{barber.city}</p>
							<span className="post_meta">
								<button onClick={this.openModal} className="default_btn">
									Book Now
								</button>
							</span>
						</div>
					</div>
					<ReservationModal barber={barber} onCloseModal={this.closeModal} isOpen={this.state.isOpen} />
				</div>
			);
		});

		return <React.Fragment>{barbers}</React.Fragment>;
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps)(BarberShopProfileList);
