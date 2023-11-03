
// 1.先引入express模块，express是一个函数
var express = require("express") 
var app = express() //2.执行express函数；用变量接收express函数返回的值
var mysql = require("mysql") //引入mysql模块
var coon = mysql.createConnection({ //配置数据库属性
    host:"localhost",//连接的数据库的ip地址
    port:"3306",//连接数据库的端口号
    user:"root",//用户名
    password:"root",//密码
    database:"ceshi"//连接的数据库名
})
// 3.建立连接
// connection.connect();
// 3.或者获取数据库连接
connection.connect((err)=>{
	if(err) throw err;
	console.log('连接成功');
});
//设置允许跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });


  
// 将Vue.js应用程序的静态文件指向”dist”文件夹
// app.use(express.static('dist'));

// 将所有未知请求重定向到”index.html”文件
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/dist/index.html');
// });

// 使用get提交,连接数据库,返回数据给前端：
// 列表
app.get("/index",function(req,res){ //创建路由,第一个参数是路由,第二个是函数
    var sql = "select * from Student"; //查询myaql表里的数据
    coon.query(sql,function(err,rs){ //查询方法:1.查询语句,1.回调函数
        if(err) throw err; //抛出错误
        if(rs.length>0){ //返回信息长度大于0就是有数据
            res.send(rs) //则返回给前端
        }
    })
})
 
 // 使用get提交,操作数据库,返回数据给前端：
// 修改
app.get("/update",function(req,res){ //创建路由,第一个参数是路由,第二个是函数
    var sql = "update Student set StudentName=?,Grender=?,Age=?,Major=?,Score=? where StudentID=?"; //查询myaql表里的数据条件
    var params = [req.query.name,req.query.gren,req.query.age,req.query.major,req.query.score,req.query.id]; //获取用户输入的信息自定义名
    coon.query(sql,params,function(err,rs){//查询方法:1.查询语句,1.回调函数
        if(err) throw err; //抛出错误
        if(rs.affectedRows>0){ //受影响的行大于0
            res.send('1') //修改成功
        }else{
            res.send('0') //修改失败
        }
    })
})


// 应用程序退出时自动关闭数据库连接
process.on("exit",()=>{
    connection.end();
})


app.listen(3000) //监听端口号
console.log("ok")

// 运行mysql数据库后，node执行此文件成功的 