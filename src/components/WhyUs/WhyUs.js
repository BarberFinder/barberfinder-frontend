import React from 'react';
import whyImage from '../../assets/why-bg.jpg';

const WhyUs = () => {
	return (
		<section id="whyus" className="why_section bd-bottom">
			<div className="container-fluid no-padding">
				<div className="why_img hidden-xs" style={{marginLeft:40}}>
					<div className="img" style={{ backgroundImage: `url(${whyImage})` }} />
				</div>
				<div className="col-sm-6 col-sm-offset-6">
					<div className="why_contant" style={{marginLeft:40}}>
						<h2>Why We Are The Best?</h2>
						<h3 className="mb-30">We offer a full range of modern barber services!</h3>
						<ul className="list">
							<li>Our barbershop partner know how to cut men's hair.</li>
							<li>The environment of our barbershop partners is decidedly masculine.</li>
							<li>Visiting our barbershop partners is a one of a kind experience.</li>
							<li>At our barbershop partners, you can get more than a haircut.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
