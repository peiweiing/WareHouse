## 类的概念，类和对象 

 **类：类型，数据类型，类是复杂的数据类型，即一个类型里包含了 若干个信息。** 		JavaScript中的数据类型有基本类型和引用类型，这个引用类型就是类。
		 	基本类型包括：Number，String，Boolean，null，undefined只包含单一 的信息，在内存中只有一块区域
			引用类型：object，在内存中有两块内存区域。

 	JavaScript官方提供Array，Date，RegExp等都是由Object衍生出来的类 型。Object类型是一个抽象的类型，就像生活中的名词“东西”；而Array， Date，RegExp才是具体的类型。 

​	除了官方定义的类型，在实际开发中，特别是面向对象的开发中，程序员需 要定义很多的数据类型（自定义类型）来满足实际的需求。 
​		即：Date是官方定义的类，而程序员也可以自己定义很多的类。

**对象**： 
	 	对象：就是变量，也叫类的实例。

**类和对象的关系**： 
		类是对象的抽象，如：人，医生，猪，狗等
		对象是类的具体，如：宝宝，小花，大黄等等

## ES3和ES6中的概念（类，对象，实例）

**ES3和ES6的叫法**： 
		对象：就是ES6中的类 
		实例：就是ES6中的对象

​	类和对象是传统面向对象编程语言的名词，ES6之前，Javascript 没有类的概念，从ES6开始，javascript开始有了类的叫法，也是为 了朝着传统面向对象编程语言的概念靠拢。

## 使用Json创建对象 

**这是ES3的做法，叫作对象：** 

`let person1 = {`
		 `id:"007", name:"宝宝"`
	 `};`
	 `let person2= {`
		 `id:"008",`
		 `name:"宝宝的宝宝"`
	 `}; `

用JSON方式创建对象的缺点： 
		1、代码复用性差。 
		2、不知道对象是哪种类型。

## 使用构造函数创建对象 

 **这是ES3的做法，叫作对象：** 

`//构造函数`

`function Person(id,name){`
		` //属性：` 
		`this.id = id;`
		`this.name = name;`
		`//方法：`
		`this.eat = function(str){`
			` alert(this.name+"它是"+str); ` 
		`}`
	`}`

`//用构造函数实例化一个实例（对象）`
	 `let p1 = new Person("007","宝宝");`
	 `let p2 = new Person("008","宝宝的宝宝"); `

用构造函数的方式创建对象的优点：
	1、提高了代码的复用性。 
	2、知道实例（对象）是哪个对象（类），使用instanceof

## ES3中的构造函数和ES6中的class 

**用class来代替构造函数：** 

`//用class来代替构造函数`
	 `class Person{`
		 `constructor(id,name){`
			 `//属性`
			 `this.id = id; this.name = name;`
		 `} eat(str){`
			 ` alert(this.name+"在吃"+str);` 
		 `}`
	 `} `

`//实例化一个实例（对象）`
	 `let p1 = new Person("007","宝宝");`
	 `let p2 = new Person("008","宝宝的宝宝"); `

ES6中的class就是ES3中的构造函数。 

ES6中的class是个语法糖，即在ES3的构造函数的基础上，增加了一个外包装。 本质还是构造函数，只不过，class的写法和传统面向对象编程语言的写法一致。

## 面向对象和面向过程的区别    

**面向对象编程：** 
		 面向对象编程是一种编程思想，或者说一种思维方式，这种思维方式就是人的思维方式。 

**面向对象编程的步骤:** 
		1、先考虑项目中需要哪些类（包括属性和方法），就是数据。 
		2、步骤（先创建哪个对象，做什么事，再创建哪个对象做什么事）。

**面向过程的编程思想** :
		1、先考虑步骤 
		2、数据

## JSON字符串和对象直接的转换

 **JSON.parse**:用于从一个字符串中解析出json对象.如:

```javascript
var str = '{"age":"23","name":"huangxiaojian"}'
	结果：
	JSON.parse(str)`

Object
	age: "23"
	name: "huangxiaojian"
	__proto__: Object
```

 **JSON.stringify**:用于从一个对象解析出字符串.如:

```javascript
var a = {a:1,b:2}
	结果：
	JSON.stringify(a)

"{"a":1,"b":2}"
```



## JSON字符串与JS对象的区别

**JS对象：**

```js
   var obj2={};//这只是JS对象

​    var obj3={width:100,height:200};/*这跟JSON就更不沾边了,只是JS的对象 */

​    var obj4={'width':100,'height':200};/*这跟JSON就更不沾边了,只是JS的对象 */

​    var obj5={"width":100,"height":200,"name":"rose"}; /*我们可以把这个称做：JSON格式的JavaScript对象 */
```

 

   **JSON字符串：**

```javascript
 	var str1='{"width":100,"height":200,"name":"rose"}';/*我们可以把这个称做：JSON格式的字符串 */

​    var a=[

​        {"width":100,"height":200,"name":"rose"},

​        {"width":100,"height":200,"name":"rose"},

​        {"width":100,"height":200,"name":"rose"},

​    ];/*这个叫JSON格式的数组，是JSON的稍复杂一点的形式 */

​    var str2='['+

​        '{"width":100,"height":200,"name":"rose"},'+

​        '{"width":100,"height":200,"name":"rose"},'+

​        '{"width":100,"height":200,"name":"rose"},'+

​    ']' ;/*  这个叫稍复杂一点的JSON格式的字符串  */

tip：json和数组一样，都可以存数据。

tip：json与数组的下标区别：json的下标是字符串，数组的下标是数字。
```

## JSONP

foo({"name":"B","age":23});//所谓的jsonp，就是一句函数调用，数据都被包裹传递到参数中了

