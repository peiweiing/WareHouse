## JSON Web Tokens 密钥加密

jwt的核心是密钥--JSON格式被加密了的字符串（加密签名）	官网：http://jwt.io/

下载：npm install --save jsonwebtoken

JWT:用户登录服务端生成一个token（加密字符串）发送给前端，并保存；前端发送请求的时候携带token返回给服务器，服务器进行验证是否合法

## JWT使用



token密钥生成：

jwt.sign(数据，随便一点内容加密的密文(越乱越好))

```

var data={
    uname:"xixi",
    userid:"1"
}
var mi="sajfklsfjsdkljsfjskdl"//加密的密文（越乱越好）
var token=jwt.sign(data,mi);

```



token密钥验证：

jwt.verify(验证的token，加密的密文，回调)

```

jwt.verify(token,mi,function(err,data){
    console.log(err);//正确就是null
    console.log(data);
})

```

