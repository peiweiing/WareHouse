window.onload = function(){

    $("#userId").onblur = function(){
        //用户名合法判断
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