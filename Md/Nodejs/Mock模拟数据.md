# [mock数据](https://www.cnblogs.com/grapefruitZ/p/16783658.html)

首先需要安装mockjs，使用request来引用；

mock的书写规范是Mock.mock({   "name| rule: value"  })；



rule规则是可选的，有七种规则

```js
1. 'name|min-max': value
2. 'name|count': value
3. 'name|min-max.dmin-dmax': value
4. 'name|min-max.dcount': value
5. 'name|count.dmin-dmax': value
6. 'name|count.dcount': value
7. 'name|+step': value
```



生成的数据需要依赖属性值的类型来确定，数据类型的例子如下

```js
Mock.mock({
　　'number|1-100.1-10': 1,
　　'number|123.1-10': 1,
　　'number|123.3': 1,
　　'number|123.10': 1.123
})

//  模拟的数据如下
{
　　"number": 12.92,
　　"number": 123.41,
　　"number": 123.924,
　　"number": 123.1234567891
}
```



mock中的占位符@是引用的Mock.Random中的方法，占位符的格式，是可加括号可不加括号例如

```js
// @占位符或@占位符(参数[, 参数])Mock.mock({ 
   name : {　　　　first: '@email',　　　　last: '@phone'   
})

//  等同于
{
name: {
　　first: Mock.Random.email(),
　　last: Mock.Random.phone()
}

//  模拟出的值为
{
　　"name" : {
　　　　"first": "111@qq.com",
　　　　"last": "17322877896"
　　}
}
```



占位符@的常用属性

```js
@cname()和@name()都是生成名称
@city()是生成城市
@email()是生成邮箱
@increment(num)生成id，括号里的数表示自增数，开始数不确定
@ctitle()生成title
@data(yyyy-mm-dd hh:mm:ss)生成时间，括号里是时间的格式
@cparagraph(1,3)生成描述信息，括号里表示生成一到三局的描述信息@word(20)生成20个随机字符@image("300x200")生成图片
用Random生成图像

Random.image( size, background, foreground, format, text )

，括号里的参数分别是：大小, 背景颜色, 图片的前景色（文字），图片格式，文字
Random.image(“200x200”, "#00405d", "#fff", "png", "图片")Random.image() 用于生成高度自定义的图片地址，一般情况下，应该使用更简单的Random.dataImage()，生成一段随机的 Base64 图片编码。
```



模拟接口，括号里的第一个参数是接口的地址，第二个是请求方式，第三个就是函数返回的数据格式，记录用于生成响应数据的函数。当拦截到匹配 `url` 和 `type` 的 Ajax 请求时，函数 `function(options)` 将被执行，并把执行结果作为响应数据返回。

```js
Mock.mock('/api/info/list',  'get', () => {
    return {
        code: 200,
        message: "这是一个get请求",
        data: userdata
    }
})
```

