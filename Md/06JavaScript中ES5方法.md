# 严格模式

HTML_严格模式与混杂模式

Doctype可声明三种DTD类型，分别表示严格版本、过渡版本以及基于框架的 HTML 文档。

 当浏览器厂商开始创建与标准兼容的浏览器时，他们希望确保向后兼容性。为了实现这一点，他们
创建了两种呈现模式：标准模式和混杂模式

**标准模式**中，又称严格模式，是指浏览器按照 W3C 标准解析代码

**混杂模式**中，页面以一种比较宽松的向后兼容的方式显示。（混杂模式通常模拟老式浏览器的行为以防止老站点无法工作）。

浏览器根据DOCTYPE是否存在以及使用的哪种DTD来选择要使用的呈现方法。
	 	如果XHTML、HTML 4.01文档包含形式完整的DOCTYPE，那么它一般以标准模式呈现。
		 包含过渡DTD和URI的DOCTYPE也导致页面以标准模式呈现，但是有过渡DTD而没有URI会导致页面以混杂模式呈现。
		 DOCTYPE不存在或形式不正确会导致HTML和XHTML文档以混杂模式呈现。
		html5既然没有DTD，也就没有严格模式与宽松模式的区别，html5有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。

### 严格模式目的：

消除JS语法不合理、不严谨减少怪异行为
	消除代码不安全之处，保证代码运行安全
	提高编译运行效率
	为将来新版本JS做铺垫

**语法：**
		“use strict”
	浏览器支持：
		IE10+ firefox 4+ Safari 5.1+ Chrome



# ES5新增的数组的方法

indexOf 		//在数组中查找一个数所在的位置，
		var arr1 = [12,23,34,45,56,67];
		console.log(arr1.indexOf(23)); 		//结果是1
	forEach		// 对数组的每个元素做某个处理（函数的方式）
		var arr1 = [12,23,34,45,56,67];
		arr1.forEach(alert);		//显示数组的每个元素
	foEach()函数的参数是个回调函数，forEach对应的回调函数有三个参数（数组元素内容，元素索引，数组本身）
		arr1.forEach(arrInc);
		function arrInc(num,index,arr){
			arr[index] = num+1; //每个元素都加1
	}

map：把原始数组的每个元素进行某种处理后，产生（映射）一个新的数组。回调函数参数是数组元素本身。
		var arr1 = [12,23,34,45,56,67];
		var arr2 = arr1.map(arrSqr);
		function arrSqr(num){
		return num*num
	}
	filter： 过滤的意思，根据条件过滤数组的元素，filter的回调函数需要返回的是boolean类型的值。
		var arr1 = [-12,23,-34,45,-56,67];
		var arr2 = arr1.filter(eqZero); //过滤掉所有小于等于0的数，留下大于0的数
		function eqZero(num){
		return num>0;
	}

浏览器支持：Opera 11+ fireFox 3.6+ Chrome 8+ iE 9+ Safari 5+

**函数也是引用类型，跟数组一样，函数名和数组名都是保存着地址。**

回调函数就是一个通过函数指针(地址)调用的函数。如果你把函数的指针（地址）作为参数传递给另一个函数，当这个指针被用来调用其所指向的函数时，我们就说这是回调函数。回调函数不是由该函数的实现方直接调用，而是在特定的事件或条件发生时由另外的一方调用的，用于对该事件或条件进行响应。
 就是说你先按要求提供一个函数给某个方法，在合适时候这个方法会去调用你提供的自定义函数。

## 字符串的定义和创建

字符串就是一串字符，由双（单）引号括起来。字符串是 JavaScript 的一种基本的数据类型。
	1、var str=‘亲’； 基本类型
		定义一个字符串变量str，内容为‘亲’
	2、var str = new String(“hello”); 引用类型
		定义一个字符串变量str，内容为hello，
	 注意此刻str为object(对象)类型
 	用new产生的变量都是引用类型的变量，也叫对象。
	

var s1 = "string";
	var s2 = new String("string");
	console.log(typeof(s1)); //输出的是 string 
	console.log(typeof(s2)); //输出的 object

## 字符串的常用属性和函数

字符串的属性
		 length：表示字符串的长度；
		 如 : var str=“how are you”;
 			alert(str.length);
	字符串的函数（方法）--字符串的获取方法
		charAt(3) //获取下标为3的字符
		charCodeAt(3) //获取下标为3的字符的编码
		fromCharCode(94) //编码转换成字符
	该方法是 String 的静态方法，所以用String调用， 
			 例：String.fromCharCode(98,99);

## 字符编码

ASCII（美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统，主要用于显示现代英语和其他西欧语言。
	GBK 共收录了21003个汉字，英文使用单字节编码，兼容ASCII编码，中文部分采用双字节编码。
	Unicode为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。
	UTF-8是一种针对Unicode的可变长度字符编码。用在网页上可以统一页面显示中文简体繁体及其它语言。

## search方法

字符串的查找方法
		search() 正则匹配 (返回索引位置，没有找到就返回-1)
		function test(){
			var str = "what Are you 弄啥哩!";
			/*
			var strNew = str.search("are");
			document.write(strNew); //显示-1；因为，区分大小写
			*/
			var strNew = str.search(/are/i); //用正则表达式，i表示不区分大小写
			document.write(strNew); //显示5；因为，不区分大小写
		}

## match方法

字符串的查找方法
		match () 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。该方法类似 indexOf()和lastIndexOf()，但是它返回指定的值，而不是字符串的位置。将匹配的内容存入数组（后期讲正则表达式详讲）
		stringObj.match(rgExp) 
function test(){
	var str = "what Are you 弄啥哩!";
	/*
	var arr = str.match("are");
	*/
	var arr = str.match(/are/i);
	for(var i in arr){
		document.write(arr[i]+"<br>");
	}
}

## replace方法

字符串的替换
		replace 替换字符串
 		如： var str="how are you";
 			document.write(str.replace("are","old are"));
			这里的替换只能执行一次，不能够进行全局匹配，而且区分大小写，如果需要全局匹配，则应使用正则表达式： str.replace(/are/gi,“old are”) ：表示把str中所有的are，全部替换为 old are，g表示进行全局匹配，i表示匹配的时候忽略大小写；
	function test(){
		var str = "what Are you 弄啥哩 how are you !";
		//var strNew = str.replace("are","old are");
		//var strNew = str.replace(/are/i,"old are");
		var strNew = str.replace(/are/gi,"old are");
		document.write(strNew+"<br>");
	}

## slice和substring方法

截取字符串：
		slice（start,end） 提取字符串的某个部分，并以新的字符串返回被提取的部分。
			两个参数表示截取的开始下标和结束下标。
		substring(start,stop) 提取字符串中介于两个指定下标之间的字符，并以新的字符串返回被提取的部分。
			两个参数表示截取的开始下标和结束下标。
	区别， **slice**参数支持**负数**（从后往前算），**substring**不支持。

## split方法

字符串分割：
	split 根据分隔符、拆分成数组
		var str=“aaa1bbb1cc1d1”;
		var arr=str.split(“1”);



## 大小写转换：

toLowerCase（转换为小写）

toUpperCase（转换为大写）



## ==与===

===(恒等)
1、如果类型不同，就[不相等] 
2、如果两个都是数值，并且是同一个值，那么[相等]。
3、如果两个都是字符串，每个位置的字符都一样，那么[相等]；否则[不相等] 
4、如果两个值都是true，或者都是false，那么[相等]。
5、如果两个值都引用同一个对象或函数，那么[相等]；否则[不相等]。
6、如果两个值都是null，或者都是undefined，那么[相等]。
	==（等同）
1、如果两个值类型相同，进行 === 比较。
2、如果两个值类型不同，他们可能相等。根据下面规则进行类型转换再比较
 a、如果一个是null、一个是undefined，那么[相等]。 
 b、如果一个是字符串，一个是数值，把字符串转换成数值再进行比较。
 c、如果任一值是 true，把它转换成 1 再比较；如果任一值是 false，把它转换成 0 再比较。
 d、任何其他组合，都[不相等]。