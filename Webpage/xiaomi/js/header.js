
// $(function(){
//     $("header").load("../html/header.html",function(){
//         $("header").click(function(){
//             alert($(this).html());
//         });
//     });

    // $("header").load("srcFile/test3.html p",function(){
    //     $("li").click(function(){
    //         alert($(this).html());
    //     });
    // });

    // $("header").load("../html/header.html header",function(responseText,textStates,XMLHttpRequest){
    //         console.log(responseText);
    //         console.log(textStates);
    //         console.log(XMLHttpRequest);
    // });
    // alert("123");
// });

// 搜索框效果
var sousuo=document.getElementById("sousuo");

sousuo.onmouseover=function(){
sousuo.style.border="1px solid #000";
}
sousuo.onmouseout=function(){
sousuo.style.border="1px solid #ccc";
}
sousuo.onclick=function(){
sousuo.style.border="1px solid red";
}


// 购物车下拉效果
function set(){
    $("#shopp-a").css("color","#b0b0b0");
    $("#shopp").css("background-color","#424242"); 
};
$("#shopp").mouseover(function(){
    $("#shopping").stop().slideDown();
    $("#shopp-a").css("color","orangered");
    $("#shopp").css("background-color","#fff");
});
$("#shopp").mouseout (function(){
    $("#shopping").stop().slideUp(function(){setTimeout(set(),1000)});
  
});
$("#shopping").mouseover(function(){
    $("#shopp-a").css("color","orangered");
    $("#shopp").css("background-color","#fff");
});



// 菜单下拉列表效果（自动）
$(".center li[id]").mouseover(function(){
    $("#pull").stop().slideDown();
});
$(".center li[id]").mouseout(function(){
    $("#pull").stop().slideUp();
});
$("#pull").mouseover(function(){
    $("#pull").stop().slideDown(100);
});
$("#pull").mouseout(function(){
    $("#pull").stop().slideUp();
});

let cl=document.getElementsByClassName("center")[0].children;
let bl=document.getElementById("pull").children;
console.log(cl.length);
// cl.on("mouseover",$(".center li"),function(){
//       console.log(111);
// })

    for (let i = 0; i <7; i++) { 
        console.log(11);
        cl[i].onmouseover = function(){
            for(var j=0;j<bl.length;j++){
               bl[j].style.display = "none"; 
            }

            bl[i].style.display = "flex";
            console.log(bl[i]);
            //console.log(11);
        }
    }
