// 放大镜
window.onload = function(){
	document.getElementById("bigBox").onmousemove = function(event){
		let evt = event || window.event;
		//一、数据处理
		//1、改变数据
		let left1 = evt.pageX-this.offsetLeft-document.getElementById("mirrorBox").offsetWidth/2;
		let top1 = evt.pageY-this.offsetTop-document.getElementById("mirrorBox").offsetHeight/2;

		//2、处理边界
		if(left1<0){
			left1 = 0;
		}else if(left1>this.offsetWidth-document.getElementById("mirrorBox").offsetWidth){
			left1=this.offsetWidth-document.getElementById("mirrorBox").offsetWidth
		}

		if(top1<0){
			top1 = 0;
		}else if(top1>this.offsetHeight-document.getElementById("mirrorBox").offsetHeight){
			top1=this.offsetHeight-document.getElementById("mirrorBox").offsetHeight
		}

		//二、改变外观
		document.getElementById("mirrorBox").style.left = left1+"px";
		document.getElementById("mirrorBox").style.top = top1+"px";
		document.getElementById("showBox").style.backgroundPosition = `-${3*left1}px -${3*top1}px`;
		
	}
	document.getElementById("bigBox").onmouseover=function(event){
		let evt = event || window.event;
		document.getElementById("showBox").style.display="block";
		document.getElementById("mirrorBox").style.display="block";
	}
	document.getElementById("bigBox").onmouseout=function(event){
		let evt = event || window.event;
		document.getElementById("showBox").style.display="none";
		document.getElementById("mirrorBox").style.display="none";
	}
}

// 点击添加到购物车
var shopp=document.getElementById("go-shopp");
	shopp.onclick =function(){
		var shopping=document.getElementById("shopping");
		console.log(shopping);
		var wenzi=document.getElementsByClassName("heji")[0].children[0].innerHTML
		console.log(wenzi);
		var lidom=document.createElement("li");
		lidom.innerHTML=wenzi;
		shopping.appendChild(lidom);
}
