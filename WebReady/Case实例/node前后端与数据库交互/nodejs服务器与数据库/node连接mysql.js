// nodejs连接mysql——createPool和createConnection连接数据库


// 方法一、createConnection连接数据库方法连接mysql数据库
//引入mysql模块
var mysql = require("mysql");
const cors = require('cors') //解决跨域问题
app.use(cors())
// 建立与mysql数据库的连接配置
var connection = mysql.createConnection({
    host:"127.0.0.1", //主机IP
    port:3306,        //端口号
    user:"root",	  //用户名
    password:"root",  //密码
    database:"ceshi"   //数据库名
});
// 3.建立连接
// connection.connect();
// 3.或者获取数据库连接
connection.connect((err)=>{
	if(err) throw err;
	console.log('连接成功');
});
// 准备sql语句
// let sql = 'select * from student'; 查询语句
// let sql = 'insert into student values(null,"冉祎航",20,1,"计算机",2)'
// let sql = 'update student set age = 30 where id = 31'
// let sql = 'delete from student where id = 31'

// 执行sql语句，检测mysql模块能否正常工作
db.query('SELECT 1',(err,results)=> {
    if(err) return console.log(err.message)
    // 只要能打印出[RowDataPacket{'1':1}]的结果，就证明数据库连接正常
    console.log(results)
})
console.log('Server running at "ceshi"/');

// 结束连接,end方法和destory方法
// connection.end();
// connection.destroy();
// 结束连接；如果不再有sql被执行，一定要关闭连接，否则会一直占用资源
// connection.end(function (err) {
//     if (err) {return;}
//     console.log('[connection end] succeed!');
// });
// 或者在应用程序退出时自动关闭数据库连接
process.on("exit",()=>{
    connection.end();
})
 

// 运行mysql数据库后，node执行此文件成功的 




// 方法二、createPool连接mysql数据库
// 1. 引入mysql模块
let mysql = require('mysql');
const cors = require('cors') //解决跨域问题
app.use(cors())
// 2. 创建连接池
let pool = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'ceshi',
    connectionLimit:50, // 连接池中最大的连接数 （默认10）
    queueLimit:3 // 用于指定允许挂起的最大连接数，超过了会报错
})

// 3. 建立连接
pool.getConnection((err,connection)=>{
    // 如果连接失败了，err就是错误信息对象
    if(err){
        console.log('与mysql数据库建立连接失败');
        return
    }
    console.log('与mysql建立连接成功');
    console.log(pool._allConnections.length); //  1
    // connection 连接池子冻给你分配的连接对象
    connection.query('select * from user',(err,data)=>{
        if(err){
            console.log('查询失败:'+err);
            return;
        }
        // 对查询的结果进行操作
        console.log("查询结果:",data);
        // 当一个连接不再使用并将其归还到连接池中，用release方法。
        connection.release();
        // 当一个连接不再使用且从连接池中移除时，用destroy方法。移除后，连接池的连接数减一。
        connection.destroy(); 
    })
    // 当连接池不再使用时，用连接池对象的end方法。
    pool.end();
})


// 注意：数据库连接：频繁的创建和销毁连接是非常消耗资源的
// 连接池的使用
// 注意：封装的时候封装连接池，因为将来在进行数据操作的时候会在一个sql执行成功之后，执行下一个sql，这样普通的sql语句就不能满足我们的需求，需要使用连接池操作！
// 连接池：程序启动时，程序会建立一定数量的连接对象，并将这些连接对象放在一个尺子里。由程序动态的对池子中的连接进行分配，使用和释放。




// 【封装方法】连接池的数据库连接方式
// 1. 引入mysql模块
let mysql = require('mysql');
let db = {};
// 2. 创建连接池
let pool = mysql.createPool({
    host:'localhost',
    database:'yunhe',
    user:'root',
    password:'',
    connectionLimit:50, // 连接池中最大的连接数 （默认10）
    queueLimit:3 // 用于指定允许挂起的最大连接数，超过了会报错
})
// 3. 导出连接
// 添加一个query方法
db.query = function(sql,callback){
    pool.getConnection((err,conn)=>{
        if(err){
            console.log(err);
            return
        }
        conn.query(sql,(err,data)=>{
            if(err){
                console.log(err);
                return
            }
            callback(data);
        })
    })
}
// 4. 导出模块
module.exports = db;


// 调用封装好的连接池
let db = require('./db');
// 使用封装的内容
db.query("select * from student",data=>{
    console.log(data);
})

// 封装好的数据库方法，基本上是万能的方法，可以实现数据库的常用操作