
function add(obj){
	//一、改变数量
	//1、获取span中的数字
	let num = parseInt(obj.previousElementSibling.innerHTML);
	//2、加加
	num++;
	//3、赋给span
	obj.previousElementSibling.innerHTML = num;

	changeTotal(obj,true);
}

function reduce(obj){
	//一、改变数量
	//1、获取span中的数字
	let num = parseInt(obj.nextElementSibling.innerHTML);
	//2、减减
	num--;
	if(num<0){
		return;
	}
	//3、赋给span
	obj.nextElementSibling.innerHTML = num;
	
	changeTotal(obj,false);	
}

function changeTotal(obj,isAdd){
	//二、改变小计
	let price = parseFloat(obj.parentNode.previousElementSibling.innerHTML);
	let xiaoji = parseFloat(obj.parentNode.nextElementSibling.firstElementChild.innerHTML);
	xiaoji = isAdd? xiaoji + price :xiaoji - price;
	obj.parentNode.nextElementSibling.firstElementChild.innerHTML = xiaoji;

	//三、改变合计
	let totalMoney = parseFloat($("#spanTotalMoney").innerHTML);
	totalMoney = isAdd? totalMoney + price :totalMoney - price;
	$("#spanTotalMoney").innerHTML = totalMoney;
}

function saveData(){
	//1、把界面上的内容，组织成json数组的形式。
	let arr = [];
	let rows = $("#t").rows;
	for(let i=1;i<rows.length-1;i++){
		var goods ={
			id:rows[i].cells[0].innerHTML,
			name:rows[i].cells[1].innerHTML,
			price:rows[i].cells[2].innerHTML,
			num:rows[i].cells[3].children[1].innerHTML
		}
		arr.push(goods);
	}

	//2、存储（localStorage）
	var str = JSON.stringify(arr);

	localStorage.setItem('shoppingCar',str);
}

//获取购物车数据
function getData(){
	let str = localStorage.getItem("shoppingCar");
	// console.log(str);
	if(str==null){
		return;
	}
	let arr = JSON.parse(str);
	let rows = $("#t").rows;
	let totalMoney = 0;
	for(let i=0;i<arr.length;i++){
		rows[i+1].cells[0].innerHTML = arr[i].id;
		rows[i+1].cells[1].innerHTML = arr[i].name;
		rows[i+1].cells[2].innerHTML = arr[i].price;
		rows[i+1].cells[3].children[1].innerHTML = arr[i].num;
		rows[i+1].cells[4].children[0].innerHTML = arr[i].num*parseFloat(arr[i].price);
		totalMoney += arr[i].num*parseFloat(arr[i].price);
	}
	$("#spanTotalMoney").innerHTML = totalMoney;
}

window.onload = function(){
	getData();

	let addBtns = $(".addcls");
	for(let i=0;i<addBtns.length;i++){
		addBtns[i].onclick = function(){
			add(this);
		}
	}

	let reduceBtns = $(".reduceCls");
	for(let i=0;i<reduceBtns.length;i++){
		reduceBtns[i].onclick = function(){
			reduce(this);
		}
	}

	$("#btnSave").onclick = function(){
		saveData();
	}
}

function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	