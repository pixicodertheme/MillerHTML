(function ($) {
"use strict";

		//----------------scroll---------------
		$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();

		if (scroll < 245) {

		$("#header-sticky").removeClass("sticky-bar");

		} else {

		$("#header-sticky").addClass("sticky-bar");

		}
		});

		// --------Nice select js--------------
		$('select').niceSelect();

		// -----------progress circle-------------
		$('.percent').percentageLoader({
		valElement: 'p',
		strokeWidth: 9,
		bgColor: '#0f326a',
		ringColor: '#ff5e14',
		textColor: '#ffffff',
		fontSize: '30px',
		fontWeight: 'normal'
		});

	    //------ Preloader-----------------------

	    let win = $(window);
	    win.on('load',function() {
	        $("#loading").fadeOut(500);
	    })

		// --------Activate homepage slider---------
		var slider = $('.homepage-slide');
		slider.owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		smartSpeed: 800,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
		navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
		});

		slider.on('translate.owl.carousel', function () {
			var layer = $("[data-animation]");
			layer.each(function () {
				var s_animation = $(this).data('animation');
				$(this).removeClass('animated ' + s_animation).css('opacity', '0');
			});
		});

		$("[data-delay]").each(function () {
			var animation_del = $(this).data('delay');
			$(this).css('animation-delay', animation_del);
		});

		$("[data-duration]").each(function () {
			var animation_dur = $(this).data('duration');
			$(this).css('animation-duration', animation_dur);
		});

		slider.on('translated.owl.carousel', function () {
			var layer = slider.find('.owl-item.active').find("[data-animation]");
			layer.each(function () {
				var s_animation = $(this).data('animation');
				$(this).addClass('animated ' + s_animation).css("opacity", "1");
			});
		});


		// --------------------sidebar----------------------------------
		$('.open-mobile-menu,.menu-open').on('click', function () {
		    $('.side-info').addClass('info-open');
		    $('.offcanvas-overlay').addClass('overlay-open');
		})

		$('.side-info-close,.offcanvas-overlay').on('click', function () {
		    $('.side-info').removeClass('info-open');
		    $('.offcanvas-overlay').removeClass('overlay-open');
		})

		// -------------portfolio-carousel--------------------------
		$('.portfolio-carousel').owlCarousel({

		items: 3,
		margin: 0,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
		});

		// ---------team-carousel-------------------
		$('.team-carousel').owlCarousel({
		items: 4,
		margin: 25,
		loop: true,
		nav: false,
		dots: false,
		});

	    // --------------header Search---------------------
	    $('body').click(function () {
	        if ($('.header-search-form').hasClass("header-search-form-open")) {
	            $('.header-search-form').toggleClass("header-search-form-open");
	        }
	    });

	    $('.header-search').click(function (e) {
	        e.stopPropagation()
	        $('.header-search-form').toggleClass("header-search-form-open");
	    });

	    $('.header-search-form').click(function (e) {
	        e.stopPropagation();
	    });

		/* magnificPopup img view */
		$('.popup-image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		/* magnificPopup video view */
		$(".popup-video").magnificPopup({
			type: "iframe",
		});


	    // ---------------dropdown----------------------------
		$('.main-menu li').hover(function() {
		$('.main-menu li.active').removeClass('active');
		$(this).addClass('active');

		});

		//-----------------ScrollUp---------------------------
        $.scrollUp({
            scrollText: '<i class="fal fa-arrow-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            zIndex: 8888,
            animation: 'fade'
        });

})(jQuery);