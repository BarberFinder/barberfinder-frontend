import React from 'react';

const PopularBarber = (props) => {
	const { name, background_image_url } = props.barber;
	const imageUrl = require(`../../assets/${background_image_url}`);
	return (
		<div className="col-sm-3 col-xs-6 xs-padding">
			<div className="service_item">
				<img src={imageUrl} alt={name} />
				<div className="post_info">
					<h3>{name}</h3>
					<p>
						Lorem Ipsum is simply dummy<br /> and typesetting industry.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PopularBarber;
