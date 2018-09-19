import React, { Component } from 'react';
import Slider from 'react-slick';
import SlideConfig from '../../config/Slider';
import Slide from './Slide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
	render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		};
		return (
			<ul>
				<Slider {...settings}>
					{SlideConfig.slides.map((slide, index) => <Slide slide={slide} key={index} />)}
				</Slider>
			</ul>
		);
	}
}

export default Carousel;
