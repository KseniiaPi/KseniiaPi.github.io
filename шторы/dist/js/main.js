$(document).ready(function () {
    $(".bullet").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    $("#slide1").click(function () {
        $(".background").css("background", "url(dist/img/slide1.jpg) top center/cover no-repeat");
    });
    $("#slide2").click(function () {
        $(".background").css("background", "url(dist/img/slide2.jpg) top center/cover no-repeat");
    });
    $("#slide3").click(function () {
        $(".background").css("background", "url(dist/img/slide3.jpg) top center/cover no-repeat");
    });

    $("#slider").owlCarousel({
        loop: true,
        autoWidth: true,
        scrollPerPage: true,
        responsiveClass: true,
        freeDrag: true,
        center: true,
        URLhashListener: true,
        responsive: {

            0: {
                items: 1,
            },

            360: {
                items: 1,
            },

            580: {
                items: 2,
            },

            780: {
                items: 4,
            },

            1950: {
                items: 7,
            }
        }
    });

    $("#slider_garantee").owlCarousel({
        items: 1
    });

    $(".active_category_photo .bullet").click(function () {
        $(this).siblings().removeClass("bullet_active");
        $(this).addClass("bullet_active");
    });
    $("#bullet1").click(function () {
        $(".active_category_photo").css("background", "url(dist/img/frenchcurtains1.jpg) 0 0/cover no-repeat");
    });
    $("#bullet2").click(function () {
        $(".active_category_photo").css("background", "url(dist/img/frenchcurtains2.jpg) 0 0/cover no-repeat");
    });
    $("#bullet3").click(function () {
        $(".active_category_photo").css("background", "url(dist/img/frenchcurtains3.jpg) 0 0/cover no-repeat");
    });

    $(".chamber_categories_menu_item").click(function () {
        $(this).siblings().removeClass("chamber_category_active");
        $(this).addClass("chamber_category_active");
    });

   // $("body").outerHeight(function (i, val) {

  //      return val - 1236;
 //   });

    $(".active_category_menu ul li").click(function () {
        $(this).siblings().removeClass("active_curtain");
        $(this).addClass("active_curtain");
    });

    $(".right_arrow").click(function () {
        $(".active_curtain").next().addClass("active_curtain");          $(".active_curtain").prev().removeClass("active_curtain");
    });
    
    $(".left_arrow").click(function () {
        $(".active_curtain").prev().addClass("active_curtain");          $(".active_curtain").next().removeClass("active_curtain");
    });



});
