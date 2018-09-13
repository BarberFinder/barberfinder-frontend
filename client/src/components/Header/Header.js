import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png';

const Header = () => {
	return (
		<Menu id="header" fixed="top" inverted className="header-navbar">
			<Menu.Menu position="left">
				<Menu.Item className="item-before">
					<Link to="/">
						<img src={logoImage} className="img-responsive" alt="BarberFinder" />
					</Link>
				</Menu.Item>
			</Menu.Menu>
			<Menu.Menu position="right">
				<Menu.Item className="item-before">
					<Link className="item-before btn-login" to="/login">
						<Button inverted>Login</Button>
					</Link>
					<Link className="item-before " to="/signup">
						<Button inverted>Sign Up</Button>
					</Link>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default Header;
