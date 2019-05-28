var max=4;//总共的图片数量
var now=1;//当前显示的图片，默认为第一张
var timer;//计时器
function run(flag){
	if(flag){
		now=flag;
		clearTimeout(timer);
	}
	for(var i=1;i<=max;i++){
		if(i==now){
			document.getElementById("ad"+now).style.display="block";
		}else{
			document.getElementById("ad"+i).style.display="none";
		}
	}
	if(now==max){
		now=1;
	}else{
		now++;
	}
	timer=setTimeout(run,2000);
}
