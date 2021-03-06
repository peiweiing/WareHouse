# 逻辑分支（条件分支）

程序设计的结构
	顺序结构：从上朝下执行的代码就是顺序
	选择（分支）结构：根据不同的情况，执行对应代码
	循环结构：重复做一件事情

除顺序结构外，其余两种程序结构由流程控制语句实现。
	选择（分支）结构的程序由条件分支语句实现。

## 条件分支语句IF

语法：
		if（表达式）{
			 值为真执行这里代码（分支一）
		}else{
			 值为假执行这里代码（分支二）
		}
tip：表达式最终要能返回布尔值，一般是逻辑表达式或条件表达式。

## 多分支语句 

两条分支语句无法表示三种情况。
		if(num1>0){
			console.log("num1大于零");
		}else{
			console.log("num1小于零");
		}
	在else语句后再加一个if语句，变成三条分支，又叫多分支语句。
		if(num1>0){
			console.log("num1大于零");
		}else if(num1<0){
			console.log("num1小于零");
		}else{
			console.log(“num1等于零");
		}

## 嵌套分支语句 

也可在else语句中套一个if语句，同样达到三条分支的效果，又叫嵌套分支语句。
		if(num1>0){
			console.log("num1大于零");
		}else {
			if(num1<0){
				console.log("num1小于零");
			}else{
				console.log(“num1等于零");
			}
		}

## 分支语句分类（回顾总结） 

 单分支语句：
		只有一条分支的条件语句。没有else语句块的if语句就是单分支。
			if(num1>0){
				alert(“大于零”);
			}
	 双分支语句：
		有两条分支的条件语句是双分支语句。
	多分支语句：
		两条以上的分支语句叫多分支语句。
	 嵌套分支语句：
		分支语句中套分支语句，可以用来实现多分支。

## 多分支语句switch

语法：
		switch(表达式){
			case 表达式1:分支语句一;break;
			case 表达式2:分支语句二;break;
			case 表达式3:分支语句三;break;
			…
			case 表达式n:分支语句n;break;
			default:默认分支语句;break;
			}
	 switch表达式的值和case表达式的值进行比较，两值相等就执行case对应的分支语句。分支语句可有有任意多个，如果没有任何case表达式的值与switch表达式值相等就执行default的默认分支语句。
	 因为执行完分支语句后不会自动退出switch语句，会继续执行后续的分支语句，这叫做switch的穿透，为避免穿透，需要在每条分支语句后添加break，跳出switch语句。

### 语法规范与注意点

规范：
		1，所有的括号成对输入
		2，所有的双引号成对输入
		3，一句话占一行(不用多句话写在一行)
		4，花括号单独占一行
		5，缩进对齐：
			a)同级对齐
			b)子一级比上一级缩进4个空格
	注意点：
		1，if后面的()不能省略，()后面不要加分号
		2，if分支中即使一句话也要把{}写上
		3，if嵌套不要超过三层
		4，Switch语句里把default分支一定要写上，防止在以后的维护中产生歧义
		5，把执行概率更大（正常情况）放在前面（if，case）
		6，if else 和 switch：
			if else 一般来表示两个分支或者嵌套比较少的分支，如果分支多的话，用switch。

## 三元表达式

表达式1 ？表达式2 ：表达式3

三元运算符，又叫三目运算符。其实就是简写版的if else语句。
	根据表达式1执行的结果，来决定执行表达式2还是表达式3。
	表达式1结果是true执行表达式2，最终返回表达式2的结果。
	表达式1结果是false执行表达式3，最终返回表达式3的结果。
		var num1=3,num2=5,y=“”;
		y=num1>num2?"第一个大":"第二个大";
		alert(y);