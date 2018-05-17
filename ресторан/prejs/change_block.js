$(document).ready(function () {
	var firstCol = document.querySelector('.menu_firstcol');
	var secondCol = document.querySelector('.menu_secondcol');
	
	function changePlaces() {
		$('.menu_firstcol').detach();
		$(firstCol).appendTo($(".menu .wrapper"));
		$('.menu_firstcol').css("margin-top","20px");
	};

	function changePlacesBack() {
		$('.second_col').detach();
		$(secondCol).appendTo($(".menu .wrapper"));
		$('.menu_firstcol').css("margin-top","0");
	};

	window.onload = function () {
		var windowWidth = document.body.clientWidth;
		if (windowWidth < 993) {
			changePlaces();
			
		}
	}; 

	window.onresize = function () {
		var windowWidth = document.body.clientWidth;
		if (windowWidth < 993) {
			changePlaces();
		} else {
			changePlacesBack();
		}
	};

});
