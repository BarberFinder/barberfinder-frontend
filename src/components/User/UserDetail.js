import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import moment from 'moment';
import defaultAvatar from '../../assets/man.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../actions/userActions';
import Loading from '../Common/Loading';

class UserDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user
		};
	}

	componentDidMount() {
		this.props.getUser();
	}

	render() {
		if (this.props.user === '') {
			return <Loading />;
		}

		const { first_name, last_name, birthday, image, email, phone, username } = this.props.user;
		let userBirthday = '';
		if (birthday) {
			userBirthday = moment(birthday, 'YYYY-MM-DD').format('DD-MM-YYYY');
		}
		let profileImage = image !== null ? `${process.env.REACT_APP_API_URL}/${image}` : defaultAvatar;
		return (
			<div className="user_detail">
				<div className="col-sm-3 xs-padding">
					<div className="sidebar_box">
						<div className="sidebar_widget mb-30">
							<img className="img-responsive" src={profileImage} />
						</div>
					</div>
				</div>
				<div className="col-sm-8 xs-padding">
					<div className="blog_items">
						<div className="col-sm-6">
							<div className="blog-post">
								<h2>
									{first_name} {last_name}
								</h2>
								<p>
									<Icon className="user" />
									<span>{username}</span>
								</p>
								<p>
									<Icon className="mail" />
									<span>{email}</span>
								</p>
								<p>
									<Icon className="phone" />
									<span>{phone}</span>
								</p>
								{userBirthday ? (
									<p>
										<Icon className="calendar alternate outline" />
										<span>{userBirthday}</span>
									</p>
								) : (
									''
								)}
								<p>
									<Link to="/user/booking">
										<Icon className="book">
											<span style={{ marginLeft: '5px' }}>See your booking list</span>
										</Icon>
									</Link>
								</p>
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
		user: state.user.user
	};
};

const mapDispatchToProps = (dispatch) => ({
	getUser: () => {
		dispatch(getCurrentUser());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
