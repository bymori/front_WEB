/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 17:30:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 19:37:25
 */
// 给所有的函数添加一个icall的方法
Function.prototype.iocall = function (thisArg, ...args) {
  // 在这里可以去执行调用的那个函数
  // 问题： 如何得到是哪一个函数执行了iocall

  // 1. 获取需要被执行的函数
  var fn = this;

  // 2. 对 thisArg 转换成对象类型  防止传入的是非对象类型
  thisArg = thisArg ? Object(thisArg) : window;

  // 3. 调用需要被执行的函数
  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  delete thisArg.fn;

  // 4. 将最终的结果返回出去
  return result;
};

function foo() {
  console.log('foo函数执行了', this);
}

function sum(num1, num2) {
  //   return num1 + num2;
  console.log('sum函数执行了', this, num1 + num2);
}

// 系统的函数 call
foo.call(123);

// 自定义封装call方法
// 默认进行隐式绑定
// foo.iocall({name:'ioinn'});
// foo.iocall(123);
// foo.iocall(null);
sum.iocall('abc', 5, 8);

var num = { name: 'ioinn' };
console.log(Object(num));
