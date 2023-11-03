# Math对象

**Math 对象用于执行数学任务**

**Math对象的常用函数：**

​	Math.round(3.6) //四舍五入
​		Math.random() //返回0-1之间的随机数
​		Math.max(num1, num2) //返回较大的数
​		Math.min(num1, num2) //返回较小的数
​		Math.abs(num) //绝对值
​		Math.ceil(19.3) //向上取整“20”
​		Math.floor(11.8) //向下取整“11”
​		Math.pow(x,y) //x的y次方
​		Math.sqrt(num) //开平方

## 随机数范围 

从0到某个整数的随机数我们会。
	任意两个整数之间的范围呢。
	任意两个整数之间的随机数=取整（小数+随机数*（大数-小数））
		function suiji(min,max){
			var cha=max-min;
			var rund=Math.random()*cha;
			return min+parseInt(rund);
		}

## 十进制转16进制或8进制 

十进制转其他 ：
	var x=110; 
	alert(x); 
	alert(x.toString(8)); 
	alert(x.toString(32)); 
	alert(x.toString(16));

## 创建日期对象

Date对象用于处理日期和时间，Date对象记录着从1970年1月1日00:00:00开始以来的毫秒数。
	Date对象的定义
		var myDate=new Date() ; 	//Date 对象自动使用当前的日期和时间作为其初始值。
	创建Date对象同时指定日期和时间：
		new Date("month dd,yyyy hh:mm:ss"); 
		new Date("month dd,yyyy"); 
		new Date(yyyy,mth,dd,hh,mm,ss); 
		new Date(yyyy,mth,dd); 
		new Date(ms);

## 日期对象的函数

获取时间：
		 getDate() //返回天
 		getDay() //返回星期几 ，	从0开始
		 getHours() //返回小时数
		 getMinutes() //返回分钟数
		 getMonth() //返回月份值 ，	从0开始
		 getSeconds() //返回秒数
		 getTime() //返回完整的时间 ，	毫秒数
		 getFullYear() //返回年份
	设置时间：
		 setDate() //改变Date对象的日期
		 setHours() //改变小时数
		 setMinutes() //改变分钟数
		 setMonth() //改变月份，	从0开始
		 setSeconds() //改变秒数
		 setTime() //改变完整的时间，	毫秒数
		 setYear() //改变年份

## 日期转换

字符串转换时间戳：
		Date.parse(日期字符串或日期对象)	 //返回自1970年1月1日起至参数日期止的毫秒数
	Date转换为字符串：
		toTimeString() // 把 Date 对象的时间部分转换为字符串。
		toDateString() //把 Date 对象的日期部分转换为字符串。
		toUTCString() //根据世界时，把 Date 对象转换为字符串。
		toLocaleString() //根据本地时间格式，把 Date 对象转换为字符串。
		toLocaleTimeString() //根据本地时间格式，把 Date 对象的时间部分转换为字符串。
		toLocaleDateString() //根据本地时间格式，把 Date 对象的日期部分转换为字符串。

## 求日期差

求两个日期的差，就是计算两个日期之间差多少天。
	1，先取得两个日期的时间戳
	2，计算时间戳之间的差值
	3，将时间戳之间的差值算成天
		var day1=new Date(),day2=new Date(2017,4,2); 
		var days = day1.getTime() - day2.getTime();
		days=parseInt(days / (1000 * 60 * 60 * 24));

## 使用定时器

setInterval（回调函数，毫秒数）设置每隔指定的毫秒数执行一次回调函数，返回定时器编号。
	clearInterval（定时器编号）清除定时器设置。
	setTimeout（回调函数，毫秒数） 设置在指定的毫秒数后执行一次回调函数，返回定时器编号。
	clearTimeout （定时器编号）清除定时器设置。
	注：因为只执行一次回调函数，所以为达到不停执行回调函数的效果必须在回调函数中再次设置。