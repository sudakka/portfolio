$(function(){
	AOS.init({
		easing: "ease-in-out-sine",
		duration: 500,
		once: "true"
	});

	var t=0;
	var n=0;
	var w;
	var winHalf;
	var topPos=0;

	$("#gnb li").eq(n).find("a").addClass("on");

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < $("#about").offset().top-winHalf){
			n=0;
		}
		else if(t < $("#worx").offset().top-winHalf){
			n=1;
		}
		else if(t < $("#service").offset().top-winHalf){
			n=2;
		}
		else if(t < $("#flow").offset().top-winHalf){
			n=3;
		}
		else if(t < $("#contact").offset().top-winHalf){
			n=4;
		}
		else{
			n=5;
		}
		if(t > 100){
			$("#header .top").addClass("active");
		}
		else{
			$("#header .top").removeClass("active");
		}

		$("#gnb li a").removeClass("on");
		$("#gnb li").eq(n).find("a").addClass("on");

	});

	$(".tab").click(function(e){
		e.preventDefault();
		
		$("body").toggleClass("static");
		$(".mobile").toggleClass("active");
		$(".tab").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("static");
		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});

	$("#gnb li").click(function(e){
		e.preventDefault();

		$(".dim").trigger("click");
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").animate({scrollTop:topPos}, 400);
	});
	$("#m_gnb li").click(function(e){
		e.preventDefault();
		
		$(".dim").trigger("click");
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").delay(400).animate({scrollTop:topPos}, 400);
	});

	$(".up").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 400);
	});

	$(window).resize(function(){
		w=window.innerWidth;
		winHalf=$(window).height()/2;

		if(w > 720){
			if($(".mobile").hasClass("active")){
				$(".dim").trigger("click");
			}
		}

		$(window).trigger("scroll");
	});
	$(window).trigger("resize");
});