### CSS文档统筹

### 1）整站里相同的CSS样式提取到一个样式表里，各个页面调用相同的样式文件即可。

### 2）网站较大的情况下一般会把网站的头部，尾部单独分离出来，包括样式文件。

###  网页自身优化（如何让网站被搜索引擎搜索到）：

 

### ★页面头部优化

### 页面头部指的是代码部分，具体一点就是指的“Description（描述）”和“Keywords（关键字）”两部分：

### 1、“描述”部分应该用近乎描述的语言写下一段介绍你网站的文字，在这其中，你应该适当的对你网站的特色内容加以重复以求突出；

### 2、“关键字”部分应该列出你认为合适的，能突出网站内容的关键字就可以了，关键字不要设置太多，可设置10---8个，搜索引擎只会浏览靠前的几个关键字。

### <meta name="keywords"   content="" />向搜索引擎说明你的网页的关键词； <meta name="description"    content=""/>告诉搜索引擎你的站点的主要内容；

 

### ★超链接优化

### 搜索引擎为何可以能够索引全世界的网站，是因为各个搜索引擎程序中都有一个会自动“爬行”于互联网上的智能机器人程序，这个机器人就是顺着网站之间的链接游览世界的，那么我们就应该为它创造一个良好的爬行通道——合理的设置链接。 怎样的链接才是合理的呢？

### 1、采用纯文本链接，少用，最好是别用Flash动画设置链接，因为搜索引擎无法识别Flash上的文字.

### 许多公司、个人都喜欢酷酷的Flash动画，网站的入口也做成Flash片断，，搜索引擎很难光顾这样的网站。而且个别设计者非常马虎，把网站的入口链接放在了Flash上，有时因为网络繁忙、缺少Flash插件而导致用户根本就看不到网站的内容，

### 2、按规范书写超链接，这个title属性，它既可以起到提示访客的作用，也可以让搜索引擎知道它要去哪里.

### 3、最好别使用图片热点链接，理由和第一点差不多。

###  <a href="id名"></a>

 

### ★图片优化(alt属性，title属性)

### 图片优化并不是修改图片的大小、颜色，而是你应该为每个标签加上alt属性，alt属性的作用是当图片无法显示时以文字作为替代显示出来，而对于SEO来说，它可以令搜索引擎有机会索引你网站上的图片，对于一些确实没什么意义的图片，最好也不要省略alt，而应该留空，即 alt=""。

###  

### ★避免大“体积”的页面

### 有经验表明，搜索引擎不喜欢索引大体积的页面，即一个页面代码部分的体积不要太大，控制在100kb内为佳.

##  

### ★最重要的一点！合理的代码结构

### 搜索引擎喜欢格式清晰，结构分明的页面，理论上XML是最合乎搜索引擎，当然，这太极端了，不过如果采用XHTML+CSS技术将页面数据同表现分离，即避免大量嵌套表格和其它冗余的代码还是能够完美实现这一要求的。

 

### 原则：简化代码，易修改

### 二、CSS规范

> ### 1、命名方法（语义化命名，结构化命名）
>
> ### ID:结构化   head   
>
> ### class: .border0    . red:    .font12      .clear

###       2、CSS命名规则

> ### 1）建议使用小写字母
>
> ### 2）以英文字母开头，后面可以连接数字、字母、下划线、连字符，建议尽量使用英文字母，适当使用下划线和连接线；
>
> ### 3）词必达意，名称要反映用途和相关信息，同时也要简短。
>
>  
>
> ### 三、CSS Reset
>
> ### 
>
> ### CSS Reset是什么？
>
> ### 在HTML标签在浏览器里有默认的样式，例如 p 标签有上下边距，strong标签有字体加粗样式，em标签有字体倾斜样式。不同浏览器的默认样式之间也会有差别，例缩进的样式，在IE下，它的缩进是通过margin实现的，而Firefox下，它的缩进是由padding实现的。在切换页面的时候，浏览器的默认样式往往会给我们带来麻烦，影响开发效率。所以解决的方法就是一开始就将浏览器的默认样式全部去掉，更准确说就是通过重新定义标签样式。“覆盖”浏览器的CSS默认属性。最最简单的说法就是把浏览器提供的默认样式覆盖掉！这就是CSS reset。
>
> ### 
>
> ### 
>
> ### 为什么要重置它？
>
> ### 因为浏览器的品种很多，每个浏览器的默认样式也是不同的，比如<button>标签，在IE浏览器、Firefox浏览器以及Safari浏览器中的样式都是不同的，所以，通过重置button标签的CSS属性，然后再将它统一定义，就可以产生相同的显示效果。
>
>  

### 三、样式重置

### 1、规则设置

### 以新浪为例：

### html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }

### fieldset, img { border:none; }

### img{ vertical-align:top;}

### address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }

### ul, ol { list-style:none; }  

### body { color:#333; font:16px/20px "SimSun","宋体","Arial Narrow",HELVETICA; background:#fff;/* overflow-y:scroll;*/ overflow-x:hidden;}

### a { color:#666; text-decoration:none; }

### a:visited { color:#666; }

### a,input{outline:none;}

### 2、腾讯

### body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}  body{font:12px "宋体","Arial Narrow",HELVETICA;background:#fff;} a{color:#172c45;text-decoration:none}  a:hover{color:#cd0200;text-decoration:underline}  em{font-style:normal} li{list-style:none} img{border:0;vertical-align:middle}  table{border-collapse:collapse;border-spacing:0} p{word-wrap:break-word} .ind{text-indent:2em}  .ind10{text-indent:10px;} .noborder{border:0;}

 

### .clear{zoom:1}

### .clear:after{content:"."; display:block; clear:both; height:0; visibility:hidden;}

###  

### 3、搜狐

### body{font-family:"\5B8B\4F53","Arial Narrow",HELVETICA;text-align:center;margin:0 auto;padding:0;background:#FFF;font-size:12px;color:#333;}  body > div{text-align:center;margin-right:auto;margin-left:auto;}  div,form,ul,ol,li,span,p{margin:0;padding:0;border:0;} img,a img{border:0;margin:0;padding:0;} h1,h2,h3,h4,h5,h6{margin:0;padding:0;font-size:12px;font-weight:normal;} ul,ol,li{list-style:none} table,td,input{font-size:12px;padding:0} /* 默认链接颜色 */  a{outline-style:none;color:#333;text-decoration:none} a:hover{color:#c00;text-decoration:underline;}

###  

###  

### <sub></sub>下标

### <sup></sup>上标

 