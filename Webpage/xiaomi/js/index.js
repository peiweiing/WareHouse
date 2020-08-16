

// 返回顶部按钮
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



// 登录框打开关闭
var div1 =document.getElementById("div1");
var login =document.getElementById("dl");
var gb=document.getElementById("gb");
var fg=document.getElementById("fugan");
    login.onclick = function(){
        div1.style.display = "block";
        fg.style.display="block";
    }
    gb.onclick=function(){
        div1.style.display="none";
        fg.style.display="none";
    }

//用户名合法判断
window.onload=function(){
    $("#userId").onblur = function(){
        var reg = /^[a-zA-Z_][a-zA-Z0-9_]{5,15}$/;//一共长度是6-16位，由数字字母下划线构成，但是数字不能开头
        if(reg.test(this.value)==true){
            //this.nextElementSibling.innerHTML = "√";
            this.style.border="1px #00ff00 solid";
        }else{
            //this.nextElementSibling.innerHTML = "×";
            this.style.border="1px red solid";
        }
    }
    $("#phoneId").onblur = function(){
        //手机的规则：11位数字，1开头
        if(check("phone",this.value)==true){
            // this.nextElementSibling.innerHTML = "√";
            this.style.border="1px #00ff00 solid";
        }else{
            // this.nextElementSibling.innerHTML = "×";
            this.style.border="1px red solid";
        }
    }
    function check(type,str) {
        switch(type){
            case "email":var reg = /^\w{3,}@\w{2,}\.(com|cn|net|com.cn)$/;break;
            case "phone": var reg = /^1\d{10}$/;break;
            case "card":var reg = /^[1-9]\d{16}(\d|X)$/i;break;
            default:;
        }
        return reg.test(str);
    }
    function $(str){
        if(str.charAt(0)=="#"){
            return document.getElementById(str.substring(1));
        }else if(str.charAt(0)=="."){
            return document.getElementsByClassName(str.substring(1));
        }else{
            return document.getElementsByTagName(str);
        }
    }
    fun();
}



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



// 轮播图效果
let m1=document.getElementsByClassName("top-1")[0].children;
let m2=document.getElementsByClassName("ion-1")[0].children;
var now=1;//当前显示的图片，默认为第一张
var timer;//计时器
run();
function run(flag){
	if(flag){
		now=flag;
		clearTimeout(timer);
	}
	for(var i=1;i<=m1.length-2;i++){
		if(i==now){
			document.getElementById("ad"+now).style.display="block";
		}else{
			document.getElementById("ad"+i).style.display="none";
		}
	}
	if(now==m1.length-2){
		now=1;
	}else{
		now++;
	}
	timer=setTimeout(run,3000);
}



// 正文图中每个图片效果
$(".main li").mouseover(function(){
    $(this).css("box-shadow","0px 0px 8px rgba(0,0,0,0.6)");
    $(this).css("transition","0.5s");
    $(this).css({
        "position":"relative",
        "top":"-2px"
    });
})
$(".main li").mouseout(function(){
    $(this).css("box-shadow","none");
    $(this).css("transition","0.5s");
    $(this).css("top","0px");
})
$(".main .main-left1 img").mouseover(function(){
    $(this).css("box-shadow","0px 0px 8px rgba(0,0,0,0.6)");
    $(this).css("transition","0.5s");
    $(this).css({
        "position":"relative",
        "top":"-2px"
    });
})
$(".main .main-left1 img").mouseout(function(){
    $(this).css("box-shadow","none");
    $(this).css("top","0px");
    $(this).css("transition","0.5s");
})


// 创建标签给正文中的部分图片添加效果
    $('.main-m li span').after('<div class="cjdiv">物流很快，体验超级棒</div>');
    $(".main-m li").mouseover(function(){
        $(this).find(".cjdiv").stop().slideDown();
    });
    $(".main-m li").mouseout(function(){
        $(this).find(".cjdiv").stop().slideUp();
    });



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


// 菜单下拉列表效果（手动）
//  liebiao();

// function liebiao(){
//     $("#xiaomi").mouseover(function(){
//         $("#pull1").show();
//     });
//     $("#xiaomi").mouseout (function(){
//         $("#pull1").hide();
//      });
    
//     $("#hongmi").mouseover(function(){
//         $("#pull2").show();
//     });
//     $("#hongmi").mouseout (function(){
//         $("#pull2").hide();
//     });
    
//     $("#dianshi").mouseover(function(){
//         $("#pull3").show();
//     });
//     $("#dianshi").mouseout (function(){
//         $("#pull3").hide();
//     });
    
//     $("#bijiben").mouseover(function(){
//         $("#pull4").show();
//     });
//     $("#bijiben").mouseout (function(){
//         $("#pull4").hide();
//     });
    
//     $("#jiadian").mouseover(function(){
//         $("#pull5").show();
//     });
//     $("#jiadian").mouseout (function(){
//         $("#pull5").hide();
//     });
    
//     $("#luyou").mouseover(function(){
//         $("#pull6").show();
//     });
//     $("#luyou").mouseout (function(){
//         $("#pull6").hide();
//     });
    
//     $("#zhineng").mouseover(function(){
//         $("#pull7").show();
//     });
//     $("#zhineng").mouseout (function(){
//         $("#pull7").hide();
//     });
// }