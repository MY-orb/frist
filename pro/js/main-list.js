$(function(){
	
	var $ul = $('<ul></ul>')
	$('#menu').append($ul)
	$ul.append('<li class="actt">男士</li><li>女士</li><li>宝宝</li><li>包包</li><li>鞋子</li><li>lo</li><li>钻石</li><li>戒指</li><li>裤子</li><li>海外馆</li>')
	
//	var $div = $('<div class="tt-menu"></div>')
//	$('#menu').append($div)
//	$ul.append('<div class=actt><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div><div><p>箱包</p></div>')
//	$('#menu ul li').hover(function(){
//		$('#menu ul li').removeClass('actt').eq($(this).index())
//		.addClass('actt')
//
//		$('#menu .tt-menu div').removeClass('actt').eq($(this).index()).addClass('actt')
//		$('#menu .tt-menu .actt').css("display",'block')
//	})
//	
	
	
	$('.footer-fixe .footer-fixe-main a').bind("click",function(){
		$('.footer-fixe').css("display",'none');
	})
	
	$('.bds-float .bd-header a ').bind("click",function(){
		$('.bds-float .bds-floatmain').animate({left:222,height:20},800)
		$('.bds-unfold').css("display",'block');
	})
	
	
	
	$('.bds-unfold').bind("click",function(){
		$('.bds-float .bds-floatmain').animate({left:0,height:252},800)
		$('.bds-unfold').css("display",'none');
	})
	
	
	
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
	
	
	
	
	
//	if($('.bds-float .bds-floatmain').css("left",'220')){
//		$('.bds-float .bds-floatmain').css("display",'none');
//	}
//	
	
	
	var currt =0;
	$('.right-b').on("click",function(){		
	
//		console.log(currt)
//		if(currt==-1){
//			$('.lits .lit1').animate({left:0},1000);
//		}
//		else 
		if(currt==0){
			$('.lits .lit1').animate({left:-1210},1000);
			$('.lits .lit2').animate({left:0},1000);
		}
		else if(currt==1){
			$('.lits .lit2').animate({left:-1210},1000);
			$('.lits .lit3').animate({left:0},1000);
		}
		else{
			currt=1;
		}	
		currt++
	})
	$('.left-b').on("click",function(){		
		
//		console.log(currt)
//		if(currt==2){
//			$('.lits .lit1').animate({left:-1210},1000);
//		}
//		else
		if(currt==2){
			$('.lits .lit3').animate({left:1210},1000);
			$('.lits .lit2').animate({left:0},1000);
			
		}
		else if(currt==1){
			$('.lits .lit2').animate({left:1210},1000);
			$('.lits .lit1').animate({left:0},1000);
		}
		else{
			currt=1;
		}
		currt--
	})
	var $fon = $("<p class='fon'>布尔兄弟</p>")
	$('.lits li div').append($fon)
	$fon.css("display",'none')
	
	$('.lits li div').hover($fon.css("display",'block'));
	
	var $fon1 = $("<p class='fon1'></p>")
	$('.lits li div').append($fon1)
	$fon.css("display",'none')
	
	$('.lits li div').hover($fon.css("display",'block'));
	
	$('.main .store-link li').mouseenter(function(evt){
//			$('.menu li').removeClass('active')//清除active
//			$(this).addClass('active')//被点击的定义为active
			//一句话、

		$('.main .store-link li').removeClass('active').eq($(this).index())
		.addClass('active')

		$('.storesame div').removeClass('ae').eq($(this).index()).addClass('ae')
			
	})
})