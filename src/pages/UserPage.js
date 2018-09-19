import React, { Component } from 'react';
import User from '../components/User/User';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/userActions';

class UserPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getCurrentUser();
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<User />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user,
		isLoading: state.user.isLoadings
	};
};

export default connect(mapStateToProps, { getCurrentUser })(UserPage);
