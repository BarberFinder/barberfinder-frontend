import React from 'react';
import Service from './Service';
import ServiceConfig from '../../config/Services';

const Services = () => {
	return (
		<React.Fragment>
			<section className="service_section bg-grey bd-bottom padding">
				<div className="container">
					<div className="section_heading align-center mb-40">
						<h2>Our Barber Services</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />It has
							survived not only five centuries.
						</p>
					</div>
					{ServiceConfig.services.map((service, index) => <Service service={service} key={index} />)}
				</div>
			</section>
		</React.Fragment>
	);
};

export default Services;
