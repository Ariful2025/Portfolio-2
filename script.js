$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addclass("sticky")
		}else{
			$('.navbar').removeclass("sticky")
		}	
	});
	
	// owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		response: {
			0:{
				items: 1,
				nav: false,
			},
			600:{
				items: 2,
				nav: false,
			},
			1000:{
				items: 3,
				nav: false,
			},
		}
	});
	
});