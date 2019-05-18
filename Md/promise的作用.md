## promise的作用

有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层 层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更 加容易。 

Promise解决的问题：回调 
	如：函数func1和func2，当我们需要在func1(func1函数里有异步操作)调用结 束后调用func2，一般的解决方案是func1（func2）。而promise的做法是 func1().then(func2);即Promise将回调模式的主从关系调换了一个位置，变成 了同等的只是顺序的关系

## Promise的概念 

promise，就是一个对象，用来传递异步操作的消息。它代表了某个未来才会知道结果的事 件（通常是一个异步操作），并且这个事件提供统一的 API，可供进一步处理。 ES6(ES2015) 原 生中提供了 Promise 对象。看看Promise：console.dir(Promise)。 

**Promise 对象有以下两个特点** ：

1.对象的状态不受外界影响。
		Promise 对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完 成，又称 Fulfilled）和 Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种 状态，任何其他操作都无法改变这个状态。

2.一旦状态改变，就不会再变，任何时候都可以得到这个结果. 
		 Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected

## Promise的使用

 **再次看看Promise：**
	Console.dir(Promise); 

`then方法：`
	`function runAsync(){`
		`var p = new Promise(function(resolve, reject){`
			`//做一些异步操作`
			`setTimeout(function(){`
				`console.log(‘异步执行完成');`
				`resolve(‘姥姥的话就是你长大听不到的那些话');//这是then函数的参数；`
			`}, 2000);`
		`});`
		`return p;`
	`}`
	`//runAsync();`
	`runAsync().then(t);//then()里的参数t函数，就是表示，在setTimeout完成后，要调用的函数。即异步完成 后要调用的函数。`
	`function t(str){`
		`alert(str);`
	`}`

**上面的代码用传统的写法是：** 

`function t(str){`
		 `alert(str);`
	`}`
	 `//传统的写法：`
	 `function runAsync(callback){`
		 `setTimeout(function(){`
			 `console.log(‘异步执行完成');`
			 `callback(‘姥姥的话就是你长大听不到的那些话');`
		 `}, 2000);`
	 `}`
	 `runAsync(t); `

**tip:**好像传统写法更简单？？ 但是当回调函数中也是个异步 操作时，Promise的优点才能体 现出来

## Promise对象的方法then的优点 

**回调函数中也是异步操作的话**

`function runAsync1(){`
		`var p = new Promise(function(resolve,reject){`
			`setTimeout(function(){`
				`console.log("异步1完成");`
				`resolve("异步1完成后，要弹出我");`
			`},2000);`
		`}); return p;`
	`}`
	`function runAsync2(){`
		`var p = new Promise(function(resolve,reject){`
			`setTimeout(function(){`
				`console.log("异步2完成");`
				`resolve("异步2完成后，要弹出我");`
			`},2000);`
		`});`
		`return p;`
	`}`
	`runAsync1().then(function(str){`
		`alert(str);`
		`return runAsync2();`
	`}).then(function(str){`
		`alert(str);`
	`})`

## Resolve和reject 

**Resolve和reject的区别：**  即then方法的第一个参数和第二参数的区别。 

Resolve函数是成功时调用的函数,而Reject函数是失败时调用的函数

如：
	`    请输入您的年龄：<input type="text" id="ageId" />`    
				`<input id="btn" type="button" value="测试" />`
	`function checkAge(){`
		`var p = new Promise(function(resolve, reject){`
			`setTimeout(function(){`
				`var num = parseInt(document.getElementById("ageId").value);`
				`if(num>18){`
					`resolve(num);`
				`}else{`
					`reject('孩子，你还太小！');`
				`}`
			`},2000);`
		`});`
		`return p;`
	`}`



`window.onload = function(){`
		`document.getElementById("btn").onclick = function(){`
			`checkAge().then(`
				`function(data){`
					`console.log('resolved');`
					`console.log(data);`
				`},`
				`function(reason,data){`
					`console.log('rejected');`
					`console.log(reason);`
				`}`
			`);`
		`}`
	`}`

## Promise改造ajax依赖调用

`function ajax(optionsOverride) {`
		`var ajaxOptions = {`
			`url:'#‘,method:'GET‘,async:true,data:null,dataType:'text'`
		`}`
		`for (var k in optionsOverride){`
			`ajaxOptions[k] = optionsOverride[k];`
		`}`
		`var xhr = new XMLHttpRequest();`
		`return new Promise(function (resolve, reject) {`
			`xhr.open(ajaxOptions.method, ajaxOptions.url, ajaxOptions.async);`
			`xhr.onreadystatechange = function (){`
				`if (xhr.readyState==4){`
					`if(xhr.status == 200){`
						`resolve(xhr.responseText);`
					`}else{`
						`reject("出错，状态码是："+xhr.status);`
					`}`
				`}`
			`}`
			`xhr.send();`
		`}`
	`}`



`ajax({`
		`url:'test.jsp',`
		`method:'GET',`
		`async: true,`
		`dataType:'text'`
	`}).then(`
		`function(data){`
			`alert("服务器端返回的数据为:"+data);`
		`},`
		`function(str){`
			`alert(str);`
		`}`
	`);`

## 使用Promise的步骤

**使用Promise对象时，**
	1、找到异步操作的代码，放在Prmoise构造函数的参数（函数）里
	2、参数（函数）的第一个参数resolve是成功时调用的函数，对应then方法（ 函数）的第一个参数
	3、参数（函数）的第二个参数reject是失败时调用的函数，对应then方法（函 数）的第二个参数