/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 19:26:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 19:53:30
 */
// 自定义封装 ioapply 函数

Function.prototype.ioapply = function (thisArg, argArray) {
  // 1. 获取需要被执行的函数
  var fn = this;

  // 2. 处理绑定的 thisArg
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 3. 执行函数
  thisArg.fn = fn;
  var result;

  //   if (!argArray) {
  //     // argArray没有值的 没有传参
  //     result = thisArg.fn();
  //   } else {
  //     // 有传参
  //     result = thisArg.fn(...argArray);
  //   }

  //   argArray = argArray ? argArray : [];

  argArray = argArray || [];

  result = thisArg.fn(...argArray);
  delete thisArg.fn;

  // 4. 将最终的结果返回出去
  return result;
};

function sum(num1, num2) {
  console.log('sum被调用', this, num1, num2);
  return num1 + num2;
}

function foo(num) {
  return num;
}

function bar() {
  console.log('bar 函数被执行', this);
}

// 系统 apply函数调用
// var result = sum.apply('abc', [20, 30]);
// console.log(result);

// 自定义 ioapply 函数调用
// var result = sum.ioapply('abc', [20, 30]);
// console.log(result);

// var result2 = foo.ioapply('abc', [20]);
// console.log(result2);

bar.ioapply('abc');
bar.ioapply(0);
