/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-07 23:11:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-07 23:22:19
 */

// 1. setTimeout
// function ioSetTimeout(fn, duration) {
//   fn.call('aaa');
// }

// ioSetTimeout(function () {
//   console.log(this); // window
// }, 500);

// setTimeout(() => {
//   console.log(this); // window
// }, 1000);

// 2. 监听点击
var boxDiv = document.querySelector('.box');
boxDiv.onclick = function () {
  console.log(this);
};

boxDiv.addEventListener('click', function () {
  console.log(this);
});
boxDiv.addEventListener('click', function () {
  console.log(this);
});
boxDiv.addEventListener('click', function () {
  console.log(this);
});

// 3. 数组 forEach / map / filter / find
var names = ['abc', 'cba', 'nba'];
names.forEach(function (item) {
  console.log(item, this); // 默认 Window
}, 'forEach');

names.map(function (item) {
  console.log(item, this); // 默认 Window
}, 'map');
