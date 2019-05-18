### DOM操作：

**createElement(element)** 		创建一个新的元素节点

**createTextNode()**			创建一个包含着给定文本的新文本节点

**appendChild()**			指定节点的最后一个子节点列表之后添加一个新的子节点

**insertBefore()**			将一个给定节点插入到一个给定元素节点的给定子节点的前面

**removeChild()**			从一个给定元素中删除一个子节点

**replaceChild()**			把一个给定父元素里的一个子节点替换为另外一个节点

tip:前面两个是document方法。



### 查找：

**document.getElementById()**		获取元素ID名

**document.getElementsByName()**		获取元素的name属性

**document.getElementsTagName()**			获取标签名

**elementNode.getAttribute(name)**			通过元素节点的属性名称获取属性的值
	//elementNode：使用getElementById()、getElementsByTagName()等方法，获取到的元素节点；name：要想查询的元素节点的属性名字；getAttribute()获取标签的属值。

**elementNode.setAttribute(name,value)**			增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。
	//name：要设置的属性名；value：要设置的属性值。把指定的属性设置为指定的值，如果不存在具有指定名称的属性，该方法将创建一个新属性。





### 节点属性

**nodeName			节点的名称**
	//节点的名称，是只读的。		元素节点的nodeName与标签名相同；属性节点的nodeName是属性的名称；文本节点的nodeName永远是#text；文档节点的nodeName永远是#document。

**nodeValue			节点的值**
	//元素节点的nodeValue是undefined或null；文本节点的nodeValue是文本自身；属性节点的nodeValue是属性的值。

**nodeType			节点的类型**
	//节点的类型，是只读的；常用以下几种节点类型：
		元素类型	节点类型
		元素			1
		属性			2
		文本			3
		注释			8
		文档			9



### 访问子节点childNodes

**elementNode.childNodes**		访问选定元素节点下的所有子节点的列表，返回的值可以看做是一个数组，它具有length属性；如果选定的节点没有子节点，则该属性返回不包含节点的NodeList。

### 访问子节点的第一和最后项

**fistChild** 		属性返回“childNodes”数组的第一个子节点；如果选定的节点没有子节点，则该属性返回Null。
	//与elementNode.childNodes[0]是同样的效果。

**lastChild**		 属性返回“childNodes”数组的最后一个子节点；如果选定的节点没有子节点，则该属性返回Null。
	//与elementNode.childNodes[elementNode.childNodes.length-1]是同样的效果。

### 访问父节点parentNode

**elementNode.parentNode**	获取指定节点的父节点；父节点只能有一个。

**leementNode.parentNode.parentNode**		访问父节点的父节点。

### 访问兄弟节点

**nextSibling**		属性可返回某个节点之后紧跟的节点（处于同一树层级中）；如果无此节点，则该属性返回Null。

**previousSibling**		属性可返回某个节点之前紧跟的节点（处于同一树层级中）；如果无此节点，则该属性返回Null。

tip：两个属性获取的是节点。Internet Explorer 会忽略节点间生成的空白文本节点（例如，换行符号），而其它浏览器不会忽略。	解决方法：判断节点nodeType是否为1，如是为元素节点，跳过。

### 插入节点

**appendChild(newnode)**			在指定节点的最后一个子节点列表之后添加一个新的子节点。	//newnode：指定追加的节点。

**insertBefore(newnode,node)**			可在已有的子节点前插入一个新的子节点。		//newnode：要插入的新节点。node：指定此节点前插入节点。

### 删除节点

**removeChild(node)**			从子节点列表中删除某个节点；如删除成功，可返回被删除的节点，如失败，则返回Null。
	//node：必须，指定需要删除的节点。

### 替换元素节点

**replaceChild(newnode，oldnew)**		实现子节点（对象）的替换；返回被替换对象的引用。
	//newnode：必需，用于替换oldnew的对象。oldnew：必需，被newnode替换的对象。

### 创建元素节点

**createElement(tagName)**			创建元素节点；可返回一个Element对象。
	//tagName：字符串值，这个字符串用来指明创建元素的类型。

tip：要与appendChild()或insertBefore()方法联合使用，将元素显示在页面中。

### 创建文本节点

**createTextNode(data)**		创建新的文本节点，返回新建的Text节点。
	//data：字符串值，可规定此节点的文本。



















Ajax

![1557800797320](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1557800797320.png)