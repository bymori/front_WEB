/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 21:05:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 21:33:01
 */
function foo(num1, num2) {
  // 1. 自己遍历
  //   var newArr = [];
  //   for (var i = 0; i < arguments.length; i++) {
  //     newArr.push(arguments[i] * 10);
  //   }
  //   console.log(newArr);
  // 2. arguments 转成 array类型
  //    2.1. 自己遍历 arguments 中的所有元素
  //    ...上方遍历代码
  //    2.2. Array.prototype.slice 将 arguments 转成 array类型
  var newArr2 = Array.prototype.slice.call(arguments);
  console.log(newArr2, 'Array.prototype.slice');

  var newArr3 = [].slice.call(arguments);
  console.log(newArr3, '[].slice');

  //    2.3. ES6语法
  var newArr4 = Array.from(arguments);
  console.log(newArr4, 'ES6 Array.from');

  var newArr5 = [...arguments];
  console.log(newArr5, 'ES6 ...args');
}

foo(10, 20, 30, 40, 50);

Array.prototype.ioslice = function (start, end) {
  var arr = this;
  start = start || 0;
  end = end || arr.length;
  var newArray = [];
  for (var i = start; i < end; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

// var newArray = Array.prototype.ioslice.call(['aa', 'bb', 'cc', 'dd'], 1, 3);
var newArray = Array.prototype.ioslice.call(['aa', 'bb', 'cc', 'dd']);
console.log(newArray);

// var names = ['aa', 'bb', 'cc', 'dd'];
