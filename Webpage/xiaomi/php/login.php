<?php
    header("Content-type:text/html;charset=utf-8"); 
        
    // 接收数据
    $username = $_POST['username'];
    $userpass = $_POST['userpass'];

    // 1.建立连接
    $conn =  mysql_connect("localhost","root","root");

if (!$conn){   
    die('Could not connect:' . mysql_error());    
 }else{
    // 2.选择数据库
     mysql_select_db("my6.13",$conn);
    // 3. 执行数据库的sql 
    $sqlstr = "select * from usertab where username='$username' and userpass='$userpass'";
    $result = mysql_query($sqlstr,$conn);//是结果集也就是表格
    //关闭数据库
    mysql_close($conn);
}

//  响应
//根据结果集的行数来判断是否登录成功！
$rows = mysql_num_rows($result);
if($rows==1){
    echo "登录成功, <a href='../index.html'>点击跳跃</a>";
}else{
    // echo "登录失败, <a href='../html/login.html'>请重新登录</a>";
    //设置刷新时间
    echo "<script> alert('登录失败，请稍后再试！');parent.location.href='../html/login.html'; </script>"; //提示并跳转
}

?>