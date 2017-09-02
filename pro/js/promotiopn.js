$(function(){
	
	
	
	$('.ceb .menu-block1 .tab-logo-zichan').bind("mouseenter",function(){
		$('.ceb .menu-block1 .menu-zichan .tab-zichan-lab')
		.css("display",'block');
	})
	$('.ceb .menu-block1 .tab-logo-zichan').bind("mouseleave",function(){
		$('.ceb .menu-block1 .menu-zichan .tab-zichan-lab')
		.css("display",'none');
	})
	
	$('.ceb .menu-block1 .tab-logo-like').bind("mouseenter",function(){
		$('.ceb .menu-block1 .menu-like .tab-zichan-lab')
		.css("display",'block');
	})
	$('.ceb .menu-block1 .tab-logo-like').bind("mouseleave",function(){
		$('.ceb .menu-block1 .menu-like .tab-zichan-lab')
		.css("display",'none');
	})
	
	$('.ceb .menu-block1 .tab-logo-kefu').bind("mouseenter",function(){
		$('.ceb .menu-block1 .tab-kefu .tab-zichan-lab')
		.css("display",'block');
	})
	$('.ceb .menu-block1 .tab-logo-kefu').bind("mouseleave",function(){
		$('.ceb .menu-block1 .tab-kefu .tab-zichan-lab')
		.css("display",'none');
	})
	
	
	

	$('.ceb .menu-block2 .tab-logo-cart').bind("mouseenter",function(){
		$('.ceb .menu-block2 .menu-cart .tab-zichan-lab')
		.css("display",'block');
	})
	$('.ceb .menu-block2 .tab-logo-cart').bind("mouseleave",function(){
		$('.ceb .menu-block2 .menu-cart .tab-zichan-lab')
		.css("display",'none');
	})


	$('.ceb .menu-block2 .tab-logo-zichan').bind("mouseenter",function(){
		$('.ceb .menu-block2 .menu-zichan .tab-zichan-lab')
		.css("display",'block');
	})
	$('.ceb .menu-block2 .tab-logo-zichan').bind("mouseleave",function(){
		$('.ceb .menu-block2 .menu-zichan .tab-zichan-lab')
		.css("display",'none');
	})
	
	$('.ceb .menu-block2 .tab-logo-like').bind("mouseenter",function(){
		$('.ceb .menu-block2 .menu-like .tab-zichan-lab')
		.css("display",'block');
	})
	$('.ceb .menu-block2 .tab-logo-like').bind("mouseleave",function(){
		$('.ceb .menu-block2 .menu-like .tab-zichan-lab')
		.css("display",'none');
	})
	
	$('.ceb .menu-block2 .tab-logo-kefu').bind("mouseenter",function(){
		$('.ceb .menu-block2 .tab-kefu .tab-zichan-lab')
		.css("display",'block');
	})
	$('.ceb .menu-block2 .tab-logo-kefu').bind("mouseleave",function(){
		$('.ceb .menu-block2 .tab-kefu .tab-zichan-lab')
		.css("display",'none');
	})
	
	
	
	
	$('nav .nav-m a').bind('click',function(){
		
		$('nav .nav-m a').removeClass('acv').eq($(this).index()).addClass('acv')
	})
	


	$('.main .promotionbox .promotionbox3 .promotionbox3left ul li img').bind('mouseenter',function(){

		$('.main .promotionbox .promotionbox3 .promotionbox3left ul  li img').removeClass('act').eq($(this).index()).addClass('act')
		
		var src = $(this).attr('src')
		$('.main .promotionbox .promotionbox3 .promotionbox3right img').attr("src",src);
		$(this).css("border",'1px solid #000')
})
	
	
	$('.main .promotionbox .promotionbox3 .promotionbox3left ul li img').bind('mouseleave',function(){
		$(this).css("border",'0')
	})
})

//$(function(){
//	$('.main .promotionbox .promotionbox3 .promotionbox3left ul li img').click(function(){
//		$('.main .promotionbox .promotionbox3 .promotionbox3left ul li img').removeClass('act');
//		var src = $(this).attr('src');
//		//console.log(src);
//		$(".main .promotionbox .promotionbox3 .promotionbox3right img").attr("src",src);
//		$(this).addClass("act").siblings().removeClass("act")//为了区分当前小图片，为其加一个class
//		 
//	})
//
//})
