console代码调试

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // 1.输出信息
        console.log('普通信息');
        console.info('提示信息');
        console.error('错误信息');
        console.warn('警告信息');

        // 2.输出对象的层次结构
        var bBody = document.body;
        console.dir(bBody);

        // 3.输出数据表格化
        var students = [{
                name:'张三',
                email:'zhangsan@163.com',
                qq:'13245',
            },
            {
                name:'李四',
                email:'lisi@163.com',
                qq:'12346'
            }
        ];

        console.table(students);
        // 4.统计代码执行时间
        console.time('forTime');
        for(var i = 0, count=0; i<99999;i++){
            count++;
        }
        console.timeEnd('forTime');

        // 5.分组输出信息
        console.group('一组');
        console.log('一组-1');
        console.log('一组-2');
        console.log('一组-3');
        console.groupEnd();

        // 6.统计代码执行的次数
        function testFn(){
            console.count('当前函数调用次数');
        }
        testFn();
        testFn();
        testFn();

        // 7.当表达式为false时，输出信息
        var flag = false;
        console.assert(flag,'当flag为false时输出');

    </script>
</body>
</html>
```

