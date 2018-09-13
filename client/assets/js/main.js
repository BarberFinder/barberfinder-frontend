(function($) {
	'use strict';

	$(window).on('load', function() {
		$('body').addClass('loaded');
	});

	/*=========================================================================
    	Sticky Header
=========================================================================*/

	$(function() {
		var header = $('#header'),
			yOffset = 0,
			triggerPoint = 100;
		$(window).on('scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.removeClass('animated fadeIn');
				header.addClass('navbar-fixed-top animated fadeInDown');
			} else {
				header.removeClass('navbar-fixed-top animated fadeInDown');
				header.addClass('animated fadeIn');
			}
		});
	});

	/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});

	/*=========================================================================
  Scroll To Top
=========================================================================*/

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('#scroll-to-top').fadeIn();
		} else {
			$('#scroll-to-top').fadeOut();
		}
	});
})(jQuery);
