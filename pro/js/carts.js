$(function(){
	//取出cookie里的内容
	var $list=$('.goods-list');
	var jsonStr = getCookie('carts');
	if(jsonStr==undefined){
		//没有商品添加
	}else{
		//有商品添加
		var arr=JSON.parse(jsonStr);
		for(var i=0;i<arr.length;i++){
			var prodcutObj = arr[i];
			var $li=$('<li></li>');
			$list.append($li);
			
			var $img=$('<img/>');
			$li.append($img);
			$img.attr('src',prodcutObj.src);
			
			$p=$('<p></p>');
			$li.append($p);
			$p.html(prodcutObj.title);

			var $nn = 103530 * prodcutObj.num
			$div1=$('<div></div>');
			$li.append($div1);
			$div1.html($nn);

            $remove = $('<button class="jj">-</button>');
            $li.append($remove);
            $num = $('<input class="xx"/>');
            $num.val(prodcutObj.num);
            $li.append($num);

            $add = $('<button class="ja">+</button>');
            $li.append($add);

            $a = $('<a>删除</a>');
            $li.append($a);

			//点击删除移除cookie

		}
	}
	$('.goods-list a').bind("click",function () {
        $('.goods-list').css("display",'none')
		removeCookie('carts')
    })
})
