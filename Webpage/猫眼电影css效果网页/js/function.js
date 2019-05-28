// function xx(){
//     var obt=document.getElementById("bt");
//     var odiv=document.getElementById("div1");
    
//       if(odiv.style.display=="none"){
//          odiv.style.display="block";
//         // obt.value="登录";
//       }else{if (odiv.style.display="block") {
//           bxx()
//          }
//       }
// }
// function bxx(){
//     var odiv=document.getElementById("div1");
//     var gb=document.getElementById("bx");

//         if (odiv.style.display=="block") {
//         odiv.style.display="none";
//         // gb.value="关闭×";
//         }else{
//             odiv.style.display="block";
//             // gb.value="关闭×";
//         }
// }  
window.onload = function(){
    // 登录框打开关闭
    var div1 =document.getElementById("div1");//获取整个登录框id
    var login =document.getElementById("bt");//获取登录框登录按钮id
    var gb=document.getElementById("bx");//获取登录框关闭按钮id
        login.onclick = function(){
            div1.style.display = "block";
        }
        gb.onclick=function(){
            div1.style.display="none";
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
}

