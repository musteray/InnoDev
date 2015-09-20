$(document).ready(function(){
	var index = 0;

	setInterval(function(){
		if( index == 0 ){
			$(".image-down-arrow").attr("style","bottom:0;top:10px;");
			index++;
		}else if( index == 1 ) {
			$(".image-down-arrow").attr("style","top:30px;");
			index++;
		}else {
			$(".image-down-arrow").attr("style","bottom:10px;");
			index = 0;
		}
	}, 700);

	$("#div-image-darrow").click(function(){
		$('html,body').animate({scrollTop: 612}, 1000);
		$(document).prop('title','iNNODev | Service');
	});

	$(window).scroll(function(){
		var scrollHeight = window.scrollY; 

		console.log(scrollHeight);

	    if ( (window.innerHeight + window.scrollY) >= document.body.offsetHeight ) {
	    	$(document).prop('title','iNNODev | Footer');
	    }else if( scrollHeight >= 1112 ){
	    	$(document).prop('title','iNNODev | Project');
	    	$(".nav-tab li a").each(function(index){
	    		if( $(this).text() == "Project" ){
	    			$(this).addClass('current-tab');
	    		}else if( $(this).hasClass('current-tab') ){
	    			$(this).removeClass('current-tab');
	    		}
	    	});
	    }else if( scrollHeight >= 550 && scrollHeight <= 1112 ){
	    	$(document).prop('title','iNNODev | Service');
	    	$(".responsive-logo, .web-logo, .mobile-logo").attr("style","opacity:1;");
	    	$(".nav-tab li a").each(function(index){
	    		if( $(this).text() == "Home" ){
	    			$(this).addClass('current-tab');
	    		}else if( $(this).hasClass('current-tab') ){
	    			$(this).removeClass('current-tab');
	    		}
	    	});
	    }else if( scrollHeight <= 550 ){
			$(document).prop('title','iNNODev | Home');
			$(".nav-tab li a").each(function(index){
	    		if( $(this).text() == "Home" ){
	    			$(this).addClass('current-tab');
	    		}else if( $(this).hasClass('current-tab') ){
	    			$(this).removeClass('current-tab');
	    		}
	    	});
	    }
	});

	$(".nav-tab li a").click(function(){
		var anchorTxt = $(this).text();
		
	});

	$(".btnProject").click(function(){
		$("html,body").animate({scrollTop: 1230}, 1000);
	});
	
});