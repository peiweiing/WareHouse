## Node.js：2009谷歌公司推出的

Node.js是一个基于Chrome V8引擎(编译成原生机器码)的让JavaScript运行在服务器端的运行环境，是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与PHP、Python、Perl、Ruby 等服务端语言平起平坐的脚本语言。

传统的js是运行在浏览器上的，因为浏览器内核分为两个部分:
渲染引擎—渲染HTML和CSS；
JavaScript引擎—负责运行JavaScript；
如果要执行JavaScript代码，需要一个js引擎，你可以安装一个浏览器（内置js引擎），或nodejs环境（内置js引擎），如果你在js代码中调用了浏览器提供的API，则必须安装一个浏览器，若调用了nodejs API，则必须安装nodejs环境，然后以各自规定的方式加载、执行JavaScript代码。

Node本身是基于Commonjs模块规范设计的，所以模块是Node的组成；

内置模块：Node天生提供给JS调取使用的
第三方模块：别人写好的，我们可以基于npm安装使用
自定义模块：自己创建一些模块

**CommonJS模块化设计的思想**（AMD/CMD/ES6 MODULE都是模块设计思想）

1. CommonJS规定，每个JS都是单独的模块（模块是私有的：里面涉及的值和变量以及函数等都是私有的，和其它JS文件中的内容是不冲突的）

2. ComminJS中可以允许模块中的方法相互调用
   B模块想要调取A模块中的方法（==>A导出，==>B导入）

3. 导出
   Commonjs给每个模块（每个js）中都设置了内置的变量/属性/方法
   module：代表当前这个模块[object]
   module.exports:模块的这个“属性”是用来到处当前模块的属性和方法的[object]
   如：

   ```
   let sum=function sum(...arg){
       return eval(arg.join("+"));
   	//任意数求和
   }；
   let name=function(){
       console.log('name');
   }
   //导出单个的
   module.exports.sum=sum;
   //导出多个的
   module.exports={
   	sum：sum,
   	name:name
   	}
   ```

4. 导入
   require：Commonjs提供的内置变量，用来导入模块的（其实导入的就是module，）
   如：

   ```
   let a=require("./a.js");
   a.sum()
   
   
   		
   ```


**JavaScript**：
		ECMAScript（语言基础，如：语法、数据类型结构以及一些内置对象）
		DOM（一些操作页面元素的方法）
		BOM（一些操作浏览器的方法）



**Node.js**：
		ECMAScript（语言基础，如：语法、数据类型结构以及一些内置对象）
		OS（操作系统）
		file（文件系统）
		net（网络系统）
		database（数据库）



**Node内置模块**，常用三个模块
		let fs=require("fs"),
		let http=require("http"),
		let url=require("url")

**Node.js特性：**
		**1.单线程；2.非阻塞IO；3.事件驱动。**
		1.单线程 NodeJS不会为每个连接客户创造一个新的线程,仅用一个线程
		2.单非阻塞式IO NodeJS在访问高IO操作后不会等待其完成，而是立即去执行其他代码，操作完成后会使用回调函数返回。保证高效的利用当前线程的cpu 不造成硬件浪费
		3.事件驱动 通过事件来驱动整个程序的进行。由于是单线程，所以把高io的操作 就会移动到事件队列中等待完成，完成后通过回调函数的方式返回给线程来进行处理。这个循环处理的过程称之为：事件环

**模块的优点：**
		**减少代码重复，提高利用率**
		**划分功能，方便管理**
		**方便使用第三方模块**
	**模块** node中以模块来划分功能，一个js是一个模块，多个模块相互引用形成一个模块化式项目模块书写 js文件因为作用域的问题，变量和函数只能在当前文件中进行使用，如果在当前模块外引用，必须使exports/module.exports(特定的类型使用)让这些内容进行暴漏，使用的时候使用require来进行引入。
	**http模块** 是node重要的核心模块
		webServer：方便的实现webServer服务器的创建
		方法：createServer(function(req,res){})进行服务器创建  listen()来监听端口
	**url模块** 对当前的url进行相关操作
	**路由**：通过URL路径来区分不同的请求，从而找到不同的功能模块来进行执行。



nodejs不是一个js框架，千万不要认为是类似jquery的框架，
nodejs是js运行时，运行环境，类比java中jvm，
java的开端是什么，无疑是jvm，自从有了jvm，java才能做到“一次编写处处运行”，
不管你是windows还是linux，只要安装了对应版本的jvm都可以运行.class文件。
同样，nodejs的作用和JVM是一样的，也是js的运行环境，不管是你是什么操作系统，
只要安装对应版本的nodejs，那你就可以用js来开发后台程序。
这具有划时代的意义，意味着一直以来只能在浏览器上玩来玩去的JS，可以做后端开发了，
自从有了nodejs后就催生出一大批用js做后台开发的前端人员，这部分人员就是偏前端的“全栈程序员”。
记住，nodejs是和jvm同等地位的js运行环境，打开了前端人员走向后端的道路。





## Express

express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性和丰富的 HTTP 工具
	功能：
	扩展了web所需要的基本功能
	丰富了HTTP工具
	可以快速搭建一个网站

初始化：npm init
	安装:npm install --save express

```
var express=require("express");
// 初始化express
var app=express();



// 定义中间件（每一次接收到请求后都会先经过中间件）
app.use(function(req,res,next){

​```
console.log("你好")
​```

​```
next()//下一步
​```

})



// 创建服务
app.get("/",function(req,res){
    res.send("aaaaaaa");
})

// 路由的使用
app.get("/index",function(req,res){

​```
res.send("我是index")
​```

})

app.get("/home",function(req,res){

​```
res.send("我是home")
​```

})

app.get("/post",function(req,res){

​```
res.send("我是get的post")
​```

})

app.get("/a*",function(req,res){

​```
res.send("我是路径通配符选择的")
​```

})

// 接受一个post请求
app.post("/post",function(req,res){
    res.send("我是一个post请求")
})



app.listen(3000)
```

### Express--中间件

**中间件** 每次接收到请求都会被先调用的函数 。
就是给一些特定功能添加的一个场所。所有路由都是用的内容可以放入中间件中

语法:

```
app.use(function(req,res,next){

next（） // 向后执行

})
```

**静态资源文件**

使用中间件配合app.use(express.static(path.join(__dirname, “文件夹名”)));

**模版引擎EJS--配置和使用**

下载 ：npm install --save ejs

配置：
app.set(“view engine”,“ejs”)//让express 对模板进行识别 认识ejs
          app.set(“views”,__dirname+”/ejs”)//设置模板的相对路径(放置到ejs的文件夹中)

创建模板文件：
在指定文件夹中创建 创建以.ejs结尾的文件来进行编写模板

引入:
res.render()就是将我们的数据填充到模板后展示出完整的页面。
路由登录注册
登录页面

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登陆页面</title>
</head>
<body>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>登陆页面</title>
    </head>
    <body>
        
        <form action="http://localhost:3001/login">
            <input type="text" name="uname"/>
            <input type="text" name="upwd"/>
            <input type="submit" value="登陆">
        </form>
    
    </body>
    </html>


注册页面

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>注册页面</title>
</head>
<body>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>注册页面</title>
    </head>
    <body>
        
        <form action="http://localhost:3001/zhuce">
            <input type="text" name="uname"/>
            <input type="text" name="upwd"/>
            <input type="submit" value="注册">
        </form>
    
    </body>
    </html>

server.js

在浏览器输入localhost:/端口号/zhuce 或者(login)

var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    // 解决二次请求

    var http=require("http");
    var url=require("url");
    http.createServer(function(req,res){
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        // 解决二次请求
    
        var pathurl=url.parse(req.url);
        if(pathurl.pathname=="/favicon.ico"){
            return;
        }


​    
​    // 路由
​        if(pathurl.pathname=="/login"){
​            res.end("您执行了登陆的后台功能");
​        }else if(pathurl.pathname=="/zhuce"){
​            res.end("您执行了注册的后台功能");
​        }else{
​            res.end("您的请求有误  请核实后在进行请求");
​        }
​    }).listen(3001)

