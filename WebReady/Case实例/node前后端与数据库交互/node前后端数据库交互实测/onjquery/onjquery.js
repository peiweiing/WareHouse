
$(document).ready(function () {
  // brower();
  // istype();
  // isip();
  // isaddress();
  // browserRedirect();
  getdata();

});

// 定义变量
var isips = null;//用来保存获取到的ip地址
var istypes = null;//用来保存获取到的使用设备
var istimes= new Date();//保存获取到的当前时间

// jquery定义全局变量
$.globalVar = 10;//使用 $ 对象定义的全局变量可以在任何地方访问，包括在其他的 JavaScript 文件中。
jQuery.globalVar = 20;//也可以使用 jQuery 对象来定义和访问全局变量。
// jquery定义全局变量名称空间
$.mynamespace = { 
  myVar : "something", 
  myVar2 : "somethingElse" 
}; 
// 或者jquery定义全局变量名称空间
$.mynamespace = {};
$.mynamespace.myVar = "something";
$.mynamespace.myVar2 = "somethingElse";
// 访问全局变量
console.log($.globalVar); // 输出变量值


// 浏览器内核类型
function getBrowserInfo() {
  var agent = navigator.userAgent.toLowerCase();
  var regStr_ie = /msie [\d.]+;/gi;
  var regStr_ff = /firefox\/[\d.]+/gi
  var regStr_chrome = /chrome\/[\d.]+/gi;
  var regStr_saf = /safari\/[\d.]+/gi;
  //IE
  if (agent.indexOf("msie") > 0) { return agent.match(regStr_ie); }
  //firefox
  if (agent.indexOf("firefox") > 0) { return agent.match(regStr_ff); }
  //Chrome
  if (agent.indexOf("chrome") > 0) { return agent.match(regStr_chrome); }
  //Safari
  if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) { return agent.match(regStr_saf); }
}
//浏览器版本
function brower() {
  var browser = getBrowserInfo();
  console.log(browser);
  var verinfo = (browser + "").replace(/[^0-9.]/ig, "");
  if (verinfo == '7.0' || verinfo == '8.0' || verinfo == '6.0') {
    console.log("温馨提示：为了您的浏览体验请使用IE9及以上版本。如果您使用的是360浏览器或QQ浏览器等，请点击地址栏尾端的IE图标切换至【极速模式】");
  }
}
//判断使用设备 手机端|电脑端
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    console.log('手机端')
  } else {
    console.log('电脑端')
  }
}
// 判断使用设备
function istype() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("iphone") != -1 || userAgent.indexOf("ipod") != -1 || userAgent.indexOf("ipad") != -1) {
    istypes = "ios";
  }
  else if (userAgent.indexOf("android") != -1) {
    istypes = "android";
  }
  else {
    istypes = "other";
  }
  console.log("当前设备类型为：" + istypes);
}
// 获取ip地址，运营商地址等
function isip() {
  // ajax请求获取访问者的IP地址
  $.ajax({
    url: 'https://api.ipify.org?format=json', // 请求地址
    type: 'get', // 请求方式
    // data: data,
    dataType: 'json', // 服务器响应数据类型
    success: function (result) { // 成功回调函数
      isips = result.ip;
      console.log("ip地址", isips);
    },
    error: function (xhr, status, error) { // 失败回调函数
      console.log('error', error);
    }
  });
}
// 发送数据至后台
function getdata(){
  istype();isip();
  let datas ={type:istypes,ip:isips,time:istimes};
  $.ajax({
    url: 'http://localhost:3000/info', // 请求地址
    type: 'get', // 请求方式
    data: datas,
    dataType: 'json', // 服务器响应数据类型
    success: function (ipres) { // 成功回调函数
      console.log("ip地址保存成功", ipres);
    },
    error: function (xhr, status, error) { // 失败回调函数
      console.log('error', error);
    }
  });
}


  // 使用新浪API获取地理位置信息
  // $.ajax({
  //   url: 'https://api.sina.cn/sinago/ip/getIpInfo.php?ip='+ ip, // 请求地址
  //   type: 'get', // 请求方式
  //   // data: data,
  //   dataType: 'jsonp', // 服务器响应数据类型
  //   success: function (result) { // 成功回调函数
  //     console.log("ip地址", result);
  //   },
  //   error: function (xhr, status, error) { // 失败回调函数
  //     console.log('error', error);
  //   }
  // });


  // 使用QQ查询接口来获取IP地址的运营商信息
  // $.ajax({
  //   url: 'http://fw.qq.com/ipaddress', // 请求地址
  //   type: 'get', // 请求方式
  //   // data: data,
  //   dataType: 'jsonp', // 服务器响应数据类型
  //   success: function (result) { // 成功回调函数
  //     var isp = result.data.isp;
  //     console.log("访问者的运营商是", isp);
  //   },
  //   error: function (xhr, status, error) { // 失败回调函数
  //     console.log('error', error);
  //   }
  // });


// // 通过用户的IP地址进行定位
// function isaddress(){
//   // 实例化Geolocation对象
//   var geo = navigator.geolocation;
//   // 获取经纬度坐标
//   geo.getCurrentPosition(function (pos) {
//     var lng = pos.coords.longitude;
//     var lat = pos.coords.latitude;
//     // // 利用百度API将经纬度转化为详细地址
//     $.ajax({
//       url: "http://api.map.baidu.com/location/ip?ak=ia6HfFL660Bvh43exmH9LrI6",
//       type: 'post', // 请求方式
//       dataType: 'jsonp', // 服务器响应数据类型
//       success: function (result) { // 成功回调函数
//         let address = JSON.stringify(result)
//         console.log("访问者的地理位置是：" + address)
//       },
//       error: function (xhr, status, error) { // 失败回调函数
//         console.log('error', error);
//       }
//     });
//   })

// }


// // 请求授权读取通讯录
// navigator.contacts.requestAuthorization(function(status){
//     if(status === "granted") {
//     // 读取通讯录
//     var options = {
//     filter: "", // 过滤器为空，读取所有联系人
//     multiple: true, // 可以读取多个联系人
//     desiredFields: ["displayName", "phoneNumbers", "emails"]
//     // 仅选读取显示名称、电话号码和电子邮件
//     };
//     navigator.contacts.find(["*"], function(contacts){
//     // 读取通讯录成功后的回调函数
//     for(var i=0; i<contacts.length; i++){
//     var contact = contacts[i];
//     var displayName = contact.displayName;
//     var phoneNumbers = contact.phoneNumbers;
//     var emails = contact.emails;
//     // 处理数据
//     }
//     }, function(error){
//     // 读取通讯录失败后的回调函数
//     console.log("Error: " + error);
//     }, options);
//     } else {
//     console.log("Authorization denied.");
//     }
// });

// // 获取通讯录
// var contacts_json = '';
// // 扩展API加载完毕后调用onPlusReady回调函数
// document.addEventListener('plusready', onPlusReady, false);
// function onPlusReady() {
//     // 扩展API加载完毕，现在可以正常调用扩展API
//     plus.contacts.getAddressBook( plus.contacts.ADDRESSBOOK_PHONE, function( addressbook ) {
//         addressbook.find(["displayName","phoneNumbers"],function(contacts){
//            contacts_json = JSON.stringify(contacts);
//            contacts_msg = '获取成功！';
//         }, function () {
//             contacts_msg = '获取通讯录失败！';
//         },{multiple:true});
//     }, function ( e ) {
//         contacts_msg = '获取通讯录失败！';

//     } );
// }


// 提交数据--两种方式
// 方法一、通过dom获取value值
$('#onset').click(function (e) {
  // 阻止表单的默认提交行为
  e.preventDefault();
  // 获取表单数据
  var data = $('#name').val();
  var datas = $('#phone').val();
  var formdata= {
    name:data,phone:datas
  }
  console.log('----', formdata)
  // ajax请求
  $.ajax({
    url: 'http://localhost:3000/index', // 请求地址
    type: 'get', // 请求方式
    data: { name: data, phone: datas },
    dataType: 'json', // 服务器响应数据类型
    success: function (result) { // 成功回调函数
      console.log("result", result);
    },
    error: function (xhr, status, error) { // 失败回调函数
      console.log('error', error);
    }
  });
});


// 方法二、通过form表单提交
$('form').submit(function (e) {
  // 阻止表单的默认提交行为
  e.preventDefault();
  // 获取表单数据
  var formData = $(this).serialize();
  console.log('-', formData)
  // ajax请求
  $.ajax({
    url: 'http://127.0.0.1:3000/index', // 请求地址
    type: 'GET', // 请求方式
    data: formData,
    dataType: 'json', // 服务器响应数据类型
    success: function (result) { // 成功回调函数
      console.log('result', result);
    },
    error: function (xhr, status, error) { // 失败回调函数
      console.log('error', error);
    }
  });
});
