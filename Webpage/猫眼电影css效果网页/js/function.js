function xx(){
    var obt=document.getElementById("bt");
    var odiv=document.getElementById("div1");
    
      if(odiv.style.display=="none"){
         odiv.style.display="block";
        // obt.value="登录";
      }else{if (odiv.style.display="block") {
          bxx()
         }
      }
}
function bxx(){
    var odiv=document.getElementById("div1");
    var gb=document.getElementById("bx");

        if (odiv.style.display=="block") {
        odiv.style.display="none";
        // gb.value="关闭×";
        }else{
            odiv.style.display="block";
            // gb.value="关闭×";
        }
}  


window.onscroll = function(){
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


