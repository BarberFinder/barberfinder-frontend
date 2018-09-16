import React from 'react';
import defaultProfile from '../../assets/default-avatar.png';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProfileAvatar = () => {
	const trigger = (
		<span>
			<img src={defaultProfile} alt="" className="ui avatar image" />
		</span>
	);

	const options = [
		{
			key: 'account',
			text: (
				<span>
					<Link to="/account">Account</Link>
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
		}
	];
	return <Dropdown trigger={trigger} options={options} pointing="top right" icon={null} />;
};

export default ProfileAvatar;
