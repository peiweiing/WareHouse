// 一、首先导入相应的包
const db = require("./nodejs-orm/index")
const express = require('express')
const { send } = require("express/lib/response")
const path =require("path")

let cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

// 二、配置静态文件
// 这里设置public为静态文件存储文件夹
app.use(express.urlencoded());
// 在一个项目中会有一个静态资源文件夹
app.use(express.static(path.join(__dirname,'public'))); //设置在public下查找资源(以public为根去找静态资源)

// 这四句代码，模板引擎初始化工作
// 引入express-art-template 使用对应的引擎
app.engine('html',require('express-art-template'))
// 项目环境的设置
// 生产环境（线上） production
// 开发环境  development
app.set('view options',{
    debug:process.env.NODE_ENV !== 'production'
});
// 设置在哪一个路径下查找模板文件
app.set ('views',path.join(__dirname,'views'));
// 设置模板的后缀名
app.set('view engine','html') 

// 三、导入multer包，设置请求地址，连接数据库将文件存储在public文件夹下，将请求地址存储在数据库中
const multer=require('multer')
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        //指定文件路径存储地
        cb(null,'./接口/EXpress/public/');
        
    },
    filename:function(req,file,cb){
        //指定存储后的文件名(有两个问题)
        //1文件名重复覆盖  时间戳
        //2后缀名发生改变
        console.log('---',file);
        //获取后缀名
        let exts=file.originalname.split('.');
        let ext=exts[exts.length-1];
        let tepname=(new Date()).getTime()+parseInt(Math.random()*9999);
        //拼接名字
        cb(null,`${tepname}.${ext}`);
    }
});

var upload=multer({
    storage:storage
});

app.post('/upload',upload.single('hehe'),(req,res)=>{
    //hehe 要上传图片数据的key值 必须和前端保持统一   {   'hehe':图片数据}
    // console.log(req.file);
    // { fieldname: 'hehe',//接受数据库的key值
    //     originalname: '2019-12-06_102017.jpg',//原始名字
    //     encoding: '7bit', //转码
    //     mimetype: 'image/jpeg', //文件类型
    //     destination: './uploads', //存储位置
    //     filename: 'aaa.jpg',//文件名字
    //     path: 'uploads\\aaa.jpg',//文件地址
    //     size: 33479 }
    let {size,mimetype,path}=req.file;
    console.log(mimetype)
    let types=['jpeg','jpg','png','gif'];//允许上传的类型
    let tmpType=mimetype.split('/')[1];

    console.log(tmpType)
    if(size>5000000){
        return res.send({err:-1,msg:'上传的内容不能超过5000000'})
    }else if(types.indexOf(tmpType)==-1){
        return res.send({err:-2,msg:'上传的类型错误'})
    }else{
    // 服务器静态化目录 app.use('/filename',express.static(path.join(process.cwd(),'./uploads')));
        let url=`${req.file.filename}`;
        http = 'http://192.168.3.20:3000/'+url
        let Studens = db.model("studens")
        Studens.insert({hdname:'dsadas',hdjieshao:http},(err,data)=>{
            console.log(err);
            // res.send(data)
            res.send({err:0,msg:'上传成功',img:url})
        })
        
    }
})



// 我们可以通过数据库中的地址请求一下
// http://192.168.3.20:3000/图片名.png
// 请求成功。这样我们就能通过请求获取上传的图片了。
// 我们再通过前端请求，就可以获取图片地址，把他放在相应的位置上了
