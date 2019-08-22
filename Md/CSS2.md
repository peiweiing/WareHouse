# CSS

### CSS使用方式

1. 使用<style>属性
2. 使用HTML style标签
3. 使用link标签，引入外部文件
4. 使用<style>属性，在属性内用@import url（”路径“）引入外部css文件

***

### CSS选择器

**三大基础选择器**

1. html标签选择器
2. class类选择器
3. ID选择器

**功能性选择器**

* *通配符：表示一次选中全部标签
* 后代选择器div p：选择div后代当中所有p元素
* 子元素选择器div>p：选择div的直系后代p元素
* 交集选择器span.d1：标签名叫span并且类名d1
* 并集选择器div，p，h1，h2：同时选中当前这些标签
* 序列选择器ul li：first-child第一个li；ul li：last-child最后一个li；
* 相邻兄弟选择器div+p：选择紧挨着div的一个p元素
* 普通兄弟选择器div~p：选择div所有的兄弟元素p

***

### 标准文档流

所谓的文档流指的是元素（标签）排版（浏览器解析的时候），顺序是自上而下，从左往右。

**标准文档流的微观现象**

1. 空白折叠：多个空格只显示一个；每行代码都存在空格
2. 高矮不齐，底边对齐
3. 自动换行，一行写不满就换行写

**标准文档流中元素等级问题**：

*行内元素*：没有办法设置宽度和高度，宽和高只能凭借内容去撑起来，如果行内元素当中没有内容，就会缩成一个小条（行高）；多个行内元素可以并排显示；

*块级元素*：可以设置宽度和高度；如果一个块级元素没有设置宽度，那么默认占满当前屏幕宽度的百分百；块级元素不能和其它元素并排显示；

***

**常用的块级元素标签**：

div；p；h1-h6；ul li；ol li；dl dt dd；

**常用的行内元素标签**：

b；span；em；i；u；s；a；

**行内元素与块级元素相互转换**：display

display=“inline”转换为行内元素；

display=“block”转换为块级元素；

display=“inline-block”转换为行内块元素；既可设置宽度高度又可并排显示；

***

### 浮动

HTML网页中对于元素的种种限制，其实都来自于标准文档流，例如行内元素不能设置宽度和高度，块级元素不能并排显示等等。那么想要摆脱这些限制，需要“脱离标准文档流”。

**浮动**

float：left；right；

**浮动的标准特性**

1. 让元素脱离标准文档流
2. 浮动会让元素相互紧贴
3. 会存在字围效果，文字紧贴浮动元素
4. 收缩效果

***

### 盒子模型

包含有：width；height；padding；border；margin；一切标签都可以看成盒子。

**width和height**：宽度和高度指盒子里面内容的宽度和高度。

**border边框**（width；style；color）

*border*：1px solid red；1像素 实线 红色；

**padding内边距**：padding-top；padding-right；padding-bottom；padding-left

tip：padding使用后会增加盒子实际所占的宽度和高度，如果不想改变盒子原本所占的宽度和高度，那么就把内容的宽度和高度减少

**margin外边距**：margin-top；margin-right；margin-bottom；margin-left

***

### margin塌陷

（此种情况只发生在标准文档流当中，一旦元素脱离了标准文档流，那么就不存在所谓的塌陷）

**margin值的设置**：既可以设置为具体的值也可以设置为auto

**通过margin让元素居中**：

*margin：0 auto*；（想要通过margin：0 auto；让元素居中，需要注意下面几点）

1. 想要使用margin：0 auto；必须要有明确的宽度width；
2. 只有在标准文档流当中的盒子才能使用，一旦元素设置了浮动、绝对定位、固定定位、那么就不能使用margin：0 auto；居中。
3. margin：0 auto；只是让盒子居中，至于盒子里面的文本内容想要居中，需使用text-align：center；

***

### CSS定位

*position定位*

**relative相对定位**：元素会根据自己原来的位置进行位移，并且不会脱离标准文档流；

作用：微调元素位置；作为绝对定位参考值；

**absolute绝对定位**：某元素设置了绝对定位，需要参考点，分以下情况

1. 没有父元素：top为首屏屏幕的左上角作为参考；bottom就是浏览器窗口首屏窗口尺寸页面的左下角；
2. 存在父元素：浏览器会从当前使用绝对定位的元素开始一层一层向上去找，直到某个祖先元素的身上具有相对定位或者绝对定位的属性，那么就以这个祖先元素为参考点进行位移。
3. 绝对定位的盒子居中，需要left=50%,margin-left=-宽度的一半

**fixed固定定位**：固定定位针对浏览器窗口，以浏览器窗口为参考进行位移

**sticky粘性定位**：固定定位和相对定位的结合体，当元素处于屏幕范围之内，元素的定位就相当于是相对定位，而元素一旦脱离了屏幕范围就成了绝对定位。

tip：子元素使用绝对定位，父元素最好使用相对定位。

tip：绝对定位的子元素，如果作为参考元素的父元素设置了padding，除非子元素没有设置一些位移的参数，例如top、left等，那么就会被padding影响，可是一旦子元素设置了位置参数，将不会受到影响。

***

### z-index层级关系：

以下情况

1. 如果单纯比较两个发生位置冲突的标签，那么谁的z-index值大，谁在上面
2. 如果发生位置冲突的是两个子元素，那么最应该看的是父元素的层级关系，如果父元素的层级也就是z-index值小，那么子级层级再高也没有办法改变
3. 两个父元素比较层级的时候，如果其中一个父元素的层级z-index没有设置，那么子级是可以通过z-index盖过与之发生冲突的另外一个元素

***

### CSS权重

！important重要的，权重最高，可设置元素的某个属性

***

### CSS继承

哪些属性可以继承？ color；text；line；font

与文字相关的属性大多数都可被继承，但是浮动、定位等等属性完全不能够被继承

如果选择器没有直接选中目标元素，而是通过继承去影响，那么权重为0

如果都是通过继承去影响，那谁离目标元素近听谁的

***

### CSS超链接美化

a：link{color：...}未访问链接样式

a：visited{color：...}已访问链接样式

a：hover{color：...}鼠标移动到链接上

a：active{color：...}选定时的链接样式

tip：可以忽略某个状态，但一定要按照顺序来写。

***

### 背景图片

1. background-color：背景颜色

   red；#ccc；rgb（23，23，23）

   开发过程最好使用十六进制

2. background-image：背景图片

   background-image：url（“图片的地址”）

3. background-repeat：背景图像是否重复

   值：repeat-x横轴重复；repeat-y纵轴重复；no-repeat不重复

4. background-position：图片位置

   background-position向右偏移量px；向下偏移量px；偏移量可以为负也可以为正；

5. background-attachment：fixed背景固定

   一但设置了这个属性，那么网页的背景就不会随网页滚动而滚动

***

### 文本属性

1. direction 设置文本方向

   ltr-->从左到右；rtl-->从右到左；inherit--继承

2. letter-spacing设置字符间距

   单位可以使用px，可以为负值

3. text-align文本对齐

   left（默认）；right右边；justify文本两边居中

4. text-decoration文本修饰

   none取消文本的默认样式；underline加上一条下划线；overline上划线；line-through穿过文本的一条删除线；

5. text-indent缩进元素文本的首行，可以是负值

6. text-transform控制元素当中的字母

   none默认；capitalize文本中每个单词以大写字母开头；uppercase全大写；lowercase全小写；

7. font-size字体大小

   14px；14pt磅；14em；14rem

8. font-family字体样式、族科

   font-family：“Times New Roman”，"Arial","kaiti",""

   通常属性设置多个字体，包括英文和中文，如果第一个字体不存在，那么就会去找第二个字体，以此类推（将英文属性写在前面）

9. color 字体颜色

   rgb；十六进制；单词；

10. font-weight字体粗细

    bold字体变粗；bolder更粗；normal正常；

11. font-style字体样式

    italic斜体字；oblique让现有字体发生倾斜；hormal字体倾斜；

12. text-align字体水平对齐方式

    left；right；center；justify；

    能够作用于图片或者文字

13. vertical-align垂直对齐方式

    top上；bottom下；middle中；baseline基线（默认）

14. line-height行高

    当行高等于容器的高时，可以实现文本垂直居中（单行）；当单行文本的行高小于容器高时，可实现单行文本在容器中垂直中齐以上；类似<sup>效果和<sub>效果

15. text-decoration文本修饰

    none；underline下划线；overline上划线；line-through中横线；

16. text-indent首行缩进

    px；em；rem

17. letter-spacing设置字符间距

18. word-spacing控制英文单词词距

19. layout-flow控制文本流

    horizontal自左向右；vertical-ideographic自上而下；

***

### 列表属性

list-style-type：列表样式

list-style-image：url（“将列表样式替换成url引入的图片”）

list-style-position：outside（外面）列表圆点在外面；inside（里面）列表圆点包含在里面

list-style：none

***

### wite-space空余空间

用来设置元素内的空白

normal：默认；

nowrap：强制将文本放在一行上显示，没有br，就一直在一行显示；

pre：类似<pre>标签，将内容格式完全显示出来；

pre-wrap：保留空白符，但内容会正常换行；

pre-line：合并空白字符，保留换行符；

inherit：继承；

***

### overflow溢出隐藏

visible：默认值，当容器内容溢出容器时，不采取任何行动，任内容溢出；

hidden：将溢出的内容隐藏；

scroll：滚动条，如果存在溢出内容，以滚动条展示大小；

auto：自动；

inherit：继承上级元素的属性效果

***

### text-overflow文本溢出省略号

clip不显示省略号；ellipsis显示省略号；

要显示省略号需满足下面条件：

1. 元素要有具体宽度；
2. 元素在一行上显示，white-space：nowrap
3. 溢出的元素要隐藏掉，overflow：hidden；
4. 设置text-overflow：ellipsis；溢出的内容显示为省略号