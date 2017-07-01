$(function() {
	$('#public').hover(function() {

		var $public = $('#public');
		$(document.createElement('div')).
		css({
			"background": "url(img/wechat.png)",
			"background-position": "-10px -21px"
		}).appendTo($public);
	}, function() {
		$('#public div').remove();
	});
});

$(function() {
	var timer = false;

	function checkSroll() {
		if($(window).scrollTop() >= 180) {
			$('#s-topbar').slideDown();

		} else {
			$('#s-topbar').slideUp();
		}
	}
	$(document).on('scroll', function() {
		if(!timer) {
			setTimeout(function() {
				checkSroll();
				!timer;
			}, 200);
		}

	});

	//第二种事件节流的方法

	//			$(document).scroll(function() {
	//				timer = true
	//			});
	//			setInterval(function() {
	//				if(timer) {
	//					checkSroll();
	//					!timer;
	//				}
	//
	//			}, 200)
});

//主编推荐
$(function() {
	$('#con-tabs').on('mouseover', 'li', function() {
		var index = $(this).index();
		var $item = $('#con-tabs').parent().find('.tab-item');
		$(this).find('a').addClass('active');
		$(this).siblings('li').find('a').removeClass('active');
		$item.not($item.eq(index)).css('display', 'none');
		$item.eq(index).css('display', 'block');

	})
});


//榜单切换
$(function(){
	$('.multi-list').on('mouseover', 'li', function() {
				var $parent = $(this).parent('ul');
				var $unfold = $(this).find('.unfold');
				var $fold = $(this).find('.fold');

				if($unfold.css('display') == "block") {
					return;
				} else {
					$('li .unfold', $parent).css('display', 'none');
					$('li .fold', $parent).css('display', 'block');
					$fold.css('display', 'none');
					$unfold.css('display', 'block');

				}
			});
});
