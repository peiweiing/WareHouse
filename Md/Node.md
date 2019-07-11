###1. nodejs特性 
 单线程
 非阻塞IO
 事件驱动
###2.nodeJS模块的优点
减少代码重复，提高利用率
划分功能，方便管理
方便使用第三方模块
###路由
通过URL路径来区分不同的请求，从而找到不同的功能模块来进行执行
路由就是根据对不同的请求，找到不同的代码完成处理
###express
express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性和丰富的 HTTP 工具

功能：
扩展了web所需要的基本功能
丰富了HTTP工具
可以快速搭建一个网站
```
var express=require("express");
// 初始化express
var app=express();



// 定义中间件（每一次接收到请求后都会先经过中间件）
app.use(function(req,res,next){

    console.log("你好")


    next()//下一步
})



// 创建服务
app.get("/",function(req,res){
    res.send("aaaaaaa");
})


// 路由的使用
app.get("/index",function(req,res){
  
    res.send("我是index")
})

app.get("/home",function(req,res){
   
    res.send("我是home")
})

app.get("/post",function(req,res){
 
    res.send("我是get的post")
})

app.get("/a*",function(req,res){
   
    res.send("我是路径通配符选择的")
})

// 接受一个post请求
app.post("/post",function(req,res){
    res.send("我是一个post请求")
})



app.listen(3000)
```
###Express--中间件
#####中间件 每次接收到请求都会被先调用的函数 。
就是给一些特定功能添加的一个场所。所有路由都是用的内容可以放入中间件中
#####语法
app.use(function(req,res,next){

next（） // 向后执行

})
####静态资源文件
使用中间件配合
app.use(express.static(path.join(__dirname, “文件夹名”)));
####模版引擎EJS--配置和使用
######下载 ：npm install --save ejs

######配置：
app.set(“view engine”,“ejs”)//让express 对模板进行识别 认识ejs
          app.set(“views”,__dirname+”/ejs”)//设置模板的相对路径(放置到ejs的文件夹中)

######创建模板文件：
在指定文件夹中创建 创建以.ejs结尾的文件来进行编写模板

######引入:
res.render()就是将我们的数据填充到模板后展示出完整的页面。
####路由登录注册
#####登录页面
```
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
```
####注册页面
```
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
```
####server.js
#####在浏览器输入localhost:/端口号/zhuce 或者(login)
```
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
```