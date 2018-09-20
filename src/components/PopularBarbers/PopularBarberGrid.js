import React from 'react';
import PopularBarberConfig from '../../config/PopularBarber';
import PopularBarber from './PopularBarber';

const PopularBarberGrid = () => {
	return (
		<section className="service_section bg-grey bd-bottom padding">
			<div className="container">
				<div className="section_heading align-center mb-40">
					<h2>Our Popular Barber</h2>
					<p>
					Experienced barber and has good skills in this regard.
					</p>
				</div>
				{PopularBarberConfig.popularBarbers.map((barber, index) => (
					<PopularBarber barber={barber} key={index} />
				))}
			</div>
		</section>
	);
};

export default PopularBarberGrid;
