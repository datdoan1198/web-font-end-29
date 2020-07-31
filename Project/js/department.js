$('.counter').counterUp({
	'time': 2000,
	'delay': 10
});

$(document).ready(function(){
	$('.list_header').children().on('mouseenter', function(){	
		$('.list_header').children().children().css({'color':'black',})	
		$('.list_header').children().children().eq(0).css({'color':'#80d4ff','background':' #007bff','border-top':' 4px solid #96badc','border-left':'2px solid #96badc','border-radius':'5px',})
		$(this).children('a').css({'color':'#80d4ff','background':' #007bff','border-top':' 4px solid #96badc','border-left':'0px solid #96badc','border-radius':'5px',});
		$(this).children('ul').slideDown(500);
	}) 
	$('.list_header').children().on('mouseleave', function(){	
		$('.list_header').children().children().css({'color':'black','background':'#f8f9fa','border-top':' 0px solid #96badc','border-left':'0px solid #96badc','border-radius':'0px',})	
		$('.list_header').children().children().eq(0).css({'color':'#80d4ff','background':' #007bff','border-top':' 4px solid #96badc','border-left':'2px solid #96badc','border-radius':'5px',})
		$(this).children('ul').slideUp(500);
	}) 
	$('.list_pages').children().on('mouseenter', function(){
		$('.list_pages').children().css({'background':'white',})
		$('.list_pages').children().children().css({'color':'black',})
		$(this).css({'background':'#007bff',})
		$(this).children().css({'color':'white','text-decoration':'none'})
	})
	$('.icon').children().on('mouseenter',function(){
		$(this).css({'color':'#0099ff'})
	})
	$('.icon').children().on('mouseleave',function(){
		$(this).css({'color':'black'})
	})
	$('.icon1').children().on('mouseenter',function(){
		$(this).css({'background':'#0099ff'})
	})
	$('.icon1').children().on('mouseleave',function(){
		$(this).css({'background':'black'})
	})
	$('.btn').on('mouseenter',function(	){
		$(this).css({'background':'white','color':'#0099ff'})
	})
	$('.btn').on('mouseleave',function(){
		$(this).css({'background':'#0099ff','color':'white'})
	})
	$('.text_hover').on('mouseenter',function(){
		$(this).children('h5').css({'color':'#0099ff'})
	})
	$('.text_hover').on('mouseleave',function(){
		$(this).children('h5').css({'color':'black'})
	})
	$('.text_hover').children('img').on('mouseenter',function(){
		$(this).css({'transform':'scale(1.1)','transition':'1s','z-index':'1',})
	})
	$('.text_hover').children('img').on('mouseleave',function(){
		$(this).css({'transform':'scale(1)','transition':'1s','z-index':'0',})
	})
	$('.bg_hide').on('mouseenter',function(){
		$(this).children('div').fadeIn("2000");
	})
	$('.bg_hide').on('mouseleave',function(){
		$(this).children('div').fadeOut('2000');
	})

	$('.list_pages1').children().on('mouseenter', function(){
		$('.list_pages1').children().css({'background':'white',})
		$('.list_pages1').children().children().css({'color':'black',})
		$(this).css({'background':'#007bff',})
		$(this).children().css({'color':'white','text-decoration':'none'})
	})
	$('.bars').on('click',function(){
		$('.menu4').css({'display':'block'})
		$('.times').css({'display':'block'})
		$(this).css({'display':'none'})
	})

	$('.times').on('click',function(){
		$('.menu4').css({'display':'none'})
		$('.bars').css({'display':'block'})
		$(this).css({'display':'none'})
	})
	var aaa = $('.menu4_list').children('div');
	$('.menu4_list').children('div').on('mouseenter',function(){
		for (var i = 0; i < aaa.length; i++) {
			aaa.css({'background':'#ffffff00'});
		}
		$(this).css({'background':'#0000008f'});
	})
	$('.menu4_list1_1').children().on('mouseenter',function(){
		for (var i = 0; i < aaa.length; i++) {
			$('.menu4_list1_1').children().css({'background':'#ffffff00'});
		}
		$(this).css({'background':'#0000008f'});
	})

	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('#topBtn').fadeIn();
		} else{
			$('#topBtn').fadeOut();
		}
	});

	$("#topBtn").click(function(){
		$('html ,body').animate({scrollTop : 0},800);
	});


})