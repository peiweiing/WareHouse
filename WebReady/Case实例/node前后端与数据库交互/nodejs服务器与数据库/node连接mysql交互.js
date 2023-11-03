
// 1.先引入express模块，express是一个函数
var express = require("express") 
var app = express() //2.执行express函数；用变量接收express函数返回的值
var mysql = require("mysql") //引入mysql模块
var connection = mysql.createConnection({ //配置数据库属性
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

// 4. 准备sql语句
// let sql = 'select * from student'; 查询语句
// let sql = 'insert into student values(null,"冉祎航",20,1,"计算机",2)'
// let sql = 'update student set age = 30 where id = 31'
// let sql = 'delete from student where id = 31'


// 测试模块能否正常连接工作（执行运行命令node 文件名 或者 nodemon 文件名）
connection.query("select 1", function (err, results) {
    //模块报错返回错误信息
    if (err) return console.log(err.message);
    //运行成功
    console.log(results);
})
// 测试成功的返回结果为：[ RowDataPacket { ‘1’: 1 } ]


// 操作数据库,增删改查
// 查询
/*const select = 'select * from user';
connection.query(select,(err,result)=>{
	if(err) {console.log(err.message)}
	else {
			console.log(result);
		}
});*/

// 插入（两种方法）
//方法一、属性和字段一一对应时
// const insert = "insert into users set ?";
// const datas = { username: "xiaomin", pwd: "pcc321", address: "山西省太原市小店区" }
// connection.query(insert,datas,(err,result)=>{
// 	if (err) return console.log(err.message);
//     if (results.affectedRows == 1) {
//         console.log("插入成功");
//     }
// })
//方法二、数组形式添加
/*const insert = 'insert into user(username,pwd,address) values(?,?,?)';
const datas = {username: "xiao1jiao", pwd: "111222", address: "山西省太原市小店区" }
connection.query(insert,[datas.username,datas.pwd,datas.address],(err,result)=>{
	if(err) {console.log(err.message)}
	else {
			console.log(result);
			console.log('数据插入成功');
	}
});*/

// 修改（两种方法）
//方法一、属性和字段一一对应时
// const update = "update users set ? where id=?"
// const params = {username:'Toby', pwd:'admin', address:'江苏省无锡市', uid:1};
// connection.query(update, [params, params.uid], function (err, results) {
// 	if (err) return console.log(err.message);
// 	if (results.affectedRows == 1) {
// 		console.log("修改", user.id, "列成功");
// 	}
// })
//方法二、数组形式添加
/*const update = 'update user set username = ?,pwd = ?,address = ? where uid = ?';
const params = {username:'Toby', pwd:'admin', address:'江苏省无锡市', uid:1};
connection.query(update,[params.username,params.pwd,params.address,params.uid],(err,result)=>{
	if(err) {console.log(err.message)}
	else {
			console.log(result);
			console.log('数据修改成功');
		}
});*/

// 删除
/*const d = 'delete from user where uid = ?';
connection.query(d,3,(err,result)=>{
	if(err) {console.log(err.message)}
	else {
			console.log(result);
			console.log('数据删除成功');
		}
});*/


// 4.执行mysql操作：查询操作
connection.query(
	'select * from user',
	function(error,results,fields){
		//控制台打印结果
		console.log(results);
	}
);

// 应用程序退出时自动关闭数据库连接
process.on("exit",()=>{
    connection.end();
})

app.listen(3020) //监听端口号
console.log("ok")


// 运行mysql数据库后，node执行此文件成功的 