// 移动端菜单栏显示隐藏
var toggle = true;
$("#cimg").click(function() {
    console.log("toggle布尔变量必须在执行函数外边")
    if(toggle){
        $("#head").slideDown();
        $(".cimg").attr("src", "./img/up.png");
        toggle=false;
        console.log("展开")
        console.log(toggle)
    }else{
        $("#head").slideUp();
        $(".cimg").attr("src", "./img/down.png");
        toggle = true;
        console.log("隐藏")
        console.log(toggle)
    }
});

// 点击跳转新页面并到对应位置
$(".swiper-slide").click(function(){
    var data = $(this).find(".img1").attr("data-id");//获取自定义属性并定义
    console.log(data);
    window.open('./pages/detail.html'+"#" + data)//跳转传参
})

// 移动到图片上与离开图片效果
$(".swiper-slide").mouseover(function(){
    $(this).find(".jieshao").stop().slideDown();
    $(this).find(".jieshaos").stop().slideDown();
    $(this).find(".img1").stop().css("opacity","0.6");
});
$(".swiper-slide").mouseout(function(){
    $(this).find(".jieshao").stop().slideUp();
    $(this).find(".jieshaos").stop().slideUp();
    $(this).find(".img1").stop().css("opacity","1");
});


// 获取滚动距离实现动态返回顶部按钮及动画
$(document).scroll(function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ; //获取滚动距离
    let offsetWidth = document.body.offsetWidth;
    var lookup = document.getElementById( "lookup" );
    var up = document.getElementById( "up" );

    if(scrollTop >200) { 
        lookup.style.display = "block"; 
        lookup.style.background="#FFF";
        up.style.color="#000";
    if(scrollTop>1200){
        lookup.style.background ="#CCC";
        up.style.color ="#fff" ;
    }
    if(scrollTop>2200){
        lookup.style.background ="Linear-gradient(#eae5c9,#f9957f)";
        up.style.color ="#000";
    }
    } else { 
        lookup.style.display = "none"; 
    } 

    console.log(scrollTop);
    console.log(offsetWidth);
    if( scrollTop >=300 && offsetWidth <=750) { 
        $(".texting .FX-sa>div").addClass("mate"); 
    }else if( scrollTop >=10 && offsetWidth >750 && offsetWidth <=1024) { 
        $(".texting .FX-sa>div").addClass("mate"); 
    }else if( scrollTop >=500 && offsetWidth >1024) { 
        $(".texting .FX-sa>div").addClass("mate"); 
    }

    if( scrollTop >=10 && offsetWidth <=750) { 
        $(".texting .texthl").addClass("hl"); 
        $(".texting .texthr").addClass("hr");
    }else if( scrollTop >=1 && offsetWidth >750 && offsetWidth <=1024) { 
        $(".texting .texthl").addClass("hl");
        $(".texting .texthr").addClass("hr");
    }else if( scrollTop >=100 && offsetWidth >1024) { 
        $(".texting .texthl").addClass("hl"); 
        $(".texting .texthr").addClass("hr");
    }

});

// 表单框验证及动态弹框效果
var divcss = {textAlign: 'center',position: 'fixed',width: '60%',top:'25%',left:'20%',borderRadius: '20px',
        fontSize:'0.2rem',color:'#000',background: '#FFF',padding: '10%',zIndex: '99',boxShadow: '0 0 10px #ccc',border:'none'};
var divse = {textAlign: 'center',position: 'fixed',width: '60%',top:'25%',left:'20%',borderRadius: '20px',
        fontSize:'0.2rem',color:'#000',background: '#FFF',padding: '5%',zIndex: '99',backgroundColor:'#ccc',boxShadow: '0 0 0',border:'none'};
var divs = {textAlign: 'center',position: 'fixed',width: '60%',top:'25%',left:'20%',borderRadius: '20px',
        fontSize:'0.2rem',color:'#000',background: '#FFF',padding: '10%',zIndex: '99',border:'1px solid green',boxShadow: '0 0 10px green'};
var dive = {textAlign: 'center',position: 'fixed',width: '60%',top:'25%',left:'20%',borderRadius: '20px',
        fontSize:'0.2rem',color:'#000',background: '#FFF',padding: '10%',zIndex: '99',border:'1px solid red',boxShadow: '0 0 10px red'};
$('.name').blur(function(){
    var reg = /^[\u4e00-\u9fa5]{2,5}$/;
    if(reg.test(this.value)==true){
        //this.nextElementSibling.innerHTML = "√";
        this.style.borderBottom="2px #00ff00 solid";
    }else{
        //this.nextElementSibling.innerHTML = "×";
        this.style.borderBottom="2px red solid";
        $(".tankuangs").css(divse);
        $(".tankuangs").fadeIn().text("姓名为2-5汉字，请正确输入");
        setTimeout('$(".tankuangs").fadeOut();', 1000);
    }
});
$('.phone').blur(function(){
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if(reg.test(this.value)==true){
        //this.nextElementSibling.innerHTML = "√";
        this.style.borderBottom="2px #00ff00 solid";
    }else{
        //this.nextElementSibling.innerHTML = "×";
        this.style.borderBottom="2px red solid";
        $(".tankuangs").css(divse);
        $(".tankuangs").fadeIn().text("手机号为11位，请正确输入");
        setTimeout('$(".tankuangs").fadeOut();', 1000);
    }
});

$('.username').blur(function(){
    var reg = /^[\u4e00-\u9fa5]{2,5}$/;
    if(reg.test(this.value)==true){
        //this.nextElementSibling.innerHTML = "√";
        // this.style.border="1px #00ff00 solid";
        $('.phinpname').css({"borderBottom":"2px #00ff00 solid"});
    }else{
        //this.nextElementSibling.innerHTML = "×";
        // this.style.border="1px red solid";
        $('.phinpname').css({"borderBottom":"2px red solid"});
        $(".phtankuangs").css(divse);
        $(".phtankuangs").fadeIn().text("姓名为2-5汉字，请正确输入");
        setTimeout('$(".phtankuangs").fadeOut();', 1000);
    }
});
$('.userphone').blur(function(){
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if(reg.test(this.value)==true){
        //this.nextElementSibling.innerHTML = "√";
        // this.style.border="1px #00ff00 solid";
        $('.phinpphone').css({"borderBottom":"2px #00ff00 solid"});
    }else{
        //this.nextElementSibling.innerHTML = "×";
        // this.style.border="1px red solid";
        $('.phinpphone').css({"borderBottom":"2px red solid"});
        $(".phtankuangs").css(divse);
        $(".phtankuangs").fadeIn().text("手机号为11位，请正确输入");
        setTimeout('$(".phtankuangs").fadeOut();', 1000);
    }
});



// 表单数据提交到php
$(".submits").click(function() {
    var reg = /^[\u4e00-\u9fa5]{2,5}$/;
    var regs = /^[1][3,4,5,7,8][0-9]{9}$/;
    var name=$(".name").val();
    var phone=$(".phone").val();
    console.log(name);
    console.log(phone);
    if(name == ''||phone == ''){
        $(".tankuangs").css(divcss);
        $(".tankuangs").fadeIn().text("请确认内容完整");
        setTimeout('$(".tankuangs").fadeOut();', 2000);
    }else if(!reg.test(name)){
        $(".tankuangs").css(divcss);
        $(".tankuangs").fadeIn().text("请正确输入姓名");
        setTimeout('$(".tankuangs").fadeOut();', 2000);
    }else if(!regs.test(phone)){
        $(".tankuangs").css(divcss);
        $(".tankuangs").fadeIn().text("请正确输入手机号");
        setTimeout('$(".tankuangs").fadeOut();', 2000);
    }else{
        $.ajax({
            type: 'post',async: false,url: "php/index.php",
            data: {"username": name, "userphone": phone},
            success: function (ok) {
                console.log(ok);
                if (ok == "提交成功") {
                    $(".name").val("");
                    $(".phone").val("");
                    $(".tankuangs").css(divs);
                    $(".tankuangs").fadeIn().text("您已提交成功！");
                    setTimeout('$(".tankuangs").fadeOut();', 2000);
                } else {
                    $(".tankuangs").css(dive);
                    $(".tankuangs").fadeIn().text("提交失败，请重新提交！");
                    setTimeout('$(".tankuangs").fadeOut();', 2000);
                }
            }
        });
    }
});
$(".phsubmit").click(function() {
    var reg = /^[\u4e00-\u9fa5]{2,5}$/;
    var regs = /^[1][3,4,5,7,8][0-9]{9}$/;
    var username=$(".username").val();
    var userphone=$(".userphone").val();
    console.log(username);
    console.log(userphone);
    if(username == ''||userphone == ''){
        $(".phtankuangs").css(divcss);
        $(".phtankuangs").fadeIn().text("请确认内容完整");
        setTimeout('$(".phtankuangs").fadeOut();', 2000);
    }else if(!reg.test(username)){
        $(".phtankuangs").css(divcss);
        $(".phtankuangs").fadeIn().text("请正确输入姓名");
        setTimeout('$(".phtankuangs").fadeOut();', 2000);
    }else if(!regs.test(userphone)){
        $(".phtankuangs").css(divcss);
        $(".phtankuangs").fadeIn().text("请正确输入手机号");
        setTimeout('$(".phtankuangs").fadeOut();', 2000);
    }else{
        $.ajax({
            type: 'post',async: false,url: "php/index.php",
            data: {"username": username, "userphone": userphone},
            success: function (ok) {
                console.log(ok);
                if (ok == "提交成功") {
                    $(".username").val("");
                    $(".userphone").val("");
                    $(".phtankuangs").css(divs);
                    $(".phtankuangs").fadeIn().text("您已提交成功！");
                    setTimeout('$(".phtankuangs").fadeOut();', 2000);
                } else {
                    $(".phtankuangs").css(dive);
                    $(".phtankuangs").fadeIn().text("提交失败，请重新提交！");
                    setTimeout('$(".phtankuangs").fadeOut();', 2000);
                }
            }
        });
    }
});