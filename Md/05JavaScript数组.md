# 数组的定义

一个变量只能存储一个数据，如果我们有一组数据，比如1到100一百个数字，定义100个变量来
存储就太痛苦了，这时候我们就需要数组来存储这样的数据。

数组的定义：
		var arr1 = new Array(7); //定义了一个7个元素的数组，没有给元素赋值；
		var arr2 = new Array(7,9); //定义了一个2个元素的数组，两个元素的值分别是7和9
		var arr3 = [3,5]; //定义了一个2个元素的数组，两个元素的值分别是3和5
	 注：数组就是一组数据。
		数组中的每一个数据我们称作元素。

## 数组的几个概念

Length（长度）:
		数组中包含的元素个数。

例：
		var arr1=new Array(7);
		alert(arr1.length); //输出结果为7
	下标（索引）:
		数组中元素的序号，从0开始，下标最大取值是“长度-1”；下标可以是变量或表达式。我们通过索引来访问数组中任意元素。
	例：
		var arr1=[1,2,3,4,5];
		alert(arr1[0]);	 //输出结果是1，下标0代表第一个元素
		alert(arr1[arr1.length-1]); 	//输出结果是5，下标length-1代表最后一个元素
		arr1[2]=7;		 //通过下标修改了第三个元素的值
		alert(arr1[2]); 	//输出结果是7，

## 数组的常用方法

push() 方法向数组的末尾添加一个或多个元素，并返回新的长度。
		var arr1=[1,2,3];
		var len=arr1.push(7); //向数组末尾添加元素,并返回数组的新长度
		alert(len); //输出4
	pop() 方法删除并返回数组的最后一个元素。
		x=arr1.pop(); //删除最后一个元素并返回被删除的元素
		alert(x); //输出7
	unshift()向数组的开头添加一个或多个元素，并返回新的长度。
		x=arr1.unshift(8,9); //向数组开头添加了两个元素，并返回新长度
		alert(x); //输出5
	shift() 方法把数组的第一个元素从其中删除，并返回第一个元素的值。
		x=arr1.shift(); //删除第一个元素并返回被删除的元素
		alert(x); //输出8

## 数组的遍历

通常操作数组时，每个元素都要操作一遍，这个时候我们会用循环来访问每一个元素，循环
访问数组的每一个元素就叫做数组的遍历。

for循环方式：
		var arr1=[1,2,3,4,5,6];
		for(var i=0;i<arr1.length;i++){
		console.log(arr1[i]);
	}
	for in 方式：
		var arr1=[1,2,3,4,5,6];
		for(var i in arr1){
		console.log(arr1[i]);
	}

## 二维数组（了解）

数组内的每一个元素也是一个数组
	var arr1 = [];
	var arr2 = [0,1];
	var arr3 = [2,3];
	arr1[0]=arr2; //把数组arr2赋值给arr1的第一个元素
	arr1[1]=arr3;
	alert(arr1[0][0]);
	alert(arr1[1][1]);

## 数组的排序-冒泡

数组的数据如果是无序的，经常需要按大小个排序。排序算法有很多，我们介绍最常见的两个。 
冒泡排序和选择排序。 

冒泡排序算法的运作如下： 
	从第一个元素开始比较后一个元素，只要前一个元素大于后一个元素就交换两元素位置。比完后最大的元素应该就移动到数组最后的位置。 
	针对所有的元素重复以上的步骤，除了最前一个。 
	持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

## 数组的排序-选择

从所有元素中先找到最小的，然后放到第一个位置。之后再看剩余元素中最小的，放到第二个位置……
以此类推，就可以完成整个的排序工作了。

## 值类型与引用类型

值类型和引用类型最大的区别是存储方式不同，因此造成了在复制变量值时候的巨大差异。

我们可以用“连锁店”和“连锁店钥匙”来理解。

值类型：string、数值、布尔值、null、undefined。 

值类型理解：变量的交换等于在一个新的地方按照连锁店的规范标准（统一店面理解为相同的变量内容）新开一个分店，这样新开的店与其它旧店互不相关、各自运营。 

引用类型：对象、数组、函数。

引用类型理解：变量的交换等于把现有一间店的钥匙（变量引用地址）复制一把给了另外一个老板，此时两个老板同时管理一间店，两个老板的行为都有可能对一间店的运营造成影响。 

## 对象的本质和意义（了解） 

对象就是一组数据，描述同一个概念的不同属性。 
	比如 咪咪 

 var name=“咪咪”; 
 	var age=2; 
 	var color=“虎皮”; 
 	var hobby=“fish”; 

主要体会与数组数据的区别。 

 var name=“mix”; 
 	var color=“black”; 
	 var user=“diaosi”; 
	 var size= 6.4; 
	 var cpu=“xiaolong821”; 
 	var niux=ture;

## JSON表示对象的方法（了解） 


​	使用JSON（JavaScript Object Notation, JS 对象标记）表示对象的方式，就是花括号里的键值对。
​		var mimi={
​			“name”:“咪咪”，
​			“age”: 2，
​			“color”:“虎皮”，
​			“hobby”:““fish”，
​			“action”: function(){ alert(“喵~~”);}
​		};
​	语法要点： 1，花括号
​			2，键名要有双引号（字面量方式表示对象，键名不需要引号）
​			3，字符串值要有引号
​			4，键值之间是冒号
​			5，键值对之间是逗号