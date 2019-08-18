# React 16.8

特点：

1. 组件化：只关注视图层（view）
2. 虚拟dom（js对象）：
   用js内存对象去模拟一个dom结构；
   解决的问题：
      1.跨平台：react-dom 页面的编译器；reactnative vnode 编译成Android iOS的代码
      2.性能优化
   有两种表达方式：
      1.使用字符串模块，vnode；
      2.jsx JavaScript xml ，可以在js中写类标签视图
3. diff算法：比较新旧DOM，做出最小dom更新一个算法
4. 单向数据流
5. react一切都是js all in JavaScript
6. 系统生态很大，可做webapp、pc端；react native；小程序；VR；国内的react版本，有京东的nervjs，阿里的dva，腾讯的preact；

**react安装**：bower install react，使用babel进行broswer动态编译；npm install react，使用webpac+babel。

class person{

​	//构造方法

​	//属性：实例属性   类属性（静态）

​	//方法：实例方法   类方法

​	name=“zhangsan”// getter setter
​		let zs=new person（）
​		console.log（zs.name）

}

react：virtual dom	diff 算法

react webpack 全栈 js

js python php 出自同门

js可以在browser Android iOS node.js mongodb 运行

2013年大前端，进入到Android iOS desktop node.js

virtual dom （虚拟DOM）：使用js把dom从浏览器抽象出来的一个对象
	react div =>{type:"div"}
	用一个对象模拟一个dom元素，跨平台

框架：
	compontnt：
		组件的三件宝：view css logic
		react中组件视图创建：
			jsx的作用，1.可以方便的在js中写vnode2.jsx中使用style，style中只能接收一个map对象：{fontSize:"10px"}3.当在jsx中使用非内容性标签的时候，需要加上一个结束标记<hr/>
		组件的创建：1.函数式组件（无状态组件，木偶组件）：函数名称首字母必须是大写;函数必须有一个输入参数，组件的输入接口(props)；函数返回一个view，有string/jsx视图/数组类型
2.es6类式组件（有状态的组件，只能组件）：类的首字母必须大写；通过继承React.Component来实现一个组件的定义；首写React.Component中的render方法，在render方法中返回组件view
3.hooks函数：component=f（state）
		组件的结构：类式组件的结构：1.constructor，初始化组件的状态 state；2.render方法，在render方法中返回组件view；3.三个属性：1.props，组件的输入属性。props.children()2.state：状态属性，当前状态属性的值发生变化，视图重新渲染。初始化状态，contructor(props){super(props)；//初始化状态值 vue data; this.state={num:1}}。读取状态：this.state.num。修改状态：this.setState({num:++num}),this.forceUpdate()；3.refs：用来获取vnode对象的一个内置对象，用来唯一确定一个vnode的对象；
		组件的组装：组件的父子关系：props，context；组件的非父子关系：
		组件的生命周期方法：1.挂载期：componentWillMount、render、componentDidMount(页面首页render完成)；2.更新期：shouldComponentUpdate、componentWillUpdate、componentDidUpdate、componentDidUpdate(页面更新完成了)

rect-router

redux

fetch

elementui/antdesigne

react native

ssr

webpack 模块打包器

gulp 构建工具

css render 渲染

js application 可执行程序

loader 转换器

ReactNative    vnode-->将视图转换为android/ios view

webpack
	css-loader style-loader url-loader file-loader

vue
	template
	jsx
	decorator

nodejs express mongodb

npm install vue vue-router -s

npm install webpack webpack-cli vue-loader -D



npm install 

MVVM view model 分离
	new vue

react view model 融合
	component view

jsx 通常用来编写vnode一个xml格式

vue77

react

angular template

http express  服务器