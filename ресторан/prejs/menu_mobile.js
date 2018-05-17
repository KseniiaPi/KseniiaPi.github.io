$(document).ready(function () {
	
	window.onload = function widthCheck() {
		var windowWidth = document.body.clientWidth;

		if (windowWidth > 1045) {
			$("nav").removeClass('pushy pushy-left');
			$("nav > div").removeClass('pushy-content');
			$(".header li").removeClass('pushy-link');
			$(".site-overlay").detach();
			$(".menu_button").detach();
			$("li:nth-child(even)").removeClass("li_after");
		} else {
			$(".menu_item_description").css("display","none");
			$("li:nth-child(even)").addClass("li_after");
		}
	};

	var menuButton = document.querySelector('#container');
	var siteOverlay = document.querySelector('.site-overlay');
	
	window.onresize = function widthChange() {
		var windowWidth = document.body.clientWidth;

		if (windowWidth > 1045) {
			$("nav").removeClass('pushy pushy-left');
			$("nav > div").removeClass('pushy-content');
			$(".header li").removeClass('pushy-link');
			$(".site-overlay").detach();
			$(".menu_button").detach();
			$(".menu_item_description").css("display","block");
			$("li:nth-child(even)").removeClass("li_after");
		} else {
			$("nav").addClass('pushy pushy-left');
			$("nav > div").addClass('pushy-content');
			$(".header li").addClass('pushy-link');
			$(siteOverlay).insertAfter(".header_menu");
			$(menuButton).insertAfter('.site-overlay');
			$(".menu_item_description").css("display","none");
			$("li:nth-child(even)").addClass("li_after");
		}
	}


});
