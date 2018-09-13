import React from 'react';
import { Link } from 'react-router-dom';

const Slide = (props) => {
	const { background_image_url, heading1, heading3 } = props.slide;
	const imageUrl = require(`../../assets/${background_image_url}`);
	return (
		<li className="main_slide" style={{ backgroundImage: `url(${imageUrl}` }}>
			<div className="container">
				<div className="display-table">
					<div className="table-cell">
						<div className="slider_content align-center">
							<h3 className="text-white slider-text-h3">{heading3}</h3>
							<h1 className="text-white slider-text-h1">{heading1}</h1>
							<p className="text-white slider-p">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> It has
								survived not only five centuries.
							</p>
							<div className="btn_group">
								<Link to="/" className="default_btn">
									Find Your Barber
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Slide;
