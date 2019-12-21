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