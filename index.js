$(document).ready(function() {

		$('#left').click(function(){
			$('.box').animate({
				left: "-=20px",
				fontSize: "+=2px"
		}, function(){

		})
	});
		$('#up').click(function(){
			$('.box').animate({
				top: "-=20px",
				opacity: "+=0.1"
		}, function(){

		})
	});
		$('#right').click(function(){
			$('.box').animate({
				left: "+=20px",
				fontSize: "-=2px"
		}, function(){

		})
	});
		$('#down').click(function(){
			$('.box').animate({
				bottom: "-=20px",
				opacity: "-=0.1"
				
		}, function(){

		})
	});
	
});