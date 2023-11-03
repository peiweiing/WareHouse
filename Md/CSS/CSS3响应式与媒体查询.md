## 响应式布局概念

1 相关人物介绍：
**伊桑·马科特**（Ethan Marcotte）在2010年首先提出了响应式网页设计（RWD,Responsive Web Design）这个术语。
在他的一篇文章《Responsive Web Design · An A List Apart Article》中他将已有的三种发开技巧（弹性图片，弹性网格布局，媒体与媒体查询） 进行了整合，命名为响应式网页设计。
那什么才是真正的响应式设计？马科特说，真正的响应式设计方法不仅仅是根据可视区域大小而改变网页布局，而是要
从整体上颠覆当前网页的设计方法，是针对任意设备的网页内容进行完美布局的一种显示机制。

2 响应式网页浏览
    了解响应式网页的特性

3 **当今流行的网页布局方案**
**固定布局**：以像素作为页面的基本单位，不管设备屏幕及浏览器宽度，只设计一套尺寸；

**可切换的固定布局**：同样以像素作为页面单位，参考主流设备尺寸，设计几套不同宽度的布局。通过识别的屏幕尺寸或浏览器宽度，选择最合适的那套宽度布局；

**响应式布局**：对页面进行响应式的设计实现，需要对相同内容进行不同宽度的布局设计，有两种方式：pc优先（从pc端开始向下设计）；移动优先（从移动端向上设计）；无论基于那种模式的设计，要兼容所有设备，布局响应时不可避免地需要对模块布局做一些变化（发生布局改变的临界点称之为断点）。

**弹性布局**：以百分比作为页面的基本单位，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空 间展现最佳效果；

**混合布局**：同弹性布局类似，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，并能完美利用有效空间展现最佳效果；只是混合像素、和百分比两种单位作为页面单位。

4**响应式布局的优缺点**
设计特点：
    面对不同分辨率设备灵活性强
    能够快捷解决多设备显示适应问题
缺点：
    兼容各种设备工作量大，效率低下
    代码累赘，会出现隐藏无用的元素，加载时间加长
    其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果
    一定程度上改变了网站原有的布局结构，会出现用户混淆的情况

5 **开发响应式网页的前期准备**

5.1 **Meta标签的设置**
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,  user-scalable=no">
    这段代码的几个参数解释：
    width = device-width：宽度等于当前设备的宽度
    initial-scale： 初始的缩放比例（默认设置为1.0）
    minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）
    maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）
    user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）

5.2 **meta标签其他可选设置**

H5页面窗口自动调整到设备宽度，并禁止用户缩放页面

<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />

忽略将页面中的数字识别为电话号码

<meta name="format-detection" content="telephone=no" />

忽略Android平台中对邮箱地址的识别

<meta name="format-detection" content="email=no" />

当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对ios的safari

<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- ios7.0版本以后，safari上已看不到效果 -->
将网站添加到主屏幕快速启动方式，仅针对ios的safari顶端状态条的样式

<meta name="apple-mobile-web-app-status-bar-style" content="black" />

5.3 **rem 和 vw/vh**
rem是以html根元素的字体大小为参考。
默认情况下，1rem = 16px，此时html相当于font-size:100%。

**vh|vw这两个单位，以视口为参考**。
视口单位中的“视口”，桌面端指的是浏览器的可视区域；移动端指的就是Viewport中的Layout Viewport。

```
1vw等于视口宽度的1%。
1vh等于视口高度的1%。
Tip：并且会随着视口的变化而变化。
```

5.4 **什么是断点？**
断点，响应式网页发生变化的临界点。

5.5 **什么是媒体查询，响应式网页与媒体查询的关系**
媒体查询是css当中的一种技术，通过这种技术可以判断用户的浏览器宽度，类型，以及横屏还是竖屏等。

响应式网页的实现方式有很多，主流方式是通过媒体查询的形式来实现响应式网页。

5.6 **媒体查询特性**
媒体查询可以让我们根据设备显示器的特性（如视口宽度、屏幕比例、设备方向：横向或纵向）为其设定CSS样式，
媒体查询由媒体类型和一个或多个检测媒体特性的条件表达式组成。媒体查询中可用于检测的媒体特性有 width 、
height 和 color （等）。使用媒体查询，可以在不改变页面内容的情况下，为特定的一些输出设备定制显示效果。

5.7 **媒体查询基本语法**
@media 媒体类型  关键字 (条件1) 关键字 (条件2) ... {
    css code
}

常用媒体类型：
    all     所有设备
    aural    听觉设备
    braille   点字触碰设备
    print    打印
    tty      打字机设备
    tv      电视机等设备
    screen  显示器、笔记本、电脑等设备
    ...

```
上述的设备有很多，只是简单的陈述几种，但是我们常用的设备只有all和screen
```

关键字：
    and 并且 和
    not 否定、排除
    only 限定
    or 或者
条件：
    min-width:400px

媒体查询语法示例:
    @media all (min-width:480px) {
        html {
            background:red;
        }
    }

```
上述示例表示当用户设备屏幕处于最小宽度为480px以上的时候，网页的背景颜色为红色

/* 竖屏 */
@media screen and (orientation:portrait) {对应样式}

/* 横屏 */
@media screen and (orientation:landscape){对应样式}
```

5.8 **常用断点值**

```
320px
480px
768px
1024px
```

5.9 **css2中媒体查询的用法**

其实并不是只有CSS3才支持Media的用法，早在CSS2开始就已经支持Media，具体用法，就是在HTML页面的head标签中插入如下的一段代码
<link rel="stylesheet" type="text/css" media="screen" href="style.css">;
想知道现在的移动设备是不是纵向放置的显示屏，可以这样写：
<link rel=“stylesheet” type=“text/css” media=“screen and  (orientation:portrait)”  	href="style.css">
orientation:portrait：指定输出设备中的页面可见区域高度大于或等于宽度
landscape：除portrait值情况外，都是landscape
第一段的代码也用CSS2来实现，让它一样可以让页面宽度小于960的执行指定的样式文件：
<link rel="stylesheet" type="text/css" media="screen and (max-width:960px)" href="style.css">

5.10**移动端优先和pc端优先**

在开发响应式网页的时候，我们有两种选择，一种是从移动端开始开发然后逐渐升级到pc，这种方式叫做移动端优先
pc端优先则正好相反。

