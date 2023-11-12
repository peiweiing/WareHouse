JavaScript是最为流行和广泛应用的编程语言之一，它拥有强大的功能和灵活性，在网页开发、应用程序设计等领域中扮演着重要的角色。 

在JS中，对象是一个**存储系统**，是一系列键值对的集合，通过某个键也就是属性名，可以引用到它的值。如果是**函数对象**，那么可称为该对象的方法。而JS中的**函数是一个执行系统**，函数可能是某个对象的属性。

JavaScript的版本不断更新，ES3（ECMAScript 3）版本是最为普及和兼容性最好的版本。JavaScript ES3版本是在1999年推出的，它加入了很多新的特性，包括正则表达式、异常处理、bool类型、以及数组、字符串等相关方法。

ES3版本的几个主要特性：

```js
/正则表达式（Regular Expression）
var regExp = /hello/gi;
var str = "Hello, world! I'm learning JavaScript.";
alert(regExp.test(str));   //true
//异常处理（Exception Handling）
try {
//执行可能出错的语句
} catch (e) {
//出错后的处理
} finally {
//无论是否出错都会执行的代码
}
//bool类型
var b = true;
if (b) {
alert("b is true");
} else {
alert("b is false");
}
//数组排序
var arr = [5, 3, 2, 4, 1];
arr.sort();
alert(arr);   //[1, 2, 3, 4, 5]
//字符串相关方法
var str1 = "JavaScript is";
var str2 = "awesome!";
var res = str1.concat(" ", str2);
alert(res);   //"JavaScript is awesome!"
var str = "Hello, world!";
var index = str.indexOf("o");
alert(index);   //4
```

ECMAScript 5（简称ES5）是JavaScript语言的第五个版本，于2009年发布。ES5是JavaScript中一个重要的里程碑，带来了许多新的功能和改进。大多数浏览器支持，只有少部分低版本浏览器不支持不再维护，如 IE6 等。ES5 在 ES3 的基础上，进行了大量的改进，如：

- 新增了对 JSON 数据格式的支持；
- 增加了 `strict mode` 模式，用于使代码执行在严格模式下；
- 添加了 `Object.create()` 方法，可以实现基于原型的继承；
- 添加了 `Array.forEach()`、`Array.map()`、`Array.filter()` 等数组方法。



ES6（也被称为 ECMAScript 2015）是 JavaScript 的第六个标准版本，于 2015 年发布。ES6 是 JavaScript 的一次重大革新，引入了很多新的语言特性，其中包括：

- 类（class）：JavaScript 在 ES6 之前是基于原型的语言，ES6 引入了 class 语法，提供了面向对象编程的另一种选择；
- 模块：JavaScript 在 ES6 之前没有原生模块系统，ES6 引入了 import 和 export 语法，使得 JavaScript 可以支持模块化编程；
- 箭头函数：这是一种新的函数定义语法，它使得函数的定义和使用变得更加简洁；
- Promise：这是一种新的异步编程机制，解决了 JavaScript 中的“回调地狱”问题。
- `let`和`const`关键字，ES6引入了用于声明块级作用域的变量和常量。相较于ES3中的`var`，块级作用域可以更好地控制变量的作用范围。