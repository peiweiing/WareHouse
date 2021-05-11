//设置cookie键值及过期时间
function setCookie(name,value,day){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+day);
    document.cookie = name +'='+ value +';expires='+ oDate;
}
// setCookie("name1","honny1",1);
// setCookie("name2","honny2",1);
// console.log(document.cookie);

//查询cookie名对应内容
function getCookie(name){
    var str = document.cookie, arr=str.split('; ');//字符串分隔
    for(var i=0; i<arr.length; i++){
        var arr1=arr[i].split('=');//将等号两边分隔
        if(arr1[0]==name){
            return arr1[1];
        }
    }
}
// console.log(getcookie('name2'));

//删除cookie
function removeCookie(name){
    setCookie(name,1,-1);
}
// removeCookie("name1");
// console.log(getCookie('name1'));