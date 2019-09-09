## AJAX的概念及优势

**什么是AJAX**

AJAX(Asynchronous  JavaScript  And  XML)），（异步 JavaScript 和 XML），中 文名：阿贾克斯。是指一种创建交互式网页应用的网页开发技术。
	 AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
	前端通过与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新 加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 Ajax）如果需要更新内 容，必须重载整个网页页面。 

**为什么要使用AJAX** 

1.更自然、流畅的用户体验，对用户的操作即时响应 
	2.在不中断用户操作的情况下与Web服务器进行通信 
	3.更灵敏的响应用户访问，实现近似于桌面应用程序的交互效果
	4.通过局部更新页面降低网络流量，提高网络的使用效率 

## 同步，异步

什么是异步？ 
		同时执行，也叫并发

什么是同步？
		 按步骤顺序执行 

同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。

## Get和post 

**GET和POST请求的区别** 
		get和post就是客户端给服务器传输数据的方式。 

get: 速度快，传输的数据量小，安全性不好 
	post:速度慢，传输的数据量大，安全性好 

## XMLHttpRequest对象

**XMLHttpRequest对象** 
		AJAX的核心对象是XMLHttpRequest，即AJAX的异步操作，和服务器 交互主要依 赖该对象。 XMLHttpRequest 对象提供了对 HTTP 协议的完全的访问，包括做出 POST 和 HEAD 请求以及普通的 GET 请求的能力 

**XMLHttpRequest的理解：** 
		以前浏览器负责显示和发送请求接收响应。两件事情同一时刻只能做一件，没法同时进行 。这样会让用户感觉不好(友好性不好)，比如：当浏览器发送请求时，就没法显示内容，这时 浏览器中是空白显示，给用户的感觉不好。
		 使用XMLHttpRequest对象，可以把浏览器解脱出来，可以让浏览器只负责显示，而完成 请求的事情由XMLHttpRequest对象负责。这样两者各负其责，效率更高，效果更好，用户 体验很好，用户永远不会看到浏览器空白。

## AJAX编写步骤 

` 1、创建XMLHttpRequest对象` 
		 `var request = new XMLHttpRequest();`
	 `2、设置请求参数`
		 `request.open("get", "http://10.0.152.17/AJAX/ajaxtest", true);`
		`//（get为请求的方式）（中间为请求的地址）（true为异步，false为同步。不写默认为异步）`
	`3、设置回调函数`
		 `request.onreadystatechange = function(){`
			 `if(request.readyState == 4){`
				 `alert(request.responseText);`
			 `}`
		 `}`
	 `4、发送请求`
		 `request.send();`
	 `5、接收响应`
		 `request.responseText或者request.responseXML `

## 创建XMLHttpRequest 

 XMLHttpRequest对象最初是在IE5中以ActiveX组件的形式实现的，但只能在IE浏览 器中使用。其后在Mozilla、Safari等浏览器中相继实现，才成为事实上的标准。目前FireFox、Safari、Opera和IE7中都以类似的方式实现了XMLHttpRequest对象 

由于XMLHttpRequest不是w3c的标准，可以采用多种方法创建XMLHttpRequest对象。 在使用XMLHttpRequest对象	发生请求和处理之前，必须首先使用JavaScript获得 XMLHttpRequest对象 

## 创建XMLHttpRequest 

`function  getHttpRequest(){`
		 `if (window.ActiveXObject){`
			 `return new ActiveXObject("Microsoft.XMLHttp");`
		 `}else{`
			 `return new XMLHttpRequest();`
		 `}`
	 `} `

## XMLHttpRequest的属性 

​		**属性** 						**描述**

onreadystatechange		每次状态改变所触发事件的事件处理程序 

readyState 				对象状态值： 
								0 = 未初始化（uninitialized）对象创建完毕就是0 
								1 = 正在加载（loading） 1：对象设置完成后就是1.即调用open函数后
								2 = 加载完毕（loaded）
								3 = 交互（interactive）
								4 = 完成（complete）

responseText			从服务器进程返回的数据的字符串形式 

responseXML			从服务器进程返回的DOM兼容的文档数据对象 

status					从服务器返回的数字代码，如404（未找到）或200（就绪） 

statusText				伴随状态码的字符串信息 

## XMLHttpRequest的方法 

​	**方法** 						**描述** 

abort（） 					停止当前请求 

getAllResponseHeaders()		将所有HTTP请求的响应首部作为键/值对返回 

getResponseHeader(”header”)	返回指定响应的首部信息 

open(”method”,”URL”)		建立对服务器的调用，方法通常是post或get，URL可以绝对路径 或相对路径 

send(content)			向服务器发送请求，参数可以是null 

setRequestHeader(”header”, ”value”)	设置HTTP请求的首部信息，可以向服务器传递参数，这个方法必须在open之后调用。 

## AJAX交互示例(get请求) 

`var oRequest;`
	 `function getTitleInfo(titleid){`
		 `oRequest = getHttpRequest();//获得XMLHttpRequest对象`
		 `oRequest.open(“get” , “AJAXServlet” , true); //建立对服务器的异步调用`
			`//上面也可以通过url重写传递：oRequest.open(“get”,“AJAXServlet?uname=”+name,true);` 
		 `oRequest.onreadystatechange = myfun;  oRequest.send(null); //向服务器发送异步调用请求`
	 `}`
	 `function myfun(){`
	 	`// 显示书籍信息（回调处理）`
		 `if (oRequest.readyState == 4&&oRequest.status==200){`
			 `var result = oRequest.responseText;`
			 `var msgdiv = document.getElementById("message");`
			 `msgdiv.innerHTML = result;`
		 `}`
	 `} `

## HTTP响应的状态码 

 注意：在对错误进行处理时，只将少数常见的错误消息输出给用户了。尽管这是朝正确方向 前进的一步，但是要告诉从事应用程序开发的用户和程序员究竟发生了什么问题。  

**HTTP状态码**				**摘要说明** 
	成功2××			成功处理了请求的状态码

*200				服务器已成功处理了请求并提供了请求的网页*

204				服务器成功处理了请求，但没有返回任何内容

重定向3××			每次请求中使用重定向不要超过 5 次

301				请求的网页已永久移动到新位置

302				请求的网页临时移动到新位置

304				如果网页自请求者上次请求后没有更新，则用304代码告诉搜索引擎机器人，可节省带宽和开销

客户端错误4××			表示请求可能出错，妨碍了服务器的处理

400				服务器不理解请求的语法

403				服务器拒绝请求

*404				服务器找不到请求的网页*

410				请求的资源永久删除后，服务器返回此响应

服务器错误5××			表示服务器在处理请求时发生内部错误

*500				服务器遇到错误，无法完成请求*

503				服务器目前无法使用 

## 测试readyState和 status 

在myfun中增加以下语句，来感受服务器的状态变化。

`alert(oRequest.readyState);`
	`alert(oRequest.status);`

`function myfun(){`
		`alert(oRequest.readyState);`
		`alert(oRequest.status);`
		`if (oRequest.readyState == 4&&oRequest.status==200){`
			`var result = oRequest.responseText;`
			`var msgdiv = document.getElementById("message");`
			`msgdiv.innerHTML = result;`
		`}`
	`}`

## AJAX交互示例post请求 

`var oRequest;`
	 `function getTitleInfo(titleid){`
		 `oRequest = getHttpRequest(); //获得XMLHttpRequest对象`
		 `var postStr = "user_name="+ userName +"&user_age="+ userAge ;`
			`//上面代码将需要提交的参数组装成字符串 `
		 `oRequest.open(“POST” , “AJAXServlet” , true); // 建立对服务器的异步调用`
			`//上面代码以POST方式提交`
		 `AJAX.setRequestHeader("Content-Type","application/x-www-form-urlencoded");`
		 `oRequest.onreadystatechange = myfun;`
			 `oRequest.send(postStr); //向服务器发送异步调用请求`
	 `}`
	 `function myfun(){// 显示书籍信息（回调处理）`
		 `if (oRequest.readyState == 4&&oRequest.status==200){`
			 `var result = oRequest.responseText;`
			 `var msgdiv = document.getElementById("message");`
			 `msgdiv.innerHTML = result;`
		 `}`
	 `} `

**tip**：POST提交只能通过send方法向服务器发送信息 而且必须有以下代码
	AJAX.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  

## JSON 

JSON（JavaScript Object Notation）
	AJAX技术能够使得每一次请求更加迅捷，对于每一次请求返回的不是整个页面，只仅仅是所需要 返回的数据。通常AJAX通过返回XML格式的数据，然后再通过客户端复杂的JavaScript脚本解析和 渲染这些XML格式的数据。
	JSON（读Jason）是为了能够使得数据格式成为一种标准，更简单的被JavaScript解析.

**• 优点** 
	– 轻量级的数据交换格式 
	– 人们读写更加容易 – 易于机器的解析和生成 
	– 能够通过JavaScript中eval()函数解析JSON 
	– JSON支持多语言。包括：ActionScript,C,C#,ColdFusion,E,Java,JavaScript,ML,Objective CAML,Perl,PHP,Python,Rebol,Ruby,and Lua.   

 **JSON的具体形式** 
		JSON语法是一种用于传输和生成数据的协定，很类似于C家族的语言，所以很容易被C家族的语言所解析。 
		对象：对象包含在{}之间 
		属性：采用Key-Value对来表示。属性之间使用逗号分开。  string : value 
		数组：数组存放在[]之间   [ elements ] 
		元素：元素之间用逗号分开 
		值：值可以是字符串，数字，对象，数组，true，false，null  

**JSON数据格式的例子：**
	 `{`
		 `"name":"张三",`
	 	`"password":"123456",`
	 	`"department":"技术部",`
		 `"sex":"男",`
	 	`"old":"28"`
	 `} `

**JSON数据格式的例子(嵌套)：**

`{`
		`"name":"章子怡",`
		`"address":{`
					`"city":"Beijing",`
					`"street":"Chaoyang Road",`
					`"postcode":100025`
					`}`
	`};` 

**示例：人员的详细地址信息** 

`<script language="javascript">`
	 `function handleJson(){`
		 `var j={`
			 `"name":"章子怡",`
			 `"address":{`
				 		`"city":"Beijing",`
				 		`"street":" Chaoyang Road ",`
				 		`"postcode":100025`
						 `}`
		 `};`
		 `alert(j.name+"所在城市："+j.address.city);`
	 `}`
	 `</script>`
	 `<body>`
	 `<input type="button" name="Submit" value="按钮" onClick="handleJson()">`
	 `</body> `

## eval

**eval(string)** 

 **作用：**
		eval() 函数可计算某个字符串，并执行其中的 JavaScript 代码。
		即这个函数可以把一个字符串当作一个JavaScript表达式一样去执行它 

**语法：**eval(string)
		参数string必需。要计算的字符串，其中含有要计算的 JavaScript 表达式 或要执行的语句。
		 如：服务器端返回一个JSON字符串，需要用eval把它转换为对象。或者数组。eval("("+json字符串+")");
	**返回值：**
		通过计算string得到的值（如果有的话），即参数string有返回值，则eval的执行结果就有返回值.

