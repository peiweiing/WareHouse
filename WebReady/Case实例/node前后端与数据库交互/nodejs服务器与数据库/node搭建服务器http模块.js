const fs = require('fs');
const url = require('url');

// 方法一
// 创建WEB服务器
const HTTP = require('http');//引入http模块
const app = http.createServer();  //创建一个服务器实例对象

// 接受请求做出响应
app.on('request',(req,res)=>{
    // req 请求的对象
    // req.url 请求的服务器端的资源
    // req.method 请求的方法
    // res 响应的对象
    // res.writeHead( ) 设置响应的状态码和头信息
    // res.write( ) 设置响应的内容
    // res.end( ) 结束并发送响应
    console.log('有人访问了服务器')
 })

 app.listen(3000, () => {// 启动服务器
     console.log('api server running at http://127.0.0.1')
 })
 
 
//  方法二
// // 创建服务器
// HTTP.createServer(function (request, response) {
//     // 解析请求，包括文件名
//     var pathname = url.parse(request.url).pathname;
//     // 输出请求的文件名
//     console.log("Request for " + pathname + " received.");
//     // 从文件系统中读取请求的文件内容
//     fs.readFile(pathname.substr(1), function (err, data) {
//         if (err) {
//             console.log(err);
//             // HTTP 状态码: 404 : NOT FOUND, Content Type: text/html
//             response.writeHead(404, { 'Content-Type': 'text/html' });
//         } else {
//             // HTTP 状态码: 200 : OK, Content Type: text/html
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             // 响应文件内容
//             response.write(data.toString());
//         }
//         // 发送响应数据
//         response.end();
//     });
// }).listen(3000)

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:/3000');

// node执行此文件成功的 