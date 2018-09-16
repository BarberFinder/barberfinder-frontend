import React from 'react';
import image from '../../assets/loading.gif';

const Loading = () => {
	return (
		<div id="preloader">
			<div className="loader">
				<img src={image} width="80" alt="" />
			</div>
		</div>
	);
};

export default Loading;
