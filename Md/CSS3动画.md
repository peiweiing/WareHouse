# Css3 动画课程



## Transition 过渡效果

**兼容性**

`ie10+` 、`谷歌`、`火狐`、`欧朋`、`safari`.

**相关属性**

包含有以下的几个属性:

- transition 属性简写
- transition-property 表示的是参加过渡的具体的属性，每个属性之间使用逗号来分隔。
- transition-duration 过渡所需的时间  单位 秒或者 毫秒 
- transition-timing-function 过渡所需的时间曲线 贝塞尔曲线  关键词  
- transition-delay 延迟  

### transition 简写属性

### transition-property 规定用于参与css过渡的具体属性

​	**transition-property 设置的是具体属性，如果没有在本条属性中设置某个属性参与过渡，那么没有参与的属性就不会具有过渡效果。**

​	**如果没有设置transition-property 属性，那么标签的所有属性默认都会参与到过渡效果中来。**

​	**如果在设置transition-property属性的时候，想要让所有的属性都参与过渡，可以设置为*all***。

​	**如果在设置的时候，不想让任何属性参与进过渡效果，但是还必须设置这个属性，那么就可以将属性值设置为*none。***

- 语法:
  - transition-property 具体参数：
  - none 没有过渡效果
  - all 全部属性参与过渡
  - property 具体属性值，每一个属性值之间使用逗号分隔。



> transition-property : none | all | property 



```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            transition-property: all;
            transition-duration: 1s;
        }
        p:hover {
            width: 3000px;
            height: 4000px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
</html>
```





### transition-duration 过渡时间/过渡需要使用的具体时间 秒|毫秒  s||ms

### transition-timing-function 规定过渡效果的时间曲线  ，默认值是`ease`。

> 贝塞尔曲线的示例网址:`http://cubic-bezier.com/#.26,.84,.87,.11`。

属性值：

1. cubic-bezier 后面设置的是具体的贝塞尔曲线的值
2. linear 规定以相同的速度从开始到结束 (等于 cubic-bezier(0,0,1,1))
3. ease 规定慢速开始，然后加快，最后慢速结束（cubic-bezier(0.25,0.1,0.25,1)）。
4. ease-in   规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)） -- 加速。
5. ease-out  慢速结束过渡效果 等于 cubic-bezier(0,0,0.58,1)  -- 减速
6. ease-in-out  规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)） 



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightseagreen;
            transition-property: all;
            transition-duration: 10s;
            /*transition-timing-function: cubic-bezier(.17,.67,.87,.11);*/
            /*transition-timing-function: linear;*/
            /*transition-timing-function: ease;*/
            transition-timing-function: ease-in;
        }
        p:hover {
            width: 300px;
            height: 400px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
</html>
```

### transition-delay 延迟 

**作用:在指定的时间之后再来执行变化效果。**

单位:s|ms



> transition: property duration timing-function delay;
>
> *如果使用简写的话，不去设置的具体属性都会采用默认值的形式。*



我们在实际设置延迟的时候，也可以给具体的某个属性设置延迟。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        p {
            width: 100px;
            height: 100px;
            background-color: lightpink;
            transition:1s width 2s,2s height ,3s background-color;
        }
        p:hover {
            width: 300px;
            height: 300px;
            background-color: red;
        }
    </style>
</head>
<body>
    <p>

    </p>
</body>
</html>
```



过渡示例:

**手风琴**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>手风琴</title>
    <style>
        body {
            margin:0;
            padding:0;
            background-color: #f7f7f7;
        }
        h3 {
            margin:0;
            padding:0;
        }
        .box {
            width: 500px;
            margin:0 auto;
        }

        .list h3 {
            height: 35px;
            line-height:35px;
            padding-left: 30px;
            border-bottom:2px solid #690;
            font-size:14px;
            color: #fff;
            background-color: #369;
            transition: all 0.3s ease 0s;
        }
        .list .pictxt {
            height: 0;
            background-color: lightblue;
            transition: all 0.3s ease 0s;
        }
        .list:hover  h3 {
            background-color: #036;
        }
        .list:hover .pictxt{
            height: 150px;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="list">
            <h3>今日新闻</h3>
            <div class="pictxt"></div>
        </div>
        <div class="list">
            <h3>昨日新闻</h3>
            <div class="pictxt"></div>
        </div>
        <div class="list">
            <h3>前日新闻</h3>
            <div class="pictxt"></div>
        </div>
        <div class="list">
            <h3>去年新闻</h3>
            <div class="pictxt"></div>
        </div>
    </div>
</body>
</html>
```

## 动画 animation

Animation是一个简写属性，包含以下内容：

1、Animation-name    调用关键帧

2、Animation-duration   设置完成时间

3、Animation-timing-function   动画的速度曲线

4、Animation –delay                   延迟

5、Animation-iteration-count   动画应该播放的次数

​	N  设置播放次数    infinite   无限次播放  

6、Animation-direction        规定是否该轮流反向播放动画

​	Normal   alternate   动画应该轮流反向播放

7、Animation-play-state              暂停/运行

​	Paused  暂停

​	Running  运行

8、Animation-fill-mode   规定动画在播放之前或者之后，其动画效果是否可见

​	None  不改变默认

​	Forwards  当动画完成后保持最后一个属性值

​	Backwards  在Animation –delay指定的一段时间之内，在动画显示之前，应用开始属性值。

​	Both  向前和向后填充模式都被应用。

简写语法：

Animation: name duration timing-function delay iteration -count direction



**关键帧语法**:



```
@keyframes 关键帧的名字 {
    0% {}
    30% {}
    50% {}
    100%{}
}

@keyframes 关键帧的名字 {
    from {}
    to{}
}
```

