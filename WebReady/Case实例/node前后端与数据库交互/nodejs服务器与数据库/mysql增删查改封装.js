// 一、增的封装
// 封装插入一条数据
// insert into major values(null,'上海大学')
let insert = (table,datas,callBack)=>{
    // 拼接SQL
    let fields = '';// 拼接字段
    let values = ''; // 拼接值
    for(const k in datas){
      fields += k+',',
      values += `'${datas[k]}',`;
    }
    // console.log(fields);
    // console.log(values);
   
    // 清除最后一位的逗号
    fields = fields.slice(0,-1);
    values = values.slice(0,-1);
   
    let sql = `insert into ${table} (${fields}) values(${values})`;
   
    // console.log(sql);
    // 将sql语句放在query中执行
    query(sql,callBack);
  }
   
  // 将conn下的query方法以函数的形式暴漏出去
  module.exports = {
    query,
    insert
  };
  
// 增的使用
let db = require('./2.db');
let info = {
  id:null,
  name:'jack',
  age:18,
  sex:'男'
}
db.insert('student',info,()=>{
	console.log('新增成功！');
});



// 二、改
/*
更新表封装
table 表名
sets 修改的字段和值
wheres 判断条件
callback 回调函数
*/
let update = (table,sets,wheres,callback)=>{
    console.log(sets);
    console.log(wheres);
    let whereArr = ['1=1'];// 避免data为空时，出现异常错误
    // 先把 where条件push到数组中
    for(let k in wheres){
        whereArr.push(`${k} = '${wheres[k]}'`);
    }
    // 准备一个数组，用来拼接 set 子句
    let setArr = [];
    for(let k in sets){
        setArr.push(`${k} = '${sets[k]}'`)
    }
    // 将whereArr数组中的内容用and符号连接，将setArr中的数据用逗号拼接在一起
    let sql = `update ${table} set ${setArr.join(",")} where ${whereArr.join(" and ")}`;
    query(sql,callback);
}
// 将conn下的query方法以函数的形式暴漏出去
module.exports = {
    query,
    insert,
    update
};



// 三、删
/*
封装删除表操作
table 表明
datas 删除的条件
callback 回调函数
*/
 
let del = (table,datas,callback)=>{
    let arr = ['1=1']; // 避免data为空时，出现异常错误
    for(let k in datas){
        arr.push(`${k} = '${datas[k]}'`);
    }
    let sql = `delete from ${table} where ${arr.join(" and ")}`;
    console.log(sql);
    query(sql,callback);
}
// 将conn下的query方法以函数的形式暴漏出去
module.exports = {
    query,
    insert,
    del,
    update
};



// 四、查
/**
 * 查询的封装
 * table 表名
 * lists 字段
 * where and的条件
 * {
 *    id:1,
 *    name:jack
 * }
 * or 或者的条件
 * */ 
let select = (table,lists,where,or,callback)=>{
    let list = lists.length?lists.join():'*';
    let whereArr = [];
    // and 拼接
    for(k in where){
        whereArr.push(`${k}=${where[k]}`);
    }
    // or拼接
    let orArr = ["1=1"];
  	
    for(k in or){
        orArr.push(`${k}=${or[k]}`);
    }
    let sql = `select ${list} from ${table} where ${whereArr.join(' and ')} or ${orArr.join(' or ')}`;
    query(sql,callback);
}

