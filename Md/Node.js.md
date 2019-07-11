## Node.js

Node.js是一个基于Chrome V8引擎(编译成原生机器码)的让JavaScript运行在服务器端的运行环境，它让JavaScript的触角伸到了服务器端。

**Node.js特性：1.单线程；2.非阻塞IO；3.事件驱动。**
		1.单线程 NodeJS不会为每个连接客户创造一个新的线程,仅用一个线程
		2.单非阻塞式IO NodeJS在访问高IO操作后不会等待其完成，而是立即去执行其他代码，操作完成后会使用回调函数返回。保证高效的利用当前线程的cpu 不造成硬件浪费
		3.事件驱动 通过事件来驱动整个程序的进行。由于是单线程，所以把高io的操作 就会移动到事件队列中等待完成，完成后通过回调函数的方式返回给线程来进行处理。这个循环处理的过程称之为：事件环

**模块有优点：**
		**减少代码重复，提高利用率**
		**划分功能，方便管理**
		**方便使用第三方模块**
	**模块** node中以模块来划分功能，一个js是一个模块，多个模块相互引用形成一个模块化式项目
	模块书写 js文件因为作用域的问题，变量和函数只能在当前文件中进行使用，如果在当前模块外引用，必须使用exports/module.exports(特定的类型使用)让这些内容进行暴漏，使用的时候使用require来进行引入。
	**http模块** 是node重要的核心模块
	webServer：方便的实现webServer服务器的创建
	方法：createServer(function(req,res){})进行服务器创建  listen()来监听端口
	**url模块** 对当前的url进行相关操作
	**路由**：通过URL路径来区分不同的请求，从而找到
不同的功能模块来进行执行。



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
    
    
    // 路由
        if(pathurl.pathname=="/login"){
            res.end("您执行了登陆的后台功能");
        }else if(pathurl.pathname=="/zhuce"){
            res.end("您执行了注册的后台功能");
        }else{
            res.end("您的请求有误  请核实后在进行请求");
        }
    }).listen(3001)

