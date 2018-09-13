import React from 'react';
import whyImage from '../../assets/why-bg.jpg';

const WhyUs = () => {
	return (
		<section id="whyus" className="why_section bd-bottom">
			<div className="container-fluid no-padding">
				<div className="why_img hidden-xs">
					<div className="img" style={{ backgroundImage: `url(${whyImage})` }} />
				</div>
				<div className="col-sm-6 col-sm-offset-6">
					<div className="why_contant">
						<h2>Why We Are The Best?</h2>
						<h3 className="mb-30">We offer a full range of modern barber services!</h3>
						<ul className="list">
							<li>Various templates for data and layout presentation.</li>
							<li>Easily customizable skinning mechanism.</li>
							<li>The visual appearance of the Button control can customized.</li>
							<li>Computerized automatic deliveries based dependable.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
