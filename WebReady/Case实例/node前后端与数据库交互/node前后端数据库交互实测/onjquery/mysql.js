
// 1.先引入express模块，express是一个函数
const express = require("express") 
const app = express() //2.执行express函数；用变量接收express函数返回的值
const mysql = require("mysql") //引入mysql模块
const cors = require('cors') //解决跨域问题
app.use(cors())

const connection = mysql.createConnection({ //配置数据库属性
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
	console.log('mysql连接成功');
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

// 测试模块能否正常连接工作（执行运行命令node 文件名 或者 nodemon 文件名）
connection.query("select 1", function (err, results) {
    //模块报错返回错误信息
    if (err) return console.log(err.message);
    //运行成功
    console.log(results);
})
// 测试成功的返回结果为：[ RowDataPacket { ‘1’: 1 } ]


// 将Vue.js应用程序的静态文件指向”dist”文件夹
// app.use(express.static('dist'));

// 将所有未知请求重定向到”index.html”文件
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/dist/index.html');
// });


app.get('/',function(req,res){
    res.send('hello node')
})

// 使用get提交,操作数据库,返回数据给前端：
// 列表
app.get("/info",function(req,res){ //创建路由,第一个参数是路由,第二个是函数
    // res.setHeader('Access-Control-Allow-Origin','*')//用于解决跨域问题
    const sql = "select * from infos"; //查询myaql表里的数据
    const datas = req.query
    // const datas = JSON.parse(req.query)
    console.log("请求了infos",datas)
    
    //插入数据库
    const insert = "insert into infos set ?"
    connection.query(insert,datas,(err,result)=>{
    	if(err) {console.log(err.message);}
    	else {
    		console.log('数据插入成功',result);
    	}
    });
    //查询数据库并返回数据
    connection.query(sql,(err,result)=>{
        if(err) {console.log(err.message)}
        else {
            console.log("查询结果",result);
            // res.send(result) //将查询结果返回给前端
            res.send({//返回以下数据给前端
                status:200,
                message: '成功',
                datas: result
            })
        }
    });
})

// 使用get提交,操作数据库,返回数据给前端：
// 列表
app.get("/index",function(req,res){ //创建路由,第一个参数是路由,第二个是函数
    // res.setHeader('Access-Control-Allow-Origin','*')//用于解决跨域问题
    const sql = "select * from users"; //查询myaql表里的数据
    const datas = req.query
    // const datas = JSON.parse(req.query)
    console.log("请求了index",datas)
    
    //插入数据库
    const insert = "insert into users set ?"
    connection.query(insert,datas,(err,result)=>{
    	if(err) {console.log(err.message);}
    	else {
    		console.log('数据插入成功',result);
    	}
    });
    //查询数据库并返回数据
    connection.query(sql,(err,result)=>{
        if(err) {console.log(err.message)}
        else {
            console.log("查询结果",result);
            // res.send(result) //将查询结果返回给前端
            res.send({//返回以下数据给前端
                status:200,
                message: '成功',
                datas: result
            })
        }
    });
})

 // 使用get提交,操作数据库,返回数据给前端：
// 修改
// app.get("/update",function(req,res){ //创建路由,第一个参数是路由,第二个是函数
//     const sql = "update Student set StudentName=?,Grender=?,Age=?,Major=?,Score=? where StudentID=?"; //查询myaql表里的数据条件
//     const params = [req.query.name,req.query.gren,req.query.age,req.query.major,req.query.score,req.query.id]; //获取用户输入的信息自定义名
//     connection.query(sql,params,function(err,rs){//查询方法:1.查询语句,1.回调函数
//         if(err) throw err; //抛出错误
//         if(rs.affectedRows>0){ //受影响的行大于0
//             res.send('1') //修改成功
//         }else{
//             res.send('0') //修改失败
//         }
//     })
// })



// 修改
/*const update = 'update user set username = ?,pwd = ?,address = ? where uid = ?';
const params = ['Toby','admin','江苏省无锡市',1];
connection.query(update,params,(err,result)=>{
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
// connection.query(
// 	'select * from user',
// 	function(error,results,fields){
// 		//控制台打印结果
// 		console.log('查询结果',results);
// 	}
// );

// 5.使用连接对象的end方法和destory方法来关闭数据连接
// connection.end();
// connection.destroy();

// connection.end(function (err) {
//     if (err) {return;}
//     console.log('[connection end] succeed!');
// });

// 5.或者在应用程序退出时自动关闭数据库连接
process.on("exit",()=>{
    connection.end();
})
 
app.listen(3000) //监听端口号
console.log("ok")


// 运行mysql数据库后，node执行此文件成功的 


