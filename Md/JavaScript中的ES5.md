## JavaScript中的ES5

**以下为ES5新增的特性：** 
		严格模式 
		bind方法/this关键字 
		JSON.parse/JSON.stringify 
		新增Array接口（indexOf，lastIndexOf等）（已经讲过）
		变量结构 

**ES5_严格模式** 

​	**概念** 
​			ECMAscript 5添加了第二种运行模式：严格模式（strict mode）。 顾名思义，这种模式使得Javascript在更严格的条件下运行。"严格模 式"体现了Javascript更合理、更安全、更严谨的发展方向，把以前的 模式就叫“正常模式” 

​	 **严格模式的特点和目的：** 
​			消除Javascript语法的一些不合理、不严谨之处，减少一些怪异 行为;
​			消除代码运行的一些不安全之处，保证代码运行的安全；
​			提高编译器效率，增加运行速度； 为未来新版本的Javascript做好铺垫。 

​	 **严格模式的兼容性：**
​			包括IE 10在内的主流浏览器，都已经支持它。同样的代码，在“严 格模式”中，可能会有不一样的运行结果；一些在“正常模式”下可以 运行的语句，在“严格模式”下将不能运行。 

​	**使用严格模式的标志：**
​			要使用严格模式，首先需要增加代码： "use strict“; 老版本的浏览器 会把它当作一行普通字符串，加以忽略。 

​	**如何调用（使用）：**
​			"严格模式"有两种调用方法，适用于不同的场合。 

​	**针对整个脚本块（文件）的使用** ：
​			在脚本块的第一行，写上“use strict”，如果不在第一行写，则 相当于没有写。即写在其它地方无效，特别要注意不同模式的代码 文件合并成一个文件的情况。 

​		`<script type="text/javascript">`
​				 `"use strict";`
​				 `i=0;//这句话在严格模式下，会报语法错误`
​				 `console.log("这是严格模式");`
​			 `</script>`
​			 `<script type="text/javascript">`
​				 `b=2;//这句话在普通模式下，不会报语法错误。`
​				 `console.log("这是普通模式");`
​			 `</script> `

​	 **如何调用（使用）：** 
​			"严格模式"有两种调用方法，适用于不同的场合。 

 	**针对单个函数** :
			将"use strict"放在函数体的第一行，则整个函数以"严格模式"运行。
			function strict(){
				"use strict";
				return "这是严格模式。";
			} 

​	**如何调用（使用）：**
 			"严格模式"有两种调用方法，适用于不同的场合。 

​	**针对单个文件** :
​			将整个脚本文件放在一个立即执行的匿名函数之中。
​			(function (){
​				"use strict";
​				……………………
​			})(); 

​	**语法和行为的改变举例：** 
​		**全局变量显式声明** :
​			严格模式下声明变量时，必须明确写上关键字。
​		 "use strict";
​			age = 20; // 报错，v未声明
​		因此，严格模式下，变量都必须先用var命令声明，然后再使用 

## ES5_bind和this关键字 

bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数 时,绑定函数会以创建它时传入bind()方法的第一个参数作为 this， 传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身 的参数按照顺序作为原函数的参数来调用原函数。 

这个方法可以改变this的指向，为函数自定义 this指针。 

Javascript中重新绑定 this变量的语法糖还有 call和 apply 。不过 bind显然与它们有着明显的不同。 bind将会返回一个新的函数，而 call或者 apply并不会返回一个新的函数，它们将会使用新的 this指 针直接进行函数调用 

**代码示例：** 
		`function testf(){`
			 `console.log(this.name);`
		 `}`
		 `var p1 ={`
			 `name:"张三疯"`
		 `};`
		 `window.onload = function(){`
			 `//1、用bind改变testf函数的this，注意bind的返回值是改变了this指向后的函数`
			 `var f = testf.bind(p1);`
			 `//2、调用testf()函数`
			 `f();`
		 `} `

## ES5_JSON.parse/JSON.stringify 

**JSON.parse/JSON.stringify**
		在 ECMAScript 代码中，经常会需要与JSON格式的数据进行交换。JSON也通常被用来作为客户端与服务器端之间的数据传输格式。这主要是因为在ECMAScript代码中处理 JSON 格式非常自然。JSON 格式数据经过解析之后，可以直接当成 ECMAScript 中的对象 来使用。在使用 JSON 格式时的一个重要问题是如何在 ECMAScript 中的对象与文本形式之间进行互相转换。

字符串转换成JSON对象：JSON.parse
		如：var jsonStr = ‘{“id”:1, “name”:”宝宝”}'; 
		JSON.parse(jsonStr); 

JSON对象转换成字符串：JSON. stringify 
		如：var person= {
				name : '宝宝',
				password : '123456'
			}; 
			var str = JSON.stringify(person);
			alert(typeof str);
			alert(str); 

 

