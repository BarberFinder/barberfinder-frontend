import React from 'react';
import { Link } from 'react-router-dom';

const BarberShopNotFound = () => {
	return (
		<div className="barbershop_profile">
			<h2>BARBER NOT FOUND</h2>
			<p>
				Sorry brother, you didn't have a barbershop.<br />
				Broad your business right now
			</p>
			<Link to="/barber/create" className="default_btn">
				Create your barbershop
			</Link>
		</div>
	);
};

export default BarberShopNotFound;
