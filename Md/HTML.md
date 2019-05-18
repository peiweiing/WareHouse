# HTML

**form表单**

* input type="text",文本框
* input type="password"密码框
* input type="radio",单选按钮
* input type="checkbox",多选框

*属性值*

* submit 提交

* reset重置

* button普通按钮

* color颜色

* search搜索

* checked默认值

* disabled禁用当前框

* value 框内显示 实体

* placeholder框内显示 虚体

* textarea 大的文本框，多行文本输入

* <select><option>下拉选项菜单</option></select>

`<form action="提交到后台文件路径“>
    <label>
    	用户名:<input type="text">
    </label>
</form>`

tip:点击label里面的文字会自动跳转到input输入框内。

*form作用*：获取用户信息-->服务器（后端）数据从前台让用户输入，通过form传输给后端。

*属性值*

* action：将数据提交给哪个后台文件？
* method：如何将数据提交给后台：get或post

tip：1.get缺点：数据都会在url（网址）地址栏展示出来，不安全，存在大小限制，传输数据量较小；2.相对于get，post在数据提交的时候更加安全，并且数据量非常大；3.但get相对post，速度更快。

***

**table表格**

*属性值*

* border 边框
* width 宽度
* height 高度
* bgcolor 背景颜色
* colspan 横向合并
* rowspan 纵向合并
* cellspacing单元格与单元格之间的间距
* cellpadding单元格与内容之间的间距

***

font-size：字体大小

font-family：字体类型

font-weight：bold；字体粗细

text-decoration：underline；下划线

