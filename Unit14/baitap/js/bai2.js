$(document).ready(function(){
	$(window).scroll(function(event){
		var mouse_scroll = $('html,body').scrollTop();

		if (mouse_scroll > 50) {
			$('nav').addClass('fixed-top');
			$('nav').addClass('bg-nav');
		}else{
			// $('nav').removeClass('fixed-top');
			$('nav').removeClass('bg-nav');
		}

	});

	var listImage = $('.list-image')[0];
	var value = listImage.clientWidth;
	var arr = $('.img').length;
	var bgImageWidth = value * arr; 
	$('.bg-image').width(bgImageWidth);

	var active = 0;
	var max = value * (arr - 1);

	$('.fa-chevron-circle-right').click(function click_right(){
		if (active < max) {
			active += value;
			
		}else{
			active = 0;
		}

		$('.bg-image')[0].style.marginLeft = "-" + active + "px";

	});
	$('.fa-chevron-circle-left').on('click', function() {
		if (active == 0) {
			active = max;
			
		}else{
			active -= value ;
		}

		$('.bg-image')[0].style.marginLeft = "-" + active + "px";

	});

	setInterval(function(){
			 if (active < max) {
			active += value;
			
			}else{
				active = 0;
			}

			$('.bg-image')[0].style.marginLeft = "-" + active + "px";
		},2000);



});