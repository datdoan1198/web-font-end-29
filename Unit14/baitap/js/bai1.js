	$(document).ready(function(){
	$(window).scroll(function(event){
		var quan_chuot = $('html,body').scrollTop();
		console.log(quan_chuot); 
		if (quan_chuot>50) {
			$('nav').addClass('fixed-top');
			$('nav').addClass('bg-scroll');
		}else{
			$('nav').removeClass('fixed-top');
			$('nav').removeClass('bg-scroll');
		}


	})

	$('.list1').children().on('click',function(){
		
			$(this).addClass('active2').siblings().removeClass('active2');	

	});

	
	
})