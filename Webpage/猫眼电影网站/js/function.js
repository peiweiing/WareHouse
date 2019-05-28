window.onload = function(){
    
    // 登录框打开关闭
    var div1 =document.getElementById("div1");
    var login =document.getElementById("bt");
    var gb=document.getElementById("bx");
    var fg=document.getElementById("fugan");
        login.onclick = function(){
            div1.style.display = "block";
            fg.style.display="block";
        }
        gb.onclick=function(){
            div1.style.display="none";
            fg.style.display="none";
        }

  window.onscroll = function(){
        // 返回顶部按钮
        var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取滚动距离
        var top_div = document.getElementById( "top_div" ); //查询并定义div元素
        if( t >200 ) { 

            top_div.style.display = "block"; 
            top_div.style. background="#ccc";
            if(t>600){
                top_div.style.background ="#000";
                topa.style.color ="#fff" ;
            }
            if(t>1100){
                top_div.style.background ="#fff";
                topa.style.color ="#000";
            }
        } else { 
            top_div.style.display = "none"; 
        } 
    }
    run();
}


