/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 19:19:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 19:31:40
 */
var obj = {
  name: 'ioinn',
  age: 18,
};

var info = Object.create(obj);

// 原型式继承函数
function createObject1(o) {
  var newObj = {};
  Object.setPrototypeOf(newObj, o);

  return newObj;
}

function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  var newObj = new Fn();

  return newObj;
}

// var info = createObject2(obj)
var info = Object.create(obj);
console.log(info);
console.log(info.__proto__);
