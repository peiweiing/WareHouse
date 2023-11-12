var express=require("express");
var mongoose=require("mongoose");

var app=express();

// ==========大体流程==========
// 1.创建服务器
// 2.mongoose连接mongodb
// 3.定义集合模型
// 4.想怎么操作 就用什么方法
// ==========大体流程完==========

// 定义集合模型（正确的写的位置）
var User=mongoose.model("user",{
         uname:String,
         uage:String,
         sex:String
     })


app.get("/",function(req,res){
    // (1)连接mongodb  三个参数
    // 1  连接地址   mongodb://localhost:27017/库名
    // 2.解析
    // 3。回调函数
    mongoose.connect("mongodb://localhost:27017/cs",{ useNewUrlParser:true},function(err){

        // (2)判断是否连接成功了
        if(err){
            console.log("连接失败！！！！");
        }else{
            console.log("连接成功！！！！！");
        }

        // (3)姑且先放到这里 设置集合(但是二次请求的时候会报错  不能重新覆盖集合模型  解决方式就是放到路由之外)
        // 两个参数  1.需要使用的集合名字   2.定义对象内容
        //  var User=mongoose.model("user",{
        //      uname:String,
        //      uage:String,
        //      sex:String
        //  })

        //  (4)想怎么操作就怎么操作的阶段（新增）
        // 设置新增内容
        var saveUser=new User({
            uname:"haha",
            uage:"20",
            sex:"男"
        })
        // 开始插入
        saveUser.save().then((ok)=>{
            console.log(ok)
        },(err)=>{
            console.log(err)
        })


        
        // 开始进行查询
        // User.find().then((ok)=>{
        //     console.log(ok)
        //     // 返回给前台
        //     res.send(ok);
        // })

        // User.find({uname:"haha"}).then((ok)=>{
        //     console.log(ok)
        //     // 返回给前台
        //     res.send(ok);
        // })

        // 不一样的内容 findOne()查询指定结果集中的一条数据
        // User.findOne().then((ok)=>{
        //     res.send(ok);
        // })
        // User.findOne({uname:"haha"}).then((ok)=>{
        //     res.send(ok);
        // })


        // 条件查询

        // User.find({uage:{$gt:"19"}}).then((ok)=>{
        //     res.send(ok);
        // })

        // 设置具体显示内容
            //  User.find({},{uname:1,_id:0}).then((ok)=>{
            //     res.send(ok);
            // }) 


        // 修改  (修改的时候必须必须必须必须 在集合对象中定义集合模型)
        User.update({uname:"嘻嘻"},{$set:{uname:"hehe"}}).then((ok)=>{
            console.log(ok);
            res.send(ok);
        })



    })
    res.send("okkkk")

})

app.listen(3000);




