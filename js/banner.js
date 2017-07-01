

//更多菜单展示
$(function() {

	$('.main .index div').on('mouseover mouseout', function() {
		var $this = $(this);
		if(event.type == "mouseover") {
			$this.find('.more').css('display', 'block');
		} else {
			$this.find('.more').css('display', 'none');
		}

	})
})



//banner图切换



$(function() {
	var index = 0;
	var $Li = $('.banner ul li');
	$Li.eq(index).css('opacity', 0); //没办法，第一张切得太生猛了

	function play() {
		$Li.not($Li.eq(index)).animate({
			opacity: 0
		}, 800);
		$Li.eq(index).animate({
			opacity: 1
		}, 800);
		$('.banner .banner-index span').css('background', 'rgba(255,255,255,0.5)');
		$('.banner .banner-index span').eq(index).css('background', '#E60010');
		
		index++;
		if(index >= 4) {
			index = 0
		}
		
	}
	var timer = setInterval(play, 2000);
	$('.banner').on('mouseover mouseout', function() {
		if(event.type == "mouseover") {
			clearInterval(timer);
		} else {
			timer = setInterval(play, 2000);
		}

	});
	$('.banner .banner-index span').on('mouseover', function() {
		if(event.type == "mouseover") {
			$(this).css('background', '#FFE793');
			index = $(this).index();
			play();
		} 
	});
})