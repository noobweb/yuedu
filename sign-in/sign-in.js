$(function() {
//登录按钮悬停

	$('#sign-in').hover(function() {
		if(!$('#sign-in-plan').length) {
			$('#loading').load('sign-in/sign-in.html');
		} else {
			$('#sign-in-plan').show();
		}

	}, function() {
		$('#sign-in-plan').on('mouseover', function() {
			$('#sign-in-plan').show();
		});
		$('#sign-in-plan').hide();
		$('#sign-in-plan').on('mouseout', function() {
			$('#sign-in-plan').hide();
		});
	});

//点击登录方式	
	$('#loading').on('click', '#sign-in-plan li', function(event) {
		//载入登录页面
		var $this=this;
		$('#BigScreen').load('sign-in/sign-in-border.html',
		function(){
		if($this.className=="call"){
			
			$('#sign-in-border h1').text('电话登录');
			$('#sign-in-border .call').closest('li').css('display','none');
		}else if($this.className=="sina"){
			
			$('#sign-in-border h1').text('新浪微博登录');
			$('#sign-in-border .sina').closest('li').css('display','none');
		}else if($this.className=="qq"){
			
			$('#sign-in-border h1').text('腾讯微博登录');
			$('#sign-in-border .qq').closest('li').css('display','none');
		}else if($this.className=="wechat"){
			
			$('#sign-in-border h1').text('微信登录');
			$('#sign-in-border .wechat').closest('li').css('display','none');
		}else if($this.className=="netease"){
			
			$('#sign-in-border h1').text('新浪微博登录');
			$('#sign-in-border .netease').closest('li').css('display','none');
		}else{
			return;
		}
		
			
		}).css('display', 'block');
		//根据点击内容切换登录标题
		
		
		

		return false;
	});

	
	
	

});
