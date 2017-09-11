$(document).ready(function() {
	$('.courasel').hide();
	// Side Panel JS Start
	$('#sidePanel_left , #sidePanel_right').hide();
	$('#sidePanel_left , #sidePanel_right').slideDown(6000);
	//Side Panel JS END

	
  	$('#my-slide').hide();
  	$('.background-wipe').hide();
	
	$('.img_1').click(function() {
		$('#my-slide').show();
		$('.background-wipe').show();
	})

	$('.exit').click(function() {
		$('#my-slide').hide();
  		$('.background-wipe').hide();
	})
	

});




