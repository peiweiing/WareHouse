## Javascript组成部分：ECMAScript、BOM、DOM

ECMAScript：是一种由Ecma国际(前身为欧洲计算机制造商协会),定立ECMA-262标准化的脚本程序设计语言。规定了JavaScript 脚本的核心语法，如 数据类型、关键字、保留字、运算符、对象和语句等。
BOM： 定义了 JavaScript 操作浏览器的接口，提供了访问某些功能（如浏览器窗口大小、版本信息、浏览历史记录等）的途径以及操作方法。
DOM： 定义了 JavaScript 操作 HTML 文档的接口，提供了访问 HTML 文档（如body、form、div、textarea等）的途径以及操作方法。

注：JS需要区分大小写

### 循环语句：

​	for循环、for-in循环、Foreach()循环等

​	break语句：导致程序终止包含它的循环，即退出循环，并进行程序的下一阶段（整个循环后面的语句）；

​	continue语句：只能在循环语句中使用，使本次循环结束，继续循环周期。若条件成立则跳过continue语句；

### 字符串常用属性和函数：

​	alert(""):显示一段消息和一个确认按钮的警告框；

​	confirm(""):显示带有一段消息以及确认按钮和取消按钮的对话框；

​	prompt(""):显示可提示用户输入的对话框；

​	length：表示字符串的长度；

​	IndexOf("x"):查找x下标；

​	lastIndexOf("x"):查找最后一个x的下标；

​	substring(x,y):从x下标到y下标，不包含y；

​	charAt(3):获取下标为3的字符；

​	charCodeAt(4):获取下标为4的字符的Unicode编码；

​	fromCharCode(94):编码转换成字符；

​	search(w):检索字符串中指定的子字符串,可用正则检测；

​	match("xxx"):匹配到就返回内容，没有则返回null；

​	replace("xxx","yyy"):替换匹配到的内容,即将yyy替换为xxx；

​	slice(6,13):提取下标6-13之间的字符，不包含13，为负数则从尾部数起；

​	setInterval(function,1000);重复定时器，每隔1000毫秒重复调用function函数；

​	clearInerval(定时器编号):清除setInterval()定时器设置；

​	setTimeout(function,1000):延迟定时器，指定1000毫秒后调用function函数一次；

​	clearTimeout(定时器编号):清除setTimeout()定时器设置；

### 节点增删改查：

​	**添加：**
​	document.createElement("div"):创建div标签节点；
​	document.createTextNode(文字内容):标签内创建文字内容；
​	父节点.appendChind(newChild):newChild被添加到孩子列表中的末端;

​	**删除：**
​	父节点.removeChild("div"):删除该div标签子节点；
​	节点本身.remove("div"):删除该div标签节点本身；

​	**修改：**
​	父节点.replaceChild(newChild,oldChild):用newChild节点替换oldChild节点；
​	父节点.insertBefore(newChild,referenceNode):将newChild节点插入到referenceNode之前；

​	注：子节点中包含文本节点、属性节点、元素节点，通过nodeType属性判断节点类型，1代表元素节点，2代表属性节点，3代表文本节点；

### 表格增删改：

​	**表上的行、列集合:**

​	表格对象.rows[index]:取得表中的某一行；
​	行对象.cells[index]：取得行中某一列；

​	**插入：**

​	表格对象.insertRow(index):插入新行并返回新行，index为插入位置，不写插入到表末尾；
​	行对象.insertCell(index):插入新列并返回新列，index为插入位置，不写插入到行末尾；

​	**删除：**

​	表格.deleteRow(index);
​	行对象.deleteCell(index);

### 自定义属性：

​	标签节点.setAttribute("index","8"):给标签元素增加自定义属性index="8"；

​	标签节点.setAttribute("index"):获取标签元素的自定义属性的值；

### 样式属性：

​	标签.style.width：只可获取标签的行内样式的设置（ie，主流浏览器）；

​	标签.currentStyle.width：可获取标签的行内、内部、外部样式（只能在ie中）；

​	getComputedStyle(标签).width：可获取标签的行内、内部、外部样式（只能在主流浏览器）；

### offset属性：

​	element.offsetHeight:通过计算得到某元素的高；
​	element.offsetWidth:通过计算得到某元素的宽；
​	element.offsetLeft:返回元素的水平偏移距离（基于最近的上级定位的父元素，如果没有就是body）；
​	element.offsetTop:返回元素的垂直偏移距离（基于最近的上级定位的父元素，如果没有就是body）；
​	element.offsetParent:返回元素的偏移容器（最近的有定位的父元素）；

### window.onscroll事件：

​	window.onscroll页面滚动事件

​	滚动条滚动距离：
​		document.body.scrollTop:谷歌（设为0页面回到顶部）；
​		document.documentElement.scrollTop:标准；
​		兼容写法：document.documentElement.scrollTop || document.body.scrollTop

​	窗口可视区域：
​		获取高度document.body.clientHeight || document.documentElement.clientHeight
​		获取宽度document.body.clientWidth || document.documentElement.clientwidth

​	取得某元素距离外层元素的距离，外层元素必须定位，否则会一直找外外层，一直到body
​		obj.offsetTop（不能设置，仅能获取）
​	设置元素高度使用：obj.style.top

### Json对象的属性使用：

```
	var person ={
    	id:'007',
    	name:'刘德华'
	}
```

1. 点的方式：

   person.id;
   person.name;

2. 方括号的方式：

   person['id'];

   person['name']

### DOM0、DOM2级事件绑定及ie级：

#### 	DOM0级两种方式:（只支持事件冒泡）

​	<input type="button" id="button1" value="按钮" onclick="queren(this)">

 1. 使用HTML属性指定方式，如果要调用函数，这个函数在JS中要处于全局作用域。

    ```
    function queren(data){
        alert(data.value);
    }
    ```

 2. DOM对象事件属性绑定（匿名函数方式）//建议使用此方式

    ```
    var btn1=document.getElementById("button1");
    btn1.onclick = function(){
        alert(this.value);
    }
    btn1.onclick=" ";或者null；//可取消两种方式事件处理函数的绑定。
    
    注：this代表触发事件的当前元素，在例子中代表按钮button1。
    ```

**DOM0级事件：**

| 事件名     | 事件作用                                 | 事件名      | 事件作用                         |
| ---------- | ---------------------------------------- | ----------- | -------------------------------- |
| onchange   | 域的内容被改变（下拉列表选择改变）       | onclick     | 当用户点击某个对象时调用的事件   |
| ondblclick | 当用户双击某个对象时调用的事件           | onfocus     | 元素获得焦点                     |
| onblur     | 元素失去焦点                             | onkeydown   | 键盘上某个按键被按下             |
| onkeyup    | 键盘上某个按键被松开                     | onkeypress  | 键盘上某个按键被按下并松开       |
| onload     | 一张页面或一幅图像完成加载               | onmousedown | 鼠标按钮被按下                   |
| onmouseup  | 鼠标按钮被松开                           | onmouseover | 鼠标移到某元素之上               |
| onmouseout | 鼠标从某元素移开                         | onmousemove | 鼠标被移动                       |
| onreset    | 重置按钮被点击，引发form重置事件         | onresize    | 窗口（body）或框架被重新调整大小 |
| onsubmit   | 确认（提交）按钮被点击，引发form提交事件 | onunload    | 窗口（body）用户退出（刷新）页面 |

注：所有DOM0级事件都有“on”作为开头。

#### 	DOM2级事件：（支持冒泡与捕获，第三个参数为true时，表示事件捕获）

​	addEventListener和removeEventListener(事件监听器)
​		这两个方法接受3个参数，要处理的事件名（事件类型），处理函数，和一个布尔值。这个布尔值代表在捕获节点调用事件处理程序（true）还是在冒泡过程中调用。

```
	var div = document.getElementById("div1");
	
	fun1(){
		alert("nihao");
	}
```

​	div.addEventListener('click',fun1,false);给div元素添加click事件，函数为function1的处理程序。

​	div.removeEventListener('click',fun1,false);将div元素的click事件为function1的函数移除，匿名添加的事件函数无法移除。

注：DOM2级事件没有"on"；DOM0级可绑定一个，相同事件的匿名函数会被覆盖，DOM2级可绑定多个相同事件的匿名函数。

#### 	ie级事件：（只支持冒泡）

​	attachEvent绑定和detachEvent解绑

​	div.attachEvent("onclick",fun1)；ie级事件绑定

​	div.detachEvent("onclick",fun1)；ie级事件解绑

注：ie级事件都有"on"作为开头。可绑定多个相同事件的匿名函数，执行顺序为倒序。

##### 	几种事件绑定方式的封装：

```javascript
	function (ele,event,func){//ele(DOM元素)，event(事件类型)，func(事件处理函数)；
        if(ele.addEventListener){//如果支持DOM2级；
            ele.addEventListener(event,func,false);
        }else if(ele.attachEvent){//否则如果支持ie级；
            ele.attachEvent("on"+event,func);
        }else{//否则为DOM0级；
            ele["on"+event]=func;
        }
	}
```



### 	事件冒泡与事件捕获以及事件流：

###### 			冒泡是从点击源到最外层，捕获是从最外层到点击源；事件流是先执行捕获后执行冒泡；

##### 	DOM0级：（只支持事件冒泡）

​		阻止事件冒泡：event.stopPropagation();
​		删除事件绑定：设置为空或null；
​		兼容性：全兼容；

##### 	DOM2级：（true表示事件捕获，flas表示事件冒泡）

​		阻止事件冒泡：event.stopPropagation();
​		删除事件绑定：用处理程序名removeEventListener删除，匿名绑定不能删除；
​		兼容性：非ie；

##### 	ie级：（只支持事件冒泡）

​		阻止事件冒泡：enent.cancelBubble=true;
​		删除事件绑定：用处理程序名detachEvent删除，匿名绑定不能删除；
​		兼容性：ie；

### event对象：

​	**event对象只在事件发生时（如：点击事件）的过程中才有效。**事件发生时会自动产生event对象。event对象是自带的对象，固定写法。

​	**W3C标准中，直接在函数中声明该参数即可**：如btn.onclick = function(enent){//event在调用和函数定义时，都写上也是考虑兼容问题}；

​	**兼容性写法：**
​		支持老版本IE：var evt = event ? event : window.event；或者var evt = event || window.event；

​		**event.target：**真正的事件源不变；**event.currentTarget：**事件流向哪一元素就指哪一元素；

​	**阻止事件流：**
​		event.stopPropagation();//此元素不会继续向后传递事件流；

​	**阻止浏览器右键菜单的默认行为：**

```javascript
	document.oncontextmenu = function (event) {//oncontextmenu是右键菜单
        var evt = event || window.event
    	evt.perventDefault() || evt.returnValue=false;//取消浏览器默认行为，兼容ie
	}
```

##### 		event对象的属性/方法：

| 属性/方法         | 类型     | 说明                                                     |
| ----------------- | -------- | -------------------------------------------------------- |
| bubbles           | Boolean  | 事件是否支持冒泡                                         |
| cancelable        | Boolean  | 是否可以取消事件的默认行为                               |
| currentTarget     | Element  | 当前正在处理事件的那个元素（ie是srcElement）             |
| detail            | Integer  | 与事件相关的细节信息                                     |
| eventPhase        | Integer  | 阶段：1捕获，2处于目标，3冒泡                            |
| preventDefault()  | Function | 取消事件的默认行为，例如keydown（ie是returnValue=false） |
| stopPropagation() | Function | 取消进一步的捕获或冒泡                                   |
| target            | Element  | 事件的目标                                               |
| type              | String   | 事件的类型                                               |



### event对象事件代理：

​	**事件代理是把某元素的事件委托给它的父级元素。**如：把每个li的事件委托给它的父级元素ul。

```javascript
	var ul = document.ElementById("ul");
	
	ul.onclick = function(event){
        var evt = event || window.event;//兼容性
        alert(evt.target.innerHTML);//弹出ul标签里面的子元素内容；
        
        if(evt.target.tagName.toLowerCase()=="li"){//获取ul标签里名字为li的子元素，toLowerCase为转换为小写
            alert(evt.target.innerHTML)；
        }
	}
```

​	**优点：**绑定的事件少了；后添加的子元素，该事件依然有效；

### event对象键盘事件属性：

| 事件属性 | 说明                                |
| -------- | ----------------------------------- |
| altKey   | “ALT”键是否被按下                   |
| shiftKey | “SHIFT”键是否被按下                 |
| ctrlKey  | “CTRL”键是否被按下                  |
| keyCode  | 获取每个按键唯一编码（火狐用which） |

​	**event.keyCode**保存着键盘的虚拟码，每个按键的虚拟码唯一；

​	onkeydown：键盘某个按键按下；onkeyup：键盘某个按键抬起；onkeypress：键盘某个按键按下并松开；

### event对象鼠标事件属性：

| 事件属性 | 说明                                      | 事件属性 | 说明                                  |
| -------- | ----------------------------------------- | -------- | ------------------------------------- |
| clientX  | 基于浏览器可视区域的左上角的鼠标X坐标     | clientY  | 基于浏览器可视区域的左上角的鼠标y坐标 |
| pageX    | 基于网页左上角的鼠标X坐标                 | pageY    | 基于网页左上角的鼠标Y坐标             |
| offsetX  | 基于事件元素（事件源头）左上角的鼠标X坐标 | offsetY  | 基于事件元素（事件源头）左上角的Y坐标 |
| screenX  | 基于显示器左上角的鼠标X坐标               | screenY  | 基于显示器左上角的鼠标Y坐标           |

​	**event.button**鼠标按键事件中按了哪个鼠标键；

​	左键0，中键1，右键2；

### 正则（RegExp对象）:

​	**属性：**
​		**global：**	RegExp对象是否具有标志g。全局
​		**ignoreCase：**	RegExp对象是否具有标志i。 忽略大小写
​		**Multiline：**	RegExp对象是否具有标志m。 不只匹配一行

​	**方法：**
​		**exec(字符串)**	检索字符串中指定的值。返回找到的值，如果没有匹配到，返回null。
​		**test(字符串)**	检索字符串中指定的值。返回true或false。

### ES5:

​	**JSON.stringify()**	把JSON对象转换为字符串；

​	**JSON.parse()**	把字符串转换成JSON对象；

### ES6:

​	**let声明**的变量是块级作用域（所在的花括号内）；//let可以定义全局变量，局部变量，块级作用域的变量

​	**var声明**的变量是函数作用域和全局作用域；

​	**const定义**的变量是只读变量（也叫常量）；//const是只读的，无法修改，数组下标所在的值可以修改

​	注：let不能声明同名的变量，var可以。

