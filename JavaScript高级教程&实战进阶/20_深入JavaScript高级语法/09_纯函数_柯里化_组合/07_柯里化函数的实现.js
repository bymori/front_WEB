/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-09 00:59:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-09 01:24:23
 */
function add1(x, y, z) {
  return x + y + z;
}

function add2(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
}

function makeAdder(count) {
  count = count * count;

  return function (sum) {
    return count + sum;
  };
}

var log = (date) => (type) => (message) => {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`
  );
};

// 柯里化函数的实现 ioCurrying
function ioCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接收参数的个数，和参数本身需要接受的参数数量是否一致
    // 1. 当已经传入的参数数量 大于等于 需要的参数时, 就执行函数
    if (args.length >= fn.length) {
      //   fn(...args); // 直接调用可能会造成原来this指向错误 所以 要通过apply调用
      //   fn.apply(this, ...args);
      return fn.apply(this, args);
    } else {
      // 2. 没有达到个数时, 需要返回一个新的函数, 继续来接收参数
      function curried2(...args2) {
        // 3. 接收到参数后, 需要递归调用curried来检查函数的个数是否达到要求
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }
  return curried;
}

var curryAdd = ioCurrying(add1);

console.log(curryAdd(10, 20, 30));
console.log(curryAdd(40, 20)(30));
console.log(curryAdd(50)(30)(30));
