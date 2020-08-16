
// 获取目标函数  #id   .class   p
	function$(str){
		if (str.charAt(0)=="#") {
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}


 //event对象兼容性写法
	// var evt = event ? event; window.event;//取得event对象，兼容IE的写法
	var evt = event || window.event;//取得event对象，兼容IE的写法
	var eve=evt.currentTarget||evt.srcElement; //当前事件元素,兼容IE写法
	var keycode = evt.which || evt.keyCode;//兼容火狐的写法

//样式获取的兼容性处理，修改样式用style，返回或设置样式用.className。
	function getStyle(obj, attr){
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return window.getComputedStyle(obj, false)[attr];
		}
	}	



// 点击跳转到新页面并到对应位置
	$(document).click(function(){
		var data = $(this).attr("data-id");//获取自定义属性并定义
		console.log(data);
		window.open('../pages/detail.html'+"#" + data)//跳转传参对应页面的id标签位置
	})

// 移动到图片上与离开图片效果
	$(document).mouseover(function(){
		$(this).find("span").stop().slideDown();//将这个元素的后代元素span的事件停止并向下滑动
		$(this).find(".img").stop().css("opacity","0.2");
	});
	$(document).mouseout(function(){
		$(this).find("span").stop().slideUp();//将这个元素的后代元素span的事件停止并向上滑动
		$(this).find(".img").stop().css("opacity","1");
	});

// 下拉菜单栏的显示隐藏和切换图片
	var toggle = true;
	$("#cimg").click(function() {//点击cimg元素执行下面方法
		console.log("toggle布尔变量必须在执行函数外边")
		if(toggle){
			$("#head").slideDown();//点击后将弹框显示
			$(".cimg").attr("src", "./img/up.png");//点击后更换图片
			toggle=false;
		}else{
			$("#head").slideUp();//点击后将弹框隐藏
			$(".cimg").attr("src", "./img/down.png");//点击后更换图片
			toggle = true;
		}
	});

// 获取滚动距离实现动态返回顶部按钮及动画
    $(document).scroll(function(){//滚动时执行下面方法
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ; //获取滚动距离
        let offsetWidth = document.body.offsetWidth;//获取屏幕的宽度
        var lookup = document.getElementById( "lookup" );
        var up = document.getElementById( "up" );
			if(scrollTop >200) { //当滚动距离大于200时
				lookup.style.display = "block"; 
				lookup.style.background="#FFF";
				up.style.color="#000";
			} else { 
				lookup.style.display = "none"; 
			} 

		console.log(scrollTop);//打印滚动距离
		console.log(offsetWidth);//打印设备的宽度
		
			if( scrollTop >=300 && offsetWidth <=750) { //如果滚动距离大于等于300并且设备宽度小于等于750时
				$(".texting").addClass("mate"); //为元素添加css类名
			}else if( scrollTop >=10 && offsetWidth >750 && offsetWidth <=1024) { 
				$(".texting").addClass("mate"); 
			}else if( scrollTop >=500 && offsetWidth >1024) { 
				$(".texting").addClass("mate"); 
			}
	});
	
// 点击元素时增加自定义属性并设置session存储
    $("#btncss").click(function(){
        var f2 = $(this).attr('data-id');
        // console.log(f2);
        if(f2==1){//如果标签的自定义属性值等于1时
            $(this).attr("data-id","2");
            sessionStorage.setItem("data", "2");
            btncs.style.display = "none";
            imgsrc.setAttribute('src','https://zihua.lovehou.com/addons/ewei_shopv2/plugin/commission/template/mobile/default/img/gengduo1.png');
        }else{
            $(this).attr("data-id","1");
            sessionStorage.setItem("data", "1");
            btncs.style.display = "flex";
            imgsrc.setAttribute('src','https://zihua.lovehou.com/addons/ewei_shopv2/plugin/commission/template/mobile/default/img/gengduo1.png');
        }
    });
    