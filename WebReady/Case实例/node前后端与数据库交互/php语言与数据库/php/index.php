<?php
    error_reporting(E_ALL ^ E_DEPRECATED);  //设置报错级别
    header("Content-type:text/html;charset=utf-8"); //编码格式

    //1、接受数据
    $username=$_POST['username'];
    $userphone=$_POST['userphone'];

    // echo "用户名:$username <br/>";
    // echo "手机号:$userphone <br/>";
    //1.建立连接（php连接到数据库）
    $conn=mysql_connect('localhost','root','root');
    if(!$conn){
        die('Could not connect:' . mysql_error());
    }else{
    //2.选择数据库
        mysql_select_db("info803",$conn);
    //3.执行数据库的SQL语句
        $sqlstr="insert into info(username,userphone) values('$username',' $userphone')";
        $result= mysql_query($sqlstr,$conn);
    //4.关闭数据库
        mysql_close($conn);
    }
    //响应
    // echo $result;
    if($result=='1'){
        // echo "提交成功, <a href='../index.html'></a>";
        echo "提交成功";
    }else{
        echo "提交失败, <a href='../html/signin.html'>请重新提交</a>";
    }
?>