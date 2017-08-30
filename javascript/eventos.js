$(document).ready(function() {
	$('.courasel').hide();
	// Side Panel JS Start
	$('#sidePanel_left , #sidePanel_right').hide();
	$('#sidePanel_left , #sidePanel_right').slideDown(6000);
	//Side Panel JS END

	

	

	

	//Centro Tradicionalista Courasel
	$('.img_1').click(function () {main(5, 'centro')});

	//Pueblo Courasel
	$('.img_2').click(function () {main(5, 'pueblo')});

	//Desfile Courasel
	$('.img_3').click(function () {main(5, 'desfile')});

	//Gente Courasel
	$('.img_4').click(function () {main(5, 'gente')});


});


//courasel function
function main(picAmount, folderName) {
		var array_slot = 1;
		
		$('.MainScreen').hide();
		$('.courasel').css('opacity', 1);
		$('.courasel').show();
		$('body').css('background-color', 'black');
		

		$('.right_arrow').click(function() {
			if(array_slot < picAmount ) {
				array_slot++;
				$('.image_rotation').attr('src', 'images/'+ folderName +'/' + (array_slot) + '.jpg');
			} else{
				array_slot = 1;
				$('.image_rotation').attr('src', 'images/'+ folderName +'/' + (array_slot) + '.jpg')};
		});

		$('.left_arrow').click(function() {
			if(array_slot > 1 ) {
				array_slot--;
				$('.image_rotation').attr('src', 'images/'+ folderName +'/' + (array_slot) + '.jpg');
			} else{
				array_slot = picAmount;
				$('.image_rotation').attr('src', 'images/'+ folderName +'/' + (array_slot) + '.jpg');}
		});

		$('.image_rotation').attr('src', 'images/'+ folderName + '/1.jpg');
		


		$('.close_btn').click(function() {
			$('body').css('background-color', 'white');
			$('body').css('opacity', 1);
			$('.courasel').hide();
			$('.MainScreen').show();
		});
};




