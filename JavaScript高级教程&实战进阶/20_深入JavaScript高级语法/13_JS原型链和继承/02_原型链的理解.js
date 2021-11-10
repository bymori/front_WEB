/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-10 16:39:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-10 16:45:04
 */
var obj = {
  name: 'ioinn',
  age: 18,
};

// [[get]]操作
// 1.在当前的对象中查找属性
// 2.如果没有找到, 这个时候会去原型链(__proto__)对象上查找

obj.__proto__ = {};

// 原型链
obj.__proto__.__proto__ = {};

obj.__proto__.__proto__.__proto__ = {
  address: '北京',
};

console.log(obj.address);
