# 事件的概念

什么是事件：
		 事件是发生并得到处理的操作，即：事情来了，然后处理。
	事件触发：
		当用户点击按钮时，我们就说，触发了按钮的onclick事件。
	事件处理程序：
		也就是响应（处理）某个事件的函数。

事件与事件处理程序建立对应关系的过程我们称为给事件绑定函数，或给事件注册函数。现在常用的绑定方式有DOM0级，DOM2级和IE特殊方式。

1．浏览器的默认行为
	2．阻止默认行为（兼容）
	3．事件监听器（兼容）
	4．事件捕获。

1．事件委托机制
	2．拖拽效果（onmousedown/onmousemove/onmouseup）
	3．复习并深入JSON对象/构造函数

## DOM0

1，使用HTML属性指定方式，如果要调用函数，这个函数在JS中要处于全局作用域。
	<input type="button" id = "button1" value="按钮" onclick="queren(this)">
		function queren(data) {
			 alert(data.value);
		}
	2，匿名函数方式
	var btn1=document.getElementById(" button1 ");
	btn1.onclick = function () {
		 alert(this.value);
	}
	btn1.onclick =“”; 		//可取消两种方式事件处理函数的绑定。
	注：this代表触发事件的当前元素，在例子中代表按钮button1 。

## 常见DOM0事件 

onchange 域的内容被改变（下拉列表选择改变）。
	onclick 当用户点击某个对象时调用的事件。
	ondblclick 当用户双击某个对象时调用的事件。
	onfocus 元素获得焦点。
	onblur 元素失去焦点。
	onkeydown 键盘上某个按键被按下。
	onkeyup 键盘上某个按键被松开。
	onkeypress 键盘上某个按键被按下并松开。
	onload 一张页面或一幅图像完成加载。
	onmousedown 鼠标按钮被按下。
	onmouseup 鼠标按键被松开。
	onmouseover 鼠标移到某元素之上。
	onmouseout 鼠标从某元素移开。
	onmousemove 鼠标被移动。
	onreset 重置按钮被点击， 引发Form重置事件。
	onresize 窗口（body）或框架被重新调整大小。
	onsubmit 确认(提交)按钮被点击， 引发Form提交事件。
	onunload （body）用户退出（刷新）页面。
		注：所有DOM0事件都有“on”作为开头。

## DOM2级

DOM0级很浓的绑定味道，DOM2真正体会注册的概念。
	addEventListener和removeEventListener（事件监听器）
		 这两个方法接受3个参数，要处理的事件名，处理函数，和一个布尔值。这个布尔值代表在捕获节点调用事件处理程序（true）还是在冒泡过程中调用。
	function dianjia(){ //事件处理程序
		 alert('this is a div');
	}
	var div1=document.getElementById("a");
	div1.addEventListener("click",dianjia,false); 	//为click事件注册事件处理程序
	div1.addEventListener("click",function(){alert("注册的匿名事件处理程序");},false);
	//匿名方式为click事件注册第二个事件处理程序
	div1.removeEventListener(“click”, dianjia, false);//移除事件处理程序，匿名添加的事件处理函数无法移除。

## IE事件注册 

IE8及其以前的版本不支持DOM2级注册方式，自己提供了attachEvent和detachEvent来实现相似功能。
	注销时同样需要传入相同的参数，匿名函数无法注销。
	function dianjic(){
 		//event.stopPropagation();
		 alert(this === window); 
		 //alert('this is c div');
	}
	div1.attachEvent(“onclick",dianjia);
	div1.attachEvent(“onclick", function(){alert("注册的匿名事件处理程序");});
	div1.detachEvent(“onclick", dianjia);

## 事件冒泡

●事件捕获其实有三种方式，事件冒泡只是其中的一种：

（1）IE从里到外（inside→outside）的冒泡型事件。

（2）Netscape4.0从外到里（outside→inside）的捕获型事件。

（3）DOM事件流，先从外到里，再从里到外回到原点（outside→inside→outside）的事件捕获方法

●不是所有的事件都能冒泡。以下事件不冒泡：blur、focus、load、unload。

●事件捕获方式在不同浏览器，甚至同种浏览器的不同版本中是有所区别的。如Netscape4.0采用捕获型事件解决方案，其它多数浏览器则支持冒泡型事件解决方案，另外DOM事件流还支持文本节点事件冒泡。

●事件捕获到达顶层的目标在不同浏览器或不同浏览器版本也是有区别的。在IE6中HTML是接收事件冒泡的，另外大部分浏览器将冒泡延续到window对象，即……body→documen→window。

●阻止冒泡并不能阻止对象默认行为。比如submit按钮被点击后会提交表单数据，这种行为无须我们写程序定制。

## 几种事件绑定方式对比

​		DOM0----------DOM2-----------IE
事件名		事件名以“on”开头-----事件名前没有“on”-----事件名以“on”开头
冒泡		支持-----支持，最后属性设为false-----支持
捕获		不支持-----支持，最后属性设为true-----不支持
阻止冒泡		event.stopPropagation()-----event.stopPropagation()-----event.cancelBubble=true
多处理程序注册	不支持-----支持-----支持，执行顺序与注册顺序相反
删除事件绑定		设置为空或null-----用处理程序名删除，匿名绑定不能删除-----用处理程序名删除，匿名绑定不能删除
兼容性		全兼容-----非IE-----IE

## event对象 

event对象：
		event对象只在事件发生（如：点击事件）的过程中才有效。如：当点击按钮时，就会自动产生event对象。event对象是自带的对象，是固定写法。
	在W3C标准中，直接在函数中声明该参数即可
		btn.onclick = function(event) { //event在调用和函数定义时，都写上也是考虑兼容问题};
	兼容性写法，支持老版本的IE
		var evt = event ? event : window.event;或者 var evt = event || window.event;

**属性/方法	-----	类型	-----	读写	-----	说明**
	bubbles	---	Boolean	---	只读	---	事件是否冒泡
	cancelable	---	Boolean	---	只读	---	是否可以取消事件的默认行为
	currentTarget	---	Element	---	只读	---	当前正在处理事件的那个元素（IE是srcElement）
	detail	---	Integer	---	只读	---	与事件相关的细节信息
	eventPhase	---	Integer	---	只读	---	阶段：1捕获，2处于目标，3冒泡
	preventDefault()	---	Function	---	只读	---	取消事件的默认行为（例： keydown）
	stopPropagation()	---	Function	---	只读	---	取消进一步的捕获或冒泡
	target	---	Element	---	只读	---	事件的目标
	type	---	String	---	只读	---	事件的类型

## event对象的键盘事件相关属性

altKey 返回当事件被触发时，"ALT" 是否被按下。
	shiftKey 返回当事件被触发时，"SHIFT" 键是否被按下。
	ctrlKey 返回当事件被触发时，"CTRL" 键是否被按
	keyCode（火狐用which）获取按键的键码
	尝试实现简单聊天室。
	event请使用兼容方式
	注：event的兼容写法
	var evn=event||window.event; //取得event对象，兼容IE的写法
	var ele=evn.currentTarget||evn.srcElement; //当前事件元素,兼容IE写法
	var keycode = evn.which || evn.keyCode;//兼容火狐的写法

## event对象的鼠标事件相关属性

button 鼠标按键事件中按了哪个鼠标键，0左1中2右，低版本IE：1左2右3左右4滚轮5左加滚轮6右加滚轮7三个同时
	clientX 基于浏览器可视区域的左上角的鼠标x坐标。
	clientY 基于浏览器可视区域的左上角的鼠标y坐标。 。
	screenX 基于显示器左上角的鼠标x坐标。
	screenY 基于显示器左上角的鼠标y坐标。
	pageX 基于网页左上角的鼠标x坐标。
	pageY 基于网页左上角的鼠标y坐标。
	offsetX 基于事件元素(事件源)左上角的鼠标 x 坐标。
	offsetY 基于事件元素(事件源)左上角的鼠标 y 坐标。

## 阻止浏览器默认行为 

w3c使用 event.preventDefault()，IE则是使用event.returnValue = false;
		注：事件处理函数直接返回false也行的。
	按键事件结束后字符应该输入到文本框，超链接跳转，表单提交，右键菜单的弹出等。
		if (event.preventDefault) { 
			 event.preventDefault(); 
		 } else { 
			 event.returnValue = false; 
		 }

## 事件的封装 

function(ele,event,func){
		 if(ele.addEventListener){
			ele.addEventListener(event,func,false);
		} else if(ele.attachEvent)
		 {
			ele.attachEvent('on'+event,func);
		 } else
		 {
			ele['on'+event]=func;
		 }
	 }

## 鼠标拖拽 

1，给目标元素添加onmousedown事件；document添加onmousemove事件和onmouseup事件。
	2，目标元素的onmousedown事件，计算鼠标和目标元素的坐标差。
		鼠标和元素的横坐标差 x = 鼠标的clientX –目标元素的left 
		鼠标和元素的纵坐标差 y = 鼠标的clientY–目标元素的top 
		同时记录鼠标键被按下。
	3，document的onmousemove事件，如果鼠标是按下状态，让目标元素跟随鼠标。
		目标元素的left = 鼠标的clientX + 鼠标和元素的横坐标差 x。
		目标元素的top = 鼠标的clientY + 鼠标和元素的纵坐标差 y。
	4，document的onmouseup事件，记录鼠标键被放开。
		拖拽事实上是给跟随鼠标增加了一个开关，鼠标按下打开开关，鼠标弹起关闭开关。
注： onmousemove和onmouseup绑定到document上代替目标元素来做事情，这就是事件委托。

## 阻止浏览器默认行为 

w3c使用 event.preventDefault()，IE则是使用event.returnValue = false;
	注：事件处理函数直接返回false也行的。
	按键事件结束后字符应该输入到文本框，超链接跳转，表单提交，右键菜单的弹出等。
		if (event.preventDefault) { 
			 event.preventDefault(); 
		 } else { 
			 event.returnValue = false; 
		 }