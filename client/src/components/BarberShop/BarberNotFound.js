import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/not-found.jpg';

const BarberNotFound = () => {
	return (
		<section>
			<div className="container">
				<div className="404_content align-center">
					<img className="mb-20" src={notFoundImage} alt="404" />
					<h2>BARBER NOT FOUND</h2>
					<p>
						Sorry brother, you don't have a barbershop.<br />
						Start your business right now
					</p>
					<Link to="/barber/create" className="default_btn">
						Create your barbershop
					</Link>
				</div>
			</div>
		</section>
	);
};

export default BarberNotFound;
