# 循环的概念

循环就是重复执行一段代码，是一种最能发挥计算机优势的程序结构。
	循环结构的代码由循环体、循环变量、和循环条件组成。当循环变量满足循环条件时会重复执行循环体内的代码，直到循环变量不满足循环条件时就终止循环，接着执行循环结构后的代码。

JS中有while、do while、for三种循环。



## while循环

语法:
		 while(表达式){
			循环体;
		 }

例：从1加到100
		var i=1;//循环变量
		var x=0;//循环变量
		while(i<=100){//循环条件
			x=x+i;
			i++;//修改循环变量
		}
		alert(x);

要点：
1，循环变量要先初始化。
2，每次循环前判断表达式，表达式成立后执行循环体语句。
3，循环体中，应有结束循环的条件(有个代码朝着循环条件不满足的方向靠近)，否则会造成死循环。
4，当不确定循环多少次时可用死循环。
5，循环体中可以写若干句合法的javaScript代码，包括if，也可以再套个循环语句。

## do while循环语句

语法：
		do
		 {
 		循环体;
 		}while(表达式);

do while 和while的区别，do while先循环一次，后判断循环条件。也就是说无论如何都会执行一次循环体

例： //一百以内奇数
		var i=1;
		do{
			if(i%2!=0){
					document.write(i+"<br/>");
			}
			i++;
		}while(i<=100)

## for循环语句

语法：
		for(表达式1；表达式2；表达式3)
		{
			 循环体;
		}
	利用三个表达式把循环控制与循环体分离，结构更加清晰。是使用最多的循环语句。
	表达式1初始化循环变量，表达式2判断循环条件，表达式3改变循环变量的值。

例： //一百以内奇数
		for(var i=0;i<=100;i++){
			if(i%2!=0){
				document.write(i+"<br/>");
			}
		}

## continue语句

只能在循环语句中使用，使本次循环结束，即跳过循环体中continue下面尚未执行的语句，接着进行下次是否执行循环的判断。

例：输出100以内的奇数，不包含3的倍数
		for(var i=0;i<=100;i++){
			if(i%2!=0){
				if(i%3==0){
					continue;//continue执行后蓝色语句不会被执行，会去执行黄色代码。
				}
				document.write(i+"<br/>");
			}
		}

## break 语句

break语句功能： 
		1，在switch语句中使流程跳出(终止) switch结构。 
		2，在循环语句中使流程跳出(终止)当前循环。 
	注意： 
		1，如果已执行break语句，就不会执行循环体中位于break后的语句。 
		2，在多层循环中，一个break语句只向外跳一层。 

示例： 
  		判断一个数是不是合数。（能被1和自身以外的整除） 
 		 判断一个数是不是素数(质数)。

//判断合数for(var i=2;i<num1;i++){

​				if(num1%i==0){

​					alert("是合数");break;//break执行后完全退出循环，会继续去执行循环后alert代码。

​				}

​			}

​			alert(“判断完毕。”);

## 循环的嵌套

1，一个循环内包含完整的另一个循环语句。
	2，被包含的循环语句叫内循环，包含别的循环的循环语句叫外循环。
	3，外循环每执行一次循环，内循环都会完全执行所有循环次数。,
	4，循环嵌套的总执行次数是外循环次数乘以内循环次数。
	注：可使用浏览器的调试功能一步步查看循环嵌套的执行
	例：打印三角形
		for(var i=1;i<=4;i++){	//循环嵌套的外层是行；
			for(var j=1;j<=i;j++){	//循环嵌套的内层是列；
				document.write(“۞”);
			}
			document.write("<br/>");
		}