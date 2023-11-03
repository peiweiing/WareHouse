# BOM对象

**BOM是browser object model的缩写，简称浏览器对象模型**。

通过BOM我们可以学到与浏览器窗口交互的一些对象，可以移动，调整浏览器大小的window对象，可以用于导航的location对象与history对象，可以获取浏览器，操作系统与用户屏幕信息的navigator与screen对象，可以使用document作为访问HTML文档的入口，管理框架的frames对象等。因此它的核心对象是window。

## Window对象的属性

Window对象： window 对象表示浏览器中打开的窗口
	Window对象属性：
	Document对象。
	history对象。
	Location对象
	Screen对象
	name 浏览器窗口的名字
	defaultStatus 设置或返回窗口状态栏中的默认文本。
	status 设置窗口状态栏的文本

## location对象

Location 对象包含有关当前 URL 的信息。（了解即可）
	location对象的属性
		href属性 控制浏览器地址栏的内容
		hostname 设置或返回当前 URL 的主机名。
	location对象的方法
		reload()方法 刷新页面
		reload(true) 刷新页面，不使用缓存

## history对象

history对象包含用户(在浏览器窗口中)访问过的 URL。（了解即可）
	属性 ：
		length 返回浏览器窗口历史列表中的 URL 数量。
	方法 ：
		back() 加载 history 列表中的前一个 URL。
		forward() 加载 history 列表中的下一个 URL。
		go() 加载 history 列表中的某个具体页面，或者要求浏览器移动到指定的页面数量（负数为后退，正数为前进）

## navigator对象 

navigator对象包含有关浏览器的信息。（了解即可）
	appName 浏览器名称
	appVersion 浏览器版本
	platform操作系统
注：最新的浏览器已经全面放弃以上这些属性
	userAgent 用户代理信息，通过该属性可以获取浏览器及操作系统信息
	演示部分window对象的属性

## document对象 

每个载入浏览器的 HTML 文档都会成为 Document 对象。
	Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问
	Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问
	

Document对象的属性
		all[] 提供对文档中所有 HTML 元素的访问。是数组类型
		forms[] 返回对文档中所有 Form 对象引用。是数组类型
		body 提供对 <body> 元素的直接访问。
		URL 返回当前文档的 URL。
		bgColor属性：可以改变文档的颜色；（ document.bgColor="gray";）
	Document对象的函数(方法)
		getElementById() 返回对拥有指定 id 的第一个对象的引用。
		getElementsByName() 返回带有指定名称的对象集合。
		getElementsByTagName() 返回带有指定标签名的对象集合。 
		write() 向文档写 HTML 表达式 或 JavaScript 代码。

## Window对象的方法 

alert(“”) 显示带有一段消息和一个确认按钮的警告框。
	confirm(“”) 显示带有一段消息以及确认按钮和取消按钮的对话框。
	prompt(“”) 显示可提示用户输入的对话框。
	open(“url”,”name”) 打开一个新的浏览器窗口或查找一个已命名的窗口。
	showModalDialog (“打开窗口的url”,”窗口名”,”窗口特征”)(chrome不支持)
	close() 关闭浏览器窗口。 （ FF不支持）
	focus () 窗口失去焦点
	setInterval() 按照指定的周期（以毫秒计）来调用函数或计算表达式。
	clearInterval() 取消由 setInterval() 设置的 timeout。
	setTimeout() 在指定的毫秒数后调用函数或计算表达式。
	clearTimeout() 取消由 setTimeout() 方法设置的 timeout。
	moveBy() 可相对窗口的当前坐标把它移动指定的像素。
	moveTo() 把窗口的左上角移动到一个指定的坐标。
	resizeBy() 按照指定的像素调整窗口的大小。
	resizeTo() 把窗口的大小调整到指定的宽度和高度。
	scrollBy() 按照指定的像素值来滚动内容。
	scrollTo() 把内容滚动到指定的坐标。

## 对话框 

confirm(“”) 显示带有一段消息以及确认按钮和取消按钮的对话框。
 		确认框，一般在删除时，会使用。

prompt(“”) 显示可提示用户输入的对话框。

## 打开窗口 

window.open(“url”,”name”,”窗口特征”) 打开一个新的浏览器窗口或查找一个已命名的窗口。
	窗口特征：
		width=pixels 窗口的文档显示区的宽度。以像素计。
		height=pixels 窗口文档显示区的高度。以像素计。
		left=pixels 窗口的 x 坐标。以像素计。
		top=pixels 窗口的 y 坐标。
		location=yes|no|1|0 是否显示地址字段。默认是 yes。
		menubar=yes|no|1|0 是否显示菜单栏。默认是 yes。 (需要父窗口菜单栏处于显示状态)
		resizable=yes|no|1|0 窗口是否可调节尺寸。默认是 yes。
		scrollbars=yes|no|1|0 是否显示滚动条。默认是 yes。
		status=yes|no|1|0 是否添加状态栏。默认是 yes。
		titlebar=yes|no|1|0 是否显示标题栏。默认是 yes。
		toolbar=yes|no|1|0 是否显示浏览器的工具栏。默认是 yes。

## 打开窗口 

示例：
		window.open("sub.html","窗口名","Width=300px,Height=250px,left=100px,top=100px");
	子窗口操作父窗口：opener（代表父窗口的window对象）
		document.onclick = function() {
			opener.document.title='子窗口让我输出的！';
		}

## 打开模态窗口

模态窗口：只能对当前此窗口进行操作，除非关闭此窗口。
	模态窗口与父窗口之间可以互传数据。
	showModalDialog (“打开窗口的url”，数据，”窗口特征”)
		parent.html
		function showWin(){
			var num = 250;
			var value = window.showModalDialog("sub.html",num,"dialogWidth=300px;dialogHeight=250px");
			alert("子窗口做完后的结果是："+value);
		}
		sub.html 
		var num = window.dialogArguments;
		 alert("你给了我个："+num);
		 window.returnValue = 380;

## onload事件与匿名函数 

onload 事件会在页面或图像加载完成后立即发生。
	支持的标签：<body>, <frame>, <frameset>, <iframe>, <img>, <link>, <script>
	支持的对象：image, layer, window
	例：
	1，<body onload=“alert(‘页面加载完毕。');">
	2，<body onload=“jiazaiwanbi()">
		function jiazaiwanbi(){
			alert(“页面加载完毕。”);
		}
	3，window.onload=jiazaiwanbi;
	4，window.onload=function(){alert(“页面加载完毕。”);};





# DOM概念

**DOM（Document Object Model），文档对象模型。**
	DOM定义了表示和修改文档所需的对象、这些对象的行为和属性以及这些对象之间的关系。
	//1、节点
		这些对象又称为节点(在DOM的世界里，一切皆节点)：
		整个文档是一个文档节点（document）(document.documentElement:根节点HTML标签)
		每个 HTML 标签是一个元素节点
		包含在 HTML 元素中的文本是文本节点
		每一个 HTML 属性是一个属性节点
		注释属于注释节点
	//2、DOM树
		对象之间的关系叫做Node (节点)层次：
		节点彼此都有等级关系。
		HTML 文档中的所有节点组成了一个文档树（或节点树）。HTML 文档中的每个元素、属性、文本等都代表着树中的一个节点。
		HTML标签是根（root）节点。节点之间都存在着父子（parent \child）、同胞（sibling）的关系。

## 查询元素节点

getElementById() 		//获取特定 ID 元素的节点
	getElementsByTagName()	//获取相同标签名的元素节点，返回数组，使用[0]来获取
	getElementsByName()	//获取相同name属性的元素节点，不是所有标签都有name属性，某些低版本浏览器会有兼容性问题
	getElementsByClassName()	//获取相同class属性的节点列表
									IE8及以下不支持

## 通过层级关系访问节点（包括文本和元素）

parentNode 		父节点。
	childNodes		 当前节点包含的所有子节点(文本和元素节点都有)。
	firstChild		 当前节点的第一个子节点。
	lastChild		 当前节点的最后一个子节点。
	注：childNodes中的所有节点都具有相同的父节点，因此它们的 parentNode 属性都指向同一个节点。包含在childNodes 列表中的每个节点相互之间都是同胞节点。
	previousSibling 访问前一个同胞节点。
	nextSibling 访问后一个同胞节点。
注：列表中第一个节点的 previousSibling 属性值为 null ，而列表中最后一个节点的 nextSibling 属性的值同样也为 null。

## 通过层级关系访问元素节点

parentNode 		父节点。
	children		 当前节点的所有子节点(只有元素节点)，即所有的元素类型的子节点
	firstElementChild		 当前节点的第一个元素类型的子节点。
	lastElementChild		 当前节点的最后一个元素类型的子节点。
	previousElementSibling 		访问前一个同胞元素类型的节点。
	nextElementSibling 		访问后一个同胞元素类型的节点。
	注：列表中第一个节点的 previousElementSibling 属性值为 null ，而列表中最后一个节点的nextElementSibling属性的值同样也为 null。

## 节点的增删改

document.createElement(HTML标签名) 	//创建一个元素节点
	document.createTextNode(文字) 	//创建一个文本节点
	node.appendChild(newChild) 	//newChild 被添加到孩子列表中的末端。
	node.insertBefore(newChild, referenceNode) 	// 将 newChild 节点插入到 referenceNode 之前。
	node.removeChild(oldChild) 	//删除 oldChild子节点。
	node.replaceChild(newChild, oldChild) 	//用newChild节点替换oldChild节点
	注：子节点中包含文本节点、属性节点和元素节点。
		通过nodeType属性来判断节点类型，1代表元素节点（标签元素），2代表属性节点（标签的属性），3代表文本节点（文本）

## 表格的增删改

表上的行、列集合
		tab.rows[index]; //取得表中的某一行
		row.cells[index]; //取得行中某一列
	插入
		tab.insertRow(index); //插入新行并返回新行，index为插入位置不写插入到表末
		row.insertCell(index); //插入新列并返回新列，index为插入位置不写插入到行末
	删除
		tab.deleteRow(index);
		row.deleteCell(index);

## window.onscroll事件

window.onscroll页面滚动事件
	取得滚动条位置
		document.body.scrollTop //谷歌(设为0页面回到顶部)
		document.documentElement.scrollTop //标准
	兼容写法
		document.documentElement.scrollTop || document.body.scrollTop
	页面可见区域高度
		document.body.clientHeight（如果出现问题用document.documentElement.clientHeight）
	取得某元素距离外层元素的距离，外层元素必须定位，否则就会找外外层，直到body
		obj.offsetTop （不能设置，仅能获取）
	设置元素高度使用
		obj.style.top

## 文本节点与节点过滤

//创建文本节点的代码
		document.createTextNode（”文本节点包含的文本内容”）
	//传入父节点和需要的节点的类型，返回复合要求的子节点
		function filternode(node,data){
			var arr=[];
			for(var i=0;i<node.childNodes.length;i++){
				if(node.childNodes[i].nodeType==data){
					arr.push(node.childNodes[i]);
				}
			}
			return arr;
			}
		filternode(div1,1);
演示：文本节点与节点过滤

## 操作节点的属性 

node.属性名 的方式访问和操作节点的属性，仅限于常规属性		

​	tagName ：表示元素节点的标签名
​		className：CSS元素的类名 (不可以使用class)
​		id ：元素节点的 id 名称

​	title ：元素节点的 title 属性值（鼠标悬停时的提示）
​		style ： 获取CSS行内样式属性值
​		innerHTML ：获取元素节点里的内容
​		outerHTML: 包含元素自身的标签.(非 W3C DOM 规范)
​		innerText ：获取元素内文本内容html标签被忽略（非 W3C DOM 规范）

​	node. setAttribute(“属性名”,”值”) 的方式访问常规属性和自定义属性
​		node. getAttribute(“属性名”) 的方式访问常规属性和自定义属性
注：也可以在HTML中添加标签的自定义属性

## 操作样式

对于样式获取尽量使用currentStyle和getComputedStyle
	修改样式使用style

**样式获取的兼容性处理**：
	function getStyle(obj, attr){
		if(obj.currentStyle) {
			 return obj.currentStyle[attr];
		} else {
			 return window.getComputedStyle(obj, false)[attr];
		}
	}

## Style常见样式设置

获取和设置行内样式

CSS样式属性---Style对象属性
	color---------- color
	font-size----------fontSize
	font-family----------fontFamily
	background-color----------backgroundColor
	background-image----------backgroundImage
	display----------display

结论：一般情况下，css的样式属性中出现“-”号，则对应的style属性是：去掉“-”号，把“-”号后面单词的第一字母大写。如果没有“-”号，则两者一样。



## offset属性

 element.offsetHeight 通过计算得到的某个元素的高（元素必须出现在页面上）
	 element.offsetWidth 通过计算得到的某个元素的宽（元素必须出现在页面上）
	 element.offsetLeft 返回元素的水平偏移位置(基于最近的有定位的父元素，如果没有，就是body)
	 element.offsetTop 返回元素的垂直偏移位置。 (基于最近的有定位的父元素，如果没有，就是body)
	 element.offsetParent 返回元素的偏移容器。 (最近的有定位的父元素)

 如何计算某个元素距离页面的坐标
	 getBoundingClientRect() 这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
		 var box=document.getElementById('box');	 // 获取元素
		alert(box.getBoundingClientRect().top); 	// 元素上边距离页面上边的距离
		alert(box.getBoundingClientRect().right);	 // 元素右边距离页面左边的距离
		alert(box.getBoundingClientRect().bottom);	 // 元素下边距离页面上边的距离
		alert(box.getBoundingClientRect().left);	 // 元素左边距离页面左边的距离
注意：IE、Firefox3+、Opera9.5、Chrome、Safari支持，在IE中，默认坐标从(2,2)开始计算，导致最终距离比其他浏览器多出两个像素，我们需要做个兼容。





## 下面的属性和方法可用于所有 HTML 元素上：

element.accessKey 设置或返回元素的快捷键。
	element.appendChild() 向元素添加新的子节点，作为最后一个子节点。
	element.attributes 返回元素属性的 NamedNodeMap。
	element.childNodes 返回元素子节点的 NodeList。
	element.className 设置或返回元素的 class 属性。
	element.clientHeight 返回元素的可见高度。
	element.clientWidth 返回元素的可见宽度。
	element.cloneNode() 克隆元素。
	element.compareDocumentPosition() 比较两个元素的文档位置。
	element.dir 设置或返回元素的文本方向。
	element.firstChild 返回元素的首个子。
	element.getAttribute() 返回元素节点的指定属性值。
	element.getAttributeNode() 返回指定的属性节点。
	element.getElementsByTagName() 返回拥有指定标签名的所有子元素的集合。
	element.getFeature() 返回实现了指定特性的 API 的某个对象。
	element.getUserData() 返回关联元素上键的对象。
	element.hasAttribute() 如果元素拥有指定属性，则返回true，否则返回 false。
	element.hasAttributes() 如果元素拥有属性，则返回 true，否则返回 false。
	element.hasChildNodes() 如果元素拥有子节点，则返回 true，否则 false。
	element.id 设置或返回元素的 id。
	element.innerHTML 设置或返回元素的内容。
	element.insertBefore() 在指定的已有的子节点之前插入新节点。
	element.isDefaultNamespace() 如果指定的 namespaceURI 是默认的，则返回 true，否则返回 false。
	element.isEqualNode() 检查两个元素是否相等。
	element.isSameNode() 检查两个元素是否是相同的节点。
	element.isSupported() 如果元素支持指定特性，则返回 true。
	element.lang 设置或返回元素的语言代码。
	element.lastChild 返回元素的最后一个子元素。
	element.namespaceURI 返回元素的 namespace URI。
	element.nextSibling 返回位于相同节点树层级的下一个节点。
	element.nodeName 返回元素的名称。
	element.nodeType 返回元素的节点类型。
	element.nodeValue 设置或返回元素值。
	element.normalize() 合并元素中相邻的文本节点，并移除空的文本节点。
	element.offsetHeight 返回元素的高度。
	element.offsetWidth 返回元素的宽度。
	element.offsetLeft 返回元素的水平偏移位置。
	element.offsetParent 返回元素的偏移容器。
	element.offsetTop 返回元素的垂直偏移位置。
	element.ownerDocument 返回元素的根元素（文档对象）。
	element.parentNode 返回元素的父节点。
	element.previousSibling 返回位于相同节点树层级的前一个元素。
	element.removeAttribute() 从元素中移除指定属性。
	element.removeAttributeNode() 移除指定的属性节点，并返回被移除的节点。
	element.removeChild() 从元素中移除子节点。
	element.replaceChild() 替换元素中的子节点。
	element.scrollHeight 返回元素的整体高度。
	element.scrollLeft 返回元素左边缘与视图之间的距离。
	element.scrollTop 返回元素上边缘与视图之间的距离。
	element.scrollWidth 返回元素的整体宽度。
	element.setAttribute() 把指定属性设置或更改为指定值。
	element.setAttributeNode() 设置或更改指定属性节点。
	element.setIdAttribute() 
	element.setIdAttributeNode() 
	element.setUserData() 把对象关联到元素上的键。
	element.style 设置或返回元素的 style 属性。
	element.tabIndex 设置或返回元素的 tab 键控制次序。
	element.tagName 返回元素的标签名。
	element.textContent 设置或返回节点及其后代的文本内容。
	element.title 设置或返回元素的 title 属性。
	element.toString() 把元素转换为字符串。
	nodelist.item() 返回 NodeList 中位于指定下标的节点。
	nodelist.length 返回 NodeList 中的节点数。

