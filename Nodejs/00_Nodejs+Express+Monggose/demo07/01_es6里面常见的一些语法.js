/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-29 19:59:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-29 20:16:49
 */

/*

1. let const 模板字符串
2. 箭头函数 
3. 对象、属性的简写 
4. 模板字符串 
5. Promise

*/

// 1. let const的使用     let和 var是一样的用来定义变量

//  let是一个块作用域
let a = 123;
if (true) {
  let a = 1234;
}
console.log(a);

//  常量
const PI = 3.14159;
// PI = 3; //常量不可以二次赋值
console.log(PI);

//  模板字符串
// var name = '李四';
// var age = 21;
// console.log(name + '的年龄是' + age);

// var name1 = '张三';
// var age1 = 20;
// console.log(`${name1}的年龄是${age1}`);

//  方法的简写 属性的简写
var name = 'zhangsan';
var app = {
  name: name,
};
console.log(app.name);

//  属性的简写
var name = 'zhangsan';
var app = {
  name,
};
console.log(app.name);

//  方法的简写
var name = 'zhangsan';
var app = {
  name,
  run() {
    console.log(`${this.name}在跑步`);
  },
};
app.run();

//  箭头函数   this指向上下文
setTimeout(function () {
  console.log('执行');
}, 1000);

setTimeout(() => {
  console.log('执行');
}, 1000);

//  回调函数 获取异步方法里面的数据
function getData(callbck) {
  //ajax
  setTimeout(function () {
    var name = '张三';
    callbck(name);
  }, 1000);
}

//外部获取异步方法里面的数据
getData(function (data) {
  console.log(data + '111');
});

//  Promise来处理异步  resolve 成功的回调函数   reject失败的回调函数
var p = new Promise(function (resolve, reject) {
  //ajax
  setTimeout(function () {
    var name = '张三 Promise';
    if (Math.random() < 0.7) {
      resolve(name);
    } else {
      reject('失败 Promise');
    }
  }, 1500);
});

p.then((data) => {
  console.log(data);
});

//获取异步方法里面的数据;
function getData(resolve, reject) {
  //ajax
  setTimeout(function () {
    var name = '张三 22';
    resolve(name);
  }, 2000);
}

var p1 = new Promise(getData);

p1.then((data) => {
  console.log(data);
});
