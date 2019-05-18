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



:root  ；:not ；:empty；:target；


:root 大概等价与html，但是还有一定区别:
1. 优先级不同
  root的优先级高于html
  2.范围不同
  html 只适用于html，root在其他的一些语言里也可以用到。


:not 取相反的操作
例如: ul li:not(.a) 选择的是类名不是a的li元素

:empty  选取为空的元素
:target  选取目标元素

**3 状态伪类选择器**
:focus 
:checked
::selection
:first-letter    选取第一个字符
:first-line      选取第一行

:focus  元素获得焦点
:checked  元素被选中

::selection 表示被光标选取中



:enabled
:disabled 
:read-write
:read-only 
:before
:after  


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

***

### 文本相关属性

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
	如何通过border-radius做一个圆


**border-image 边框图片**
	目前IE11以上才支持。

	border-image 是一个简写值，分别有以下属性值,
		border-image-source	图片地址
		border-image-slice   图片切片
		border-image-width  图片宽度
		border-image-outset  图片外凸
		border-image-repeat  图片重复  


​	
	border-image-slice：图像切片
		值：number  | 百分比  {1,4}
		Tip：
			{1,4} 表示最少一个值，最多四个值
		指定边框图像顶部，右侧，底部，左侧内偏移量。没有具体的单位值，px em rem都不可以。
		只可以用数字或者百分比。


​	
	border-image-width  图片宽度  
		值：lenghth | number | 百分比 {1,4}
		
	border-image-outset  图片外凸
	
	border-image-repeat  图片重复 
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
***

### 弹性盒子模型

盒子模型和怪异盒子模型
什么是弹性盒子模型
旧版本弹性盒子模型简单介绍
新版本弹性盒子模型属性
分栏布局

1. **盒子模型：**

  box-sizing:border-box|content-box;

2. **怪异盒子模型**


3. **弹性盒子模型**

  学习弹性盒子模型之前的准备:
  	主轴、侧轴、弹性容器、弹性子元素。
  	
  **display:flex；**
  	将元素变为弹性容器，那么这个元素里面的子元素自然而然的就变成了弹性子元素。(容器是一个
  	块级元素)
  **display:inline-flex;**
  	容器是一个行内flex元素。

  **flex-direction**:弹性容器中子元素的排列方式(主轴排列方式)

  **flex-wrap**:设置弹性盒子的子元素超出父容器时是否换行

  **flex-flow:flex-direction 和 flex-wrap 的简写**

  **align-item**:设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式

  **align-content**:修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐(行与行的对其方式)

  **justify-content**:设置弹性盒子元素在主轴（横轴）方向上的对齐方式
  	
  	

	flex-direction:弹性容器中子元素的排列方式(主轴排列方式)【子元素在主轴上的排列方式】
		属性值：
	        row:默认在一行排列
	        row-reverse:反转横向排列（右对齐，从后往前排，最后一项排在最前面。）
	        column：纵向排列。
	        column-reverse：反转纵向排列，从下往上排，最后一项排在最上面
	
	flex-wrap:设置弹性盒子的子元素超出父容器时是否换行 
		Tip:横轴的方向决定了新行堆叠的方向。
	    属性值：
	        nowrap: 默认值。规定元素不拆行或不拆列。
	        wrap:规定元素在必要的时候拆行或拆列。
	        wrap-reverse:规定元素在必要的时候拆行或拆列，但是以相反的顺序。
	
	flex-flow:flex-direction 和 flex-wrap 的简写

**align-item**:设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式

	相关属性：
	    flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
	    flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
	    center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
	    baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
**align-content**:修改 flex-wrap 属性的行为，类似 align-items, 但不是设置子元素对齐，而是设置行对齐(行与行的对其方式)

相关属性：
		说明：
		当伸缩容器的侧轴还有多余空间时，本属性可以用来调准「伸缩行」在伸缩容器里的对齐方式，这与调准伸缩项目在主轴上对齐方式的 <' justify-content'> 属性类似。请注意本属性在只有一行的伸缩容器上没有效果。
		■ flex-start没有行间距
		■ flex-end底对齐没有行间距
		■ center居中没有行间距
		■ space-between两端对齐，中间自动分配
		■ space-around自动分配距离

**justify-content**:设置弹性盒子元素在主轴（横轴）方向上的对齐方式
		说明：
        内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐
        ■ flex-start默认，顶端对齐
        ■ flex-end末端对齐
        ■ center居中对齐
        ■ space-between两端对齐，中间自动分配
        ■ space-around自动分配距离

***

### 弹性子元素相关属性

**order**：设置弹性盒子的子元素排列顺序。 number排序优先级，数字越大越往后排，默认为0，支持负数。
 **flex-grow**:设置或检索弹性盒子元素的扩展比率。
 **flex-shrink**:指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
**flex-basis**:用于设置或检索弹性盒伸缩基准值。
**flex**:设置弹性盒子的子元素如何分配空间。
**align-self**:在弹性子元素上使用。覆盖容器的 align-items 属性。

*order*:设置弹性盒子的子元素排列顺序。 number排序优先级，数字越大越往后排，默认为0，支持负数。

*flex-grow*:设置或检索弹性盒子元素的扩展比率。
	参数：
	 <integer>：一个数字，规定项目将相对于其他灵活的项目进行扩展的量。默认值是 0。
	瓜分容器的剩余空间。
	什么是剩余空间？
		假设父元素的宽度是500px，
		有三个子元素，每个宽度是100，那么剩余空间就是500 - 100 * 3 = 200。
		而flex-grow就是用来瓜分剩余空间的。
		例如第一个盒子属性为flex-grow:1;那么剩余空间就会被分成一份，第一个盒子额外的占据了这一份。
		如果这个时候第二个盒子flex-grow:2;那么此时剩余空间就被分成三分，第一个盒子占一份，第二个盒子占两份。
		
		
*flex-basis*:用于设置或检索弹性盒伸缩基准值。
	参数：<integer>：一个长度单位或者一个百分比，规定元素的初始长度。
	auto：默认值。长度等于元素的长度。如果该项目未指定长度，则长度将根据内容决定。
	

	flex-basis是width的替代品。如果子元素设置了flex-basis或者width，那么在分配空间之前，就会跟父容器预约这么多
	的空间，然后剩下的才归到剩余空间，然后父容器再把剩余空间分配给flex-grow的容器。如果同时设置了flex-basis
	和width，那么width的属性就会被覆盖，也就是说flex-basis的优先级比width高。


*flex-shrink*:指定了 flex 元素的收缩规则。
    参数：<integer>：一个数字，规定项目将相对于其他灵活的项目进行收缩的量。默认值是 1。

    当父容器的剩余空间为0的时候，并且默认处于非换行状态的情况下，子元素是没有办法利用弹性容器的剩余空间
    进行扩展的。
    如果如容器的剩余宽度为负数的情况下(子元素的宽度之和大于父容器的宽度)，那么子元素就会被收缩。
    收缩的比例为1:1.
    例如，一个弹性容器中有三个子元素，那么他们的收缩比例就为1:1:1.
    如果这个时候，第一个子元素设置了flex-shrink:2;那么我们就会发现，这个元素比其他两个元素收缩的幅度更大。
    同时呢，因为第一个子元素空间的更多收缩，所以第二个和第三个元素就会获得更多的空间。
    我们假设第二个和第三个盒子收缩比例为x1,那么第一个盒子的收缩比例就为x2.
    
    举个例子：
    
    父元素 500px。三个子元素分别设置为 150px，200px，300px。
    
    三个子元素的 flex-shrink 的值分别为 1，2，3。
    
    首先，计算子元素溢出多少：150 + 200 + 300 - 500 = -150px。
    
    那这 -150px 将由三个元素的分别收缩一定的量来弥补。
    
    具体的计算方式为：每个元素收缩的权重为其 flex-shrink 乘以其宽度。
    
    所以总权重为 1 * 150 + 2 * 200 + 3 * 300 = 1450
        总权重: 收缩比 * 宽度 之和
    三个元素分别收缩：
    溢出值 * 收缩比  * width / 总权重 = 收缩的宽度
    150 * 1(flex-shrink) * 150(width) / 1450 = -15.5
    150 * 2(flex-shrink) * 200(width) / 1450 = -41.4
    150 * 3(flex-shrink) * 300(width) / 1450 = -93.1
    三个元素的最终宽度分别为：
    
    150 - 15.5 = 134.5
    200 - 41.4 = 158.6
    300 - 93.1 = 206.9
    同样，当所有元素的 flex-shrink 之和小于 1 时，计算方式也会有所不同：
    
    此时，并不会收缩所有的空间，而只会收缩 flex-shrink 之和相对于 1 的比例的空间。
    
    还是上面的例子，但是 flex-shrink 分别改为 0.1，0.2，0.3。
    
    于是总权重为 145（正好缩小 10 倍，略去计算公式）。
    
    三个元素收缩总和并不是 150px，而是只会收缩 150px 的 (0.1 + 0.2 + 0.3) / 1 即 60% 的空间：90px。
    
    每个元素收缩的空间为：
    
    90 * 0.1(flex-shrink) * 150(width) / 145 = 9.31
    90 * 0.2(flex-shrink) * 200(width) / 145 = 24.83
    90 * 0.3(flex-shrink) * 300(width) / 145 = 55.86
    三个元素的最终宽度分别为：
    
    150 - 9.31 = 140.69
    200 - 24.83 = 175.17
    300 - 55.86 = 244.14



**flex:设置弹性盒子的子元素如何分配空间**
        flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。

        flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。
        详情参阅flex缩写文档

**align-self**:在弹性子元素上使用。覆盖容器的 align-items 属性。

	值与容器属性一样，只是这个是单独的设置某个元素。

***

### flex缩写

flex是flex-grow,flex-shrink和flex-basis的缩写，flex属性值可以只指定一个属性的值，而另外的属性值采
用各自在flex属性中的的初始值，但是有一点要注意的是：flex属性中flex-grow和flex-basis的初始值和它们原始
的默认值不同，至于为什么不同，mdn中有明确的说过这样的设计是为了让「flex」缩写在最常见的情景下比较好用。



flex中对应各属性的初始值：

flex-grow
  flex-grow用于设置各item项按对应比例划分剩余空间，若flex中没有指定flex-grow,则相当于设置了 flex-grow:1

flex-shrink
  flex-shrink用于设置item的总和超出容器空间时，各item的收缩比例，若flex中没有指定flex-shrink,则等同于设置了flex-shrink:1

flex-basis
  flex-basis用于设置各item项的伸缩基准值，可以取值为长度或百分比，如果flex中省略了该属性，则相当于设置了flex-basis:0.

flex的不同取值
  flex的值的完整写法是[<flex-grow> <flex-shrink> <flex-basis>],不过它的取值还有可能是单个数字或者单个百分比等，不同种类的取值所表示的意思是大有不同的。

flex值为none
  当flex为none时,等同于flex: 0 0 auto;

flex值为auto
  当flex为auto时，等同于flex: 1 1 auto;

flex值为一个非负数字
  当flex取值为一个数字，则该数字是设置的flex-grow值，其它两个属性用初始值，如flex:1时，等同于flex: 1 1 0%

flex值为两个非负数字
  当flex取值为2个数字时，相当于设置的flex-grow和flex-shrink值，flex-basis取值为初始值，
    如flex:1 0时，等同于flex: 1 0 0%

flex值为一个数字和一个长度或百分比时
  当flex取值为1个数字和1个长度或百分比时，设置的是flex-grow和flex-basis的值，flex-shrink值时初始值，如flex:1 20%,等同于flex: 1 1 20%

****

### 响应式布局概念

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

    1vw等于视口宽度的1%。
    1vh等于视口高度的1%。
    Tip：并且会随着视口的变化而变化。
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

    上述的设备有很多，只是简单的陈述几种，但是我们常用的设备只有all和screen

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

    上述示例表示当用户设备屏幕处于最小宽度为480px以上的时候，网页的背景颜色为红色
    
    /* 竖屏 */
    @media screen and (orientation:portrait) {对应样式}
    
    /* 横屏 */
    @media screen and (orientation:landscape){对应样式}
5.8 **常用断点值**

    320px
    480px
    768px
    1024px
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

