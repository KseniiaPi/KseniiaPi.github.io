$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 5, 
		responsive: {
			480: {
				items: 1
			},
			768: {
				items: 2
			},
			1260: {
				items: 5
			}
		},
		autoWidth: true,
		loop: true,
		URLhashListener: true,
		startPosition: '#second',
		center: true,
	});
	
});
