## ES6 

**let\const关键字**
	**=>函数**
	**解构赋值**
	**字符串扩展方法**
	**Symbol类型**
	**Set和Map结构**
	**Generators生成器函数**
	**class和继承**
	**promise（AJAX中学习）** 

## ES6_let/const 

 **Let用来声明变量**
		ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
		如：
		`{`
		 `var num1 = 20;`
		 `let num2 = 30;//num2的作用域范围是所在的花括号内`
		 `}`
		 `alert("num1="+num1);`
		 `alert("num2="+num2);//num2不能使用，因为出了num2的作用域范围 `

 **Let声明的变量不会提前（前置）**

**块级作用域**
		ES5及其以前只有全局作用域和函数作用域，没有块级作用域。
		var申明的变量在代码块外面能被识别，但是let命令却不能被识别，这样就实现了js的块级作用域，我们在使用条件语句,循环语句等就会不担心变量污染的问题了。一般来说，一对花括号属于一个块级作用 域。

**在同一个作用域中不能用let声明同名的变量**
		以后能用let不用var。 



**Const修饰的变量是只读变量（也叫常量）：**
		const修饰的是变量代表内存，而不是引用的内存

const num =20;
	alert(“num=”+num);
	//num = 100;//此句话执行失败
	//alert(“num=”+num);

const arr = [12,34,45,56];
	alert(“arr=”+arr);

arr[0]=90;//此句话可以执行
	alert(“arr=”+arr);

arr = [100,200];//此句话不可以执行
	alert("arr="+arr); 

## ES6 =>函数 

Arrow Function（箭头函数）。这是ES6标准新增的一种的函数
		 箭头函数就是定义时使用的是箭头。

​	**定义一（无函数名）：**
​		 参数=>函数体
​		`如：`
​			`x => x*5；`
​		 `等价于：`
​			 `function (x){  return x*5; }`
​			 `箭头函数相当于匿名函数，省略了return和花括号`
​		 `调用：`
​			 `let t = (x=>5*x)(8);//这个有点像自运行函数`
​			 `console.log(t);//输出40。 `

​	**定义二（有函数名）：**
​			 let 函数名 =  参数=>函数体
​			`如：`
​				 `let f=x=>x*x；//等价于let f=function(x){return x*x;}`
​				 `console.log(f(8)); `

​	**定义三（函数体有多条语句）：**
​			此时不能省略函数体的花括号和return。
​			`如：`
​				`x=>{`
​					`if(x>0){`
​						`return x * x; `
​					`}else{`
​						`return -x * x;`
​					`}`
​				`}`

​	**定义四（函数有多个参数）：**
​			把参数要用括号括起来。
​			`如：`
​			`(x, y) => x>y?x:y;`

​		`定义并自运行：`
​			`var t = ((x, y) => x>y?x:y)(12,5);`
​			`console.log(t);`

​		`//定义`
​			`var f = (x, y) => x>y?x:y;`

​		`//调用`
​			 `console.log(f(12,50)); `

​	**定义五（无参）：** 
​			把参数要用括号括起来。
​			() => 24*3600 

​	**定义六（可变参数）:** 
​			`var f = (a,...end) => {  // 相当于把省略号的所有值，作为数组end处理`
​				 `var sum = a;`
​				 `for(var i=0;i<end.length;i++){`
​					 `sum += end[i];`
​				 `}`
​				 `return sum;`
​			 `}`
​			 `console.log(f(1,2,3,4,5,6)); `

​	**定义七（返回值是对象）：** 
​			var f=(id,name)=>({id:id,name:name}); //红颜色的圆括号不能省略，因 为，对象的花括号和函数体的花括号冲突了。
​			console.log(f("007","张无忌").id); 

## 箭头函数的优点： 

**对this转移的处理：**
		箭头函数内部的this是词法作用域，由上下文确定。
	如：
	原来的代码
		 `var that = this;`
		 `this.bannerTimer = setInterval(function(){`
			 `that.goStep();`
		 `},1000);`
	用箭头函数写
		 `this.bannerTimer = setInterval(`
			 `()=>{this.goStep();}`
		 `,1000); `

## ES6_解构赋值 

#### 解构数组

解构赋值可将数组的元素或对象的属性赋予给另一个变量。该变量的定义语法与数组字 面量或对象字面量很相似

 **批量给变量赋值一：**
 	如下数组：
		let  arr=[12,23,34];
		如果需要把每个数组元素对应一个变量，以前的做法，分别定义三个变量，一一赋值。
		let  v1 = arr[0];
		let  v2 = arr[1];
		let  v3 = arr[2]; 

 而使用解构赋值，就可以一次性搞定：
		let [v1,v2,v3]=arr; 

**批量给变量赋值二：**
		let [v1,v2,v3]=[12,23,34];   

 **批量给变量赋值三：**
		左侧的变量列表可以用逗号的形式跳过右侧对应的值
		let [,,v3]=[12,23,34];     //这相当于只定义了一个变量v3，值为34。

**批量给变量赋值四（数组嵌套）：**
		左右两侧的格式应保持一致
		let [v1,[v2,v3],[v4,v5]]=[12,[23,34],[45,56]];//数组嵌套

**批量给变量赋值五：**
	//将右侧多余的值以数组的形式赋值给左侧变量的语法——“rest“模式
		let [v1,...v2]=[12,23,34,45,56];//从23开始朝后的所有数字作为数组赋给v2。
		console.log("v1="+v1);
		console.log("v2="+v2); 



#### 解构对象 

var p = {
		"id":"007",
		"name":"张三疯",
		"sex":"男"
	};
	**定义变量，把属性的值进行对应赋值**
		var {id:idV,name:nameV} = p;//定义变量idV和nameV，分别用属性id和name的值进行赋值。
		console.log("idV="+idV);
		console.log("nameV="+nameV); 
	**如果属性名和变量名一样时，可以简写：**
		var {id,name} = p;
		console.log("id="+id);
		console.log("name="+name); 

 **对象嵌套**
		var {id,name,address:{city,area}} = {id:"007",name:"李四",address:{city:"beijing",area:" 昌平"}};
		console.log("id="+id);
		console.log("name="+name);
		console.log("city="+city);
		console.log("area="+area); 

## ES6_字符串扩展 

JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。
 	如：var str = "𡱖"; 汉字"𡱖"的编码是21c56（需要四个字节），超 过了FFFF。即超过javascript本身能表示的字符的最大范围。 javascript就会把“𡱖”当作两个字符处理，即str.length是2。而且，以前 的函数，如：charAt()函数一次只能读取该汉字的其中一半。
	ES6对这一点做出了改进，只要将码点放入花括号，就能正确解读 大于FFFF的字符；
	如：alert("\u20aa7");
		 alert("\u{20aa7}"); 

**codePointAt**
		对应于charCodeAt，对于大于\uFFFF的字符也是按照一个字符来处理。
		如：var str = "𡱖";
			console.log(str.charCodeAt(0).toString(16));//.toString(16)是转成16进制
			console.log(str.codePointAt(0).toString(16)); 

 **fromCodePoint**
		String.fromCodePoint()对应String.fromCharCode()
		如：console.log(String.fromCodePoint(0x21c58)); 

 **includes(), startsWith(), endsWith()**
		以前，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
 	**includes()：**返回布尔值，表示是否找到了参数字符串
	**startsWith()：**返回布尔值，表示参数字符串是否在源字符串的头部
 	**endsWith()：**返回布尔值，表示参数字符串是否在源字符串的尾部  

var s = 'what are you 弄啥哩';
	console.log(s.startsWith('what')); // true
	console.log(s.endsWith('啥哩')); // true
	console.log(s.includes('are')); // true 

## ES6_Symbol类型 

Symbol是一种ES6新增的数据类型，是JavaScript的第七种原始类型，JavaScript 以前的六种类型：Undefined，Null 空值，Boolean 布尔类型，Number 数字类 型，String 字符串类型，Object 对象类型。

**Symbol，它由全局 Symbol() 函数创建，每次调用 Symbol()函数，都会返回一个唯一的 Symbol。** 
	let symbol1 = Symbol();
	let symbol2 = Symbol(); 
	console.log( symbol1 === symbol2 ); //false;因为每个 Symbol 值都是唯一的

**Symbol 充当唯一的对象键。**即你写的键永远不可能和其它地方重复，特别是当你做插件或者类 库时，需要给某个DOM元素增加属性时，为了保证不和其它使用该DOM元素的地方冲突，就可以使用
		var  p={};
		let s1 = Symbol();
		let s2 = Symbol();
		p[s1] = "hello";
		p[s2] = "hi"; 

## ES6_Set和Map结构 

**Set结构**
		set和Map在很多的面向对象编程语言中（java，c++）中都有。 在其它的编程语言中，有个集合(容器)的技术名词，集合包括：数组，set，Map 等等，都是属于能够保存很多数据的一个集合。 
		ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的， 没有重复的值，可以简单的理解为无重复值的数组。
 		Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化
		如： 
			var set = new Set([1, 2, 3, 4, 4,2,5]);//用new的方式实例化一个set实例
			for (let i of set) {
				 console.log(i);
			}
		在Set内部，两个NaN是相等。两个对象总是不相等的(比较的是地址) 

**Set结构的四个操作方法：**
		add(value)：添加某个值，返回Set结构本身。
			var set = new Set([1, 2, 3, 4, 4,2,5]);
			set.add(100);
			set.add(107).add(108);
		delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
			set.delete(4);
		has(value)：返回一个布尔值，表示该值是否为Set的成员。
		clear()：清除所有成员，没有返回值

**Set结构的属性：**
		size：set结构的元素个数

**Set结构的应用：**
		如何去掉一个数组中重复的元素：
		var  arr  = [12,23,34,45,23,33,34];
		var s  = new Set(arr); 

 **Map结构**
		Map结构提供了“值—值”的对应，是一种更完善的Hash（哈希）结构 （键值对的集合）实现。如果你需要“键值对”的数据结构，Map比 Object更合适。它类似于对象，也是键值对的集合，但是“键”的范围不 限于字符串，各种类型的值（包括对象）都可以当作键。Map就是键值对， 跟对象有点像。但是，Map的键除了可以是字符串外，还可以是任何数据 类型(包括对象)。Map结构中的键是唯一的。
	*Map就是键值对，键可以是其它类型的数据。*
		var m = new Map();
		m.set(1,{id:"1",name:'张三'});//键是数字类型，值是对象
		m.set(2,{id:"2",name:'张四'});//键是数字类型，值是对象
		console.log(m.get(2));
	*Map就是键值对，键可以是对象类型的数据。*
		var m = new Map();
		var o1 = {"id":"001"};
		var o2 = {"id":"002"};
		m.set(o1,{id:"1",name:'张三'});//键是对象，值是对象
		m.set(o2,{id:"2",name:'张四'});//键是对象，值是对象
		console.log(m.get(o2)); 

**Map的方法：**
		set：给Map对象增加一个键值对，如果，存在相同的键，就会覆盖
		get：根据键获取值，
		has：判断Map对象中是否存在某个键
		delete：根据键删除Map对象中的某对键值对。
		keys：获取Map结构的所有的键。返回值是迭代器
		values：获取Map结构中的所有的值。返回值是迭代器 

 **Map结构示例代码**
		var m = new Map();
		var o1 = {"id":"001"};
		var o2 = {"id":"002"};
		m.set(o1,{id:"1",name:'张三'});//键是对象，值是对象
		m.set(o2,{id:"2",name:'张四'});//键是对象，值是对象
		console.log(m.size);
		for (let key of m.keys()) { console.log(key);}
		for (let value of m.values()) { console.log(value); }
		console.log(m.has(o1));
		console.log(m.delete(o1));
		console.log(m.has(o1)); 

## ES6_Generators 

**Generators（生成器）函数**
		Generators可以极大地简化代码，可以帮助你逃离“回调地狱”。 

**生成器函数和普通函数的区别：**
		普通函数使用function声明，而生成器函数使用function*声明。
		在生成器函数内部，有一种类似return的语法：关键字yield。二者的区别是，普通 函数只可以return一次，而生成器函数可以yield多次（当然也可以只yield一次）。 在生成器的执行过程中，遇到yield表达式，函数立即暂停，后续可恢复执行状态。
		生成器函数的返回值是 Iterator（迭代器），注意，调用生成器函数，并不会执行函 数的代码，而是会返回一个Iterator（迭代器）。
		生成器函数内部代码的真正执行是从Iterator的next()方法开始的，每调用一次next 方法，函数的代码会运行到下一个yield之前或者结束。 

**定义一个生成器函数：**
		function* gFunc() {
			yield console.log(“今天不肯埋头，明日以何抬头”);
			yield console.log(“今天多敲代码，明日多拿offer”); }

**调用生成器函数得到Iterator（迭代器）：**
		var iter = gFunc();

**运行生成器函数的代码**
		iter.next();//执行console.log(“今天不肯埋头，明日以何抬头”);
		iter.next();//执行console.log(“今天多敲代码，明天多拿offer”); 

## ES6_Class 

 从ES6（ES2015）开始，JS提出了类（class）概念，这是一个更接近传统语言 的写法，有了这种写法，曾经学过java和C++的童鞋们就会觉得JS的面向对象的 写法更加容易接受。引入了class（类）这个概念，作为对象的模板。通过class关 键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部 分功能，ES6都可以做到，新的class写法只是让对象原型的写法更加清晰、更像 面向对象编程的语法而已。

**本质上，ES6的Class只是ES6的构造函数的一层包装** 

**函数的定义方式有函数声明和函数表达式两种方式一样，类的定义** 

**类声明** 

**对比以前构造函数和原型方式和Class方式定义一个类**
		*构造函数和原型写法：*
		function Person(name){
			this.name = name;
		}
		Person.prototype.eat = function(str){
			console.log(this.name+”在吃”+str); }
		*class写法：*
		class Person{
			//构造函数
			constructor(name){
				this.name = name;
			}
			eat(str){
				console.log(this.name+"在吃"+str);
			}
		} 

**（与函数一样）类的定义有两种方式，分别为 类声明和 类表达式。**
		类声明（上页ppt的写法就是声明方式）
		*class 类名*{
			constructor(){}
			其它函数名(){}
		}
		*类表达式*
		var 类名 = class{
			constructor(){}
			其它函数名(){}
		} 

 **ES6中class的写法虽然与以前不同，但是，底层的实现思路一致。所以，ES6 只是让代码的可阅读性更加接近传统编程语言。** 

 **constructor函数：**
		constructor函数就是构造函数，用new运算符调用类名时，就是在调用 constructor函数。
		每个类必须有一个constructor函数，如果没有显式地定义该函数，那么预 编译时，会自动增加一个空constructor函数。constructor函数默认返回的 是当前对象（this）。当然也可以返回其它对象。 

## ES6_Class继承 

**ES6中class继承用extends关键字，这还是跟传统编程语言的写法一样。**
	如： class 子类 extends 父类 {}
		class Person{
			//构造函数
			constructor(name){
				this.name = name;
			}eat(str){
				console.log(this.name+"吃了"+str);
			}
		} 

**ES6中class继承用extends关键字，这还是跟传统编程语言的写法一样。**
	class Programmer extends Person{
		constructor(name,language){
			super(name);//调用父类的构造函数
			this.language = language;
		} 
		writeCode(str){
			console.log(this.name+"用"+this.language+"写"+str);
		}
	} 

window.onload = function(){
		var p = new Programmer("张朝阳","JS");
		p.eat("铁蛋刀削面");
		p.writeCode("飞机大战");
	} 

 **super**
		子类必须在constructor方法中调用super方法，否则新建实例时会报错。这 是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。 如果不调用super方法，子类就得不到this对象。 

**原生构造函数的继承（面试题）**
	官方原生构造函数是指语言内置的构造函数：Boolean()，Array(),Date(),Function(),RegExp()等。
	如：
	class MyArray extends Array {
		constructor(...args) {
			super(...args);
		}
	} 


以前，这些原生构造函数是无法继承的，ES6允许继承原生构造函数定义子类 