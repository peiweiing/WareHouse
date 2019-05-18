# PHP介绍	

**PHP是服务器端语言**
		服务器端除了PHP还有JSP、ASP。
		PHP：personal   home   page；

**PHP优点**
		跨平台，同时支持多种数据库
		安全性和效率好
		使用成本低（linux   apache   mysql   PHP内核）
		相对jsp，和asp.net简单
		开发源码（可以做二次开发）/开源软件
		在PHP4   PHP5   以及即将发布的PHP6中更好的支持面向对象

**PHP缺点**
		安装比较复杂，配置比较多
		太灵活，解释执行（编译执行），所以有些错误，到真正运行的时候才会暴露

## PHP环境搭建

phpStudy(PHP运行环境一键安装包)
		phpStudy是搭建服务器的工具，我需要把php的代码放在phpStudy工具里的“www”目录下，“www”目录就是服务器的目录，即放置项目代码的目录。
		 如：把index.html文件拷贝至www下，则用服务器的方式打开index.html的做法
是：在浏览器中输入http://ip地址/index.html

假如：
	 www的全路径是：D:\phpStudy\WWW，
	 ip地址是：10.35.165.10
	那么：在浏览中输入：http://10.35.165.10就相当于D:\phpStudy\WWW

## PHP语法

**PHP的简单了解**

​	文件扩展名 php
​		代码写在<?php 与 ?>之间
​			如：<?php 
​					echo "hello,world";
​				?>
​		PHP代码每句话以分号结束
​		PHP的注释：
​			单行用 // 或 #
​			多行用 /**/
​	自己的机子访问自己的服务器地址栏中输入：localhost或者127.0.0.1

**PHP的变量**

​	php中，定义一个变量要以$符号打头，变量名区分大小写
​			如：$age = 250;
​		php 的变量的数据类型，是变化的，php变量的数据类型是由运行时的上下文决定。
​			如: $a=90; //相当于我们定义了一个变量 $a,并赋值90
​			 $a=”hello”; //表示$a 的类型变化.

**PHP的数据类型**

有三大类
1. 基本数据类型
  1.1 整型
  1.2 小数型(浮动数) 包含单精度和双精度
  1.3 布尔类型 (表示真，和 假)
  1.4 字符串
2. 复合数据类型
  2.1 数组（array）
  2.2 对象 (object)
3. 特殊数据类型
  3.1 null

**PHP的数据类型的介绍**

整型
		 整数类型可以表示一个整数,比如:
 		$ts=1; $ts=-12;
	布尔类型
 		布尔型可以表示真或者假,比如:
 		$ts=true; $ts=false;
	小数类型
 		小数类型可以表示一个小数(float,double)
		 $ts=1.12 $ts=3.1415926
	 字符串类型
 		字符串类型可以表示一个字符串（可以用单引号，也可以使用双引号）
		$ts=“我是一个好人 hello”

**PHP的运算符**

​	算术运算符： + - * / % ++ --
​		关系：> < <= >= != == === !==
​		逻辑运算符： && || ！
​		复合赋值运算符： += -= 等
​		字符串连接用 “.”
​		 如：
​			$age = 20;
​			$str=“我今年”.$age.”岁了”;

**PHP的流程控制**

​	顺序控制(从上到下，从左到右)
​		分支控制
​			if(条件表达式){
​				 //n多语句;
​			}else{
​				 //n多语句;
​			}
​			switch分支语句
​			switch(表达式){
​				case 常量1://n多语句;break;
​				case 常量2://n多语句break;
​				default: //n多语句; break;
​			}

**PHP的流程控制**

循环：（break，continue）

​	for(循环初值; 循环的条件; 步长){

​	}
​		for($i=0;$i<10;$i=$i+2){
​		}

**PHP的函数**

<?php 
		 //定义函数
		 function testFunc($num1,$num2){
 			$res = $num1+$num2;
 			return $res;
		 }
		 $num1=250;
		 $num2=40;
 		//调用函数
 		$res= testFunc ($num1,$num2);
 		echo "计算结果是=".$res;
	?>

**PHP的数组**

​	`	数组创建
​		$arr[0]=123;
​		$arr[1]=90;
​		$arr[2]=8;
​	在php数组中，元素存放的值可以是任意数据数据类型 .如：
​		$arr[0]=123;
​		$arr[1]="hello";
​		$arr[2]=45.6;
​		$arr[3]=true;
​		$arr[4]=null;//即使放入了一个null,也要占一个空间
​		echo "数组大小".count($arr);
 		//遍历一下
​		for($i=0;$i<count($arr);$i++){
​			echo '<br/>'.$arr[$i];
 		}`

`数组创建的第二种方法：
	$数组名=array(值,.......);
	如：
	$arr=array(1,90,"helllo",89.5);`

**PHP的对象（类与对象）**
`		//定义一个类：
	class Person{
		public $name;
		public $age;
		public function speak(){
			echo "我是一个好人!“;
		}
	}
	//实例化对象
	$p1=new Person();
	$p1->name="小白";
	$p1->age=3;`



## PHP与前端交互

**PHP接收前端的数据**
	`如：`
	`$_GET['username']获取username
	$_GET['password']获取password`
	`$_POST['参数名‘]
	$_REQUEST["参数名"];`
	`请求参数有中文的解决方案：`
		`增加以下代码：`
			`header("Content-type: text/html; charset=utf-8");`
		`使用iconv`
		`<?php`
			`$nick = $_GET['name'];`
			`$nick=iconv('gb2312','utf-8',$nick);`
			`echo $nick;`
		`?>`

**PHP给前端响应数据**
	echo
	如：echo”我来自服务器端”;