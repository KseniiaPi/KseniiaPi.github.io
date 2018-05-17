$(document).ready(function () {
	"use strict";
	var firstCol = document.querySelector('.menu_firstcol');
	var secondCol = document.querySelector('.menu_secondcol');
	var menuButton = document.querySelector('#container');
	var siteOverlay = document.querySelector('.site-overlay');

	function changePlaces() {
		$('.menu_firstcol').detach();
		$(firstCol).appendTo($(".menu .wrapper"));
		$('.menu_firstcol').css("margin-top", "20px");
	};

	function changePlacesBack() {
		$('.second_col').detach();
		$(secondCol).appendTo($(".menu .wrapper"));
		$('.menu_firstcol').css("margin-top", "0");
	};

	function menuOnLarge() {
		$("nav").removeClass('pushy pushy-left');
		$("nav > div").removeClass('pushy-content');
		$(".header li").removeClass('pushy-link');
		$(".site-overlay").detach();
		$(".menu_button").detach();
		$("li:nth-child(even)").removeClass("li_after");
		$(".menu_item_description").css("display", "block");
	};

	function menuOnSmall() {
		$("nav").addClass('pushy pushy-left');
		$("nav > div").addClass('pushy-content');
		$(".header li").addClass('pushy-link');
		$(siteOverlay).insertAfter(".header_menu");
		$(menuButton).insertAfter('.site-overlay');
	};

	function addMenuStyle() {
		$(".menu_item_description").css("display", "none");
		$("li:nth-child(even)").addClass("li_after");
	};


	window.onload = function () {
		var windowWidth = document.body.clientWidth;
		if (windowWidth < 993) {
			changePlaces();
		}
		
		if (windowWidth > 1045) {
			menuOnLarge();
		} else {
			addMenuStyle();
		}
	};

	window.onresize = function () {
		var windowWidth = document.body.clientWidth;
		if (windowWidth < 993) {
			changePlaces();
		} else {
			changePlacesBack();
		}
		if (windowWidth > 1045) {
			menuOnLarge();
		} else {
			menuOnSmall();
			addMenuStyle();
		}
	};
	
	window.onscroll = function scrollCheck() {
		var windowHeight = document.documentElement.clientHeight;
		var distanceFromTop = window.pageYOffset;
		if (windowHeight > distanceFromTop) {
			$('.scroll_arrow').css("display", "none");
		} else {
			$('.scroll_arrow').css("display", "block");
		}
	};
	
	$("a").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('body').removeClass("pushy-open-left");
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
	
	$('.scroll_arrow').click(function () {
		$('html, body').animate({
			scrollTop: $(".header").offset().top
		}, 600);
		return false;
	});
});
 

//# sourceMappingURL=all.js.map
