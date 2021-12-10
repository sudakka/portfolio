$(function(){
	var n=0;
	var t=0;
	var w;
	var winHalf;
	var posY;
	var topPos=0;
	var targety=0;
	var categoryFlag=false;

	$("#gnb li:first-child a").addClass("active");
	$(".floating_menu .list li:first-child a").addClass("active");

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t <= $("#page1").offset().top-winHalf){
			n=0;
		}
		else if(t <= $("#page2").offset().top-winHalf){
			n=1;
		}
		else if(t <= $("#page3").offset().top-winHalf){
			n=2;
		}
		else if(t <= $("#page4").offset().top-winHalf){
			n=3;
			if(t == $(document).height()-$(window).height()){
				n=4;
			}
		}
		else {
			n=4;
		}

		if(n != 0){
			$(".logo").addClass("dark");
			$("#gnb li").addClass("dark");
			$(".tabs").addClass("dark");
			$(".copyright").addClass("dark");
			$(".circle").removeAttr("style").addClass("bright");

			if(n == 3){
				$(".circle").hide();
			}
		}
		else{
			$(".logo").removeClass("dark");
			$("#gnb li").removeClass("dark");
			$(".tabs").removeClass("dark");
			$(".copyright").removeClass("dark");
			$(".circle").removeClass("bright");
		}

		$("#gnb li a").removeClass("active");
		$("#gnb li").eq(n).find("a").addClass("active");
		$(".floating_menu .list li a").removeClass("active");
		$(".floating_menu .list li").eq(n).find("a").addClass("active");

		if(categoryFlag){
			return;
		}
		else{
			if(n == 0){
				$("#header").addClass("active");
			}
			else{
				$("#page"+n).addClass("active");

				if(n == 4){
					categoryFlag=true;
				}
			}
		}
		
	});

	$(window).resize(function(){
		winHalf=$(window).height()/3;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$(".tabs").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$(".floating_menu").addClass("active");
		}
		else{
			$(this).removeClass("active");
			$(".floating_menu").removeClass("active");
		}
	});
	$("#gnb li").click(function(e){
		e.preventDefault();
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").animate({scrollTop:topPos}, 400);
	});
	$(".number .up").click(function(e){
		e.preventDefault();

		if(n > 0){
			n=n-1;
		}
		else{
			return;
		}

		if(n == 0){
			topPos=$("#header").offset().top;
		}
		else{
			topPos=$("#page"+n).offset().top;
		}
		$("html").animate({scrollTop:topPos}, 400);
	});
	$(".number .down").click(function(e){
		e.preventDefault();

		if(n < 4){
			n=n+1;
		}
		else{
			return;
		}

		if(n == 0){
			topPos=$("#header").offset().top;
		}
		else{
			topPos=$("#page"+n).offset().top;
		}
		$("html").animate({scrollTop:topPos}, 400);
	});

	$(".floating_menu .list li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			targety=0;
		}

		else{
			targety=$("#page"+n).offset().top;
		}

		$("html").delay(400).animate({scrollTop : targety}, 400);
		$(".floating_menu").removeClass("active");
		$(".tabs").removeClass("active");
	});
	$(".project .main_title").click(function(e){
		e.preventDefault();
		$(".project").removeClass("active");
		$(this).parents(".project").addClass("active");

		posY=$(this).parents(".project").offset().top;

		$("html").animate({scrollTop : posY}, 800);
	});

	var videoUrl=["sea", "sea2", "mountain"];
	var videoTotal=videoUrl.length-1;
	var videoN=0;
	var videoPath="";
	var video=document.getElementById("my_video");
	video.muted=true;
	video.play();

	function videoDimmed(){
		$(".video video").hide().css({opacity:0});

		setTimeout(function(){
			$(".video video").show().animate({opacity:1}, 300);
		}, 800);
	}

	videoDimmed();

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.play();
		videoDimmed();
	});


	function mobileLink(){
		if(isMobile){
			$("a.project1").attr({href: "project1/mobile/index.html"});
		}
		else{
			$("a.project1").attr({href: "project1/pc/index.html"});
		}

		$("a.project2").attr({href: "project2/index.html"});
	}

	mobileLink();
});