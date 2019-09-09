## css常用属性浏览器兼容情况

需求：一个网页能不能够在不同的浏览器里完整的展示！
1、在网页当中你使用的属性在不同的浏览器里是否可以使用

2、 如果我在开发网页的时候使用的属性不能够在某些浏览器里使用，该怎么解决？

min-height: 不能够在ie6里使用



## css3兼容各版本浏览器引擎前缀(Vendor Prefix)有哪些？

```css
-moz-     /* （内核Grecko）火狐等使用Mozilla浏览器引擎的浏览器 */
-webkit-  /* （内核webkit）Safari, 谷歌浏览器等使用Webkit引擎的浏览器 */
-o-       /* （内核presto）Opera浏览器(早期) */
-ms-      /* （内核Trident）Internet Explorer (不一定) */ 
```



**这些前缀并非所有都是需要的，但通常你加上这些前缀不会有任何害处——只要记住一条，把不带前缀的版本放到最后一行：**

```css
-moz-border-radius: 10px; 
-webkit-border-radius: 10px; 
-o-border-radius: 10px; 
border-radius: 10px; 
```



**主要的需要添加浏览器引擎前缀(vendor-prefix)的属性包括：**

- **@keyframes**
- **移动和变换属性(transition-property, transition-duration, transition-timing-function, transition-delay)**
- **动画属性 (animation-name, animation-duration, animation-timing-function, animation-delay)**
- **border-radius**
- **box-shadow**
- **backface-visibility**
- **column属性**
- **flex属性**
- **perspective属性**

**完整的列表不只这些，而且还会增加。**



**当需要使用浏览器引擎前缀(vendor-prefix)时，最好是把带有各种前缀的写法放在前面，然后把不带前缀的标准的写法放到最后。比如：**

```css
/* 简单属性 */
.myClass {
	-webkit-animation-name: fadeIn;
	-moz-animation-name: fadeIn;
	-o-animation-name: fadeIn;
	-ms-animation-name: fadeIn;
	animation-name: fadeIn;  /* 不带前缀的放到最后 */
}
/* 复杂属性 keyframes */
@-webkit-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
@-moz-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
@-o-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
@-ms-keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
/* 不带前缀的放到最后 */
@keyframes fadeIn {
	0% { opacity: 0; } 100% { opacity: 0; }
}
```

### **Internet Explorer**

**Internet Explorer 9 开始支持很多(但并不是全部)CSS3里的新属性。比如，你也可以在IE里使用不带浏览器引擎前缀(vendor-prefix)的border-radius属性。**

**IE6到IE8都不支持CSS3，很遗憾的是，使用这些低版本浏览器的用户还很多。所以，确保你的网站设计在不支持CSS3的情况下也能正常显示。对于一些属性：border-radius , linear-gradient, 和 box-shadow, 你可以使用CSS3Pie，它是一个很小的文件，把它放到你的网站的根目录下，就能让你的页面中IE6，IE8中也支持这些属性。**



1. 盒模型属性

  (全兼容)
  width
  height

  (IE6-不支持)
  min-width
  max-width
  min-height
  max-height

  (全兼容)
  border
  border-width
  border-color
  border-style

  (全兼容)
  margin

2. 布局类属性
    注意：IE7-浏览器不支持table类属性值
    (全兼容)
    display
    (全兼容)
    float
    clear

  注意：IE6-不支持固定定位position:fixed
  (全兼容)
  position
  left
  right
  top
  bottom
  z-index

  (全兼容)
  overflow
  overflow-x
  overflow-y
  clip
  visibility

  (IE不支持)
  resize

3. 文本类属性

  (全兼容)
  font
  font-family
  font-size
  font-style
  font-variant
  font-weight
  line-height
  @font-face

  (全兼容)
  text-indent

  (全兼容)
  text-align
  vertical-align
  注意：IE7-浏览器中vertical-align的百分比值不支持小数行高

  (全兼容)
  word-spacing
  letter-spacing

  (全兼容)
  text-transform

  (全兼容)
  text-decoration

  (全兼容)
  white-space

  (全兼容)
  text-overflow

4. 修饰类属性

  (全兼容)
  background
  background-color
  background-image
  background-repeat
  background-position

  (IE8-不支持)
  background-attachment
  background-clip
  background-size

  (全兼容)
  color

  (IE8-不支持)
  opacity

  (全兼容)
  命名颜色
  16进制
  RGB
  (IE8不支持)
  RGBA

  (全兼容)
  cursor


4.其他类属性
	
	(全兼容)
	通配选择器   *
	元素选择器   div
	类选择器     .box
	ID选择器     #box
	后代选择器   div a
	分组选择器   h1,p
	
	(IE6-不支持)
	属性选择器    h1[class]
	子元素选择器  ul > li
	相邻兄弟选择器 div + p
	(IE7-不支持)
	通用兄弟选择器 div ~ p
	
	伪元素
	(只有当选择器部分和左大括号之间有空格时，IE6-浏览器才支持)
	:first-letter
	:first-line
	
	(IE7-不支持)
	:before
	:after
	(IE8-不支持)
	::selection
	
	伪类
	(全兼容)
	:link
	:visited
	
	(IE6-不支持给<a>以外的其他元素设置伪类)
	:hover
	:active  
	
	单位
	(全兼容)
	px
	in
	cm
	mm
	q
	pt
	pc
	em
	ex
	ch
	
	(IE8-不支持)
	rem