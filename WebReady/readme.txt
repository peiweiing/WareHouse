1.在移动端显示加入这个标签：<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
2.使用less需在页面加入这个标签内容：<script type="text/javascript">
        less = {
            env: "development",
            async: false,
            fileAsync: false,
            poll: 1000,
            functions: {},
            dumpLineNumbers: "comments",
            relativeUrls: false,
            rootpath: ":/a.com/"
        };
    </script>
3.less内容转换成css，—运行cmd— lessc style.less style.css—回车,此代码可以将style.less编译成style.css

在pc端判断ie浏览器使用：
    <meta charset="UTF-8"/>
	
    <meta name="renderer" content="webkit"/>
	
    <meta name="force-rendering" content="webkit"/>
	
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>
	翻译为：《UTF-8编码格式》	《双核浏览器优先使用谷歌webkit内核》	《ie浏览器优先使用高版本edge》
弹窗代码用法（将以下代码添加在 <head> 之后）：

在IE8及更旧版IE提示升级：

<!--[if lte IE 8]> <script>var _iealwn = {once: 0, outver: 8};</script> <script id="_iealwn_js" src="https://support.dmeng.net/ie-alert-warning/latest.js"></script> <![endif]-->

在IE9及更旧版IE提示升级：

<!--[if lte IE 9]> <script>var _iealwn = {once: 0, outver: 9};</script> <script id="_iealwn_js" src="https://support.dmeng.net/ie-alert-warning/latest.js"></script> <![endif]-->

在IE10及更旧版IE提示升级：

<script>/*@cc_on document.write('\x3Cscript id="_iealwn_js" src="https://support.dmeng.net/ie-alert-warning/latest.js">\x3C/script>'); @*/</script>


PC端判断IE浏览器完整的HTML示例（包含优先使用 webkit 内核的代码）：

<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8"/>

    <meta name="renderer" content="webkit"/>

    <meta name="force-rendering" content="webkit"/>

    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/>

    <script>/*@cc_on 

    document.write('\x3Cscript id="_iealwn_js" src="https://support.dmeng.net/ie-alert-warning/latest.js">\x3C/script>'); 

     @*/</script>

    <title>网页标题</title>

    <!-- 其他meta标签 -->

</head>

<body>

    <h1>网页内容</h1>

</body>

</html>