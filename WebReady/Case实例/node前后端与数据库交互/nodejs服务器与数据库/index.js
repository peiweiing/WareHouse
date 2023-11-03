var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var uE=bodyParser.urlencoded({extended:false});


app.use(function(req,res,next){

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    
     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next()
})


// 通过get方式返回数据给前端
app.get("/get",function(req,res){
    var uname=req.query.uname;
    res.send({status:200,
        content:uname,
        type:"get",
        list:[
            {uname:"xixi1",age:181},
            {uname:"xixi2",age:182},
            {uname:"xixi3",age:183},
            {uname:"xixi4",age:184},
            {uname:"xixi5",age:185}
        ]
    })
})

// 通过post方式返回数据给前端
app.post("/post",uE,function(req,res){
    var uname=req.body.uname;
    console.log("前台发送过来的数据"+uname);
    res.send({status:200,
        content:uname,
        type:"post",
        list:[
            {uname:"postxixi1",age:181},
            {uname:"postxixi2",age:182},
            {uname:"postxixi3",age:183},
            {uname:"postxixi4",age:184},
            {uname:"postxixi5",age:185}
        ]})
})
app.listen(3000);