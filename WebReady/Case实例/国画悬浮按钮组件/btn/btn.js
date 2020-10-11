console.log("nihao")
// js方法
  var btncs =document.getElementById("btncs");
  var btncss =document.getElementById("btncss");
  var imgsrc =document.getElementById("btnimg");
  btncs.style.display = "flex";
  btncss.onclick = function(){
      if(btncs.style.display == "flex"){
          btncs.style.display = "none";
          imgsrc.setAttribute('src','https://zihua.lovehou.com/addons/ewei_shopv2/plugin/commission/template/mobile/default/img/gengduo1.png');
      } else{
          btncs.style.display = "flex";
          imgsrc.setAttribute('src','https://zihua.lovehou.com/addons/ewei_shopv2/plugin/commission/template/mobile/default/img/gengduo.png');
      }
  }
  
// jquery效果方法
  var toggle = true;
  $("#btncss").click(function() {
  	if (toggle) {
      $("#btncs").slideUp();
      $("#btnimg").attr("src", "https://zihua.lovehou.com/addons/ewei_shopv2/plugin/commission/template/mobile/default/img/gengduo1.png")
      toggle = false;
  	} else {
      $("#btncs").slideDown();
      $("#btnimg").attr("src", "https://zihua.lovehou.com/addons/ewei_shopv2/plugin/commission/template/mobile/default/img/gengduo.png")
      toggle = true;
  	}
  });
  
  // $("#btncss").click(function(){
  //   $("#btncs").slideToggle();
  // }); 
  