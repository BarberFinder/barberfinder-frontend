import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReservationModal from '../Reservation/ReservationModal';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BarberShopProfileList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isAuthenticated: this.props.isAuthenticated
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

	renderRedirect = () => {
		if (!this.props.isAuthenticated) {
			return <Redirect to="/login" />;
		}
	};

	render() {
		const { image, name, city } = this.props.barber;
		return (
			<React.Fragment>
				{this.renderRedirect()}
				<div className="col-xs-6">
					<div className="blog_post">
						<img
							className="img_profile_list"
							src={`${process.env.REACT_APP_API_URL}/${image}`}
							alt={name}
						/>
						<div className="blog_content">
							<h4>
								<Link to="/">{name}</Link>
							</h4>
							<p>{city}</p>
							<span className="post_meta">
								<button onClick={this.openModal} className="default_btn">
									Book Now
								</button>
							</span>
						</div>
					</div>
					{/* <ReservationModal
						barber={this.props.barber}
						onCloseModal={this.closeModal}
						isOpen={this.state.isOpen}
					/> */}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps)(BarberShopProfileList);
