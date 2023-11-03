### CSS3浏览器兼容问题

**主流浏览器**
谷歌   -webkit-         
火狐   -gecko-  
safari   -webkit- 
opera     -blink-  -presto-
ie     -trident-

**浏览器前缀**使用一些css3的属性的时候应该考虑到不同浏览器的内核兼容情况，需要针对不同的内核使用不同的
浏览器前缀。

webkit内核:   -webkit-
firefox Gecko内核:  -moz-
opera :   -o-
trident内核  :  -ms-

-webkit-border-radius:10px;
-moz-border-radius:10px;
-ms-border-radius:10px;
-o-border-radius:10px;
border-radius:10px;

浏览器前缀自动补全的网址:http://autoprefixer.github.io

***

### CSS3选择器

**1 属性选择器**
Tip：E ---> elements 元素  attr属性   value 值
E[attr]
E[attr=value]
E[attr^=value]
E[attr$=value]
E[attr*=value]
E[attr~=value]
E[attr|=value]

**2 结构伪类选择器 **
E:nth-of-type()   / E:nth-child()
E:first-of-type  / E:first-child
E:last-of-type  / E:last-child
E:only-of-type / E:only-child 

:nth-child(x) 选择第x个元素
:nth-child(n) 全选
:nth-child(2n) 选择偶数
:nth-child(2n+1) 奇数

:first-child 第一个
:last-child 最后一个

:only-child 唯一的一个子元素

:nth-child(x) 选择的是指定位置的子元素
:nth-of-type(x) 选择的是指定位置的元素
Tip:  当我们使用:nth-of-type的时候，前面一定要加上元素名不然太猛了

E:first-of-type 同级的情况下，选择第一个元素
E:last-of-type 同级的情况下选择最后一个元素
E:only-of-type 同级的情况下选择唯一的元素



**3 状态伪类选择器**

:root  ；:not ；:empty；:target；

:root 大概等价与html，但是还有一定区别:

1. 优先级不同
   root的优先级高于html
   2.范围不同
   html 只适用于html，root在其他的一些语言里也可以用到。

:not 取相反的操作
例如: ul li:not(.a) 选择的是类名不是a的li元素

:first-letter    选取第一个字符
:first-line      选取第一行

:empty 选择为空的元素
:target 选区目标元素
:focus  元素获得焦点
:checked  元素被选中
:selection 表示被光标选取中

`:not() `    伪类可以将一个或多个以逗号分隔的选择器列表作为其参数，设置处参数以外元素的样式。选择器中不得包含另一个否定选择符或[伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)。
:hover   光标（鼠标指针）悬停在元素上时提供关联的样式。
:enabled    [伪类](https://developer.mozilla.org/zh-CN/CSS/Pseudo-classes) `:enabled` 表示任何启用的（enabled）元素。
:disabled    [伪类](https://developer.mozilla.org/zh-CN/CSS/Pseudo-classes)表示任何被禁用的元素。
:read-write  代表一个元素（例如可输入文本的 input元素）可以被用户编辑。
:read-only  表示元素不可被用户编辑的状态（如锁定的文本输入框）。
:before  将内容添加在所有该标签前面，并设置插入内容的样式。
:after  将内容追加在所有该标签后面，并设置插入内容的样式。


:enabled 选择的是可用状态的标签
:disabled 选择的是禁用状态的标签
:read-write 可读可写 正常状态的input就可以被选中
:read-only 可读，只有在input的状态为readonly时才会被选中

----
input状态:
disabled 禁用

required 必填

readonly 只读

::before ,::after 
:after , :before


你会在别人的代码中看到上面的现象，::after这样的写法，那么经过测试发现，我们:after和
::after都可以有效果。
那么他们的区别在哪里？

首先，:after表示伪类，诞生于css2.1，而到了css3的时候就将:after这样的伪类升级为两个冒号。
二者都有效果。

但是:after 和 ::after 有什么区别?
css3中定义，一个冒号表示伪类，两个冒号表示伪元素。

伪类和伪元素有什么区别?
伪类:当标签进行css样式操作的时候，使用伪类选择操作的样式相当于作用到了元素的“本身”。
伪元素:当标签进行样式操作的时候，相当于将样式作用到了一个"虚拟的标签"的身上。



## 日常使用html标签

header	页面头部
nav	导航内容
banner	轮播图
main	主要内容
main-left	
main-right	
content	文本正中
footer	页面脚注

#  column-count 属性

column-count：规定元素应该被划分的列数。

```
	语法：column-count: number|auto;
```

Column-gap：将 div 元素中的文本分为三列，并规定列间 30 像素的间隔。

Column-rule：规定列之间的宽度、样式和颜色。

## 文本相关属性

text-indent 首行缩进
text-shadow   文字阴影
text-stroke    文字描边
text-overflow   文字溢出隐藏
direction    文字排列方式
word-break 规定自动换行的处理方式
word-wrap  允许长单词或 URL 地址换行到下一行
@font-face   嵌入字体 

text-shadow:
	参数:
		x x轴的偏移量
		y y轴的偏移量
		blur 模糊值  带有单位  值越大越模糊，负值消失
		color 颜色
		多阴影
		

text-stroke ： 文字描边
	参数:
		w 描边的宽度
		color 颜色
		
	Tip:谷歌浏览器需要使用浏览器前缀  
		目前只有谷歌支持(待测试)

word-break 自动换行的处理方式
	参数：
		normal 
		break-all 允许在单词内换行
		keep-all 只允许在空格或者连字符处换行
		

word-wrap  
	参数：
		normal 
		break-word  在长单词或url地址内部进行换行

***

### 字体图标

引入字体图标首先
	需要下载字体图标库
	下载完成之后引入对应的css文件
	在给需要的标签设置字体图标对应的类名
全套字体图标：
	http://www.bootcss.com/p/font-awesome/
定制字体图标：
	https://icomoon.io/app/#/select
	
总结：
	为什么使用雪碧图/css精灵图
	减少客户端向服务端发送的http请求的次数，减少服务端的压力
	

	为什么使用字体图标
		能够自由的按照文字的方式对图标进行适当的更改。
***

### background 背景属性

background-size
background-origin
background-clip
多背景设置

background-size:
	参数：
		length   带有单位的数值
		percentage   百分比
		cover   覆盖整个盒子 等比放大
		contain  把整个图片完整的包裹进盒子当中 等比放大
		
	background-size：100px;
	当这个属性设置一个值的时候，这个值表示宽度，高度为自适应。
		Tip：当设置一个值的时候，不要错误的把高度也想象成这个值。
	如果设置两个值的时候，第一个值表示宽度，第二个值表示高度。
	
	当值设置为百分比的时候，是以父容器的宽度和高度为参考。
	cover 表示不去考虑图片能不能够完整的显示，而是要把容器占满。
	contain 表示不去考虑图片是否占满盒子，而是考虑图片显示完整。
	
	300 400
	宽高比3:4
	
		Tip:ie6-8不能够支持
		
	插件:backgroundsize.min.htc

background-origin  背景位置
	相关属性:
		padding-box   图片会占满padding+内容
		border-box    图片会占满border+padding+内容
		content-box  图片会占满内容区域
		


background-clip 背景裁切 

	相关属性:
		padding-box
		border-box   默认值
		content-box

**多背景**
	/*多背景，顺序靠前，层级就高*/
	background: url(./images/xx1.jpg) no-repeat left top,
				url(./images/xx3.jpg) no-repeat left bottom,
				url(./images/xx4.jpg) no-repeat right top,
				url(./images/xx5.jpg) no-repeat right bottom,
				url(./images/xx2.gif) no-repeat center center;

## 响应式图片与背景图片

图片等比缩放		img{max-width: 100%;};

背景图片等比缩放	div{background-size:cover};

***

### 颜色和渐变

1. rbg、英文单词 、进制 rgba。

  不透明度:
  	rgba
  	opacity: 使用的时候会连字都变得透明

2. 颜色渐变 --- 应用在元素的背景上
    渐变分为两种：线性渐变 和 径向渐变

**linear-gradient() 线性渐变 ** 

	Tip：线性渐变的初始颜色变化默认是从上到下。
		而且，渐变必须设置在background的身上。
		
		background-image: linear-gradient;


	首先，线性渐变是支持多个颜色渐变的。
		background: linear-gradient(red,yellow,blue,pink);
	
	设置渐变方向：
		background: -webkit-linear-gradient(bottom,red,pink);
	如果在参数里直接设置方向，那么需要加浏览器前缀。
	如果在方向的前面加上to，那么就不需要加浏览器前缀。
		background: linear-gradient(to left,red,pink);
		to left 、 to right 、 to top 、to bottom ,没有to center
	当然，关于方向我们也可以组合来使用：
		to left top 或者top left bottom.....
		
	我们除了设置具体的方向值，还可以通过  angle 来设置角度。
	
		在代码中deg表示角度
			0deg表示从下向上
			如果角度为正，则为顺时针，如果角度为负，则为逆时针。
			
	渐变百分比
		background: linear-gradient(to left,red 10%,black 90%);
		方向：从右到左，
			表示从起始方向开始，从右向左的10%为纯红色，从10%到90%为红色向黑色的渐变色，剩下的
			为纯黑色。
			
		练习：
			红、绿、蓝、黄
			
			灰  绿 灰  绿  
			
	线性渐变在IE:
		filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',
		endColorstr='#ff0000',GradientType='1');   
	GradientType = 0 方向是从上向下  1为从左向右
	
	重复线性渐变
		一个渐变的过程已经完成，后续重复的进行这个过程。
		repeating-linear-gradient() ;

**radial-gradient:径向渐变**
	方向：
		left top right bottom ，前面要加webkit
		也可以设置具体的值：apx  bpx 
	还可以设置圆的形状：
		正圆:circle
		椭圆:ellipse

***

### 圆角

**border-radius:圆角**
	boder-top-left-radius: 左上
	border-top-right-radius:右上
	border-bottom-right-radius:
	border-bottom-left-riadus:
	

	border-radius：可以设置一个值到四个值。
		顺序：
			1个值：四个角
			2个值: 左上右下 右上左下
			三个值:  左上  右上左下  右下 
			四个值: 左上 右上  右下  左下 


​			
​	如何通过border-radius做一个圆


**border-image 边框图片**
	目前IE11以上才支持。

	border-image 是一个简写值，分别有以下属性值,
		border-image-source	图片地址
		border-image-slice   图片切片
		border-image-width  图片宽度
		border-image-outset  图片外凸
		border-image-repeat  图片重复  


​	border-image-slice：图像切片
​		值：number  | 百分比  {1,4}
​		Tip：
​			{1,4} 表示最少一个值，最多四个值
​		指定边框图像顶部，右侧，底部，左侧内偏移量。没有具体的单位值，px em rem都不可以。
​		只可以用数字或者百分比。

​	border-image-width  图片宽度  
​		值：lenghth | number | 百分比 {1,4}
​		
​	border-image-outset  图片外凸
​	
​	border-image-repeat  图片重复 

​	border-color	边框颜色（上、右、下、左）

​	transparent	颜色透明

***

### 盒子阴影

box-shadow :
	h-shadow v-shadow blur spread color inset;
	

	h-shadow：水平阴影的位置 允许负值
	v-shadow：垂直阴影的位置 允许负值
	blur : 模糊值
	spread 阴影的大小
	color	颜色
	inset 

