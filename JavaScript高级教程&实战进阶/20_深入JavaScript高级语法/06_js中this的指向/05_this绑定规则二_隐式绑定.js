/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 21:36:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 21:48:46
 */
/**
 * 隐式绑定：object.fn()
 * object 对象会被js引擎绑定到fn函数中的this里面
 */

function foo() {
  console.log(this);
}
// 独立函数调用
// foo();

// 案例一
// var obj = {
//   name: 'ioinn',
//   foo: foo,
// };
// obj.foo(); // obj对象

// 案例二
// var obj = {
//   name: 'ioinn',
//   eating: function () {
//     console.log(this.name + '在吃东西');
//   },
//   running: function () {
//     console.log(this.name + '在跑步');
//   },
// };

// // obj.eating();
// // obj.running();

// var fn = obj.eating;
// fn();

// 案例三
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: 'obj2',
  bar: obj1.foo,
};

obj2.bar(); // {name: 'obj2', bar: ƒ}
