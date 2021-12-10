$(function(){
	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200, 
		effect: "fade", 
		fadeEffect: { 
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$(".play").click(function(e){
		e.preventDefault();
		mainSwiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});

	var content_mainSwiper=new Swiper(".content_mainSwiper", {
		speed: 1200, 
		effect: "fade",
		fadeEffect: { 
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	$(".prev").click(function(e){
		e.preventDefault();
		content_mainSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		content_mainSwiper.slideNext();
	});


	var sub_swiper=new Swiper(".sns_slider .swiper-container", {
		slidesPerView: 1.3,
		spaceBetween: 18,
		pagination: {
			el: ".sns_slider .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: ".sns_slider .swiper-button-next",
			prevEl: ".sns_slider .swiper-button-prev",
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
		},
		on: {
			init: function(){
				var subSliderLength=$(".sns_slider .swiper-slide").length;
				$(".sns_slider .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_swiper.activeIndex;
				currentSlider+=1;
				$(".sns_slider .num").text(currentSlider);
			}
		}
	});

	$(".tabs").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$(".floating_menu").toggleClass("active");
		$(".tabs").toggleClass("active");
		$(".dim").addClass("active");

		if($(".tabs").hasClass("active") == false){
			$("#gnb ul ul").hide();
			$("#gnb > ul > li").removeClass("active");
		}
	});

	$(".top a").click(function(e){
		e.preventDefault();

		$(".floating_menu").removeClass("active");
		$(".dim").removeClass("active");
	});

	$(".dim").click(function(){
		$(".floating_menu").removeClass("active");
		$(".dim").removeClass("active");
	});

	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
});