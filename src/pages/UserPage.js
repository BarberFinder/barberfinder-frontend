import React, { Component } from 'react';
import User from '../components/User/User';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class UserPage extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/user" component={User} />
				</Switch>
				{/* {!this.props.isAuthenticated && <Redirect to="/" />} */}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps)(UserPage);
