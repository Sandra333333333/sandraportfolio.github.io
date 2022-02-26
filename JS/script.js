$(function(){
	var blockA = $('.about').offset().top;
	var blockB = $('.collection').offset().top;
	var blockC = $('.experience').offset().top;
	var blockD = $('.skill').offset().top;
	var blockE = $('.social').offset().top;

	


	$('.btn1').click(function(){
		$('html,body').animate({scrollTop: blockA}, 500)
		return false;
	});

	$('.btn2').click(function(){
		$('html,body').animate({scrollTop: blockB}, 510)
		return false;
	});

	$('.btn3').click(function(){
		$('html,body').animate({scrollTop: blockC}, 520)
		return false;
	});

	$('.btn4').click(function(){
		$('html,body').animate({scrollTop: blockD}, 530)
		return false;
	});

	$('.btn5').click(function(){
		$('html,body').animate({scrollTop: blockE}, 540)
		return false;
	});

	$('.toTop').click(function(){
		$('html,body').animate({scrollTop: 0}, 500)
		return false;
	})

	































})