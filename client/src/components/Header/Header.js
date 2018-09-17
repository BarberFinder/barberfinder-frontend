import React, { Component } from 'react';
import { Menu, Button, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import ProfileAvatar from '../Common/ProfileAvatar';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

class HeaderPage extends Component {
	logout = () => {
		localStorage.removeItem('token');
		this.props.logout();
	};

	render() {
		return (
			<Menu id="header" fixed="top" inverted className="header-navbar">
				<Container>
					<Menu.Menu className={!this.props.center ? '' : 'hide'} position="left">
						<Menu.Item className="item-before">
							<Link to="/">
								<img src={logoImage} className="img-responsive" alt="BarberFinder" />
							</Link>
						</Menu.Item>
					</Menu.Menu>
					<Menu.Menu className={!this.props.center ? '' : 'hide'} position="right">
						<Menu.Item className="item-before">
							{!this.props.isAuthenticated ? (
								<React.Fragment>
									<Link className="item-before btn-login" to="/login">
										<Button inverted>Login</Button>
									</Link>
									<Link className="item-before " to="/signup">
										<Button inverted>Sign Up</Button>
									</Link>
								</React.Fragment>
							) : (
								<ProfileAvatar onLogout={this.logout} />
							)}
						</Menu.Item>
					</Menu.Menu>
					<Header className={!this.props.center ? 'hide' : 'header-login-signup'} textAlign="center">
						<Link to="/">
							<img src={logoImage} className="img-responsive" alt="BarberFinder" />
						</Link>
					</Header>
				</Container>
			</Menu>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps, { logout })(HeaderPage);
