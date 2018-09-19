import React from 'react';

const Footer = (props) => {
	return (
		<footer className={'footer_section ' + (props.fixedBottom ? 'fixed-bottom' : '')}>
			<div className="container">
				<div className="col-xs-6 xs-padding">
					<div className="copyright">&copy; 2018 Barber Finder</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
