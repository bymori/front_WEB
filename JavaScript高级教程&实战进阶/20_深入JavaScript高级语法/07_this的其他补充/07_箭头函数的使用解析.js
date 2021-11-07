/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 00:15:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 00:33:23
 */

// 1. 编写箭头函数
//   1. (): 参数
//   2. =>: 箭头
//   3. {}: 函数执行体
var foo = (num1, num2, num3) => {};

var foo = function (num1, num2, num3) {};

// 高阶函数在使用时，也可以传入箭头函数
var nums = [10, 20, 46, 79];
nums.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// 箭头函数 常见的简写方式
// 简写方式一: 如果参数只有一个 () 可以省略
nums.forEach((item) => {
  console.log(item, '简写方式一');
});

// 简写方式二: 如果参数只有一个 () 可以省略
nums.forEach((item) => console.log(item, '简写方式二'));

var newNums = nums.filter((item) => item % 2 === 0);
console.log(newNums, 'newNums');

// filter / map / reduce
var result = nums
  .filter((item) => item % 2 === 0)
  .map((item) => item * 100)
  .reduce((prevValue, item) => prevValue + item);
console.log(result, 'result');

// 简写方式三: 如果一个箭头函数，只有一行代码，并且返回一个对象，这个时候如何编写简写
var bar1 = () => {
  return { name: 'ioinn', age: 18 };
};
console.log(bar1());

var bar2 = () => ({ name: 'momo', age: 26 });
console.log(bar2());
