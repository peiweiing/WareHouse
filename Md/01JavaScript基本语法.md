# JS简介：JS基本介绍

## 简介:

 JavaScript一种在浏览器中解释运行的脚本语言，它的解释器被称为JavaScript引擎，为浏览器的一部分，是广泛用于客户端的脚本语言，最早是在HTML网页上使用，用来给HTML（HTML5）网页增加动态功能。在1995年时，由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。

 可以实现：用户交互（表单验证）、网页特效（漂浮的广告）、客户端的显示（页面内容，速度快）、网页游戏、地图搜索、股市信息查询、web聊天。。。

## JS与H5的关系

H5狭义上，指HTML的第五个版本；广义上指web前端的所有技术，由于web前端是在H5出现后开始火爆起来，所以，习惯上把web前端也叫H5。web前端开发也叫H5开发。
 H5包括 HTML，CSS，JavaScript，等一切前端技术。

## Javascript组成部分：ECMAScript、BOM、DOM

ECMAScript：是一种由Ecma国际(前身为欧洲计算机制造商协会),定立ECMA-262标准化的脚本程序设计语言。规定了JavaScript 脚本的核心语法，如 数据类型、关键字、保留字、运算符、对象和语句等。
BOM： 定义了 JavaScript 操作浏览器的接口，提供了访问某些功能（如浏览器窗口大小、版本信息、浏览历史记录等）的途径以及操作方法。
DOM： 定义了 JavaScript 操作 HTML 文档的接口，提供了访问 HTML 文档（如body、form、div、textarea等）的途径以及操作方法。

## 编写及运行JS；

如何在HTML中使用JS
<body>
<script type="text/javascript">//Script标签
 //第一句javascript代码：
 alert(“我用来弹出消息框！”) ;//js代码
 //第二句：
 document.write(“我会把内容显示在页面上，能够输出任何HTML代码！”);//每句代码后要写分号
</script>

</body>

注：JS大小写敏感



一、script标签和属性，可以写在HTML中任意位置，可出现多个，一般会写在<head>标签中

<script type="text/javascript" > JS代码写在这里。</script>

language已废弃。原来用于代码使用的脚本语言。由于大多数浏览器忽略它，所以不要用了。

src 表示要引入的外部文件

type 表示脚本语言的类型

二、使用script标签引入外部javaScript文件

 <script type="text/javascript" src="demo1.js" ></script>

注意：

1、引入文件不可以使用单标 <script type="text/javascript" src="demo1.js“/ >

2、引入文件不可以在标签中写代码 <script src="demo1.js">alert('xxxx')</script>;

三、注释
		单行注释 //
		多行注释 /* */
		文档注释 /** */
	四、运行顺序
 		Javascript和HTML代码在同一个文件中写，它们的执行顺序是从上朝下，谁在前先执行谁。
	五、编辑工具和运行环境
		编辑工具：写代码的工具
 			如：dreamweaver，editplus，Notepad++
		运行环境：看结果的地方
			 如：IE，firefox，chrome

## JS变量

变量用来在计算机中存储和表示数据。
	变量定义（声明）：
		 var age; //var 是关键字，age是变量名
	赋值：
		 age = 20; //20是数据 “=”是赋值
	定义的同时赋值：
		 var age=20；
	可以一次定义多个变量：
 		var myname=“刘德华", age=18，weight=138;
	使用变量：
 		alert(myname);
tip： 变量必须先赋值再使用

## JS的数据类型

Undefined类型
		Undefined类型只有一个值undefined，它是变量未被赋值时的值。
	Null类型
		Null类型也只有一个值null 。Null类型的语义是“一个空的对象引用”，注意和空字符串区别开。
	Boolean类型
		布尔有两种取值true和false，表示真或假。非0代表真，0代表假。
	String类型
		又叫字符串类型，用双（单）引号括起来的一串字符。
	Number类型
		包含整数± 9007199254740992 和浮点数±1.7976931348623157 × 10的308次方。
	Object类型
		JavaScript中最为复杂的类型就是Object，它是一系列属性的无序集合。
	使用typeof关键字查看变量类型
		var age=20;
		alert(typeof age)；

## JS变量的命名规则和关键字

一、变量命名规则
		不以数字开头，数字、字母以及下划线均可用来组成变量名，但不能使用关键字及保留字。
	二、关键字及保留字
	三、变量命名规范
		 尽量使用有意义的单词作为变量名，也尽量不要与HTML、CSS中的关键字冲突。有驼峰命名法和西班牙命名法（以小写字母b,f,i,s开头表示类型，后接大写开头的有意义的单词）等等

## JS运算符

一、算术（数学）运算符，由算术运算符组成的式子叫算术表达式，结果是数值类型	

二、赋值运算符

三、字符串连接符，字符串拼接表达式

​	+运算符用于把文本值或字符串变量加起来（连接起来）。
​		例: 
 			var str=“java”;
​			 var str=str+”script”;
​			结果是 javascript

​			 var str1=“苹果单价:”;
​				 var str1=str1+5;	 //把数值类型与字符串类型连接，结果会得到字符串类型
​				结果是 苹果单价:5

四、关系运算符，由关系运算符组成的式子叫关系表达式，关系表达式返回的结果是布尔类型

## JS变量的类型转换

一、JS是弱类型语言
		1）变量声明时不需要指明类型
			var age;
			age=20;
		2）变量的类型在使用中可变
			age=“年龄:”+age;
注：JS变量的类型由其存放的数据类型确定

二、JS的类型转换
	1）隐式（自动）转换，不同的数据类型参与表达式运算过程时将会转换为同一类型进行运算字符串与数值类型运算的隐式转换规则：
		1.字符串加数字,数字就会转成字符串。
		2.数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成NaN。字符串减数字也一样。两个字符串相减也先转成数字。
		3.乘，除，大于，小于跟减的转换也是一样。

2）显示（手动）转换
		字符串转数值：
		parseInt()、parseFloat()、Number()
		数值转字符串:
		toString()
注：NaN表示不是数字,但是仍是数值类型， not a number，NaN是Number类型。

三、 Number与parseInt和parseFloat的区别
	1） parseInt 和parseFloat 会按顺序一个个转字符串中的字符，直到碰到转不成数字的字符为止，如果第一个字符就转不成数字将返回NaN。
	2） parseInt 认为小数点不能转， parseFloat 会转换遇到的第一个小数点。
	3）Number对整个字符串进行转换，根据有没有包含一个小数点来确定转换为整数还是浮点，有任意字符不能转成数字时将返回NaN。

### 四舍五入、乘方

1，四舍五入取整
		var num1=Math.round(23.49);
		alert(num1);//结果23
	2，乘方
		var num2=Math.pow(3,2);//3的2次方
		alert(num2);//结果9

### 16进制和8进制

八进制：
		逢八进一，有效数字是:0,1,2,3,4,5,6,7
	十六进制：
		逢十六进一，有效数字是:0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F 其中A-F表示10-15；
	JS中八进制的表示：
		八进制是以“0”（零）打头的数字； 如： 012,06,025等；
		var num1=012;
	JS中十六进制的表示：
		十六进制的数以“0x”打头，如0xA, 0X1B
		var num2=0x1B;

## 逻辑运算符

&&（与）（and）： 例如：(x < 10 && y > 1) 只有&&两边表达式结果都为真，逻辑表达式结果才
为真。true

||（或） （or）：例如：(x==5 || y==5) 只要||两边表达式的结果有一个为真，逻辑表达式结
果就为真。false

!（非）（ not）：例如：!(x==y) 表达式结果为真，逻辑表达式结果为假；表达式结果为假，
逻辑表达式结果为真。true

逻辑短路:
当逻辑运算符的前面的变量或者表达式（式子）能够决定整个表达式的结果时，则逻辑运算符后面的变量或者
表达式（式子），不再进行运算。

注： 运算符的优先级

### 交换两个数

步骤：1，添加两个文本框和一个按钮，分别设置id值为text1、text2、btn1、
		 2，编写函数function test1(){}，给按钮添加属性onclick=“test1()”
		 3，在函数test1中编写交换文本框内容的代码
 			a)使用document.getElementById().value;分别取得两个文本框的内容，赋值给两个变量num1,num2
 			b)定义临时变量temp1存储num1的值
 			c)将num2的值赋给num1
			 d)将temp1的值赋给num2
			 e)使用document.getElementById().value=num1将交换后的值显示在文本框中

### 转义字符

字符串中的字符包括，数字，字母，符号，还包括字符字面量（其它语言中叫转义字符）。
	1，在JS中有特殊含义的字符,比如引号。
	2，不能利用键盘输入的特殊符号，比如换行。

