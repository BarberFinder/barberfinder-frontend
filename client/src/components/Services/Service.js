import React from 'react';

const Service = (props) => {
	const { name, background_image_url } = props.service;
	const imageUrl = require(`../../assets/${background_image_url}`);
	return (
		<div className="col-sm-3 col-xs-6 xs-padding">
			<div className="service_content align-center">
				<img src={imageUrl} alt={name} />
				<h3>{props.service.name}</h3>
				<p>
					Lorem Ipsum is simply dummy<br /> and typesetting industry.
				</p>
			</div>
		</div>
	);
};

export default Service;
