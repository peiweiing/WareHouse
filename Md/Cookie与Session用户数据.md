## Session

session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。

客户端浏览器访问服务器的时候，服务器把客户端信息以某种形式记录在服务器上，这就是session（会话）。

## session使用

下载 npm i --save cookie-parser

​	npm i --save express-session



**session存储：**

```
存储：在中间件中进行session存储
	app.use(session({
		secret:'12345',//设置签名密钥，内容可以任意填写
		cookie:{maxAge:80*1000},//设置cookie的过期事件 例：80s后session和相应的cookie失效过期
		resave:true,//强制保存 如果session没有被修改也要重新保存
		seveUninitialized:false//如果原先没有session那么就设置，否则不设置
	}))
```



**session读取：**

```
req.session//读取session

req.session.xx//xx设置session内容
```



session注销：

```
app.get("/out",function(req,res){
    req.session.destroy()//注销session
    res.redirect("/see")//重定向定位到指定内容
})
```



## 为什么需要session？

web应用是基于HTTP协议的，而HTTP协议恰恰是一种无状态协议。也就是说，用户从A页面跳转到B页面会重新发送一次HTTP请求，而服务端在返回响应的时候是无法获知该用户在请求B页面之前做了什么的。
	无状态的协议怎样才能关联两次连续的请求呢？cookie和session来解决

## Cookie与session的区别

cookie数据存放在客户的浏览器上，session数据放在服务器上。
	COOKIE不是很安全，别人可以分析存放在本地的COOKIE并进行
COOKIE欺骗 考虑到安全应当使用session。

session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面，应当使用COOKIE。

tip：单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。