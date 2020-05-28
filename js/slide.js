$(function(){
	var $li = $('.banner_con li');
	var iLen = $li.length;
	var $prev = $('.prev');
	var $next = $('.next');
	var $points = $('.points');

	var iNowli = 0;
	var iNextli = 0;

	$li.not(':first').css({left:1200});
	$li.each(function(i) {
		var $sLi = $('<li>');
		if(i==0){
			$sLi.addClass('active')
		}
		$sLi.appendTo($points);
	});

	var $pointsli = $('.points li');
	$pointsli.click(function(){
		iNextli = $(this).index();
		if(iNextli==iNowli){
			return
		}
		$(this).addClass('active').siblings().removeClass('active');
		move();
	});

	// 点击 < button时滚动幻灯片 并改变圆点样式
	$('.prev_con').click(function (){
		iNextli --;
		move()
		$pointsli.eq(iNextli).addClass('active').siblings().removeClass('active');
	});
	// 点击 > button时滚动幻灯片 并改变圆点样式
	$('.next_con').click(function (){
		iNextli ++;
		move();
		$pointsli.eq(iNextli).addClass('active').siblings().removeClass('active');
	});
	// 移动幻灯片
	function move(){
		// 第一张幻灯片往前时
		if(iNextli<0){
			iNextli = iLen -1;
			iNowli = 0;
			$li.eq(iNextli).css({left:-1200});
			$li.eq(iNextli).stop().animate({left:0});
			$li.eq(iNowli).stop().animate({left:1200});
			iNowli = iNextli;
			return
		}
		// 最后一张幻灯片往后时
		if (iNextli>iLen-1) {
			iNextli = 0;
			iNowli = iLen -1
			$li.eq(iNextli).css({left:1200});
			$li.eq(iNextli).stop().animate({left:0});
			$li.eq(iNowli).stop().animate({left:-1200});
			iNowli = iNextli;
			return
		}

		// 幻灯片从右边过来
		if(iNextli>iNowli){
			$li.eq(iNextli).css({left:1200});
			$li.eq(iNowli).stop().animate({left:-1200})
		}else{
		// 幻灯片从左边过来
		$li.eq(iNextli).css({left:-1200});
		$li.eq(iNowli).stop().animate({left:1200});
	}

		// 幻灯片归位
		$li.eq(iNextli).stop().animate({left:0});
		iNowli = iNextli;
	};
});