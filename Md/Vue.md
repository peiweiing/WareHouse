## VUE

Vue.js是目前最流行的MVVM框架。

用于构建用户界面的MVVM框架。是一套构建用户界面的渐进式的自底层向上增量开发MVVM框架。

作用：

1. 解决数据绑定问题
2. 开发大型单页面应用
3. 支持组件化

优点：

1. 简洁：HTML模板+Vue实例+json数据
2. 轻量：17kb，性能好
3. 设计思想：视图与数据分离，无需操作dom
4. 社区：大量的中文资料和开源案例

tip：vue可和其它三方插件共同使用，例如jq，但不建议，jq有大量dom操作，而vue是尽可能减少dom操作

## MVC框架

**MVC-表示软件可分为三部分**：

 	1. 模型（model）==数据
 	2. 视图（view）==用户看见的界面
 	3. 控制器（controller）

**为什么要使用MVC**：

1. MVC是一种专注业务逻辑，而非显示的设计思想
2. MVC中没有DOM操作
3. 将数据独立出来，方便管理
4. 业务逻辑、数据、界面显示分离的方法组织代码，讲业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。

## MVC与MVVM与MVP的思想



**MVC思想**：
		一种将数据层与视图层进行分离的设计思想



**MVVM思想：**
		当模型（M）层中的数据进行修改时，视图模型（VM）层会监测到变化，并且通知视图（V）层进行相应的修改，反之相同。



**MVP思想：**
		MVP全称Model—View—Presenter。model提供数据，view负责显示，presenter负责逻辑的处理。

1. M：提供数据
2. V：负责显示
3. P：负责逻辑的处理



**MVP与MVC的区别：**
		MVP不能在视图中直接使用数据，通过P来通信；
		MVC可以在视图层V中直接使用模型层M中的数据



## vue环境配置及安装插件

node xxxx.js 运行xxxx文件

npm init 安装操作前先初始化

npm install vue-cli -g 安装自动的构建项目结构和项目目录到全局

npm install webpack -g 安装编译打包工具到全局

vue init webpack ‘项目名’ 创建Vue项目名，项目名中不要出现中文

npm run dev 启动当前目录下Vue项目（项目名字不要出现中文或其它特殊符号）

npm run build 打包项目



npm install --save vue-router 安装路由功能模块插件

npm install --save vue-resource 安装数据交互（官方插件与ajax类似）

npm install --save axios 安装axios插件（第三方插件，react中亦可使用）

npm install --save vuex 安装vuex插件

npm install --save mockjs 安装mockjs插件

npm install -g cnpm 安装淘宝镜像到全局

npm -v 查看版本信息

npm install 可以重新下载一遍，确保项目需要的依赖文件没有缺失（通常情况下不用执行）

npm install --save element -ui 安装element ui 插件



## Vue.js

创建Vue基本写法，

**渲染方式与数据驱动**

**声明式渲染**：我们只需要告诉程序我们想要什么效果，其它的交给程序来做。
	**命令式渲染**：命令我们的程序去做什么，程序就会跟着你的命令去一步一步执行

**数据驱动**：Vue当中，数据改变了，页面显示的内容也会随之改变

**模板语法**：{{表达式}}	响应式的对于数据进行视图展示   但是注意  在模板语法中不要写太多复杂的逻辑 增加代码复杂度 减少复用率 增大测试难度



### **Vue指令**：

v-开头的特殊属性   给html标签添加更多的特殊功能   前提是必须在使用vue的情况下才可以使用这些指令
	指令的书写位置在html开标签当中 一个html标签可以有多个指令（每个指令之间要用空格隔开）

**v-model 指令**：
		**作用**：主要是用于表单上数据的双向绑定
		**语法**：v-model = 变量
		**注**：v-model 指令必须绑定在表单元素上

**v-show 指令**：
		**作用**：控制切换一个元素的显示和隐藏
		**语法**：v-show = 表达式
		根据表达式结果的真假，确定是否显示当前元素
		true表示显示该元素；false(默认)表示隐藏该元素
		元素一直存在只是被动态设置了display：none

**v-on 指令**
		**作用**：为 HTML 元素绑定事件监听
		**语法**：v-on：事件名称=‘函数名称()’
		**简写语法**：@事件名称=‘函数名称()’
		**注**：函数定义在 methods 配置项中

**v-for 指令**
		**作用**：遍历 data 中的数据，并在页面进行数据展示
		**语法**：v-for = ‘(item, index) in arr’
		**item** 表示每次遍历得到的元素
		**index** 表示item的索引，可选参数

**v-bind 指令**
		**作用**：绑定 HTML 元素的属性
		**语法**：v-bind:属性名 = ‘表达式’
		**简写**：    ：属性名=‘表达式’
		**绑定一个属性**：<img v-bind:src='myUrl' />
		**绑定多个属性(不能使用简写)**：<img v-bind=‘{src:myUrl, title: msg}’ />

**v-if指令**
		**作用**：判断是否加载固定的内容
		**语法**：v-if = 表达式
		根据表达式结果的真假，确定是否显示当前元素
		true表示加载该元素；false表示不加载该元素
		元素的显示和隐藏 是对Dom元素进行添加和删除

**v-show与v-if区别：v-if有更高的切换消耗（安全性高）。**
	**v-show有更高的初始化的渲染消耗（对安全性无要求选择）**

**v-else 指令**
		**作用**：必须配合v-if使用否则无效。当v-if条件不成立的时候执行

**v-else-if 指令**
		**作用**：当有一项成立时执行。

**v-text 指令**
		**作用**：操作网页元素中的纯文本内容。{{}}是他的简写

**v-html  指令**
		**作用**：双大括号会将数据解释为纯文本，而非 HTML 。为了输出真正的 HTML ，你需要使用 v-html 指令
		**语法**：<p v-html="text"></p>

**v-once  指令**
		**作用**：当数据改变时，插值处的内容不会更新(会影响到该节点上的所有属性)
		**语法**：<p v-once>{{text}}</p>



![1561454907379](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1561454907379.png)



**事件修饰符**
		**概念**：v-on指令提供了事件修饰符来处理DOM事件细节
		**按键修饰符**：.up,.down,.ctrl,.enter,.space等等
		**语法**：@click.修饰符='fn()'

​	**prevent修饰符**：阻止事件的默认行为(submit提交表单)
​		**stop修饰符**：阻止事件冒泡
​		**注意**：修饰符可以串联使用

## 计算属性（computed）VS方法（methods）对比：

   计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。
	方法每当触发重新渲染时，调用方法将总会再次执行函数。

计算属性（ computed）计算的结果如果不发生改变就不会触发result这个函数。而方法（methods）中一般都是定义的需要事件触发的一些函数。每次只要触发事件，就会执行对应的方法。如果把computed中的方法写到method中会浪费性能。

​    computed必须返回一个值页面绑定的才能取得值，而methods中可以只执行逻辑代码，可以有返回值，也可以没有。

## Vue语法：

```
new Vue({
	el:"#box",//Vue实例挂载的元素节点;el绑定的是视图容器，即DOM对象。
	data:{},//data属性绑定的是模型数据。
	methods:{},//是方法的意思，要触发这个方法就要执行，所以就需要一个事件源。
	computed:{},//计算属性，必须有一个返回值。
	watch:{},//可以监听模型数据 当模型数据改变的时候就会触发，监听的data数据(newval,oldval){}。
	beforeCreate(){} 创建前,在数据观测和初始化事件还未开始。
	created(){} 创建后, 完成数据观测，属性和方法的运算，初始化事件，实例中的el属性还没有显示出来。
	beforeMount(){} 载入前, 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。
	mounted(){} 载入后, 在el 被新创建的 vue.el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。
	beforeUpdate(){} 更新前, 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
	updated(){} 更新后, 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
	beforeDestroy(){} 销毁前, 在实例销毁之前调用。实例仍然完全可用。
	destroyed(){} 销毁后, 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

```



## 虚拟 dom 与 di  ff 算法

**什么是虚拟DOM**：所谓的虚拟 dom，也就是我们常说的虚拟节点，它是通过JS的Object对象模拟DOM中的节点，然后再通过特定的render（渲染）方法将其渲染成真实的DOM的节点。

**为什么使用虚拟dom**：使用jq的时候，会大量操作dom，那么dom元素的变化自然会引起页面的回流或者重绘，页面的dom重绘自然会导致页面性能下降，如何尽可能减少dom的操作是框架需要考虑的重要问题。

**真实dom和虚拟dom的区别**

\- 虚拟dom不会进行排版和重绘操作

\- 真实dom频繁排版与重绘的效率相当低

\- 虚拟dom进行频繁修改，然后一次性比较并修改真实dom中需要改的部分，最后不在真实dom中需要改的部分，最后在真实dom中进行排版和重绘，减少过多dom节点排版与重绘损耗

\- 虚拟dom有效降低重绘和排版，因为最终与真实dom比较差异

**dom diff**

\- 虚拟dom通过dom diff算法尽可能减少dom频繁操作。

 **dom diff原理**

\- 逐步解析newdom的节点，找到它在olddom中的位置，如果找到就移动相对应的dom元素，如果没找到说明是新增节点，则新建一个节点插入。遍历完成后如果olddom中还有没处理过的节点，则说明这些节点在newdom中被删除了，删除即可。



## Vue.js   resource交互

`get 类型
	语法：this.$http.get(‘url’,
 	{params:{key1:val1,key2:val2…}}).then
	(function(res){处理请求成功的情况},
	function(res){处理请求失败的情况})`

`POST类型
语法：this.$http.post(‘url’,
 	 {key1:val1,key2:val2…},
	{emulateJSON:true}).then
	(function(res){处理请求成功的情况},
	function(res){处理请求失败的情况})`



## Vue.js   Axios交互

**Axios是第三方插件，不仅能在Vue里使用，还能再其他第三方库中使用例如react。**

**post类型请求方式：**需要使用URLSearchParams对象修改操作 URL传递参数的方法。
	**实例化对象**： 
		let param = new URLSearchParams();
	**添加发送数据参数**
		param.append("key", "value");

`get类型
	语法：axios.get('/路径?k=v&k=v}
	.then((ok)=>{})
	.catch((err)=>{})`

![1561724555263](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1561724555263.png)

`post类型
	语法：axios.post('/user', {k:v,k:v })
  	.then(function (ok) { })
  	.catch(function (error) { });`

![1561724561636](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1561724561636.png)



1. axios(utl:'请求地址',method:'请求方式',data/params:{k:v}).then((ok)=>{})
2. axios(utl:'请求地址',method:'请求方式',data/params:{k:v}).then((ok)=>{})
3. 使用get发送数据的时候 使用params：{key:val}发送数据
4. 使用post发送数据需要使用 var param=new URLSearchParams();修改传参方法
5. 使用param.append("uname","xixi")添加数据并且使用data发送数据



## Vue.js过滤器

**过滤器作用**
		在不改变数据的情况下，输出前端需要的格式数据
		2.0中已经废弃了内置过滤器，需要我们自定义过滤器来使用filter 

**全局过滤器方法：**

![1561725007197](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1561725007197.png)

**局部过滤器方法：**

​	只能在当前vue注册内容中使用
​		在vue实例中与el属性data属性同级定义
​		filters：{
​			过滤器名字:function(val){
​			return 输出内容
​			}
​		}

**过滤器的调用方法**：
		{{ msg | sum }}
	**注意事项**：
		定义全局过滤器，必须放在Vue实例化前面
		在没有冲突的前提下，过滤器可以串联



## 实例的生命周期钩子函数

**生命周期钩子函数的用途**
		在生命周期中会自动调用一些函数，为我们提供执行自定义逻辑的机会 

**钩子函数有哪些**：

1. beforeCreate()、创建实例
2. created()、创建完成
3. beforeMount()、开始创建模板
4. mounted()、创建完成
5. beforeUpdate()、开始更新
6. updated()、更新完成
7. beforeDestroy()、开始销毁
8. destroyed()、销毁完成

钩子函数的书写位置在data与methods同级位置书写。	

**created里面**，如果涉及到需要页面加载完成之后的话就用 mounted。

**在created的时候**，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素

而**在mounted中**，由于此时html已经渲染出来了，所以可以直接操作dom节点

1. Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。
2. 生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易完成指定逻辑。
3. 它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后
4. 第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子
5. DOM 渲染在 mounted 中就已经完成了。



## vue生命周期在真实场景下的业务应用

`created`：进行ajax请求异步数据的获取、初始化数据
 	`mounted`：挂载元素内dom节点的获取
 	`nextTick`：针对单一事件更新数据后立即操作dom
	 `updated`：任何数据的更新，如果要做统一的业务逻辑处理
	 `watch`：监听具体数据变化，并做相应的处理



## Vue组件

**什么是组件** （可重复使用的v层代码块）

​	**概念**：组件即自定义控件（控件=标签），是vue.js最强大功能之一

​	**本质**：自定义标签

​	**用途**：组件能够封装可重用代码，扩展html标签功能



#### 全局组件：

**作用域**：不同作用域内均可使用

**语法**：
​		`Vue.component(‘name’, {
​     	   template: ‘<div></div1>’
​	});`

​	tip：建议使用驼峰这会帮助你避免和当前以及未来的 HTML 元素相冲突。

**定义位置：创建实例前定义全局组件**
​	**template的设置：**
​			template：‘html代码’
​			template：‘#template1’引用template内容

**数据的定义**：                     			
		data：function(){           				return {a:1,b:2}		
			}					

**函数的定义**：
​		methods:{
​			函数名：function（）{}
​		}

**组件的调用方法**：<组件名></组件名>
​	**组件的作用域**：全局范围内均可调用
​	**组件中数据的定义**：需以函数返回值的形式定义数据
​	**组件的调用**：组件本质为标签，调用方式与调用标签相同



#### 局部组件：

**作用域**：只在定义该组件的作用域内可以使用
​	**语法**：定义在vue实例中只能在当前实例范围内生效
​	**定义位置**：实例配置项中定义
​	**template的设置**：
​			template：‘html代码’
​			template：‘#template1’
​	**数据的定义**：
​			`data：function(){
​		return {a:1,b:2}
​		}`
​	**组件的调用方法**：<组件名></组件名>
​	**组件的作用域**：定义该组件的作用域内可调用
​	**组件在命名时**如果是驼峰命名法 那么在调用的时候用-替代大写 “myText”调用 <my-text></my-text>
​	**组件中数据的定义**：需以函数返回值的形式定义数据
​	**组件的调用**：组件本质为标签，调用方式与调用标签相同



## props 选项

**作用**：props选项用来声明它期待获得的数据props 
	**本质**：props 为元素属性
	**语法**：如果是驼峰命名法需要把大写转小写前面加-
		**JS 中：**
 		props:[‘message1’, ‘messAge2’…]
		**HTML 中：**
		<组件 message=‘val’mess-age2='val'></组件>

**props 的使用**:
		与 data 一样，props 可以用在模板中
		可以在 vm 实例中像 this.message 这样使用

**props 验证**:
		我们可以为组件的 prop 指定验证要求，例如知道的这些数据的类型。
		为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组。

![1561727077650](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1561727077650.png)

tip:为什么写的没有错但是没有错误提示？生产版本也就是压缩版的文件删除了警告，所以使用非压缩版的js文件就可以看到错误.



项目坏境

build文件夹：

单页面（SPA）就是只有一个html页面的程序：
	缺点：对于seo优化不够友好，

优点：大势所趋，切换页面过程用户体验度好



## Vue路由

**路由的作用：**所有的路径都经由这个模块进行重新分配（改变URL，在不重新请求页面的情况下，更新页面视图）
	根据 url 锚点路径，在容器中加载不同的模块。利用锚点完成切换，页面不会刷新。
	完成 SPA（单页面应用）的开发

用 Vue.js + Vue Router 创建单页面应用，是非常简单的。将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router 在哪里渲染它们。

 1. **定义 (路由) 组件**。![1562060956325](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562060956325.png)

    tip：可以使用template模板进行html封装，调用id属性更加方便
    ![1562060988873](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562060988873.png)

2. **定义路由**。
   使用component来进行路由映射组件。name属性是命名路由通过一个名称来标识一个路由
   ![1562061061796](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562061061796.png)

3. **创建 router 实例，然后传 `routes` 配置**
   ![1562061127990](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562061127990.png)

4. **创建和挂载根实例**。
   通过 router 配置参数注入路由，从而让整个应用都有路由功能
   ![1562061159025](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562061159025.png)

   

**路由跳转**

​	`使用<router-link to="/url"></router-link>标签设置路由跳转`
​		`to属性用来设置跳转链接路由出口`
​		`<router-view></router-view>表明路由模版显示的位置`
​		当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active。
通过自动设置的类名方便进行路由导航样式设置

**捕获所有路由**

常规参数只会匹配被 / 分隔的 URL 片段中的字符。如果想匹配任意路径，我们可以使用通配符 (/*)

```
{name:"tema",path:"/*",component:tema}
```

匹配任意开头的路径使用通配符（*）

```
{name:"tema",path:"/demo-*",component:tema}
```

当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由 { path: '/*' } 通常用于客户端 404 错误。

tip:同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

**js跳转**

使用this.$router全局路由的push()方法进行路由跳转
![1562061333706](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562061333706.png)



## 编程式导航与声明式导航

**使用js方式进行跳转路由--这种方式被称之为编程式导航**

**使用router-link进行跳转路由--称之为声明式导航**

![1562066830038](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562066830038.png)



**扩展路由跳转方式：**
		**router.replace（）替换**，它与push（）唯一的不同就是，它不会向 历史url记录中添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

​	**this.$router.go(n)这个方法**的参数是一个整数，意思是在 history 记录中向前或者后退多少步，**类似 window.history.go(n)**。

![1562066994944](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562066994944.png)



## 动态路由匹配

**动态路由也可以叫做路由传参**
	组件的显示内容经常会根据用户选择的内容不同来在同一个组件中渲染不同内容。那么在这个时候就需要**动态路由**
	使用动态路由匹配中的 **动态路径参数来进行路由配置**。
	tip：**动态路径参数 以冒号：开头**

![1562067098504](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067098504.png)



## 路由导航绑定参数

**路由导航绑定参数的两种方式** 
	但是注意**params**只能通过路由配置中的**name属性**来引用路由
![1562067160695](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067160695.png)

**js方式进行参数绑定**
![1562067207967](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067207967.png)

**要得到路径参数那么使用$route.params.id**
![1562067271639](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067271639.png)

**或者要得到路径参数使用this实例中的this.$route.params.id进行调用**
![1562067309071](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067309071.png)

**路由参数不需要添加内容**
![1562067340910](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067340910.png)

**路由导航绑定参数的方式**
![1562067346816](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067346816.png)

**js方式进行参数绑定**
![1562067366119](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067366119.png)



## params与query区别

**用法区别**：params要用name来引入，接收参数都是类似的，分别是this.$route.query.name和this.$route.params.name。

**url展示上的：**params类似于post，query更加类似于我们ajax中get传参，说的再简单一点，前者在浏览器地址栏中不显示参数，后者显示，所以params传值相对安全一些。



## hash模式-history模式

**hash模式**
		hash模式url里面永远带着#号，我们在开发当中默认使用这个模式。

**history模式**
		history模式没有#号，是个正常的url适合推广宣传。
		考虑url的规范那么就需要使用history模式，因为当然其功能也有区别，在开发app的时候有分享页面，这个分享出去的页面就是用vue做的，把这个页面分享到第三方的app里，有的app里面url是不允许带有#号的，所以要将#号去除那么就要使用history模式，history模式还有一个问题就是，做刷新操作，会出现404错误，那么就需要和后端人配合让他配置一下apache或是nginx的url重定向，重定向到你的首页路由上。![1562067581357](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067581357.png)



**hash模式history模式与区别**
![1562067539405](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562067539405.png)



## 嵌套路由的配置

**配置二级路由路径参数中使用 children 配置**
![1562161083505](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562161083505.png)

**配置模板**
![1562161102612](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562161102612.png)

tip：分配二级路由路径时，路径前不加 ’ / ’ 

#### 路由重定向

**重定向也是通过 routes 中的redirect属性配置来完成**
![1562161352049](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562161352049.png)

#### 路由知识点扩展

#### 路由守卫/导航守卫

vue项目中经常在路由跳转前做一些验证，比如登录验证，是网站中的普遍需求。

**导航守卫-全局前置守卫**
	当一个导航触发时，全局前置守卫(在进入组件之前)按照创建顺序调用。
	vue-router 提供的router.beforeEach（(to，from，next)=>{}）可以方便地实现全局前置导航守卫
	to：即将要进入的目标 路由对象
	from: 当前导航正要离开的路由
	next: 下一步执行

**导航守卫-全局后置钩子**
	当一个导航触发时，全局后置钩子(在进入组件之后)调用。
	vue-router 提供的 router.afterEach((to, from) => {})实现全局后置守卫
	to：即将要进入的目标 路由对象
	from: 当前导航正要离开的路由

**导航守卫-路由独享的守卫**
	与全局前置守卫相比路由独享守卫只是对当前路由进行单一控制参数和全局前置守卫相同
	在路由配置上直接定义 beforeEnter 进行路由独享守卫定义
![1562161620732](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562161620732.png)

**导航守卫-组件内的守卫**
	组件内守卫只会对当前组件生效。
	beforeRouteEnter在进入组件前调用
	beforeRouteLeave在进入组件后调用

在组件中使用beforeRouteEnter(to, from, next) {}来进行进入组建前的钩子
![1562161658632](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562161658632.png)

在组件中使用beforeRouteLeave(to, from, next) {}来进行离开组件的钩子
![1562161670279](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562161670279.png)

**路由数据获取**
	进入某个路由后，需要**从服务器获取数据。**例如，在渲染用户信息时，你需要从服务器获取用户的数据。我们可以通过两种方式来实现
	**导航完成之后获取**：先完成导航，然后在接下来的组件生命周期钩子中获取数据
	**导航完成之前获取**：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。
	从技术角度讲，两种方式都不错 —— 就看你想要的用户体验是哪种。



## VUEX

Vuex是一个专为Vue.js应用程序开发中进行统一的状态（等同于数据）管理工具。
	通过创建一个集中的数据存储，方便程序中的所有组件进行访问

Vuex解决了多个组件使用同一个数据的复杂度，解决了兄弟组件之间传值的复杂度。
	vuex之后通过创建一个集中的数据仓储，方便多个组件进行访问

**传统vue使用场景**
		传统vue是单向数据流。如果是兄弟组件之间传值兄弟组件间的状态传递无能为力，无法直接传值。
		经常采用父子组件通过正向/逆向传值进行数据交互，模式非常脆弱，通常导致无法维护的代码。
		vuex只能用于**单个页面中不同组件（例如兄弟组件）的数据流通**

#### vuex使用

1.**配置vuex文件创建在src中创建store文件夹-->与store.js**
	2.**先在src下创建对应的文件夹。名字可改，但建议是store**
	3.**创建store文件夹-->与store.js文件**

**单一状态树**
	vuex使用单一状态——用给一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源”而存在。这也意味着，**每个应用将仅仅包含一个store实例。**

**创建store实例**：
![1562396556960](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562396556960.png)

#### Vuex-state数据源：

**1.vuex中数据源state，我们需要保存的数据就保存在这里**：
![1562396612936](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562396612936.png)

**2.要使用首先在main.js引入vuex。**
	一对大括号的原因是，指定要从其他模块导入的变量名。
![1562396742114](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562396742114.png)
![1562396752439](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562396752439.png)

**3.在需要使用数据的组件中使用计算属性取值调用**
	this.$store.state.xxx
![1562396788349](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562396788349.png)



#### Vuex-state特性

**vuex就是一个仓库，仓库里放了很多对象**。其中**state**就是**数据源存放地**，对应于与一般vue对象里面的data
	**state里面存放的数据是响应式的，vue组件从store中读取数据**
	通过**mapState**把全局的**state**和**getters**映射到当前组件的 **computed 计算属性中**



#### Vuex-Getters属性

**getters相当于之前组件学习中的计算属性**，getters属性主要是对于state中数据的一种过滤
	**使用场景：**在项目开发中，有时候希望对state中的某个属性在多个组建中展示出不同状态
`getters:{
	//接收state作为参数
newarr(state){
	varnewarr=state.arr.filter((v,i)=>{
	//过滤出id大于3的内容
		if(v.id>3){
			return v
		}
	})
	//不要忘了
	return newarr;
}
}`

#### 使用Vuex-getters数据：

​	与使用state相同在组件中的计算属性当中使用this.$store.getters.xxx来进行调用
![1562397159991](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562397159991.png)

#### Vuex-getters特性：

一、getters 可以对State进行计算操作，它就是State的计算属性
	二、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
	三、 如果一个状态只在一个组件内使用，是可以不用getters

#### Vuex-Mutations：

mutations,里面装着一些改变数据方法的集合，就是**把处理数据逻辑方法全部放在mutations里面**（当触发事件的时候想改变state数据的时候使用mutations）
![1562397575324](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562397575324.png)

tip：不能直接调用一个 mutations 中的处理函数 要**使用this.$store.commit() 来进行调用**。
![1562397586097](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562397586097.png)

#### Vuex--Mutations 提交载荷（payload）

实际项目中往往会有值传递给Mutations给store.commit传一个附加参数，他就叫做mutation的载荷
![1562398026787](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398026787.png)
![1562398034256](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398034256.png)
![1562398043960](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398043960.png)

tip：**多个参数也可以传递一个对象**
	**this.$store.commit('add', { 'num': 20 } )**

#### Vuex--Actions：

​	**Actions类似于mutation**，但是Actions提交的是mutation，而不是直接变更状态。Actions 可以异步操作。
![1562398174274](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398174274.png)

**分发 Action**：Action **通过 this.$store.dispatch("xxxx");方法触发** 
![1562398222314](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398222314.png)

**Action同样支持载荷**：
![1562398246996](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398246996.png)
![1562398252889](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398252889.png)
![1562398257353](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398257353.png)

**Actions**可以理解为**通过将mutations里面处里数据的方法变成可异步的处理数据的方法**，简单的说就是异步操作数据（但是**还是通过mutation来操作**，因为只有它能操作）

**严格模式**：

严格模式下，**无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误**。这能保证所有的状态变更都能被调试工具跟踪到。
	开启严格模式，**仅需在创建 store 的时候传入 strict: true**
![1562398390501](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398390501.png)

tip：不要在发布环境下启用严格模式！

#### vuex--表单处理：

当在严格模式中使用 Vuex 时，**在属于 Vuex 的 state 上使用 v-model 会比较棘手**。在用户输入时，v-model 会试图直接修改 state数据。**在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误**。

Vuex 的思维解决，**给 <input> 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中调用 action。**
![1562398610371](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398610371.png)
调用函数。
![1562398630101](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398630101.png)
创建actions调用mutations并接收数据
![1562398648468](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398648468.png)
使用mutations来进行修改
![1562398763676](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398763676.png)

#### mock模拟数据：

在前端开发过程中，有后台配合是很必要的。但是如果自己测试开发，或者后台很忙，没时间，那么我们需要自己提供或修改接口。

npm install --save mockj
	**在src下创建相关文件与文件夹**
![1562398895121](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398895121.png)

**设置请求文件index.js**
![1562398953207](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398953207.png)

**引用mock在main.js**
![1562398965195](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398965195.png)

**请求**
![1562398975322](C:\Users\Asus\AppData\Roaming\Typora\typora-user-images\1562398975322.png)



## Vuex语法：

组件：里面包含html，css

模块：里面包含js

```
export const store=new Vuex.Store({
	state:{}，//vuex中的数据源state，我们需要保存的数据就保存在这里；要使用state的数据，需要在vue组件中使用计算数据来进行取值  this.$store.state.xxx
	getters:{},//相当于Vue组件中学习的计算属性,getters属性主要是对于state中数据的一种过滤；组件使用，在vue组件计算属性中使用this.$store.gettters.xxxx
	mutations:{},//里面装着一些改变数据方法的集合，就是把处理数据逻辑方法全部放在mutations里面（当触发事件的时候想改变state数据的时候使用mutations）；需要通过事件来触发mutations里面的方法。this.$store.commit(“调用的mutations的名字”)
	actions:{}//类似于mutations都是对state的数据进行修改，actions不直接修改数据而是调用mutation来实现数据的修改（因为直接使用mutations来修改数据是同步的，如果想异步修改数据那么在这个时候就要使用actions）；
```

​	