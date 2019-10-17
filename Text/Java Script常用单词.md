

Date：日期

Hours：小时

Minutes：分钟

function:函数

return：返回

month：月份

seconds：秒数

time：时间

length：长度

replace：替换

slice：截取

split  ：分割

append：添加

child：孩子

clientheight：可见高度

clientwidth：可见宽度

first：第一

last：倒一

offset：偏移

parent：父亲

remove：移除

scroll：滚动

 select ：查询

update：修改

username：用户名

passname：密码

open：打开

focus：焦点

clear：取消

move：移动

create：创建

remove：删除后，东西挪动到别处，还存在，例如 把一张 告示 撕了下来。

delete ：删除的意思，例如用橡皮把铅笔字擦了，使它不存在了

##### 数据

object：对象

String：字符串

Math.round(3.6)   //四舍五入 

random()   //返回0-1之间的随机数 

max(num1, num2)  //返回较大的数 

min(num1, num2)   //返回较小的数 

abs(num)    //绝对值 

ceil(19.3)    //向上取整“20” 

floor(11.8)    //向下取整“11” 

pow(x,y)   //x的y次方 s

qrt(num)    //开平方

get/post：发送

delete：删除

##### 数组

array：数组 

filter：  过滤的意思，根据条件过滤数组的元素，filter的回调函数需要返回的是boolean类型的值。

map：把原始数组的每个元素进行某种处理后，产生（映射）一个新的数组

indexOf        在数组中查找一个数所在的位置，

forEach  对数组的每个元素做某个处理（函数的方式）    

rrayObj.pop(); //移除最后一个元素并返回该元素值

arrayObj.shift(); //移除最前一个元素并返回该元素值，数组中元素自动前移

arrayObj.splice(deletePos,deleteCount); //删除从指定位置deletePos开始的指定数量

arrayObj.slice(start, [end]); //以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素

arrayObj.concat([item1[, item2[, . . . [,itemN]]]]); //将多个数组（也可以是字符串，或者是数组和字符串的混合）连接为一个数组，返回连接好的新的数组

arrayObj.slice(0); //返回数组的拷贝数组，注意是一个新的数组，不是指向

arrayObj.concat(); //返回数组的拷贝数组，注意是一个新的数组，不是指向

arrayObj.reverse(); //反转元素（最前的排到最后、最后的排到最前），返回数组地址

arrayObj.sort(); //对数组元素排序，返回数组地址

arrayObj.join(separator); //返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。

toLocaleString 、toString 、valueOf：可以看作是join的特殊用法，不常用

prototype ：属性返回对象类型原型的引用。prototype 属性是 object 共有的。constructor 属性是所有具有 prototype 的对象的成员。

##### 事件

onchange         域的内容被改变（下拉列表选择改变）。  

onclick              当用户点击某个对象时调用的事件。  

ondblclick        当用户双击某个对象时调用的事件。  

onfocus            元素获得焦点。

onblur               元素失去焦点。  

onkeydown     键盘上某个按键被按下。  

onkeyup           键盘上某个按键被松开。  

onkeypress       键盘上某个按键被按下并松开。  

onload               一张页面或一幅图像完成加载。  

onmousedown 鼠标按钮被按下。  

onmouseup      鼠标按键被松开。  

onmouseover  鼠标移到某元素之上。  

onmouseout     鼠标从某元素移开。  

onmousemove 鼠标被移动。  

onreset             重置按钮被点击， 引发Form重置事件。 

onresize           窗口（body）或框架被重新调整大小。

onsubmit         确认(提交)按钮被点击， 引发Form提交事件。 

onunload         （body）用户退出（刷新）页面。   

onmousewheel     鼠标滚轮事件

oncontextmenu 	在用户使用鼠标右键单击客户区打开上下文菜单时触发

##### 鼠标事件

button   鼠标按键事件中按了哪个鼠标键，0左1中2右，低版本IE：1左2右3左右4滚轮5左加滚轮           6		右加滚轮7三个同时 

clientX  基于浏览器可视区域的左上角的鼠标x坐标。  

clientY  基于浏览器可视区域的左上角的鼠标y坐标。 。

 screenX  基于显示器左上角的鼠标x坐标。  

screenY  基于显示器左上角的鼠标y坐标。 

pageX         基于网页左上角的鼠标x坐标。  

pageY         基于网页左上角的鼠标y坐标。  

offsetX  基于事件元素(事件源)左上角的鼠标 x 坐标。 

offsetY  基于事件元素(事件源)左上角的鼠标 y 坐标。 

