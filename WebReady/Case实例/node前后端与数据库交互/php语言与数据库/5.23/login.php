<?php
    error_reporting(E_ALL ^ E_NOTICE);
    header("Content-type:text/html;charset=utf-8");
    //1.接受数据
    $username = $_POST['username'];
    $userpass = $_POST['userpass'];

    // echo "用户名:$username <br/>";
    // echo "密 码:$userpass <br/>";

    //1.建立连接（php连接到数据库）
    $conn=mysql_connect('localhost','root','root');
    if(!$conn){
        die('Could not connect:' . mysql_error());
    }else{
    //2.选择数据库
        mysql_select_db("my523",$conn);
    //3.执行数据库的SQL语句
        $sqlstr="select * from usertable where username='$username' and userpass='$userpass'";
       $result= mysql_query($sqlstr,$conn);
    //4.关闭数据库
        mysql_close($conn);
    }
    
    //响应
    $rows = mysql_num_rows($result);
    if($rows==1){
        echo "登录成功, <a href='index.html'>去首页吧</a>";
    }else{
        echo "登录失败, <a href='login.html'>请重新登录</a>";
    }


?>