/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-08 19:21:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-08 19:25:36
 */
// rest parameters
function sum(...nums) {
  console.log(nums);
}

sum(10);
sum(10, 20);
sum(10, 20, 30);
sum(10, 20, 30, 50);

// 展开运算符 spread
var names = ['abc', 'cba', 'nba'];

var newNames = [...names];
console.log(newNames);

function foo(num1, num2, num3) {}
foo(...num);
