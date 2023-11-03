<?php
    error_reporting(E_ALL ^ E_NOTICE);
    header("Content-type:text/html;charset=utf-8");
    //1.接受数据
    $username = $_POST['username'];
    $userpass = $_POST['userpass'];
    $usersex = $_POST['usersex'];

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
        $sqlstr="insert into usertable(username,userpass,usersex) values('$username',' $userpass','$usersex')";
        $result= mysql_query($sqlstr,$conn);
    //4.关闭数据库
        mysql_close($conn);
    }
    
    //响应
    // echo $result;
    if($result=='1'){
        echo "注册成功, <a href='login.html'>请登录</a>";
    }else{
        echo "注册失败, <a href='reg.html'>请重新注册</a>";
    }


?>