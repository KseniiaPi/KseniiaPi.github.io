$(document).ready(function () {
	"use strict";
	$("a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 600);
		return false;
	});

	$(".header_scroll_arrow").click(function () {
		$('html, body').animate({
			scrollTop: 800
		}, 600);
	});

	window.onscroll = function scrollCheck() {
		var windowHeight = document.documentElement.clientHeight;
		var distanceFromTop = window.pageYOffset;
		if (windowHeight > distanceFromTop) {
			$('.scroll_arrow').css("display", "none");
		} else {
			$('.scroll_arrow').css("display", "block");
		}
	};

	$('.scroll_arrow').click(function () {		
		$('html, body').animate({
			scrollTop: $(".header").offset().top
		}, 600);
		return false;
	});

});
