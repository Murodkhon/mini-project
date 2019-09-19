$(document).ready(function(){
	
	$('#button').click(function() {
		// $('.p').hide();
		// $('.p').fadeOut(500);
		//  $('.p').slideUp(500);
		$('.p').addClass('active');
		
		


	});
	
	
	$('#but').click(function(){
		// $('.p').show();
		// $('.p').slideDown(500);
		// $('.p').fadeIn(500);
		$('.p').removeClass('active');
	


	});

	$('#toggle').click(function(){

		// $('.p').slideToggle(5000);
		$('.p').toggleClass('active');
		
	
		

	});


	
	
	
	
	
});