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

	