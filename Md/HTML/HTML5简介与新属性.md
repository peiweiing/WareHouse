## HTML5 发展史

HTML5草案的前身名为 Web Applications 1.0，于2004年被WHATWG提出，于2007年被W3C接纳，并成立了新的 HTML 工作团队。
HTML 5 的第一份正式草案已于2008年1月22日公布。HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。
2012年12月17日，万维网联盟（W3C）正式宣布凝结了大量网络工作者心血的HTML5规范已经正式定稿。根据W3C的发言稿称：“HTML5是开放的Web网络平台的奠基石。”	
2013年5月6日， HTML 5.1正式草案公布。该规范定义了第五次重大版本，第一次要修订万维网的核心语言：超文本标记语言（HTML）。在这个版本中，新功能不断推出，以帮助Web应用程序的作者，努力提高新元素互操作性。
本次草案的发布，从2012年12月27日至今，进行了多达近百项的修改，包括HTML和XHTML的标签，相关的API、Canvas等，同时HTML5的图像img标签及svg也进行了改进，性能得到进一步提升。

### HTML5 的浏览器兼容

支持Html5的浏览器包括Firefox（火狐浏览器），IE9及其更高版本，Chrome（谷歌浏览器），Safari，Opera等；国内的 遨游浏览器（Maxthon），以及基于IE或Chromium（Chrome的工程版或称实验版）所推出的360浏览器、搜狗浏览器、QQ浏览器、猎豹 浏览器等国产浏览器同样具备支持HTML5的能力。

### HTML5 语法

**内容类型（ContentType）**HTML5的文件扩展符与内容类型保持不变，仍然为".html"或".htm"。**DOCTYPE声明**不区分大小写**指定字符集编码**meta charset="UTF-8"**可省略标记的元素**不允许写结束标记的元素：br、col、embed、hr、img、input、、link、meta	
可以省略结束标记的元素：li、dt、dd、p、option、colgroup、thead、tbody、tfoot、tr、td、th 
可以省略全部标记的元素：html、head、body、colgroup、tbody**省略引号**属性值可以使用双引号，也可以使用单引号。

### HTML5 新增语义化标签

**section元素 表示页面中的一个内容区块article元素 表示一块与上下文无关的独立的内容aside元素 在article之外的，与article内容相关的辅助信息 header元素 表示页面中一个内容区块或整个页面的标题footer元素 表示页面中一个内容区块或整个页面的脚注nav元素 表示页面中导航链接部分figure元素 表示一段独立的流内容，使用figcaption元素为其添加标题(第一个或最后一个子元素的位置)main元素 表示页面中的主要的内容 (ie不兼容)兼容低版本浏览器： <script src=“html5.js”></script>**

 

### Video和audio的应用

**video元素 定义视频**<video src="movie.ogg" controls="controls">Video元素</video>**audio元素 定义音频**<audio src="someaduio.wav">Audio元素</audio> 

controls属性：如果出现该属性，则向用户显示控件，比如播放按钮。
autoplay属性：如果出现该属性，则视频在就绪后马上播放。
loop属性：重复播放属性。
muted属性：静音属性。
poster属性：规定视频正在下载时显示的图像，直到用户点击播放按钮。

## HTML5 智能表单

### 新增输入类型

Type=“email” 限制用户必须输入email类型
Type=“url” 限制用户必须输入url类型
Type=“range” 产生一个滑动条表单
Type=“search” 产生一个搜索意义的表单
Type=“color” 生成一个颜色选择的表单
Type=“time” 限制用户必须输入时间类型
Type=“month” 限制用户必须输入月类型
Type=“week” 限制用户必须输入周类型
Type=“datetime-local” 选取本地时间

**input类型设置**email：专门用来输入email地址的文本框,如果该文本框中内容不是email地址格式的，则不允许提交。但它不检查email地址是否存在。提交时可以为空，除非加上了required属性。
具有multiple属性，它允许在该文本框中输入一串以逗号分隔的email地址。

**url类型**专门用来输入URL地址的文本框。如果该文本框中内容不是URL地址格式的，则不允许提交。mail地址。
例：<input name=‘url1’ type=‘url’ value=‘’http://www.baidu.com”>

**Number类型**专门用来输入数字的文本框。在提交时会检查其中的内容是否为数字，具有min、max、step的属性。 
例：<input name=“number1” type=“number” value=“25” min=“10” max=“100” step=“5” />

**range类型**是用来只允许输入一段范围内数值的文本框，它具有min属性与max属性，及step属性，可以指定每次拖动的步幅。
例： <input name=“range1” type=“range” value=“25” min=“0” max=“100” step=“5” /> 

min 最小值
max 最大值
step 数字间隔

**(date, month, week, time, datetime,datetime-local)**拥有多个可供选取日期和时间的新输入类型。
date - 选取日、月、年
month - 选取月、年
week - 选取周和年
time - 选取时间（小时和分钟）
datetime - 选取时间、日、月、年（UTC 时间）
datetime-local - 选取时间、日、月、年（本地时间）
例：<input type=“month” &gr;
Search：输入的是搜索的关键字，与type=“text” 基本上一样。
Color：用来选取颜色。

**output：**定义不同类型的输出，如计算结果的输出，或脚本的输出。
注：必须从属于某个表单。即，必须将它书写在表单内部
Output标签IE不支持

对新元素样式的使用：
注意，跟 input 标签设置样式一样，但是要设置标签中局部的样式不能实现。如改变日历的背景色，颜色框的按钮效果，等，这些都不可以实现。

### 表单新属性

1）、Datalist ：选项列表例： <input type="url" list="url_list" name="link" />
<datalist id="url_list"> 
  <option label="W3School" value="http://www.W3School.com.cn" />
  <option label="Google" value="http://www.google.com" />
  <option label="Microsoft" value="http://www.microsoft.com" />
</datalist>
提示：option 元素永远都要设置 value 属性。

**2.属性****placeholder属性：**文本框处于未输入状态时文本框中显示的输入提示。**autofocus属性：**给文本框、选择框、或者按钮控件加上该属性，当打开页面时，该控件自动获得国标焦点，一个页面只能有一个。**required属性：**验证输入不能为空**list属性：**结合datalist元素使用**autocomplete属性：**输入富足和所用的自动完成功能，是一个节省输入时间，同时也十分方便的功能。只有三种：on/off/""。on可是显示指定候补输入的数据列表，使用datalist元素与list属性提供候补输入的数据列表，自动完成时，可以讲该datalist元素中的数据作为候补输入的数据在文本框中显示： <input type="text" name="greeting" autoconplete="on" list ="greeting">

**3.自动验证****1）、required**可以应用在大多数输入元素上（除了隐藏元素和图片），在提交时如果元素内容为空白，则不允许提交，同时显示提示文字。**2）、pattern**将属性值设为某个格式的正则表达式，在提交时会检查其内容是否符合给定格式。
例：<input pattern = “[0-9][A-Z]{3}" title="输入内容：一个数与三个大写字母" placeholder='输入内容：一个数与三个大写字母'>**3）、 min、max、step：**为包含数字或日期的 input 类型规定限定（约束）
max: 最大值
min: 最小值
step: 数字间隔 
例：<input type="number“ min="0" max="10" step="3" />**4、取消验证**可以对form表单添加novalidate属性，即使form表单中的input添加了required，也将不进行验证**5.Multiple:**可以输入一个或多个值，每个值之间用逗号分开
例：<input type="email" multiple/>
还可以应用于file