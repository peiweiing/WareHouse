const express = require('express');  //引入express第三方模块
const app = express( );  //创建一个服务器实例对象
app.listen(3000, () => {// 启动服务器
    console.log('api server running at http://127.0.0.1')
})


//添加路由：处理首页的请求
//请求的URL：/index  请求的方法：get
app.get('/index',(req,res)=>{
    res.send('这是首页！');//设置响应的内容并发送
});

//添加路由：跳转
app.get('/study',(req,res)=>{
    res.redirect('https://www.tmooc.cn/');//设置响应的重定向并发送
});

//添加路由：响应文件
app.get('/list',(req,res)=>{
    res.sendFile(__dirname + '/1.html');//设置响应的文件并发送，使用绝对路径 __dirname
});
