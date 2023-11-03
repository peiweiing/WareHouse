# input标签的value属性及name属性

## input标签的value属性

input 标签的 value 属性的作用是由 input 标签的 type 属性的值决定的

当 type 的取值为 `button、reset、submit` 中的其中一个时，此时 value 属性的值表示的是按钮上显示的文本

当 type 的取值为 `text、password、hidden` 中的其中一个时，此时 value 属性的值表示的是输入框中显示的初始值，此初始值可以更改，并且在提交表单时，value 属性的值会发送给服务器（既是初始值，也是提交给服务器的值）

当 type 的取值为 `checkbox、radio` 中的其中一个时，此时 value 属性的值表示的是提交给服务器的值

当 type 的取值为 `image` 时，点击它提交表单后，会将用户的点击位置相对于图像左上角的 x 坐标和 y 坐标提交给服务器

`type="checkbox"` 时，其 value 属性的值表示在复选框呈勾选状态时提交给服务器的数据值，默认为 `on`
`type="image"` 定义图像形式的提交按钮，此时必须把 src 属性 和 alt 属性 与 `<input type="image">` 结合使用（alt 属性表示图片未正常显示时，用于替换图片的提示；如果不写这个属性，当图片未正常显示时，会默认显示**提交**这两个字）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>input标签的value属性</title>
</head>
<body>
    <form action="#">
        <fieldset>
            <legend>value的值是按钮上的文本</legend>
            <input type="button" value="按钮"> 

            <input type="reset" value="重置"> 

            <input type="submit" value="提交"> 

        </fieldset>
        

        <fieldset>
            <legend>value的值是输入框中的初始值</legend>
            <input type="text" value="我的type属性值是text"> 

            <input type="password" value="我的type属性值是password"> 

            <!--
                定义隐藏字段，隐藏字段对于用户是不可见的
                隐藏字段通常会存储一个默认值，它们的值也可以由 JavaScript 进行修改
            -->
            <input type="hidden" value="我的type属性值是hidden"> 

        </fieldset>
        

        <fieldset>
            <legend>value的值在提交表单时会发送给服务器</legend>
            <input type="checkbox" value="v1"> 

            <input type="radio" value="v2"> 

            <!--image型input标签生成的按钮显示为一幅图像，点击它可以提交表单-->
            <input type="image" src="xxx.png" alt="Submit"> 

            <input type="image" src="xxx.png"> 

        </fieldset>
    </form>
</body>
</html>

```

【注】：

checkbox 型的 input 标签的不足之处在于：提交表单时，只有处于勾选状态的复选框的数据值才会发送给服务器。也就是说，如果没有任何一个复选框被选中，那么服务器就不会收到与其相关的数据项

当设置 input 标签的 type 属性值为`checkbox` 或者 `radio` 时，必须同时设置 input 标签的 value 属性

当 `type="file"` 时，不能使用 value 属性



## input标签的name属性

name 属性规定 input 元素的名称

name 属性用于对提交到服务器后的表单数据进行标识，或者在客户端通过 JavaScript 引用表单数据

只有设置了 name 属性的表单元素才能在提交表单时传递它们的值，因为服务端获取表单提交的数据是通过表单元素的 name 属性的值而得到的，没有 name 属性就无法得到表单元素提交给服务端的值

```
// getParameter("fullName") 中的 fullName 为表单中其中一个input标签的name属性的值
String fullName = request.getParameter("fullName");
```

