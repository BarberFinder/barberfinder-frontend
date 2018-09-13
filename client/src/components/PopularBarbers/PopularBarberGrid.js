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
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />It has survived
						not only five centuries.
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
