/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 20:01:07
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 20:20:32
 */
// 自定义封装 iobind 函数

Function.prototype.iobind = function (thisArg, ...argArray) {
  // 1. 获取需要被执行的函数
  var fn = this;

  // 2. 处理绑定的 thisArg
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 3. 将函数放到thisArg中进行调用
  function proxyFn(...args) {
    thisArg.fn = fn;
    // 特殊： 对两个传入的参数进行合并
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }

  // 4. 将最终的结果返回出去
  return proxyFn;
};

function foo() {
  console.log('foo被执行', this);
  return 20;
}
function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4, this);
}

// 系统 bind的使用
// var bar = foo.bind('abc');
// bar();

// var newSum = sum.bind('aaa', 10, 20, 30, 40);
// newSum();

// var newSum = sum.bind('bbb');
// newSum(10, 20, 30, 50);

// var newSum = sum.bind('ccc', 60, 20);
// newSum(30, 50);

// 自定义 iobind 函数调用
var bar = foo.iobind('abc');
console.log(bar());

// var newSum = sum.iobind('aaa', 10, 20, 30, 40);
// newSum();

// var newSum = sum.iobind('bbb');
// newSum(10, 20, 30, 50);

var newSum = sum.iobind('ccc', 60, 20);
newSum(30, 50);
