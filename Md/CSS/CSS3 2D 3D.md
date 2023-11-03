## CSS3 2D 



**相关属性**:

- transform : 2d/3d之间的转换
- transform-origin : 更改元素的基点  



相关属性值: *位移/旋转/缩放/倾斜*

- translate(x,y)   沿着x y 移动元素/ translateX(n)  translateY(n)    
- scale(x,y)  缩放  更改元素的宽度和高度 ,将宽度改为原来的x倍，高度改为原来的y倍 / scaleX(n) 更改宽度  scaleY(n)  更改高度
- rotate(angle)  旋转 
- skew(x-angle,y-angle)  定义2D 倾斜转换 沿着x轴和y轴  / skewX(angle) 沿着x轴转换  skewY(angle) 沿着y轴



**translate(x,y)**  x表示沿着x轴位移的距离， y 表示沿着y轴位移的距离

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .box {
            width: 600px;
            height: 300px;
            border: 2px solid orange;
            margin: 0 auto;
        }
        .box .d1 {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            margin:0 auto;
            transition: 2s;
        }
        .box:hover .d1 {
            transform: translate(100px,100px);
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="d1"></div>
    </div>
</body>
</html>
```



**scale(x,y)**  x表示宽度的倍数  y表示高度的倍数 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>scale</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: lightpink;
            transition: 2s;
        }
        div:hover {
            transform: scale(0.5,0.5);
        }
    </style>
</head>
<body>
    <div>

    </div>
</body>
</html>
```

**rotate(angle)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>rotate</title>
    <style>
        .d1 {
            width: 100px;
            height: 100px;
            background-color: deepskyblue;
            border-left: 2px solid lawngreen;
            border-right: 2px solid gold;
            border-top: 2px solid palevioletred;
            border-bottom: 2px solid royalblue;
            transition: 5s;
            border-radius: 50%;
        }
        .d1:hover {
            transform: rotate(1080deg);
        }
    </style>
</head>
<body>
    <div class="d1">指向谁谁乌龟-></div>
</body>
</html>
```

**skew(x-angle,y-angle)**  倾斜/斜切

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>skew</title>
    <style>
        .playhappy {
            width: 100px;
            height: 100px;
            background-color: aquamarine;
            margin:100px auto;
            /*transition: 2s;*/

        }
        .playhappy:hover {
            transform: skew(0deg,10deg);
        }
    </style>
</head>
<body>
    <div class="playhappy"></div>
</body>
</html>
```



**transform-origin : 更改元素的基点  **

![1553484551358](C:\Users\liujunhang\AppData\Roaming\Typora\typora-user-images\1553484551358.png)

**语法:**

transform-origin:(x轴值,y轴值)

- x轴: left | center | right | length | % 
- y轴: top | center | bottom | length | %

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>盘它</title>
    <style>
        img {
            width: 300px;
            height: 300px;
        }
        .anim_image {
            transition: all 1s ease-in-out;
            cursor: pointer;
        }
        .anim_image_top {
            position: absolute;
            transform: scale(0,0);
        }
        .anim_box:hover .anim_image_top {
            transform: scale(1,1);
            transform-origin: top right;
        }
        .anim_box:hover .anim_image_bottom {
            transform: scale(0,0);
            transform-origin: bottom left;
        }
    </style>
</head>
<body>
    <div class="anim_box">
        <img src="./images/photo3.jpg" class="anim_image anim_image_top">
        <img src="./images/photo4.jpg" class="anim_image anim_image_bottom">
    </div>
</body>
</html>
```

***

## CSS3 3D

**相关属性**:

- transform:2d/3d之间的转换
- transform-origin:更改元素的基点
- transform-style:flat|preserve-3d 开启3d空间
- perspective    景深,一般值的范围在900px-1200px ,景深的值最好不要太夸张
- perspective-origin 景深基点
- backface-visibibility   背面隐藏



相关属性值：

- translateX | translateY | translateZ | translate3d(x,y,z)
- scaleX | scaleY | scaleZ | scale3d()
- rotateX(angle) | rotateY(angle) | rotateZ(angle)



## 景深

> 更多的时候是用在父元素的身上。

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 400px;
            height: 400px;
            border: 1px solid red;
            margin: 100px auto;
            /*一定要设置在父元素的身上*/
            perspective: 300px;
        }
        div {
            width: 100px;
            height: 100px;
            background-color: lightblue;
            transition: 1s;
        }

        section:hover div {
            transform: rotateX(45deg);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```



## 开启3D空间

**transform-style:flat|preserve-3d 开启3d空间**

当属性值为`flat`的时候，网页是默认为`2d`空间的。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 600px;
            height: 400px;
            border: 2px solid lightcoral;
            margin: 200px auto;
            background-color: lightblue;
            /*如果没有开启3d空间，那么效果就只是一个平面*/
            transform-style: preserve-3d;
            perspective: 400px;
            transition: 2s;
        }

        section div {
            width: 100px;
            height: 100px;
            background-color: lightgreen;
            transition: 2s;
        }
        section:hover {
            transform:rotateY(85deg);
        }
        section:hover div {
            transform: translateZ(100px);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```



## 示例： 正方体  



中午练习：scaleZ()



## rotate3d(x,y,z,a)

x：是一个0到１之间的数值，主要用来描述元素围绕X轴旋转的矢量值；
y：是一个０到１之间的数值，主要用来描述元素围绕Y轴旋转的矢量值；
z：是一个０到１之间的数值，主要用来描述元素围绕Z轴旋转的矢量值；
a：是一个角度值，主要用来指定元素在3D空间旋转的角度，如果其值为正值，元素顺时针旋转，反之元素逆时针旋转。 





## **3D缩放**：

CSS3 3D变形中的缩放主要有scaleZ()和scale3d()两种函数，当scale3d()中X轴和Y轴同时为1，即scale3d(1,1,sz)，其效果等同于scaleZ(sz)。通过使用3D缩放函数，可以让元素在Z轴上按比例缩放。默认值为１，当值大于１时，元素放大，反之小于１大于0.01时，元素缩小。

*scale3d(sx,sy,sz)*

 sx：横向缩放比例；
 sy：纵向缩放比例；
 sz：Z轴缩放比例；

*scaleZ(s)*

s：指定元素每个点在Z轴的比例。 
**注：scaleZ()和scale3d()函数单独使用时没有任何效果，需要配合其他的变形函数一起使用才会有效果**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        section {
            width: 400px;
            height: 400px;
            border: 2px solid lightseagreen;
            perspective: 300px;
            transform-style: preserve-3d;
        }
        div {
            width: 100px;
            height: 100px;
            background-color: lime;
            transition: 8s;
        }
        section:hover div {
            transform:rotateX(720deg) scale3d(1.2,2.1,3);
        }
    </style>
</head>
<body>
    <section>
        <div></div>
    </section>
</body>
</html>
```

## translate3d

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .stage {
            width: 300px;
            height: 300px;
            float: left;
            margin:15px;
            position: relative;
            background: url("./img/bg.jpg") repeat center center;
            perspective: 1200px;
        }

        .container {
            position: absolute;
            top:20%;
            left:50%;
            transform-style: preserve-3d;

        }

        .container img {
            position: absolute;
            margin-left:-70px;
            margin-right:-100px;
        }

        .container img:nth-child(1) {
            z-index:1;
            opacity: .6;
        }

        .s1 img:nth-child(2) {
            z-index:2;
            transform:translate3d(30px,30px,200px);
        }


        .s2 img:nth-child(2) {
            z-index: 2;
            transform: translate3d(30px,30px,-200px);
        }



    </style>
</head>
<body>
<div class="stage s1">
    <div class="container">
        <img src="./img/k2.png" alt="" width="70" height="100">
        <img src="./img/k2.png" alt="" width="70" height="100">
    </div>
</div>

<div class="stage s2">
    <div class="container">
        <img src="./img/k2.png" alt="" width="70" height="100">
        <img src="./img/k2.png" alt="" width="70" height="100">
    </div>
</div>


</body>
</html>
```

