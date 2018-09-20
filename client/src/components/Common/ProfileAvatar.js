import React from 'react';
import defaultProfile from '../../assets/man.svg';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProfileAvatar = (props) => {
	let first_name = '';
	let last_name;
	if (props.user) {
		first_name = props.user.first_name;
		last_name = props.user.last_name;
	}
	const trigger = (
		<span>
			<img src={defaultProfile} alt="" className="ui avatar image" />&nbsp; {first_name}&nbsp;{last_name}
		</span>
	);

	const options = [
		{
			key: 'user',
			text: (
				<span>
					<Link to="/user">Account</Link>
				</span>
			)
		},
		{
			key: 'barber',
			text: (
				<span>
					<Link to="/barber">Barbershop</Link>
				</span>
			)
		},
		{
			key: 'logout',
			text: <span onClick={props.onLogout}>Logout</span>
		}
	];
	return <Dropdown trigger={trigger} options={options} pointing="top right" icon={null} />;
};

export default ProfileAvatar;
