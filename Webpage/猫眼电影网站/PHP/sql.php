<?php
    header("content-type","text/html;charset=utf-8");
    //1.建立连接（php连接到数据库）
    $conn=mysql_connect('localhost','root','root');
        if(!$conn){
            die('Could not connect:'.mysql_error());
        }else{
    //2.选择数据库
            mysql_select_db('peiweiing',$conn);
    //3.执行数据库
            $sqlstr="insert into usertable(username,userpass)
            values('jiangzemin','123456')";
            mysql_query($sqlstr,$conn);
    //4.关闭数据库
            mysql_close($conn);
        }
    


?>